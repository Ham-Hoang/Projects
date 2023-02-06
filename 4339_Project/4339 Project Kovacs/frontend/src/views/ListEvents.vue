<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
<!-- Establishes the div for the table -->
  <div class="row justify-content-center">
        <!-- Makes the table striped and changes the color -->
    <table class="table table-striped table-dark">
      <thead class="table-dark">
        <tr>
          <!-- Displays the header names in the header section -->
          <th>Event ID</th>
          <th>Worker ID</th>
          <th>Org</th>
          <th>Event Description</th>
          <th>Event Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!--  Renders the list of event items based on the event array-->
        <!-- Establishes eventID as the key for the update and delete functions -->
       <tr v-for="event in Event" :key="event.eventID">
          <td>{{ event.eventID }}</td>
          <td>{{ event.workerID }}</td>
          <td>{{ event.org }}</td>
          <td>{{ event.eventDesc }}</td>
          <td>{{ event.eventAddress }}</td>
            <td>
            <!-- Allows the user to edit the selected event based off of the eventUD (links to the router folder that connects to the editEvent component)  -->
            <router-link :to="{name: 'editEvent', params: { id: event._id }}" class="btn btn-success ">Edit</router-link>
            <!-- Allows the user to delete the selected event based off of the eventID by executing the deleteEvent function -->
            <button @click.prevent="deleteEvent(event.eventID)" class="btn btn-danger mx-2">Delete</button> 
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// imports axios
    import axios from "axios";
// establshes and exports the Events array
    export default {
        data() {
            return {
                Event: []
            }
        },
        // Allows you at access the backend and gets from the database https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle 
        created() {
          //Establishes connection to the event route from the backend
            let apiURL = 'http://localhost:3001/event';
            axios.get(apiURL).then(res => {
              //puts the indexes from the backend into the event array
                this.Event = res.data;
            }).catch(error => {
                console.log(error)
            }); 
        },
        //establishes the delete function
        methods: {
            deleteEvent(id){
              //creates a variable that goes to a single id
                let apiURL = `http://localhost:3001/event/${id}`;
                //finds the single index from the event array
                let indexOfArrayItem = this.Event.findIndex(i => i.eventID === id);

                if (window.confirm("Do you want to delete this entry?")) {
                  //calls the delete backend url
                    axios.delete(apiURL).then(() => {
                      //removes the selected index from the array
                        this.Event.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
