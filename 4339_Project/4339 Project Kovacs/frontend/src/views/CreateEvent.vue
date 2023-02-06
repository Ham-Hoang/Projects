<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Event</h3>
            <!-- Creates the Create Event form -->
            <form>
                <!-- Stops html from executing a normal submit and instead executes the handleUpdateForm function -->
            <!-- https://www.geeksforgeeks.org/vue-js-methods/ -->
            <!-- https://learnvue.co/2021/01/everything-you-need-to-know-about-vue-v-model/#what-is-vue-v-model -->
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Event ID</label>
                    <!-- Input for event ID where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control" v-model="event.eventID" required>
                </div>
                <div class="form-group">
                    <label>Worker ID</label>
                    <!-- Input for worker ID where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control"  v-model="event.workerID" required>
                </div>

                <div class="form-group">
                    <label>Organization</label>
                    <!-- Input for organization where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control"  v-model="event.org" required>
                </div>

                <div class="form-group">
                    <label>Event Description</label>
                    <!-- Input for event description where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control"  v-model="event.eventDesc" required>
                </div>

                <div class="form-group">
                    <label>Event Address</label>
                    <!-- Input for event address where v-model recieves the new info and sends it to the submit function -->
                    <input type="text" class="form-control"  v-model="event.eventAddress" required>
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
//establishes the event index with tthe info from the form
    export default {
        data() {
            //Populates the event index with the required fields
            return {
                event: {
                   eventID: '',
                   workerID: '',
                   org: '',
                   eventDesc: '',
                   eventAddress: ''
                }
            }
        },
        //creates the handleSubmitForm function
        methods: {
            handleSubmitForm() {
                //creates a variable to go to the education route
                let apiURL = 'http://localhost:3001/event';
                //Posts the populated event index to the post route in the backend
                axios.post(apiURL, this.event).then(() => {
                  //changes the view to the view events 
                  this.$router.push('/view2')
                  //this info is what gets pushed to the backend
                  this.event = {
                   eventID: '',
                   workerID: '',
                   org: '',
                   eventDesc: '',
                   eventAddress: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        } 
           
    }
</script>
