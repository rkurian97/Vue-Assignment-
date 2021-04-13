<template>
  <div id="register">
    <div class="login-form">
        <form id="registerForm">
            <h2 class="text-center">Register</h2>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="First Name" name= 'firstName' id="firstName" required="required">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Last Name" name= 'lastName' id="lastName" required="required">
            </div>       
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Email" name='email' id="email" required="required">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" name='password' id="password" required="required">
            </div>
            <div class="form-group">
                <button type="submit" v-on:submit="submit" class="btn btn-primary btn-block">Register</button>
            </div>  
        </form>
        <p class="text-center">
            <a href="#/login">Back to Login</a>
        </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  methods: {
      submit: function(){
            let firstName= document.getElementById("firstName").value;
            let lastName= document.getElementById("lastName").value;
            let email= document.getElementById("email").value;
            let password= document.getElementById("password").value;
            
            let userRecord= {
                firstName: firstName,
                lastName: lastName,
                password: password
            }

            localStorage.setItem(email, JSON.stringify(userRecord) );
      }
  }
};

</script>