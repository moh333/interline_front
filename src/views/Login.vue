<template>
   <main class="form-block d-flex align-items-center pt-5">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-lg-6">
               <div class="d-flex align-items-center justify-content-start mb-3">
                  <router-link class="navbar-brand md-logo" to="/">
                     <img class="_logo" src="@/assets/interline-logo.svg" alt="">
                  </router-link>
               </div>
               <div class="box-shadow-medium border bg-white rounded mt-3 p-5">
                  <h2 class="h2 text-dark-heading mb-4">login</h2>
                  <div class="f">
                     <form class="needs-validation" novalidate>
                        <div class="form-floating mb-3">
                           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required autocomplete="email" value="name@gmail.com">
                           <label for="floatingInput">Email</label>
                           <div class="invalid-feedback">
                              Please enter the correct email
                           </div>
                           <div class="valid-feedback">
                              Looks good!
                           </div>
                        </div>
                        <div class="form-floating">
                           <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required value="124149wdsadmlfs;">
                           <label for="floatingPassword"> Password </label>
                           <div class="invalid-feedback">
                              Please enter the correct password
                           </div>
                           <div class="valid-feedback">
                              Looks good!
                           </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-2 mb-4">
                           <div class="form-check mt-0">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                              <label class="form-check-label" for="flexCheckDefault">
                                 <h4 class="h4 text-dark-heading">Remember me</h4>
                              </label>
                           </div>
                           <router-link to="/forget-password" class="btn h4 text-gold-heading text-btn px-0">
                              Forget password?
                           </router-link>

                        </div>

                        <router-link type="submit" to="/overview" class="btn main-btn blue-btn p-3 uppercase rounded w-100 mb-2">
                           login
                        </router-link>
                     </form>

                     <h4 class="h4 text-dark-heading mt-2 text-center">
                        <router-link to="/signup" class="btn h4 text-btn px-0 mb-0">
                           Create New Account
                        </router-link>
                     </h4>
                     <div class="border-top mt-4 pt-3">

                        <div class="btn-group w-100" role="group" aria-label="Basic example">
                           <button type="button" class="btn main-btn p-3 rounded blue-btn google-btn me-1 d-flex justify-content-center align-items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                 <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                              </svg>
                              <span class="d-inline-block ms-2 uppercase">or sign in with Google</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   </main>
</template>

<script>
export default {
	name: "Login"
};
</script>

<style>
</style>
