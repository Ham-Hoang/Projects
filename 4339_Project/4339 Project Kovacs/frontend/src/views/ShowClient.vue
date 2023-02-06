<!-- Used Class Lecture Meeting 10 Vue JS components Part 1 and 2 -->
<template>
   <div class="row justify-content-center" >
      <div class="col-md-8 mb-5">
         <h3 class="text-center">Client Information</h3>
         <!-- Creates the Create Client Information -->
         <h5 class="text-muted text-center mb-5">View client data and event attendance history here</h5>

         <form class="row g-3">
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
               <input type="text" class="form-control"  v-model="client.lastName" disabled>
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

            <div class="form-check form-check-inline">
               <label class="form-check-label" for="gender">Male</label>
               <!-- Input for botton for gender -->
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
         </form>               

         <div id="events" class="my-5 py-2">
            <h5 class="text-center m-4">Event Attendance History</h5>
            <table class="table table-hover mb-5">
               <thead>
                  <tr>
                     <th scope="col">Event Name</th>
                     <th scope="col">Event Address</th>
                     <th scope="col">Total Events: {{ client.events.length }}</th>
                     <!-- the code aboves is used to calcuate the lenght of the array called events inside of the client data. -->
                  </tr>
               </thead>
               <tbody>
                  <!-- use v-for to parse through the array inside of the client data. -->
                  <!-- render the data for each object in array using the curly brackets, and specify which attribute to render. -->
                  <tr v-for="event in client.events" :key="event._id">
                     <td>{{ event.eventDesc }}</td>
                     <td>{{ event.eventAddress }}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>

<script>
// axios to call api methods, momemnt for date format, qr code to render barcode.
import axios from "axios";

export default {
    data() {
        return {
            client: { },
            size: '200'
        }
    },
    // uses axios to access the api endpoint, passing the id from params and storing the data in the current vue instance.
    created() {
        let apiURL = `http://localhost:3001/client/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.client = res.data
        })
        
    }
}
</script>
