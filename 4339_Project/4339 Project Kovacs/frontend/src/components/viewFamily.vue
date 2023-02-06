<!-- Code referenced from Professor Lindner's Module 10 VueJS component part 2 lecture video -->
<!-- Table headers renamed to reflect the Family's model table so that it shows on view family tab on webpage -->
// Template is similar to Workers create/edit/view pages
// The Delete,and update are based on family _id field
// Template provided by Professor Lindner and changed to reflect our application needs
<template>
  <div class="row justify-content-center">
    <table class="table table-striped table-dark">
      <thead class="table-dark">
        <tr>
          <th>_id</th>
          <th>Client ID</th>
          <th>Family ID</th>
          <th>First Name</th>
          <th>Last Name</th> 
          <th>Relation</th>
          <th>Birthday</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Additional Actions</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="family in Families" :key="family._id">
          <td>{{ family._id }}</td>
          <td>{{ family.clientID }}</td>
          <td>{{ family.familyID }}</td>
          <td>{{ family.firstname }}</td>
          <td>{{ family.lastname }}</td>
          <td>{{ family.relation }}</td>
          <td>{{ family.birthday }}</td>
          <td>{{ family.gender }}</td>
          <td>{{ family.Age }}</td>
            <td>
            <router-link :to="{name: 'edit6', params: { id: family._id }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deletefamily(family._id)" class="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
// Creating variable to hold family data from the backend which is used in the code below for retrieval
                Families: []
            }
        },

// Connection to the backend to retrieve family data using GET method
        created() {
            let apiURL = 'http://localhost:3001/allfamily';
            axios.get(apiURL).then(res => {
                this.Families = res.data;
            }).catch(error => {
                console.log(error)
            }); 
        },
// Delete endpoint called based on _id field from Families
// Reiterating code structure similar to Workers component page
        methods: {
            deletefamily(id){
                let apiURL = `http://localhost:3001/deletefamily/${id}`;
                let indexOfArrayItem = this.Families.findIndex(i => i._id === id);

                if (window.confirm("Delete this Entry?")) {
               
                    axios.delete(apiURL).then(() => {
                 
                        this.Families.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
