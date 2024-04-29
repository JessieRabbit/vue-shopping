<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <Navbar/>
    <div class="container-fluid contact py-5" style="margin-top: 152px">
      <div class="container py-5">
        <div class="p-5 bg-light rounded">
          <div class="row g-4">
            <div class="col-12">
              <div class="text-center mx-auto" style="max-width: 700px">
                <h1 class="text-primary">請先登入</h1>
              </div>
            </div>
            <div>
              <form @submit.prevent="signin">
                <input
                  type="text"
                  class="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your Email"
                  v-model="user.username"
                  name="username"
                />
                <input
                  type="password"
                  class="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Password"
                  v-model="user.password"
                />
                <!-- 保留 -->
                <!-- <input
                  type="checkbox"
                  class="form-check-input me-2"
                  id="Account-1"
                  name="Accounts"
                  value="Accounts"
                />
                <label class="form-check-label" for="Account-1">Remember me</label> -->
                <button
                  class="w-100 btn form-control border-secondary py-3 mt-3 bg-white text-primary"
                >
                  Sing in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'LoginPage',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_API_PATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          localStorage.setItem('login', true);
          vm.$router.push('/orders');
        }
      });
    },
  },
};
</script>
