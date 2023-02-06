<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Creates the edit client form -->
            <h3 class="text-center">Update Client</h3>
            <!-- Stops html from executing a normal submit and instead executes the handleUpdateForm function -->
            <!-- https://www.geeksforgeeks.org/vue-js-methods/ -->
            <!-- https://learnvue.co/2021/01/everything-you-need-to-know-about-vue-v-model/#what-is-vue-v-model -->
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Client ID</label>
                     <!-- Input for client ID where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="client.clientID" required>
                </div>
                <div class="form-group">
                    <label>First Name</label>
                    <!-- Input for First Name where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="client.firstName" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                     <!-- Input for Last Name where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="client.lastName" required>
                </div>

                <div class="form-group">
                    <label>Birthday</label>
                    <!-- Input for Birthdate where v-model recieves the new info and sends it to the update function -->
                    <input type="date" class="form-control" v-model="client.birthday" required>
                </div>

                <div class="form-group">
                    <label>SSN</label>
                    <!-- Input for SSN where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="client.ssn" required>
                </div>

                <div class="form-group">
                    <label>Gender</label>
                    <!-- Input for Gender where v-model recieves the new info and sends it to the update function -->
                </div>
                    <!-- Input for Male or Female using a check box -->
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
                    <!-- Input for Family ID where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="client.familyID" required>
                </div>
                <!-- creates the update button -->
                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
    </div>
</template>

<script>
// imports axios
import axios from "axios";
// establshes and exports a single client index
export default {
     data() {
        return {
            client: { }
        }
    },
    created() {
        // Allows you at access the backend and gets from the database the info for that single index
        console.log(this.$route.params.id);
        let apiURL = `http://localhost:3001/client/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            // populates the client index
            this.client = res.data;
        })
    },
    //establishes the update function
    methods: {
        handleUpdateForm() {
            //creates a variable that goes to a single id
            let apiURL = `http://localhost:3001/client/${this.$route.params.id}`;
            //updates the database with the data gotten from the form

            axios.put(apiURL, this.client).then((res) => {
                console.log(res)
                //shifts the page to the view client so the user can see their updated index
                this.$router.push('/client/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>
