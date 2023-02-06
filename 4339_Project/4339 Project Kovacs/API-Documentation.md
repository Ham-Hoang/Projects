**CIS 4338 Sprint 2**
**Group 19  
Hamilton Hoang  
Luke Kovacs  
Perminder Singh  
API Documentation**  


**Overview**

The application provides a RESTful JSON API to interact with the data. It does not require authentication and provides several endpoints to the application.

**Resources**

The endpoints are modeled around single resources. All endpoints follow standard REST conventions and can list resources by making a GET request to the endpoint, 
POST request to create, PUT to update a resource and DELETE request to delete a resource.

**Data**

**Worker data**

|**Field | Type | Description** | 
| --- | --- | --- |
| workerID | Number | A unique identifier for the client |
| firstName |String |  Worker’s first name |
| lastName | String |   Worker’s last name |
| organization |String |Worker’s organization |
| mobileNum | String |Worker’s mobile number |
| Email | String | Worker’s email |



**Inserting worker data**  
A new worker can be added by sending a POST request to the /worker URL with the following sample JSON data:

```javascript
{
   "workerID": 1,  
   "firstName": "Hello",  
   "lastName": "World",    
   "organization": "whatever",    
   "mobileNum": "+123-456-7890",  
   "email": "hello.world@gmail.com"  
}
```

**Listing all workers**  
A GET request to the /worker endpoint will return a list of all existing workers, as shown below:  


```javascript
[
   {
       "_id": "17f47920-99b9-11ec-a4bd-3daf07c0257b",  
       "workerID": 1,  
       "firstName": "Hello",  
       "lastName": "World",  
       "organization": "whatever",  
       "mobileNum": "+123-456-7890",  
       "email": "hello.world@gmail.com",  
       "__v": 0  
   }
   
]
 ```
 
 
**Listing a single worker data**  
To return data for a single worker, the REST API endpoint needs the worker ID to be included as a parameter to the GET request such as /workers/{{id}}.   
A request to fetch a list of data looks like this:  
```javascript
{  
   "_id": "17f47920-99b9-11ec-a4bd-3daf07c0257b",  
   "workerID": 1,    
   "firstName": "Hello",  
   "lastName": "World",  
   "organization": "whatever",  
   "mobileNum": "+123-456-7890",  
   "email": "hello.world@gmail.com",  
   "__v": 0  
}  
```
<br>
**Updating worker data**  
A PUT to the endpoint /worker/{{id}} can be used to update an existing worker if you specify workerID.   
Only those fields included in the body will be changed on the worker JSON document. You will receive a Worker is edited via PUT response if this occurs.  
<br>
**Deleting worker data**  
Deleting a worker’s data is done by sending a DELETE request to the API, /worker/{{workerID}} that results in a 200 status message if successful.  
<br>

**Possible errors:**

|**Error code	 |   Description** |
| --- | --- |
|404	          |  Worker not found  |




**Employment data**  

|**Field | Type |	Description** |
| --- | --- | --- |
|clientID|Number| A unique identifier for the client | 
|familyID | Number | A unique identifier for the client’s family  |
|workStatus|String | Client’s work staus  |
|occupation	|String	  |Client’s occupation  |
|yearlyInc	 |Number	  | Client’s yearly income  |

**Inserting employment data**  
This is possible by sending a POST request to the /employment endpoint. The clientID should be included in the payload posted that includes the following details  

```javascript
{  
   "clientID": 1,  
   "familyID": 1,  
   "workStatus": "Employed",  
   "occupation": "Software Engineer",  
   "yearlyInc": 12  
}  
```

**Listing all employment data**  
Sending a GET request to the /employment endpoint shall return a list of all available employment data for all clients similar to below:  

```javascript
[
   {
       "_id": "63040f60-99ba-11ec-a4bd-3daf07c0257b",  
       "clientID": 1,  
       "familyID": 1,  
       "workStatus": "Employed",  
       "occupation": "Software Engineer",  
       "yearlyInc": 12,  
       "__v": 0  
   }
]  
```

**Listing data for a client**  
To list data for a client, an existing client ID has to be passed to the GET request such as /employment/{{clientID}} to result in a data set as shown below.  

```javascript
{
   "_id": "63040f60-99ba-11ec-a4bd-3daf07c0257b",  
   "clientID": 1,  
   "familyID": 1,  
   "workStatus": "Employed",  
   "occupation": "Software Engineer",  
   "yearlyInc": 12,  
   "__v": 0  
}  
```

**Updating employment data**  
A PUT to the endpoint /employment/{{id}} can be used to update an existing employment record if you specify clientID.   
Only those fields included in the body will be changed on the worker JSON document. You will receive a Employment is edited via PUT response if this occurs  
<br>
**Deleting employment record**  
To delete a client employment record by client ID, send a DELETE request that includes the client ID such as /employment/{{clientID}}  
<br>
**Possible errors:**

|**Error code|	Description**|
| --- | --- |
|404	      |    Client not found | 




**Client Object**  

|**Field	| Type | Description** | 
| --- | --- | --- |
|clientID	      |Number	 | A unique identifier for the client  |
|firstName	      |String	 | The client’s first name || 
|lastName	      |String	 | The client’s last name | 
|Birthday	     | String	  |The client’s birthday | 
|Ssn	           | Number	  |The client’s social security number|  
|Gender	        |String	 | The client’s gender  |
|Age	          |  Number	 | The client’s age | 
|FamilyID	    |  Number	 | A unique identifier for the client’s family|  
|eventID	        |Number	|  A unique identifier for the event | 
|Events	       | String	 | A list of events the client is a part of  |


**Inserting client data**  
A new client can be added by sending a POST request to the /client URL with the following sample JSON package: 

```javascript
{
   "clientID": 1,  
   "firstName": "John",  
   "lastName": "Smith",  
   "birthday": "08/12/1999",  
   "ssn": "123-45-6789",  
   "gender": Male,  
   "age": 22,  
   "FamilyID": 1,  
   “eventID”: 2,  
   “events”: []  
}  
```

**Listing all clients**  
A GET request to the /client endpoint will return a list of all existing clients, as shown below:

```javascript
{
   "clientID": 1,  
   "firstName": "John",  
   "lastName": "Smith",  
   "birthday": "08/12/1999",  
   "ssn": "123-45-6789",  
   "gender": Male,  
   "age": 22,  
   "FamilyID": 1,  
   “eventID”: 2,  
   “events”: []  
}  
{
   "clientID": 2,  
   "firstName": "Jane",  
   "lastName": "Doe",  
   "birthday": "07/18/1998",  
   "ssn": "123-45-6789",  
   "gender": Female,  
   "age": 23,  
   "FamilyID": 2,  
   “eventID”: 2,  
   “events”: []  
}  

```

**Listing a single client data**  
To return data for a single client, the API endpoint needs the clientID to be included as a parameter to the GET request such as /client/{{id}}. A request to fetch a list of     data looks like this:  

```javascript
{
   "clientID": 1,  
   "firstName": "John",  
   "lastName": "Smith",  
   "birthday": "08/12/1999",  
   "ssn": "123-45-6789",  
   "gender": Male,  
   "age": 22,  
   "FamilyID": 1,  
   “eventID”: 2,  
   “events”: []  
}  
```

**Updating client data**  
A PUT to the endpoint /client/{{id}} can be used to update an existing client if you specify clientID. Only those fields included in the body will be changed in the database.   
<br>
**Deleting education data**  
Deleting a client’s data is done by sending a DELETE request to the API, /client/{{ID}} that results in a 200 status message and “Client Deleted” if successful.  
<br>
**Possible errors:** 

|**Error code|	Description**  |
| --- | --- |
|404	|Client not found  |



**Education Object**  
<br>
|**Field|Type|	Description** |
| --- | --- | --- |
|clientID|	Number|	A unique identifier for the client  |
|School|	String|	School’s name  |
|Degree|	String|	Degree Type | 
|Certification|	String|	Certifications achieved  |
|diploma|	String|	Diploma achieved  |

**Inserting education data**  
A new education can be added by sending a POST request to the /education URL with the following sample JSON package:  

```javascript
{
   "clientID": 1,  
   "School": "University of Houston",  
   "degree": "Bachelors of Science",  
   "certification": "n/a",  
   "diploma": "CIS"  
}  
```

**Listing all educations**  
A GET request to the /education endpoint will return a list of all existing educations, as shown below: 

```javascript
{
   "clientID": 1,  
   "School": "University of Houston",  
   "degree": "Bachelors of Science",  
   "certification": "n/a",  
   "diploma": "CIS"  
}  

{
   "clientID": 2,  
   "School": "University of Houston",  
   "degree": "Bachelors of Arts",  
   "certification": "n/a",  
   "diploma": "Photography"  
}  
```

**Listing a single education data**  
To return data for a single client, the API endpoint needs the clientID to be included as a parameter to the GET request such as /education/{{id}}. A request to fetch a list of   data looks like this:  

```javascript
{
   "clientID": 1,  
   "School": "University of Houston",  
   "degree": "Bachelors of Science",  
   "certification": "n/a",  
   "diploma": "CIS"  
}  
```

**Updating education data**  
A PUT to the endpoint /education/{{id}} can be used to update an existing education if you specify clientID. Only those fields included in the body will be changed in the     database.   
<br>
**Deleting education data**  
Deleting a client’s data is done by sending a DELETE request to the API, /education/{{ID}} that results in a 200 status message and “Education Deleted” if successful.  
<br>
**Possible errors:** 

|**Error code|	Description** | 
| --- | --- |
|404	|Client Education not found | 







**Event Object**  

|**Field	|Type|	Description** | 
| --- | --- | --- |
|eventID	|Number	|A unique identifier for the event  
|workerID	|Number	|A unique identifier for the worker  
|Org	|String	|Organization name  
|eventDesc	|String	|Description of the event  
|eventAddress	|String	|Address of the event  
|Clients	|String	|List of clients at the event  
<br>
**Inserting event data**  
A new event can be added by sending a POST request to the /event URL with the following sample JSON package: 

```javascript
{  
   "eventID": 1,  
   "workerID": 1,  
   "org": "BOL",  
   "eventDesc": "Food Drive",  
   "eventAddress": "12345 Houston Lane",  
   “clients”: []  
}  
```

**Listing all events**  
A GET request to the /event endpoint will return a list of all existing events, as shown below: 

```javascript
{  
   "eventID": 1,  
   "workerID": 1,  
   "org": "BOL",  
   "eventDesc": "Food Drive",  
   "eventAddress": "12345 Houston Lane",  
   “clients”: []  
}  
{  
   "eventID": 2,  
   "workerID": 1,  
   "org": "BOL",  
   "eventDesc": "Food Drive",  
   "eventAddress": "12345 Houston Lane",  
   “clients”: []  
}  

```
**Listing a single event data**  
To return data for a single client, the API endpoint needs the eventtID to be included as a parameter to the GET request such as /event/{{id}}.  
A request to fetch a list of data looks like this: 

```javascript
{  
   "eventID": 1,  
   "workerID": 1,  
   "org": "BOL",  
   "eventDesc": "Food Drive",  
   "eventAddress": "12345 Houston Lane",  
   “clients”: []  
}  
```
|
**Updating event data**  
A PUT to the endpoint /event/{{id}} can be used to update an existing education if you specify eventID. Only those fields included in the body will be changed in the database.   
<br>
**Deleting event data**  
Deleting a client’s data is done by sending a DELETE request to the API, /event/{{ID}} that results in a 200 status message and “Event Deleted” if successful.  
<br>
**Possible errors:**

|**Error code	|Description** | 
| --- | --- |
|404	|No event|  








**Family Object**  
<br>
|**Field|	Type|	Description**|  
| --- | --- | --- |
|clientID|	Number	|A unique identifier for the event  |
|familyID	|Number	|A unique identifier for the family|  
|firstName	|String	|First name|  
|lastName	|String	|Last name | 
|relation	|String	|Relation to the client | 
|birthday	|String	|Birthday | 
|gender	|String	|Gender  |
|age	|Number	|Age  |
<br>
**Inserting family data**  
A new family can be added by sending a POST request to the /addfamily URL with the following sample JSON package:

```javascript
{  
   "clientID": 1,  
   "familyID": 1,  
   "firstName": "John",  
   "lastName": "Doe",  
   "relation": "Brother",  
   “birthday”: “01-01-2000”,  
   "gender": "Male",  
   “age”: 22  
}  
```

**Listing all Family**  
A GET request to the /allfamily endpoint will return a list of all existing families, as shown below:  

```javascript
{  
   "clientID": 1,  
   "familyID": 1,  
   "firstName": "John",  
   "lastName": "Doe",  
   "relation": "Brother",  
   “birthday”: “01-01-2000”,  
   "gender": "Male",  
   “age”: 22  
}  
{  
   "clientID": 2,  
   "familyID": 2,  
   "firstName": "Jane",  
   "lastName": "Doe",  
   "relation": "Sister",  
   “birthday”: “01-01-2000”,  
   "gender": "Female",  
   “age”: 22  
}  
```

**Listing a single Family data**  
To return data for a single family, the API endpoint needs the clientID to be included as a parameter to the GET request such as /allfamily/{{id}}.   
A request to fetch a list of data looks like this: 

```javascript
{  
   "clientID": 1,  
   "familyID": 1,  
   "firstName": "John",  
   "lastName": "Doe",  
   "relation": "Brother",  
   “birthday”: “01-01-2000”,  
   "gender": "Male",  
   “age”: 22  
}  
```

**Updating Family data**  
A PUT to the endpoint /updatefamily/{{id}} can be used to update an existing family if you specify ID. Only those fields included in the body will be changed in the database.   
<br>
**Deleting Family data**  
Deleting a families data is done by sending a DELETE request to the API, /deletefamily/{{ID}} that results in a 200 status message if successful.  
<br>
**Possible errors:**

|**Error code|	Description** | 
| --- | --- |
|404	|No event | 



**Contact Object**  

|**Field|	Type|	Description**|
| --- | --- | --- |
|clientID	|Number	|A unique identifier for the event|  
|mobileNum	|String	|Contact number | 
|email	|String	|Contact email  |
|address	|String	|Contact address | 
|city 	|String	|Contact city|  
|State	|String	|Contact state | 
|zip	|Number	|Contact zip code | 


**Inserting contact data**  
A new contact can be added by sending a POST request to the /addcontact URL with the following sample JSON package:  

```javascript
{  
   "clientID": 1,  
   "mobileNum": “999-999-9999”,  
   "email": “JohnDoe@gmail.com”,  
   "address": "123 Houston",  
   "city": "Houston",  
   “state”: “Texas”,  
   "zip": "77023"  
}  
```

**Listing all contacts**    
A GET request to the /allcontact endpoint will return a list of all existing family, as shown below: 

```javascript
{  
   "clientID": 1,  
   "mobileNum": “999-999-9999”,  
   "email": “JohnDoe@gmail.com”,  
   "address": "123 Houston",  
   "city": "Houston",  
   “state”: “Texas”,  
   "zip": "77023"  
}  



{  
   "clientID": 2,  
   "mobileNum": “999-999-9999”,  
   "email": “JohnDoe@gmail.com”,  
   "address": "123 Houston",  
   "city": "Houston",  
   “state”: “Texas”,  
   "zip": "77023"  
}  

```

**Listing a single contact data**  
To return data for a single contact, the API endpoint needs the clientID to be included as a parameter to the GET request such as /allcontact/{{id}}.   
A request to fetch a list of data looks like this: 

```javascript
{  
   "clientID": 1,  
   "mobileNum": “999-999-9999”,  
   "email": “JohnDoe@gmail.com”,  
   "address": "123 Houston",  
   "city": "Houston",  
   “state”: “Texas”,  
   "zip": "77023"  
}  
```


**Updating contact data**  
A PUT to the endpoint /updatecontact/{{id}} can be used to update an existing contact if you specify ID.   
Only those fields included in the body will be changed in the database.   
<br>
**Deleting contact data**  
Deleting a contact data is done by sending a DELETE request to the API, /deletecontact/{{ID}} that results in a 200 status message if successful.  
<br>
**Possible errors:**

|**Error code|	Description**| 
| --- | --- |
|404	|No event | 
  



**Reports**  
<br>
**Event Report**  
A GET request to the /reports/event/:id endpoint will return a list of all events, the workers at the events, and the clients at the events, as shown below:

```javascript
{  
   "eventID": 1,  
   "workerID": 1,  
   "org": "ALC Church",  
   "eventDesc": "Food Drive",  
   "eventAddress": "12345 Houston Lane",  
   “clients”: [],  
   “worker”: {  
       "_id": "17f47920-99b9-11ec-a4bd-3daf07c0257b",  
       "workerID": 1,  
       "firstName": "Hello",  
       "lastName": "World",  
       "organization": "whatever",  
       "mobileNum": "+123-456-7890",  
       "email": "hello.world@gmail.com",  
       "__v": 0  
   }  
}   

 ```




**Event Summary**  
A GET request to the /reports/summary endpoint will return summary of how many clients attend an event, as shown below:  
```javascript
{  
   “Food drive on Sundays at the front of the church.”: 1,  
   “Shelter and food for anyone.”: 2  
}  
```
<br>  
**Listing External API data**  <br>  
 A GET method for the endpoint /clientmentalhealth will yield all the data entries from that external API.  <br>  
Sample Results shown below :  

```javascript
{    
    "data": [
        {  
            "first_name": "Fiona",<br>
            "last_name": "Smith",<br>
            "phone_number": "987-3595-89",<br>
            "mental_health_referral": false,<br>
            "date_last_mental_health_referal": "02/09/2018T00:00:00.0000Z",<br>
            "legal_councel_referal": true,<br>
            "CHW_id": 6866318<br>
        },

```
       

 

**Listing External API data along with data from local database if matching** 
<br>  A GET method for the endpoint /clientmentalhealth/firstName/lastName/mobile will yield all the data entries from that external API if the first name field matches from both   <br>  local database and external APi database. The results will display from both local database fields and the external APi fields that are specified.   
<br>  
Sample Results shown below :  

```javascript
{  
    "clientID": 15,  
    "firstName": "Richard",  
    "lastName": "Stewart",  
    "birthday": "Oct-15-1970",  
    "ssn": 736789999,  
    "gender": "Male",  
    "age": 45,  
    "events": [  
        "1"  
    ],  
    "mental_health_referral": true,  
    "date_last_mental_health_referal": "03/23/2018T00:00:00.0000Z",  
    "legal_councel_referal": false,  
    "CHW_id": 9241074  
}  
 ```

