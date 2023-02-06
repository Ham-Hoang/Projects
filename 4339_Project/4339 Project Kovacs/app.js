// CIS 4339 Sprint 2 Group 19

// Team Members:
// Hamilton Hoang
// Luke Kovacs
// Perminder Singh


// importing and loading all the necessary modules needed for application to execute 
// Modules 4,5,6 code examples and video lectures provided by professor Lindner were referenced in all the modules needed for the application.

const express = require("express");
// importing and loading express library
const mongoose = require("mongoose");
 // importing mongoose library to read model schemas from our mongo db. Referenced in Module 4 Mongoose video lecture
const morgan = require("morgan");
// middleware library to process logging requests. Referenced in Module 4 video lecture.
require("dotenv").config();
// use to load .env file that contains our mongodb connection string for the application to read and connect.
const cors = require ('cors');
// middleware to allow or restrict http requests from different sources
const app = express();
//creating express instance
const axios = require("axios");
// Promise based library for http request. Referenced in Module 5 Video lecture and code examples by Professor Lindner.

const port = process.env.port || 3001;
// Port listens on 3000 along with defining .env mongodb to link with the port as well.
app.use(express.urlencoded({extended: false }));
//configuring expess middleware and to decode HTTP requests (Module 3)
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// Using the middleware libraries that we imported

// Defining the schemas from our model folders and having them exported to our app.js file. Importing all the models.
let EducationModel = require('./models/education');
let ClientModel = require('./models/client');
let EventModel = require('./models/event');
let ContactModel = require('./models/contact');
let FamilyModel = require('./models/family');
let EmploymentModel = require('./models/employment');
let WorkerModel = require('./models/worker');

// This is the connection string to access the cloud where we deployed our application for extra credit
// Located on the read me github readme file once you access our github repository will be all the credentials and instructions to connect to the cloud and activate the application to send data
// Refer to the readme file on github for instructions
// In the case of having issues, contact project member.

// If you want to test out the local version of the application first, comment out the cloud connection string and refer to the other mongoose connection string below that has process.env connection

// mongoose.connect("mongodb+srv://UHTestServer4339:4339project@cluster0.zhwiu.mongodb.net/4339project?retryWrites=true&w=majority")



// Code to establish connection to our mongodb using .env file that holds our connection string. Success or failure to connect will yield the messages outlined below. Referenced in Module 4 video lecture.
// This is the connection string for local application testing. DO THIS FIRST IF YOU WANT TO TEST LOCAL.
// Comment out the cloud string above and uncomment the connection below to activate local version.
// refer to readme file for further instructions or reiteration.

 process.env.MONGO_URL = 'mongodb://localhost:27017/Project';
 mongoose
     .connect(process.env.MONGO_URL)
     .then(() => {
         console.log("Database Connection Successful!");
     })
     .catch((err) => {
         console.error("Connection Error!", err);
     });





//////////////////// EDUCATION ///////////////////////////////////
//Coded using knowledge from class lectures of modules 4 and 5

//Posts a new education based on given data into the database
app.post('/education', (req, res, next) => {
    EducationModel.create(req.body, (error, info) => {
        if (error) {
          return next(error) //if an error occurs it displays the error
        } else {
          return res.json(info); //Send the package to the database 
        }
    });
});

//Reads all of the education indexes from the database
app.get('/education', (req, res, next) => {
    EducationModel.find((error,info) => {
        if (error) {
            return next(error) //if an error occurs it displays the error
        }
        else {
            res.json(info) //retrieves the education info
        }
    })
});


//Reads a single specified index from the database
app.get('/education/:id', (req, res, next) => {
    console.log(req.params.id);
    EducationModel.findOne({ clientID: req.params.id}, (error, info) => { //Gets the education based on the given ID
        if (error) {
            return next(error) //if an error occurs it displays the error
        }
        else if (info === null) {
            res.status(404).send('No education') //Send 'No Education' if there is not a match 
        }
        else {
            res.json(info) //retrieves the education info of a single index
        }
    });
});

//Deletes an education index based off of a given clientID
app.delete('/education/:id', (req, res, next) => {
    console.log(req.params.id);
    EducationModel.findOneAndRemove({ clientID: req.params.id}, (error, info) => { //finds the index based off of the clientID given and deletes it
        if (error) {
            return next(error)} //if an error occurs it displays the error
            else {
                res.status(200).json({info:info});
                return ("Deleted")
            }
        });
    });
;

//Updates an education index based off of the info given
app.put('/education/:id', (req, res, next) => {
    EducationModel.findOneAndUpdate({ clientID: req.params.id }, {$set: req.body}, (error, info) => { //finds the index based off of the clientID and updates it based on given information
        if (error) {
            return next(error); //if an error occurs it displays the error
        } 
        else {
            res.send('Education updated');
            console.log('Education info updated', info)
        }
    });
});

//////////////////////////////////////////////////////////////////////////

///////////////////// CLIENT //////////////////////////////////////////
//Coded using knowledge from class lectures of modules 4 and 5
// additional reference on crud operations found on https://docs.mongodb.com/manual/crud/

// an endpoint to insert a client record into the DB
app.post('/client', (req, res, next) => {
    ClientModel.create(req.body, (error, info) => {
        // check if there is an error response
        if (error) {
            // return the error if found
            return next(error)
        } else {
            // send a json response with the inserted info
            res.json(info);
        }
    });
});

// an endpoint to get all clients info, showing select attributes
app.get('/client', (req, res, next) => {
    ClientModel
    .aggregate()
    .project({ // select attributes to display
        _id: 1,
        clientID: 1,
        firstName: 1,
        lastName: 1,
        birthday: 1,
        ssn: 1,
        gender: 1,
        age: 1,
        familyID: 1,
        events: 1,
        eventsCount: {$size:"$events"} // use the size operator to count events the client is registered to
    })
    .exec((error, data) => {
        // check if there is an error response
        if (error) {
            // return the error if found
            return next(error)
        } else {
            // send a json response and display the data in console
            res.json(data)
            console.log(data);
        }
    });
});

// an endpoint to retrieve client info using the given id
// additional reference on querying found on https://mongoosejs.com/docs/populate.html
app.get('/client/:id', (req, res, next) => {
    console.log(req.params.id);
    ClientModel
    .findOne({ _id: req.params.id }) // find the event using the uuid
    .populate({
        path: "events", // fetch event information based on the event ids, show only the address and org attributes
        select:
        "eventAddress eventDesc",
      })
    .exec((error, data) => {
        // check if there is an error response
        if (error) {
            // return the error if found
            return next(error);
        } else {
            // send a json response with the inserted info and log to console
            res.json(data);
            console.log(data);
        }
    });
});

// an endpoint to delete a client record using the given uuid
app.delete('/client/:id', (req, res, next) => {
    console.log(req.params.id);
    ClientModel.findOneAndRemove({ _id: req.params.id}, (error, info) => { // find and delete the client by id
        // check if there is an error response
        if (error) {
            // return the error if found
            return next(error)}
        else {
            //  send a json response with the saved info and set status to 200 (success), and log message to console
            res.status(200).json({info:info});
            console.log("Client Deleted")
        }
    });
});

// an endpoint to update a client index based off of the info given
app.put('/client/:id', (req, res, next) => {
    ClientModel.findOneAndUpdate({ _id: req.params.id },{ $set: req.body }, (error, info) => { // find the client using the id
        // check if there is an error response
        if (error) {
            return next(error); //if an error occurs it displays the error
        } 
        else {
            // send a success update message
            res.send('Client updated');
            console.log('Client info updated', info)
        }
    });
});

///////////////////// WORKER //////////////////////////////////////////
// POST(CREATE): an endpoint that will insert a worker info into DB. Refernced in Module 4 CRUD examples along with the rest of the basic CRUD endpoints below.
app.post('/worker', (req, res, next) => {
    WorkerModel.create(req.body, (error, info) => {
        if (error) {
            return next(error)
        } else {
            res.send('Worker information was added to the database.');
        }
    });
});

// GET(READ): an endpoint to get all worker info.
app.get('/worker', (req, res, next) => {
    WorkerModel.find((error,info) => {
        if (error) {
            return next(error)
        }
        else if (info === null) {
            res.status(404).send('Worker information not found');
        }
        else {
            res.json(info)
        }
    });
});

// GET(READ): an endpoint to retrieve specific worker info by worker ID.
app.get('/worker/:id', (req, res, next) => {
    WorkerModel.findOne({ workerID: req.params.id}, (error, info) => {
        if (error) {
            return next(error)
        }
        else if (info === null) {
            res.status(404).send('Worker information not found');
        }
        else {
            res.json(info)
        }
    });
});

// PUT(Update): an endpoint to edit a worker record by worker ID. Setting criteria to change any fields that need to be updated. 
app.put('/worker/:id', (req, res, next) => {
    WorkerModel.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, (error, data) => {
        if (error) {
            return next(error);
        } 
        else {
            res.send('Worker is edited via PUT.');
            console.log('Worker information was successfully updated!', data)
        }
    });
});

// DELETE: an endpoint to delete a work record by worker ID
app.delete('/worker/:id', (req, res, next) => {
    WorkerModel.findOneAndRemove({ _id: req.params.id}, (error, info) => {
        if (error) {
            return next(error)
        }
        else {
            res.status(200).json({
                msg: info
            });
        }
    });
});

///////////////////// EMPLOYMENT //////////////////////////////////////////
// POST(CREATE): an endpoint that will insert an employment info into DB. CRUD Examples provided and referenced in Module 4 lecture and for the below endpoints as well.
app.post('/employment', (req, res, next) => {
    console.log(req.body);
    EmploymentModel.create(req.body, (error, info) => {
        if (error) {
            return next(error)
        } else {
            res.send('Employment information was added to the database.');
        }
    });
});

// GET(READ): an endpoint to get all employment info.
app.get('/employment', (req, res, next) => {
    EmploymentModel.find((error,info) => {
        if (error) {
            return next(error)
        }
        else if (info === null) {
            res.status(404).send('No employment information found')
        }
        else {
            res.json(info)
        }
    });
});

// GET(READ): an endpoint to retrieve specific employment info by _id field relective off our employment model schema.
app.get('/employment/:id', (req, res, next) => {
    EmploymentModel.findOne({ _id: req.params.id}, (error, info) => {
        if (error) {
            return next(error)
        }
        else if (info === null) {
            res.status(404).send('No employment information found')
        }
        else {
            res.json(info)
        }
    });
});

// PUT(Update): an endpoint to edit an employment record by _id. Setting criteria to edit all fields if necessary.
app.put('/employment/:id', (req, res, next) => {
    EmploymentModel.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, (error, data) => {
        if (error) {
            return next(error);
        } 
        else {
            res.send('Employment is edited via PUT.');
            console.log('Employment information was successfully updated!', data)
        }
    });
});

// DELETE: an endpoint to delete an employment record by _id
app.delete('/employment/:id', (req, res, next) => {
    EmploymentModel.findOneAndRemove({ _id: req.params.id}, (error, info) => {
        if (error) {
            return next(error)
        }
        else {
            res.status(200).json({
                msg: info
            });
        }
    });
});


//////////////////// Events ///////////////////////////////////
//Coded using knowledge from class lectures of modules 4 and 5

// an endpoint that will insert an event info into the DB.
app.post('/event', (req, res, next) => {
    EventModel.create(req.body, (error, info) => { //Creates a new index based off of given info
        if (error) {
            return next(error) // return the error if found
        } else {
            res.json(info); // send a json response
        }
    });
});

// an endpoint that will add clients to an event
// additional reference on async-await function found on https://javascript.info/async-await
app.post('/event/:eventID', async (req, res, next) => {
    // first we have to add the event uuid to the events array of the client info
    let eventID = req.params['eventID'] // get the event uuid
    let eventsKey = req.body.events // get the existing events array info
    await eventsKey.push(eventID) // add the event uuid to the array

    // create an async function to add client info
    async function createClient() {
      try {
        const newClient = ClientModel.create(req.body); // insert a new client using the given data
        return newClient; // return the created client object
      } catch (error) {
        if (error.name == "ValidationError") { // check if there is a failing error in validation
          res.send(error); // send an error response and return a 400 status
          return res.status(400)
        }
        // return a 500 status otherwise
        res.status(500)
    }}   
    // execure the functions to create client and update the events collection to add the client uuid to the clients array
    const newClient = await createClient();
    await EventModel.findOneAndUpdate ({_id: eventID}, { $push: { clients: newClient._id} }); 
    // send a success response to the user
    res.send('Added the client.');
});

// an endpoint that will fetch event for using the given event id and client id.
app.get('/event/:eventID/:id', (req, res, next) => {
  ClientModel.findOne({clientID: req.params.id},(error, data) => { // find the event using the uuid given
    if (error) {
        // return the error if found
        return next(error)
    } else {
        // send json response
        res.json(data)
    }
  })
});

// an endpoint to fetch all events info, exclusing client info.
app.get('/event', (req, res, next) => {
    EventModel.find(
        {},
        { ClientModel: 0 }, // retrive event info only, do not show client-related info
        (error, data) => {
            if (error) {
                // return the error if found
                return next(error);
            } else {
                // send json response
                res.json(data);
            }
        }
    );
});

// an endpoint to fetch an event's info, including hydrated client info.
app.get('/event/:id', (req, res, next) => {
    EventModel
    .findOne({ _id: req.params.id }) // find the event using the uuid given
    .populate({ // populate event with client info and display specific attributes
        path: "clients", 
        select:
          "-clientID -firstName -lastName",
        } 
    ).exec((error, data) => {
        if (error) {
            // return the error if found
            return next(error);
        } else {
            // send json response and log the data to console
            res.json(data);
            console.log(data);
        }
    });
});

// an endpoint to delete an event.
app.delete('/event/:id', async (req, res, next) => {
    // find and delete the event with the given uuid.
    await EventModel.findOneAndRemove({ eventID: req.params.id});

    // perform an update on clients collection to remove the event id from clients that have the event.
    await ClientModel.updateMany({$pullAll: {events: [req.params.id] }});  
    // send json response
    res.send('Event was deleted')
});

// an endpoint to update an event.
app.put('/event/:id', (req, res, next) => {
    EventModel.findOneAndUpdate(
    { _id: req.params.id }, // find the event using the uuid
    {
        // to avoid updating the clients array, we update a limited set of attributes specific to the event.
        $set: {
            org: req.body.org,
            eventDesc: req.body.eventDesc,
            eventAddress: req.body.eventAddress
        }
    },
    (error, data) => {
        if (error) {
            // return the error if found
            return next(error);
        } else {
            // send json response
            res.send("The event has been updated.");
        }
    });
});

///////////////////////////////////////////////////////////////CONTACTS//////////////////////////////////////////////////////////////////

// POST method route to add new entry into our mongodb based on contact model schema fields. CRUD for this model referenced by code examples provided in Module 4 lecture.
app.post('/addcontact', (req, res, next) =>{
    ContactModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.send('New Contact has been added to the Database');
        }
    });
});

// GET method route to return all data entries in the database.
app.get('/allcontact', (req, res, next) => {
    ContactModel.find((error, data) => {
        if(error) {
            return next(error)
        }   else {
            res.json(data)
        }
    });
});

// GET method route to retrieve a specific entry in the db based on clientID field.
app.get('/allcontact/:id', (req, res, next) => {
    console.log(req.params.id)
    ContactModel.findOne({clientID: req.params.id}, (error, data) => {
        if(error) {
            return next(error)
        }   else if (data === null) {
            res.status(404).send('Contact Entry not found');
        }
        else {
            res.json(data)
        }
    });
});


// PUT method route that changes a specfic entries data based on clientID field. Set criteria to change all fields if necessary.
app.put('/updatecontact/:id', (req, res, next) => {
    ContactModel.findOneAndUpdate({clientID: req.params.id }, {
        $set: req.body
    },  (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.send('Contact Entry Updated!');
            console.log('Contact Entry Updated!', data)
        }       
    });
});

// DELETE method route that deletes a specific entry from our database based on clientID field.
app.delete('/deletecontact/:id', (req, res, next) => {
    ContactModel.findOneAndRemove({clientID: req.params.id}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            });
            }
    });
});

/////////////////////////////////////////// FAMILY /////////////////////////////////////

// POST method route to add a new entry for the family db based on family model schema. Additional endpoints below are listed below and referenced using Module 4 Lecture about CRUD examples.
app.post('/addfamily', (req, res, next) =>{
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.send('New Family Entry has been added to the Database!');
        }
    });
});


// GET method route to retrieve all entries in the family db.
app.get('/allfamily', (req, res, next) => {
    FamilyModel.find((error, data) => {
        if(error) {
            return next(error)
        }   else {
            res.json(data)
        }
    });
});

//GET method route to display a specific entry based on clientID field for the model. If the clientID does not match or is found, wil yield corresponding message.
app.get('/allfamily/:id', (req, res, next) => {
    console.log(req.params.id)
    FamilyModel.find({clientID: req.params.id}, (error, data) => {
        if(error) {
            return next(error)
        }   else if (data === null) {
            res.status(404).send('Family Entry not found');
        }
        else {
            res.json(data)
        }
    });
});

// PUT method route to change data for that specific entry based on clientID. Setting criteria to change all fields if necessary.
app.put('/updatefamily/:id', (req, res, next) => {
    FamilyModel.findOneAndUpdate({_id: req.params.id }, {
        $set: req.body
    },  (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.send('Contact Entry Updated!');
            console.log('Contact Entry Updated!', data)
        }       
    });
});

// DELETE method route that deletes a specific entry in the db based on _id field.
app.delete('/deletefamily/:id', (req, res, next) => {
    FamilyModel.findOneAndRemove({_id: req.params.id}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            });
            }
    });
});



  ///////////////////////EXTERNAL API////////////////////////////////////////////////////////////////////////////////////////////

// GET method route to retrieve data from the external API provided to us in the external APi documentation (https://elearning.uh.edu/bbcswebdav/pid-9076364-dt-content-rid-76938640_1/users/plindner/CIS%204339/ProjectAssignment/html/Project_External_API.html)
// Code reference in Module 6 Lecture about external API provided by Professor Lindner.
// External API data will be stored in apiURL where we send for a response of data.
// Await keyword is used so that the data is fetched before continuing the operation. Further understanding of the terminology and structure provided by (https://stackabuse.com/making-asynchronous-http-requests-in-javascript-with-axios/)
  app.get("/clientmentalhealth", async (req, res) => {
    let apiURL = 'https://cis-4339.herokuapp.com/api/v1/data/';
      try {
          const response = await axios.get(apiURL); 
          res.status(200).json(response.data);
      } catch (err) {
          res.status(500).json({ message: err });
      }
  });


  // GET method call to retrieve a specific entry based on the first name, last name, and phone number parameters. The external endpoint yields entries of clients with fields that are associated with them. We set the parameters based off fields from the external 
  // api and set those as the needed for the URL. Additionally we want to utilize the endpoint where we can retrieve relevant data of that specific client if they exist in our local db. By using our client db and the findOne method based off firstName field in our model schema
  // we can retrieve that client that matches with the external api db and output the results. If no client exists in our db it will yield error or no client. If the same client exist from both databases, we can create a variable to output relevant information
  // from the fields provided. In this case we will include in our output as results the fields from our client model schema and the 4 last fields taken from the external API when reading the JSON output.

  // Testing indicates when we inputed Fiona Smith and her associated mobile number into the endpoint, it matches with the Fiona in our database and outputs all the relevant information from our fields as well as the external api fields.
  // Additional reference in gaining better understanding of the material for external API used (https://rapidapi.com/blog/how-to-use-an-api-with-node-js/)
  app.get("/clientmentalhealth/:firstName/:lastName/:mobile", async (req, res) => {
    let apiURL = 'https://cis-4339.herokuapp.com/api/v1/data/'+req.params.firstName+'/'+req.params.lastName+'/'+req.params.mobile;
      try {
          const response = await axios.get(apiURL); 
          ClientModel.findOne({ firstName: req.params.firstName}, (error, info) => { 
            if (error) {
                return next(error) 
            }
            else if (info === null) {
                res.status(404).send('No client')  
            }
            else {
                console.log(response.data["data"][0]["mental_health_referral"])
                info["mental_health_referral"] = response.data["data"][0]["mental_health_referral"];
                info.mental_health_referral = response.data["data"][0]["mental_health_referral"];
                console.log(info)
                result = {
                    "clientID":info['clientID'],
                    "firstName":info['firstName'],
                    "lastName":info['lastName'],
                    "birthday":info['birthday'],
                    "ssn":info['ssn'],
                    "gender":info['gender'],
                    "age":info['age'],
                    "familyID":info['familyID'],
                    "events":info['events'],
                    'mental_health_referral':response.data["data"][0]["mental_health_referral"],
                    'date_last_mental_health_referal':response.data["data"][0]["date_last_mental_health_referal"],
                    'legal_councel_referal':response.data["data"][0]["legal_councel_referal"],
                    'CHW_id':response.data["data"][0]["CHW_id"]
                }
                res.json(result)
            }
        });
      } catch (err) {
          res.status(500).json({ message: err });
      }
  });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////// REPORTS /////////////////////////////////////
// an endpoint to retrieve hydrated records of events that include flattened info of the assigned workers
// additional reference on operations found on https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
app.get('/reports/event', (req, res, next) => {
    // perform a look up based on the workerID attribute
    EventModel.aggregate([
    { $lookup:
        {
           from: 'workers',
           localField: 'workerID',
           foreignField: 'workerID',
           as: 'worker'
        }
    },
    { 
        $unwind: '$worker' // flatten the worker info
    }], (error, data) => {
        // check if there are errors thrown
        if (error) {
            // return the error if found
            return next(error)
        } else {
            // send a json response with the data
            res.json(data)
        }
    });
});//end of get request

// an endpoint to retrieve events info and populate clients info for all clients enrolled to the event
app.get('/reports/event/:id', (req, res, next) => {
    EventModel.find({ _id: req.params.id}, // find the event using the uuid and show eventDesc, eventAddress and clients array
    {eventDesc: 1, eventAddress: 1, clients: 1})
    .populate({ // run populate to fetch client info and limit to select attributes for display
        path: 'clients', select: '-_id -firstName -lastName -age -gender -events'
    })// execute the query
    .exec((error, data) => {
        // check for errors
        if (error) {
            // return the error if found
            return next(error)
        } else {
            // send a json response with the data
            res.json(data)
        }
    })
}); //end of get request

// an endpoint to retrieve a summary of existing events and count of clients registered to the events to be used in a graph
// additional reference found on https://docs.mongodb.com/manual/reference/operator/aggregation/arrayToObject/, https://docs.mongodb.com/manual/reference/operator/aggregation/replaceRoot/
app.get('/reports/summary', (req, res, next) => {
    // run an aggregate query
  EventModel.aggregate([
    { "$group": {"_id": "$eventDesc","count": { "$sum": { "$size": "$clients" } } } }, // group events by description and use the sum operator to add all counts of registered clients using the sizes of clients arrays
    { "$group": {"_id": null, "counts": { "$push": { "k": "$_id", "v": "$count" }}}}, // create key-value pairs and populate data accordingly
    { "$replaceRoot": {"newRoot": { "$arrayToObject": "$counts" }}}, // convert the key-value array to an object
  ]) // run the query
  .exec((error, data) => {
    // check for errors
    if (error) {
        // return the error if found
        return next(error)
    } else {
        // send a response with the resulting data values
        res.send(data[0]);
    }
  })
}); //end of get request
/////////////////////////////////////////////////////////////////////////////

app.put('/event/:eventID/:id', async (req, res, next) => {
  let eventsKey = req.body.events // parse the array of events from req.body
  await eventsKey.push(req.params.eventID) // add the eventID var to the array for the client
  await EventModel.findOneAndUpdate ({_id: req.params.eventID}, { $addToSet: { clients: req.params.id} })
  await ClientModel.findOneAndUpdate({ clientID: req.params.id }, {$set: req.body}) 
  res.send('Added the client.')
});

app.listen(port, () => {
    console.log("Server online on port : ", port);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) 
        err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
