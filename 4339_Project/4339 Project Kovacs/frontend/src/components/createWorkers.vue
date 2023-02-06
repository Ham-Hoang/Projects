// Template provided by Professor Lindner Module 10 on VueJS components
// Forms below reflect all fields necessary to create a new Worker that are identical to the structure of view workers page

<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Workers</h3>
             <form @submit.prevent="handleSubmitForm"> 
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" class="form-control" v-model="Workers._id" required>
                </div>
                <div class="form-group">
                    <label>Worker ID</label>
                    <input type="text" class="form-control"  v-model="Workers.workerID" required>
                </div>

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="Workers.firstName"  required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="Workers.lastName"  required>
                </div>

                <div class="form-group">
                    <label>Organization</label>
                    <input type="text" class="form-control" v-model="Workers.organization"  required>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" v-model="Workers.mobileNum"  required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="Workers.email"  required>
                </div>

                <button class="btn btn-danger mt-3">Create</button>
            </form>
        </div>
    </div>
</template>
// Importing axios to make call to the post endpoint
<script>
import axios from "axios";
// creating variable to store Worker fields to later be used in the method below for inputs to be added
    export default {
        data() {
            return {
                Workers: {
                   _id: '', 
                   workerID: '',
                   firstName: '',
                   lastName: '',
                   organization: '',
                   mobileNum: '',
                   email: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:3001/worker';
// Getting endpoint and posting into Workers variable that will reflect onto view workers page
// After creation the page will push to view7 as stated by router push code
// Reference shown by Professor Lindners code template in Module 10                
                axios.post(apiURL, this.Workers).then(() => {
                    
                  this.$router.push('/view7')
                  this.Workers = {
                       _id: '', 
                   workerID: '',
                   firstName: '',
                   lastName: '',
                   organization: '',
                   mobileNum: '',
                   email: ''
                  }
                   
                }).catch(error => {
                    console.log(error)
                });
            }
        } 
           
    }
</script>
