<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <div class="container-fluid contact py-5">
      <div class="container py-5" style="width: 20%">
        <div class="p-5 bg-light rounded">
          <div class="row g-4">
            <div class="col-12">
              <div class="text-center mx-auto" style="max-width: 700px">
                <h1 class="text-primary">請先登入</h1>
              </div>
            </div>
            <div>
              <form action="" class="">
                <input
                  type="text"
                  class="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your Email"
                />
                <input
                  type="email"
                  class="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Password"
                />
                <input
                  type="checkbox"
                  class="form-check-input me-2"
                  id="Account-1"
                  name="Accounts"
                  value="Accounts"
                />
                <label class="form-check-label" for="Account-1">Remember me</label>
                <button
                  class="w-100 btn form-control border-secondary py-3 mt-3 bg-white text-primary"
                  type="submit"
                >
                  Sing in
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
  name: 'LoginPage',
};
</script>
