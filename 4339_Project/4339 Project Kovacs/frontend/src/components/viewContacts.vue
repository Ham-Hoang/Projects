<!-- Code referenced from Professor Lindner's Module 10 VueJS component part 2 lecture video -->
<!-- Table headers renamed to reflect the Contacts model table so that it shows on view Contact tab on webpage -->
<!-- Template provided in Module 10. Structure is similar to other component list/view pages and reflects the fields for create/update/and delete methods to execute -->
// edit page renders on edit 3 on update button
// delete executes based on _id field
<template>
  <div class="row justify-content-center">
    <table class="table table-striped table-dark">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Client ID</th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>Address</th> 
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
          <th>Additional Actions</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="contact in Contacts" :key="contact._id">
          <td>{{ contact._id }}</td>
          <td>{{ contact.clientID }}</td>
          <td>{{ contact.mobileNUM }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.address }}</td>
          <td>{{ contact.city }}</td>
          <td>{{ contact.state }}</td>
          <td>{{ contact.zip }}</td>
            <td>
            <router-link :to="{name: 'edit3', params: { id: contact._id }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deletecontact(contact._id)" class="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import axios from "axios";
// similar to other axios calls in other component pages. Calls to endpoint
    export default {
        data() {
            return {
// Creating variable to hold  data from the backend which is used in the code below for retrieval
                Contacts: []
            }
        },

// Connection to the backend to retrieve Contact data using GET method
        created() {
            let apiURL = 'http://localhost:3001/allcontact';
            axios.get(apiURL).then(res => {
                this.Contacts = res.data;
            }).catch(error => {
                console.log(error)
            }); 
        },
        methods: {
            deletecontact(id){
                let apiURL = `http://localhost:3001/deletecontact/${id}`;
                let indexOfArrayItem = this.Contacts.findIndex(i => i._id === id);

                if (window.confirm("Delete this Entry?")) {
               
                    axios.delete(apiURL).then(() => {
                 
                        this.Contacts.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
