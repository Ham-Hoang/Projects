<template>
    <div class="row">
        <div class="col-md-12 text-center ">
          <h3>Register for an Event</h3>
          <h5 class="text-muted mb-5">Listed below are the upcoming events.</h5>
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Organization</th>
                        <th>Event Description</th>
                        <th>Event Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event in events" :key="event._id">
                        <td>{{ event.org}}</td>
                        <td>{{ event.eventDesc }}</td>
                        <td>{{ event.eventAddress }}</td>
                        <td>
                            <router-link :to="{name: 'intakeForm', params: { id: event._id }}" class="btn btn-success ">Select Event
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                events: [] //store list of events here
            }
        },
        // uses axios to access the api endpoint, storing the data in the current vue instance.
        //this end point returns 3 latest events
        created() {
            let apiURL = 'http://localhost:3001/event';
            axios.get(apiURL).then(res => {
                this.events = res.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>
