// template form fields are similar to other components and reflects table values for POST method to execute and insert data.
// References provided by Professor Lindner vue js components lecture
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Contacts</h3>
             <form @submit.prevent="handleSubmitForm"> 
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" class="form-control" v-model="Contacts._id" required>
                </div>

                <div class="form-group">
                    <label>Client ID</label>
                    <input type="text" class="form-control"  v-model="Contacts.clientID" required>
                </div>

                <div class="form-group">
                    <label>Mobile Number</label>
                    <input type="text" class="form-control" v-model="Contacts.mobileNUM"  required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="Contacts.email"  required>
                </div>

                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" v-model="Contacts.address"  required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="Contacts.city"  required>
                </div>

                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" v-model="Contacts.state"  required>
                </div>

                <div class="form-group">
                    <label>Zip Code</label>
                    <input type="text" class="form-control" v-model="Contacts.zip"  required>
                </div>

                <button class="btn btn-danger mt-3">Create</button>
            </form>
        </div>
    </div>
</template>
// Same structure as other create pages. Calls to endpoint and inserts data based on field values below

<script>
import axios from "axios";

    export default {
        data() {
            return {
                Contacts: {
                   _id: '', 
                   clientID: '',
                   mobileNUM: '',
                   email: '',
                   address: '',
                   city: '',
                   state: '',
                   zip: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:3001/addcontact';
                
                axios.post(apiURL, this.Contacts).then(() => {
//after adding entry, push to view 3 to show addition to the table
                  this.$router.push('/view3')
                  this.Contacts = {
                       _id: '', 
                   clientID: '',
                   mobileNUM:'',
                   email: '',
                   address: '',
                   city: '',
                   state: '',
                   zip: '',
                  }
                   
                }).catch(error => {
                    console.log(error)
                });
            }
        } 
           
    }
</script>
