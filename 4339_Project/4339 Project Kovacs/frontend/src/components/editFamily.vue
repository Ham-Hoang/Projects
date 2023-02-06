//Template provided by Professor Lindners code examples and similar in structure to other edit component pages.
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Editing Family data based on forms below -->
            <h3 class="text-center">Editing Family Info</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" class="form-control" v-model="Families._id" required>
                </div>

                <div class="form-group">
                    <label>Client ID</label>
                    <input type="text" class="form-control" v-model="Families.clientID" required>
                </div>

                <div class="form-group">
                    <label>Family ID</label>
                    <input type="text" class="form-control" v-model="Families.familyID" required>
                </div>

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="Families.firstname" required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="Families.lastname" required>
                </div>

                <div class="form-group">
                    <label>Relation</label>
                    <input type="text" class="form-control" v-model="Families.relation" required>
                </div>

                <div class="form-group">
                    <label>Birthday</label>
                    <input type="text" class="form-control" v-model="Families.birthday" required>
                </div>

                <div class="form-group">
                    <label>Gender</label>
                    <input type="text" class="form-control" v-model="Families.gender" required>
                </div>

                <div class="form-group">
                    <label>Age</label>
                    <input type="text" class="form-control" v-model="Families.Age" required>
                </div>

                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
// Same structure as previous components. Calling endpoint and exporting entry into Families variable
// Update based on family _id value and later push to view 6 to show change
export default {
     data() {
        return {
            Families: { }
        }
    },
    created() {
        let apiURL = `http://localhost:3001/allfamily/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.Families = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:3001/updatefamily/${this.$route.params.id}`;

            axios.put(apiURL, this.Families).then((res) => {
                console.log(res)
                this.$router.push('/view6')
            }).catch(error => {
                console.log(error)
            });
        }
    }
    }
</script>
