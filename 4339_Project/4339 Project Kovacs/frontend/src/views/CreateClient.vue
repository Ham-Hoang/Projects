<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Client</h3>
             <!-- Creates the Create Client form -->
            <form @submit.prevent="handleSubmitForm">
            <!-- Stops html from executing a normal submit and instead executes the handleUpdateForm function -->
            <!-- https://www.geeksforgeeks.org/vue-js-methods/ -->
            <!-- https://learnvue.co/2021/01/everything-you-need-to-know-about-vue-v-model/#what-is-vue-v-model -->
                <div class="form-group">
                    <label>Client ID</label>
                     <!-- Input for client ID where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="client.clientID" required>
                </div>
                <div class="form-group">
                    <label>First Name</label>
                    <!-- Input for First name where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="client.firstName" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <!-- Input for Last Name where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="client.lastName" required>
                </div>

                <div class="form-group">
                    <label>Birthday</label>
                    <!-- Input for Birthday where v-model recieves the new info and sends it to the submit function -->
                    <input type="date" class="form-control" v-model="client.birthday" required>
                </div>

                <div class="form-group">
                    <label>SSN</label>
                    <!-- Input for SSN where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="client.ssn" required>
                </div>

                <div class="form-group">
                    <label>Gender</label>
                     <!-- Input for Gender where v-model recieves the new info and sends it to the submit function -->
                </div>

                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="gender">Male</label>
                   <!-- Input for botton for gender -->
                  <input class="form-check-input" type="radio" name="gender" v-model="client.gender" id="gender" value="male">
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="gender">Female</label>
                  <input class="form-check-input" type="radio" name="gender" v-model="client.gender" id="gender" value="female">
                </div>

                <div class="form-group">
                    <label>Family ID</label>
                     <!-- Input for Family ID where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="client.familyID" required>
                </div>
                <!-- creates the submit button -->
                <button class="btn btn-danger mt-3">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
// imports axios
    import axios from "axios";
    //establishes the client index with tthe info from the form
    export default {
        data() {
            //Populates the Client index with the required fields
            return {
                client: {
                    clientID: '',
                    firstName: '',
                    lastName: '',
                    birthday: '',
                    ssn: '',
                    gender: '',
                    age: '',
                    familyID: '',
                    events: []
                }
            }
        },
        //creates the handleSubmitForm function
        methods: {
            handleSubmitForm() {
                //creates a variable to go to the client route
                let apiURL = 'http://localhost:3001/client';
                console.log(this.client);
                //Posts the populated client index to the post route in the backend
                axios.post(apiURL, this.client).then(() => {
                    //changing the view to the list
                  this.$router.push('/client/view')
                  //this info is what gets pushed to the backend
                  this.client = {
                    clientID: '',
                    firstName: '',
                    lastName: '',
                    birthday: '',
                    ssn: '',
                    gender: '',
                    age: '',
                    familyID: '',
                    events: []
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        } 
           
    }
</script>
