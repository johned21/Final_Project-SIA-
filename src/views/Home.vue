<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand">JEP Site</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="home">
    <br><br>
    <img alt="logo" src="../assets/logo.png" /><br><br>
    <landingPage msg="Welcome to JEP Site" /><br><br>
    <p class="word">if don't have account yet! click Sign Up!</p>
    <div class="row">
      <div class="col-md-1 offset-5">
        <router-link class="nav-link btn btn-success" style="color:white;" to="/login">Login</router-link>
      </div>
      <div class="col-md-1">
        <router-link class="nav-link btn btn-success" style="color:white;" to="/register">Sign Up</router-link>
      </div>
      
    </div>
  </div>
</template>

<script>

import landingPage from "@/components/landingPage.vue";

export default {
  name: "Home",
  components: {
    landingPage,
  },
};
</script>

<style scoped>
  .row{
    align-items: center;
  }
  .word{
    color: rgb(175, 173, 173);
  }
  .home{
    height: 605px;
    background-color: #181818;
  }

</style>
