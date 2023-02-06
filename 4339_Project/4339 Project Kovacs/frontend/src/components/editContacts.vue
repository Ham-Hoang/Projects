// Similar structure once again like other update forms. Reflective of the contact table fields and parameters based on _id field
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Editing Worker data based on forms below -->
            <h3 class="text-center">Editing Contact Info</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Client ID</label>
                    <input type="text" class="form-control" v-model="Contacts.clientID" required>
                </div>

                <div class="form-group">
                    <label>mobileNUM</label>
                    <input type="text" class="form-control" v-model="Contacts.mobileNUM" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="Contacts.email" required>
                </div>

                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" v-model="Contacts.address" required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="Contacts.city" required>
                </div>

                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" v-model="Contacts.state" required>
                </div>

                <div class="form-group">
                    <label>Zip Code</label>
                    <input type="text" class="form-control" v-model="Contacts.zip" required>
                </div>

                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
// Importing axios to call upon endpoints for update and gathering data.
// parameters based on _id values within contact table for update to execute
export default {
     data() {
        return {
            Contacts: { }
        }
    },
    created() {
        let apiURL = `http://localhost:3001/allcontact/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.Contacts = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3001/updatecontact/${this.$route.params.id}`;
// Update change will shift page to view 3 to display changes.
            axios.put(apiURL, this.Contacts).then((res) => {
                console.log(res)
                this.$router.push('/view3')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>
