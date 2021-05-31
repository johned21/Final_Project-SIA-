<template>
<div class="bg">
  <div class="container"><br>
    <router-link class="nav-link b" to="/">Back</router-link>
    <br /><br /><br>

    <h1>Sign Up to <strong>JEP Site</strong></h1>
    <div class="card c" style="width: 28rem; height: 30rem;">
      <div class="card-body">
        <form id="register-form" @submit.prevent="register">
        
          <p class="w1">Enter the required Field below!</p><br>
          <div class="row">
            <div class="col-md-10 offset-1">
              <div class="mb-3">
                <label for="fullname">FullName</label>
                <input
                  style="background-color: #0008; color: white;"
                  type="text"
                  class="form-control"
                  id="fullname"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email">Username or Email</label>
                <input
                  style="background-color: #0008; color: white;"
                  type="email"
                  class="form-control"
                  id="email"
                  required
                  v-model="email"
                />
              </div>
              <div class="mb-3">
                <label for="password">Password</label>
                <input
                  style="background-color: #0008; color: white;"
                  type="password"
                  class="form-control"
                  id="password"
                  required
                  v-model="password"
                />
                <div
                  v-if="password.length > 1 && password.length < 6"
                  class="text-danger"
                >
                  Password length should be greater than 6
                </div>
              </div>
              <div class="mb-3">
                <label for="confirmpassword">Confirm Password</label>
                <input
                  style="background-color: #0008; color: white;"
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  required
                  v-model="confirmPassword"
                />
                <div v-if="password != confirmPassword" class="text-danger">
                  Password don't Match
                </div>
              </div><br>
              <button v-if="! xhrRequest" @click="register" class="btn btn-success form-control register">Register</button>
              <button v-if="xhrRequest" class="btn btn-success form-control">
                <span class="spinner-border spinner-border-sm"></span>wait...
              </button>
            </div>
          </div>

        </form>
        
      </div>
    </div> <br>
    <div class="regbtn">
      <div class="col-md-12">
        <p class="w1">Already have an account?</p>
        <router-link class="nav-link reg" to="/login">Login</router-link>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import firebase from "firebase";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      xhrRequest: false
    };
  },

  methods: {
    register: function () {
      let v = this;

      v.xhrRequest = true;

      console.log("Email: " + this.email);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential.user);
          this.$router.replace('login')
        })
        .catch((error) => {

          v.xhrRequest = false;

          alert("Unable to register user: " + error.message);
        });
    },
  },
};
</script>

<style scoped>
.form-label {
  float: left;
}
.register {
  float: left;
}
.b{
  float: left;
  color: white;
}
.w1{
  color: gray;
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
.row{
  text-align: left;
  color: white;
}
.regbtn{
  margin-left: 28rem;
  margin-right: 32rem;
}
.reg{
  font-size: 16px;
  float: right;
  margin-top: -43px;
}
</style>