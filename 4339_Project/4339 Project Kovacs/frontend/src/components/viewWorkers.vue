<!-- Code referenced from Professor Lindner's Module 10 VueJS component part 2 lecture video -->
<!-- Table headers renamed to reflect the Worker's model table so that it shows on view workers tab on webpage -->
<!-- Changed table color to dark for aesthetic purposes -->
<template>
  <div class="row justify-content-center">
    <table class="table table-striped table-dark">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Worker ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Organization</th> 
          <th>Mobile Number</th>
          <th>Email</th>
          <th>Additional Actions</th>
        </tr>
      </thead>
      <tbody>
<!-- Fields reflect worker schema in the case of adding a worker, updating, or deleting based on _id field -->
       <tr v-for="worker in Workers" :key="worker._id">
          <td>{{ worker._id }}</td>
          <td>{{ worker.workerID }}</td>
          <td>{{ worker.firstName }}</td>
          <td>{{ worker.lastName }}</td>
          <td>{{ worker.organization }}</td>
          <td>{{ worker.mobileNum }}</td>
          <td>{{ worker.email }}</td>
            <td>
<!-- Routed to edit page based on _id parameters -->
            <router-link :to="{name: 'edit', params: { id: worker._id }}" class="btn btn-success ">Edit</router-link>
            <button @click.prevent="deleteWorker(worker._id)" class="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<!-- Importing axios to call the backend -->
<script>
    import axios from "axios";

    export default {
        data() {
            return {
// Creating variable to hold worker data from the backend which is used in the code below for retrieval
                Workers: []
            }
        },
// this is using created hook 
// Connection to the backend to retrieve Worker data using GET method
        created() {
            let apiURL = 'http://localhost:3001/worker';
            axios.get(apiURL).then(res => {
                this.Workers = res.data;
            }).catch(error => {
                console.log(error)
            }); 
        },
        methods: {
            deleteWorker(id){
                let apiURL = `http://localhost:3001/worker/${id}`;
                let indexOfArrayItem = this.Workers.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
//call to backend
                    axios.delete(apiURL).then(() => {
//removing Worker based on _id field as stated in the indexofarrayitem
                        this.Workers.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

