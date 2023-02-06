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
          <th>School</th>
          <th>Degree</th>
          <th>Certification</th>
          <th>Diploma</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!--  Renders the list of education items based on the education array-->
        <!-- Establishes clientID as the key for the update and delete functions -->
       <tr v-for="education in Education" :key="education.clientID">
          <td>{{ education.clientID }}</td>
          <td>{{ education.School }}</td>
          <td>{{ education.degree }}</td>
          <td>{{ education.certification }}</td>
          <td>{{ education.diploma }}</td>
            <td>
              <!-- Allows the user to edit the selected education based off of the clientID (links to the router folder that connects to the editEducation component)  -->
            <router-link :to="{name: 'editEducation', params: { id: education.clientID }}" class="btn btn-success ">Edit</router-link>
            <!-- Allows the user to delete the selected education based off of the clientID by executing the deleteEducation function -->
            <button @click.prevent="deleteEducation(education.clientID)" class="btn btn-danger mx-2">Delete</button> 
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
// imports axios
    import axios from "axios";
// establshes and exports the Education array
    export default {
        data() {
            return {
                Education: []
            }
        },
        // Allows you at access the backend and gets from the database https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle
        created() {
          //Establishes connection to the education route from the backend
            let apiURL = 'http://localhost:3001/education';
            axios.get(apiURL).then(res => {
              //puts the indexes from the backend into the education array
                this.Education = res.data;
            }).catch(error => {
                console.log(error)
            }); 
        },
        //establishes the delete function
        methods: {
            deleteEducation(id){
              //creates a variable that goes to a single id
                let apiURL = `http://localhost:3001/education/${id}`;
                //finds the single index from the education array
                let indexOfArrayItem = this.Education.findIndex(i => i.clientID === id);

                if (window.confirm("Do you want to delete this entry?")) {
                  //call to the delete backend url
                    axios.delete(apiURL).then(() => {
                      //removes the selected index from the array
                        this.Education.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
