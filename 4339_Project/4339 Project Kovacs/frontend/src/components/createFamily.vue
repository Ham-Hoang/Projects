// Form template similar in structure to Worker create fields. Changed to reflect the family fields
// Reference and template provided by Professor Lindner's Module 10 lecture vuejs components
<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Family</h3>
             <form @submit.prevent="handleSubmitForm"> 
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" class="form-control" v-model="Families._id" required>
                </div>

                <div class="form-group">
                    <label>Client ID</label>
                    <input type="text" class="form-control"  v-model="Families.clientID" required>
                </div>

                <div class="form-group">
                    <label>Family ID</label>
                    <input type="text" class="form-control" v-model="Families.familyID"  required>
                </div>

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="Families.firstname"  required>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="Families.lastname"  required>
                </div>

                <div class="form-group">
                    <label>Relation</label>
                    <input type="text" class="form-control" v-model="Families.relation"  required>
                </div>

                <div class="form-group">
                    <label>Birthday</label>
                    <input type="text" class="form-control" v-model="Families.birthday"  required>
                </div>

                <div class="form-group">
                    <label>Gender</label>
                    <input type="text" class="form-control" v-model="Families.gender"  required>
                </div>

                <div class="form-group">
                    <label>Age</label>
                    <input type="text" class="form-control" v-model="Families.Age"  required>
                </div>

                <button class="btn btn-danger mt-3">Create</button>
            </form>
        </div>
    </div>
</template>
// Axios call to backend. Exporting data into Families variable that reflects table fields
<script>
import axios from "axios";

    export default {
        data() {
            return {
                Families: {
                   _id: '', 
                   clientID: '',
                   familyID: '',
                   firstname: '',
                   lastname: '',
                   relation: '',
                   birthday: '',
                   gender: '',
                   Age:''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:3001/addfamily';
// Post call to add input values. Creation of new entry will later show after push to view6 page                
                axios.post(apiURL, this.Families).then(() => {
                    //changing the view to the list
                  this.$router.push('/view6')
                  this.Families = {
                       _id: '', 
                   clientID: '',
                   familyID:'',
                   firstname: '',
                   lastname: '',
                   relation: '',
                   birthday: '',
                   gender: '',
                   Age: ''
                  }
                   
                }).catch(error => {
                    console.log(error)
                });
            }
        } 
           
    }
</script>
