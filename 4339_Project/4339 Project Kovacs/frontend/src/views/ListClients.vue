<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
<!-- Establishes the div for the table -->
  <div class="row justify-content-center">
      <!-- Makes the table striped and changes the color -->
    <table class="table table-striped table-dark">
      <thead class="table-dark">
        <tr>
          <!-- Displays the header names in the header section -->
          <th>Client ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birthday</th>
          <th>SSN</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Family ID</th>
          <th>Total Events Registered</th>
          <th>Actions</th> 
        </tr>
      </thead>
      <tbody>
        <!--  Renders the list of client items based on the client array-->
        <!-- Establishes clientID as the key for the update and delete functions -->
       <tr v-for="client in clients" :key="client._id">
          <td>{{ client.clientID }}</td>
          <td>{{ client.firstName }}</td>
          <td>{{ client.lastName }}</td>
          <td>{{ client.birthday }}</td>
          <td>{{ client.ssn }}</td>
          <td>{{ client.gender }}</td>
          <td>{{ calculateAge(client.birthday) }}</td>
          <td>{{ client.familyID }}</td>
          <td>{{ client.eventsCount }}</td>
            <td>
            <!-- buttons for crud functionality, each pass the id from the client data as a param -->
            <router-link :to="{name: 'show-client', params: { id: client._id }}" class="btn btn-primary mx-2">Detail View
            </router-link>
            <!-- goes to single client view -->
            <router-link :to="{name: 'edit-client', params: { id: client._id }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deleteClient(client._id)" class="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// imports axios
    import axios from "axios";
// establshes and exports the clients array
    export default {
        data() {
            return {
                clients: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:3001/client';
            axios.get(apiURL).then(res => {
                this.clients = res.data;
            }).catch(error => {
                console.log(error)
            }); 
        },
        methods: {
            deleteClient(id){
                let apiURL = `http://localhost:3001/client/${id}`;
                let indexOfArrayItem = this.clients.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                  //call to backend
                    axios.delete(apiURL).then(() => {
                      //remove one element from clients array object to update data
                        this.clients.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            },
            // function for age calculation
            calculateAge(dob) {
                let currentDate = new Date();
                let birthDate = new Date(dob);
                let difference = currentDate - birthDate;
                let age = Math.floor(difference/31557600000);
                return age;
            }
        }
    }
</script>
