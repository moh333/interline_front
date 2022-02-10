<template>
   <div class="forget-password pt-5">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-lg-6">
               <div class="d-flex justify-content-start align-items-center mb-3">
                  <a class="navbar-brand md-logo" href="/">
                     <img class="_logo" src="@/assets/interline-logo.svg" alt="">
                  </a>
               </div>
               <div class="box-shadow-medium bg-white border rounded mt-3 p-5">
                  <h3 class="h3 text-dark-heading mb-3">
                     Change Password
                  </h3>
                  <div class="f">
                     <form class="needs-validation" novalidate>
                        <div class="form-floating mb-3">
                           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required autocomplete="email">
                           <label for="floatingInput">Email</label>
                           <div class="invalid-feedback">
                              Please enter the correct email
                           </div>
                           <div class="valid-feedback">
                              Looks good!
                           </div>
                        </div>

                        <button type="submit" class="btn main-btn blue-btn p-3 uppercase rounded w-100 mb-2">
                           Send
                        </button>
                     </form>

                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
	name: "forget-password"
};
</script>

<style>
</style>
