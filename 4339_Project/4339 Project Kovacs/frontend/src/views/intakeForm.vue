<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
    <div class="row justify-content-center">
        
        <!-- the div only renders based on the conditions below. so if the client has an id, this will show-->
        <div class="col-md-6 mb-5 pb-5" v-if="hasID & isnew === false">
            <div class="row">
            <h5 class="text-center">Please enter your client ID to proceed.</h5>
                <div class="row-4 d-flex justify-content-center">
                    <input type="text" class="form-control" v-model="idinput" required>
                    <!-- uses the input as a parmam and passes it to the intakeform/:id route. -->
                    <router-link :to="`/intakeform/${this.$route.params.id}/` + idinput" class="btn btn-success ">Go</router-link>
                </div>
            </div>            
        </div>

        <!-- if the client is isnew is false, this will render. by default it will render first to give the option to enter and id or fill new form -->
        <div v-if="!isnew" class="row mb-5 pb-5">
            <h5 class="text-center mb-4">Have you applied with Project Group 19 Application before?</h5>
            <div class="row-4 d-flex justify-content-center">
                <!-- click events with change the vairables hasId and isNew either true of false -->
                <button type="button" class="btn btn-primary mx-1" @click="hasID = !hasID">Yes, I'm an existing client</button>
                <button type="button" class="btn btn-danger mx-1" @click="isnew =!isnew">No, I'm a new client</button>
            </div>
        </div>

        <!-- renders if the client selected that they are new to Project Group 19 Application -->
        <div v-else-if="isnew" class="col-md-8">

            <!-- using browser form validation, form allows input for fields and they get places into the client data model. -->
            <h3 class="text-center mb-1">New client Sign-Up</h3>
            <h5 class= "text-muted text-center">Fill in the form below to complete the sign-up for the event.</h5>
            <!-- Basic client information -->
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
                // variables are used for v-if, client data model is usd to submit form data. 
                hasID: false,
                isnew: false,
                ischecked: false,
                idinput: '',
                otherinput: '',
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
                },

            }
        },
        methods: {
            // pushes a value into an array
            addToArray() {
                this.client.marketSurvey.push(this.otherinput)
            },
            //uses the client dta model as request data to send data to the api endpoint.
            handleSubmitForm() {
                let apiURL = `http://localhost:3001/event/${this.$route.params.id}`;
               
                axios.post(apiURL, this.client).then(() => {
                    //after the posting of data, takes you to the clients route view
                  this.$router.push('/client/view')
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
