<template>
  <div id="login">
    <div class="login-form">
      <form action="" method="GET">
        <h2 class="text-center">Log in</h2>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Email" name="email" required="required"/>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" name="password" required="required"/>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block"> Log in </button>
        </div>
      </form>
      <p class="text-center">
        <a href="#/register">Create an Account</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>