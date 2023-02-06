<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Education</h3>
            <!-- Creates the Create Education form -->
            <form>
            <!-- Stops html from executing a normal submit and instead executes the handleUpdateForm function -->
            <!-- https://www.geeksforgeeks.org/vue-js-methods/ -->
            <!-- https://learnvue.co/2021/01/everything-you-need-to-know-about-vue-v-model/#what-is-vue-v-model -->
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Client ID</label>
                    <!-- Input for client ID where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="education.clientID" required>
                </div>
                <div class="form-group">
                    <label>School</label>
                    <!-- Input for school where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control"  v-model="education.School" required>
                </div>

                <div class="form-group">
                    <label>Degree</label>
                    <!-- Input for degree where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control"  v-model="education.degree" required>
                </div>

                <div class="form-group">
                    <label>Certification</label>
                    <!-- Input for certification where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control"  v-model="education.certification" required>
                </div>

                <div class="form-group">
                    <label>Diploma</label>
                    <!-- Input for diploma where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control"  v-model="education.diploma" required>
                </div>
                <!-- creates the submit button -->
                <button class="btn btn-danger mt-3">Create</button>
            </form>
            </form>
        </div>
    </div>
</template>

<script>
// imports axios
    import axios from "axios";
    //establishes the education index with tthe info from the form
    export default {
        data() {
            //Populates the education index with the required fields
            return {
                education: {
                   clientID: '',
                   School: '',
                   degree: '',
                   certification: '',
                   diploma: ''
                }
            }
        },
        //creates the handleSubmitForm function
        methods: {
            handleSubmitForm() {
                //creates a variable to go to the education route
                let apiURL = 'http://localhost:3001/education';
                //Posts the populated education index to the post route in the backend
                axios.post(apiURL, this.education).then(() => {
                    //changes the view to the view education 
                  this.$router.push('/view4')
                  //this info is what gets pushed to the backend
                  this.education = {
                   clientID: '',
                   School: '',
                   degree: '',
                   certification: '',
                   diploma: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        } 
           
    }
</script>
