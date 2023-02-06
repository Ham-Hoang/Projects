<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create employment</h3>
            <!-- Creates the Create Employment form -->
            <form @submit.prevent="handleSubmitForm">
            <!-- Stops html from executing a normal submit and instead executes the handleUpdateForm function -->
            <!-- https://www.geeksforgeeks.org/vue-js-methods/ -->
            <!-- https://learnvue.co/2021/01/everything-you-need-to-know-about-vue-v-model/#what-is-vue-v-model -->
                <div class="form-group">
                    <label>Client ID</label>
                    <!-- Input for client ID where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="employment.clientID" required>
                </div>
                <div class="form-group">
                    <label>Family ID</label>
                    <!-- Input for Family ID where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control"  v-model="employment.familyID" required>
                </div>

                <div class="form-group">
                    <label>Work Status</label>
                    <!-- Input for work where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="employment.workStatus" required>
                </div>

                <div class="form-group">
                    <label>Occupation</label>
                     <!-- Input for Occupation where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="employment.occupation"  required>
                </div>

                <div class="form-group">
                    <label>Yearly Inc</label>
                     <!-- Input for Yearly Inc where v-model recieves the new info and sends it to the submit function -->
                    <input type="number" class="form-control" v-model="employment.yearlyInc"  required>
                </div>

                <button class="btn btn-danger mt-3">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
// imports axios
    import axios from "axios";
    //establishes the Employment index with tthe info from the form
    export default {
        data() {
            //Populates the Employement index with the required fields
            return {
                employment: {
                   clientID: '',
                   familyID: '',
                   workStatus: '',
                   occupation: '',
                   yearlyInc: ''
                }
            }
        },
         //creates the handleSubmitForm function
        methods: {
            handleSubmitForm() {
                //creates a variable to go to the Employment route
                let apiURL = 'http://localhost:3001/employment';
                console.log(this.employment);
                //Posts the populated employments index to the post route in the backend
                axios.post(apiURL, this.employment).then(() => {
                    //changing the view to the list
                  this.$router.push('/employment/view')
                  //this info is what gets pushed to the backend
                  this.employment = {
                    clientID: '',
                    familyID: '',
                    workStatus: '',
                    occupation: '',
                    yearlyInc: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        } 
           
    }
</script>
