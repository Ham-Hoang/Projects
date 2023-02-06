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
          <th>Family ID</th>
          <th>Work Status</th>
          <th>Occupation</th>
          <th>Yearly Inc</th>
          <th>Actions</th> 
        </tr>
      </thead>
      <tbody>
        <!--  Renders the list of employement items based on the education array-->
        <!-- Establishes employment._id as the key for the update and delete functions -->
       <tr v-for="employment in employments" :key="employment._id">
          <td>{{ employment.clientID }}</td>
          <td>{{ employment.familyID }}</td>
          <td>{{ employment.workStatus }}</td>
          <td>{{ employment.occupation }}</td>
          <td>{{ employment.yearlyInc }}</td>
            <td>
              <!-- Allows the user to edit the selected employment based off of the employment._id (links to the router folder that connects to the editEducation component)  -->
            <router-link :to="{name: 'edit-employment', params: { id: employment._id }}" class="btn btn-success ">Edit</router-link>
            <!-- Allows the user to delete the selected employement based off of the employment._id by executing the deleteEducation function -->
            <button @click.prevent="deleteEmployment(employment._id)" class="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// imports axios
    import axios from "axios";

    export default {
        data() {
            return {
                employments: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:3001/employment';
            axios.get(apiURL).then(res => {
                this.employments = res.data;
            }).catch(error => {
                console.log(error)
            }); 
        },
        methods: {
            deleteEmployment(id){
                let apiURL = `http://localhost:3001/employment/${id}`;
                let indexOfArrayItem = this.employments.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                  //call to backend
                    axios.delete(apiURL).then(() => {
                      //remove one element from employments array object to update data
                        this.employments.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
