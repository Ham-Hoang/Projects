<!-- Code referenced from Professor Lindner's example detailing setting up navigation bar and page layout for website. Referenced in Module 10 VueJS components -->
// Navigation bar color is set to secondary (Grey tone) for aesthetic purposes
// Navigation bar lists all page tabs and their respective names
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<!-- Navigation bar code below that details all of our pages that holds the CRUD for our backend -->
// Inserting Vue js logo for design purposes
<template>
<div class="myDiv">
<div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand navbar-light bg-secondary">
      <div class="container">
        <a class="navbar-brand float-left" href="/">
        <img
            alt="Vue logo"
            src="./assets/logo.svg"
            width="30"
            height="30"
            class="d-inline-block align-text-top"
            />Project Group 19 Application</a>
        <ul class="nav navbar-nav mr-auto" >
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/client/create">Create Client</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/client/view">View Clients</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create2">Create Events</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view2">View Events</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register for Event</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create3">Create Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view3">View Contacts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create4">Create Education</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view4">View Education</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/employment/create">Create Employment</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/employment/view">View Employments</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create6">Create Family</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view6">View Family</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create7">Create Workers</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view7">View Workers</router-link>
          </li>
        </ul>
      </div>
    </nav>

 <!-- Router view displays content below the navigation bar -->
    <div class="container mt-5">
      <RouterView></RouterView>
    </div>



    </div>
  </div>
</template>
// Background color changed for aesthetic purposes
<style>
.myDiv {
  background-color: #FCF3CF;
  height: 969px;
}
</style>
