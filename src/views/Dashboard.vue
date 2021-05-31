<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand">JEP Site</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 float: right;">
          <li class="nav-item">
            
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
          <router-link @click="logout()" class="nav-link btn btn-outline-success" to="">Logout</router-link>
      </form>
      </div>
    </div>
  </nav>

  <div class="bg">

    <div class="container">
    <br>
    <h1><strong>JEP Site</strong> CEO</h1>
      <div class="row">
        <div class="col-md-7">
          <div class="card mb-3">
            
            <img src="../assets/pp.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">About Me</h3>
              <p class="card-text">As of now May 2021, I've been studying at Mater Dei College, Tubigon, Bohol for three years, taking up <strong>Bachelor of Science in Information Technology</strong> to explore more about in the IT world.</p>
              <p class="card-text name">- John Ed Paul Nuñez</p><br>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
             
            </div>
          </div>
        </div>
        <div class="col-md-5" >
          <img style="margin-top: -50px;" alt="logo" src="../assets/logo2.png" /><br><br><br>

          <div class="info">
            <div class="row">
              <h5>Available for:</h5>
              <p>Hiring</p>
            </div>
            <div class="row">
              <h5>Website:</h5>
              <p>www.jepSite.com</p>
            </div>
            <div class="row">
              <h5>Contact:</h5>
              <p>123-324-0915</p>
            </div>
            <div class="row">
              <h5>Email:</h5>
              <p>jepsite21@gmail.com</p>
            </div>
            <div class="row">
              <h5>Social Links:</h5>
              <img src="../assets/social.png" class="card-img-top social" alt="...">
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
  


</template>

<script>
import firebase from "firebase";
export default {
  name: "dashboard",
  
  methods: {
    logout(){
      firebase.auth().signOut()
      .then(() =>{
        this.$router.replace('/');
      })
      .catch((error) => {
          alert("Unable to logout: " + error.message);
        });
    }
  }
}
</script>

<style scoped>

.bg{
  background-color: rgb(226, 226, 226);
}

.nav-link{
  color: rgb(175, 173, 173);
}
.card-title{
  text-align: left;
}
.card-text{
  text-align: left;
}
h1{
  text-align: left;
}
h5{
  color: rgb(51, 192, 8);
}
.info{
  text-align: left;
  margin-left: 9rem;
}
.social{
  width: 150px;
}
.name{
  color: rgb(126, 126, 126);
}
</style>