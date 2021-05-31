<template>
<div class="bg">
  <div class="container"><br>
    <router-link class="nav-link b" to="/">Back</router-link>
    <br /><br />
    <img alt="logo" src="../assets/logo1.png" /><br><br>
    <h1>Login to <strong>JEP Site</strong></h1>
    <br />
    <div class="card c" style="width: 28rem;">
      <div class="card-body">

        <form id="login-form" @submit.prevent="login">
        
          <div class="row">
            <div class="col-md-12">
              <div class="mb-3">
                <label class="email" for="email">Username or Email Address</label>
                <input
                  style="background-color: #0008; color: white;"
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="pass" for="password">Password</label>
                <input
                  style="background-color: #0008; color: white;"
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  required
                />
                <div
                  v-if="password.length > 1 && password.length < 6"
                  class="text-danger"
                >
                  Password length should be greater than 6
                </div>
              </div>
              <button v-if="! xhrRequest" @click="login" class="btn btn-success form-control login">Login</button>
              <button v-if="xhrRequest" class="btn btn-success form-control">
                <span class="spinner-border spinner-border-sm"></span>wait...
              </button><br><br>
              
          </div>
        </div>
        
        </form>
        
      </div>
    </div>
    <br>
    <div class="regbtn">
      <div class="col-md-12">
        <p class="w1">Don't have an account?</p>
        <router-link class="nav-link reg" to="/register">Sign Up</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      xhrRequest: false
    };
  },

  methods: {
    login: function () {
      let v = this;

      v.xhrRequest = true;

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {

          console.log(userCredential.user);

          this.$router.replace('dashboard');
        })
        .catch((error) => {
          alert("Unable to login: " + error.message);
        });
    },
  },
};
</script>

<style scoped>
.form-label {
  float: left;
}
.login {
  float: left;
}
.w1{
  text-align: left;
  margin-left: 10px;
  margin-bottom: -4px;
  color: rgb(175, 173, 173);
}
.reg{
  font-size: 16px;
  float: right;
  margin-top: -26px;
}
.b{
  float: left;
  color: rgb(255, 255, 255);
}
.row{
  text-align: left;
}
.c{
  margin-left: 33%;
  margin-right: 33%;
  background-color: #0008;
  color: rgb(194, 194, 194);
}
.bg{  
  height: 671px;
  background-color: rgb(29, 29, 29);
}
h1{
  color: white;
}
.regbtn{
  margin-left: 31rem;
  margin-right: 32rem;
}

</style>