<template>
    <div class="row justify-content-center">
        
        <!-- since an id has to get passed to this route, the id is first used as a pararm to fetch data from an endpoint.
        if the response data is empty, this div will show, and the second div will not. -->
        <div v-if="client == null" class="text-center">
            <h3>We didn't find a matching ID.</h3>
            <p> Please enter a valid ID to fill out the existing client form. If not, you can sign up as a new client.</p>
            <!-- buttons take you back to events or home -->
            <router-link :to="{name: 'Home'}" class="btn btn-primary m-2">Back to Home </router-link>
            <router-link :to="{name: 'events'}" class="btn btn-success">Try again</router-link>
        </div>

        <div v-if="client !== null" class="col-md-6">
            <h3 class="text-center">Event Sign-up</h3>
            <p class="text-center">Welcome back, {{client.firstName}}. Please update your information and press submit.</p>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Client ID</label>
                    <!-- Input for client ID where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="client.clientID" disabled>
                </div>
                <div class="form-group">
                    <label>First Name</label>
                    <!-- Input for First name where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="client.firstName" disabled>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <!-- Input for Last Name where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="client.lastName" disabled>
                </div>

                <div class="form-group">
                    <label>Birthday</label>
                    <!-- Input for Birthday where v-model recieves the new info and sends it to the submit function -->
                    <input type="date" class="form-control" v-model="client.birthday" disabled>
                </div>

                <div class="form-group">
                    <label>SSN</label>
                    <!-- Input for SSN where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="client.ssn" disabled>
                </div>

                <div class="form-group">
                    <label>Gender</label>
                     <!-- Input for Gender where v-model recieves the new info and sends it to the submit function -->
                </div>
                    <!-- Input for botton for gender -->
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="gender">Male</label>
                  <input class="form-check-input" type="radio" name="gender" v-model="client.gender" id="gender" value="male" disabled>
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="gender">Female</label>
                  <input class="form-check-input" type="radio" name="gender" v-model="client.gender" id="gender" value="female" disabled>
                </div>

                <div class="form-group">
                    <label>Family ID</label>
                    <!-- Input for Family ID where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="client.familyID" disabled>
                </div>

                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>


    </div>
</template>

<script>
// imports axios
import axios from "axios";

export default {
    data() {
        return {
            client: { }
        }
    },
    created() {
        let apiURL = `http://localhost:3001/event/${this.$route.params.eventid}/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.client = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3001/event/${this.$route.params.eventid}/${this.$route.params.id}`;

            axios.put(apiURL, this.client).then((res) => {
                console.log(res)
                // this.$router.push({ path: `/client/${this.$route.params.id}` })
                this.$router.push('/client/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>
