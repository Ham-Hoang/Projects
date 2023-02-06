<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Creates the edit event form -->
            <h3 class="text-center">Editing Event Info</h3>
            <!-- Stops html from executing a normal submit and instead executes the handleUpdateForm function -->
            <!-- https://www.geeksforgeeks.org/vue-js-methods/ -->
            <!-- https://learnvue.co/2021/01/everything-you-need-to-know-about-vue-v-model/#what-is-vue-v-model -->
            <form @submit.prevent="handleUpdateForm">
               <div class="form-group">
                    <label>Event ID</label>
                    <!-- Input for event ID where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control" v-model="event.eventID" required>
                </div>
                <div class="form-group">
                    <label>Worker ID</label>
                    <!-- Input for worker ID where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control"  v-model="event.workerID" required>
                </div>

                <div class="form-group">
                    <label>Organization</label>
                    <!-- Input for organization where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control"  v-model="event.org" required>
                </div>

                <div class="form-group">
                    <label>Event Description</label>
                    <!-- Input for event description where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control"  v-model="event.eventDesc" required>
                </div>

                <div class="form-group">
                    <label>Event Address</label>
                    <!-- Input for event address where v-model recieves the new info and sends it to the update function -->
                    <input type="text" class="form-control"  v-model="event.eventAddress" required>
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
// establshes and exports a single event index
export default {
     data() {
        return {
            event: { }
        }
    },
    // Allows you at access the backend and gets from the database the info for that single index
    created() {
        //Establishes connection to the event route for that single index from the backend
        let apiURL = `http://localhost:3001/event/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            // populates the event index
            this.event = res.data;
        })
    },
    //establishes the update function
    methods: {
        handleUpdateForm() {
            //creates a variable that goes to a single id
            let apiURL = `http://localhost:3001/event/${this.$route.params.id}`;
            //updates the database with the data gotten from the form
            axios.put(apiURL, this.event).then((res) => {
                console.log(res)
                //shifts the page to the view events so the user can see their updated index
                this.$router.push('/view2')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>
