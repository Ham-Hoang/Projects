<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Creates the edit education form -->
            <h3 class="text-center">Editing Education Info</h3>
            <!-- Stops html from executing a normal submit and instead executes the handleUpdateForm function -->
            <!-- https://www.geeksforgeeks.org/vue-js-methods/ -->
            <!-- https://learnvue.co/2021/01/everything-you-need-to-know-about-vue-v-model/#what-is-vue-v-model -->
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Client ID</label>
                    <!-- Input for client ID where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="education.clientID" required>
                </div>

                <div class="form-group">
                    <label>School</label>
                    <!-- Input for school where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="education.School" required>
                </div>

                <div class="form-group">
                    <label>Degree</label>
                    <!-- Input for degree where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="education.degree" required>
                </div>

                <div class="form-group">
                    <label>Certification</label>
                    <!-- Input for certification where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="education.certification" required>
                </div>

                <div class="form-group">
                    <label>Diploma</label>
                    <!-- Input for diploma where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="education.diploma" required>
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
// establshes and exports a single education index
export default {
     data() {
        return {
            education: { }
        }
    },
    created() {
        // Allows you at access the backend and gets from the database the info for that single index
        let apiURL = `http://localhost:3001/education/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            // populates the education index
            this.education = res.data;
        })
    },
    //establishes the update function
    methods: {
        handleUpdateForm() {
            //creates a variable that goes to a single id
            let apiURL = `http://localhost:3001/education/${this.$route.params.id}`;
            //updates the database with the data gotten from the form
            axios.put(apiURL, this.education).then((res) => {
                console.log(res)
                //shifts the page to the view education so the user can see their updated index
                this.$router.push('/view4')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>
