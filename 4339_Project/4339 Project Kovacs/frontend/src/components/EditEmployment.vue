<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update employment content -->
            <h3 class="text-center">Update employment</h3>
            <!-- Stops html from executing a normal submit and instead executes the handleUpdateForm function -->
            <!-- https://www.geeksforgeeks.org/vue-js-methods/ -->
            <!-- https://learnvue.co/2021/01/everything-you-need-to-know-about-vue-v-model/#what-is-vue-v-model -->
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Client ID</label>
                    <!-- Input for client ID where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="employment.clientID" required>
                </div>
                <div class="form-group">
                    <label>Family ID</label>
                    <!-- Input for family ID where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control"  v-model="employment.familyID" required>
                </div>

                <div class="form-group">
                    <label>Work Status</label>
                    <!-- Input for work status where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="employment.workStatus" required>
                </div>

                <div class="form-group">
                    <label>Occupation</label>
                    <!-- Input for Occupation where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="employment.occupation"  required>
                </div>

                <div class="form-group">
                    <label>Yearly Inc</label>
                    <!-- Input for yearly inc where v-model recieves the new info and sends it to the update function -->
                    <input type="number" class="form-control" v-model="employment.yearlyInc"  required>
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
// establshes and exports a single employment index
export default {
     data() {
        return {
            employment: { }
        }
    },
    created() {
        // Allows you at access the backend and gets from the database the info for that single index
        let apiURL = `http://localhost:3001/employment/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            // populates the employment index
            this.employment = res.data;
        })
    },
    //establishes the update function
    methods: {
        handleUpdateForm() {
            //creates a variable that goes to a single id
            let apiURL = `http://localhost:3001/employment/${this.$route.params.id}`;
              //updates the database with the data gotten from the form
            axios.put(apiURL, this.employment).then((res) => {
                console.log(res)
                //shifts the page to the view education so the user can see their updated index
                this.$router.push('/employment/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>
