// Referenced from module 10. Template provided by Professor Lindner.
// Update form reflects the table fields in worker fields. Update is based on _id parameter.
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
<!-- Editing Worker data based on forms below -->
            <h3 class="text-center">Editing Worker Info</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>workerID</label>
                    <input type="text" class="form-control" v-model="Workers.workerID" required>
                </div>

                <div class="form-group">
                    <label>firstName</label>
                    <input type="text" class="form-control" v-model="Workers.firstName" required>
                </div>

                <div class="form-group">
                    <label>lastName</label>
                    <input type="text" class="form-control" v-model="Workers.lastName" required>
                </div>

                <div class="form-group">
                    <label>organization</label>
                    <input type="text" class="form-control" v-model="Workers.organization" required>
                </div>

                <div class="form-group">
                    <label>mobileNum</label>
                    <input type="text" class="form-control" v-model="Workers.mobileNum" required>
                </div>

                <div class="form-group">
                    <label>email</label>
                    <input type="text" class="form-control" v-model="Workers.email" required>
                </div>

                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
    </div>
</template>
// Importing axios to connect backend endpoint.
// Exporting into Workers variable

<script>
import axios from "axios";

export default {
     data() {
        return {
            Workers: { }
        }
    },
    created() {
        let apiURL = `http://localhost:3001/worker/${this.$route.params.id}`;
// Update based on specific parameter _id
        axios.get(apiURL).then((res) => {
            this.Workers = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3001/worker/${this.$route.params.id}`;
// Update based on _id field and pushing aftermath onto view7 to see change
            axios.put(apiURL, this.Workers).then((res) => {
                console.log(res)
                this.$router.push('/view7')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>

