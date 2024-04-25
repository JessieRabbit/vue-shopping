<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
      <div class="container py-5">
        <div class="pb-4 mb-4" style="border-bottom: 1px solid rgba(226, 175, 24, 0.5)">
          <div class="row g-4">
            <div class="col-lg-3">
              <a href="javascript:void(0);">
                <h1 class="text-primary mb-0">Fruitables</h1>
                <p class="text-secondary mb-0">Fresh products</p>
              </a>
            </div>
            <div class="col-lg-6">
              <div class="position-relative mx-auto">
                <input
                  class="form-control border-0 w-100 py-3 px-4 rounded-pill"
                  type="email"
                  placeholder="Your Email"
                />
                <button
                  type="button"
                  class="btn btn-primary border-0
                  border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                  style="top: 0; right: 0"
                  data-bs-toggle="modal" data-bs-target="#emailModal"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="d-flex justify-content-end pt-3">
                <a target="_blank" class="btn btn-outline-secondary me-2
                btn-md-square rounded-circle" href="https://twitter.com/?lang=zh-Hant" aria-label="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a target="_blank" class="btn btn-outline-secondary
                me-2 btn-md-square rounded-circle" href="https://facebook.com/" aria-label="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a target="_blank" class="btn btn-outline-secondary me-2
                btn-md-square rounded-circle" href="https://youtube.com/" aria-label="Youtube">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <div class="footer-item">
              <h4 class="text-light mb-3">Why People Like us!</h4>
              <p class="mb-4 aboutlineClamp">
                樂月蔬果行有別於一般菜商，有著集產地、批發商、菜商的角色，
                是少數能夠直接供應給各大蔬果行的業者，
                Jessie 蔬果源自台北社子島發跡、產地自產自銷。
                當時的時空環境
                南北建設與交通運輸並不發達，
                早先台北農產運銷公司尚未成立，
                台北社子島可說是當時大台北蔬菜產區，
                專供北台灣蔬果使用。隨著時間演變至今，產量減少，
                改至目前南部產地專人種植、專人採買、產銷一條龍，
                時至今日也有著 4、50 年累積的經驗。
              </p>
              <router-link to="/about">
                <a class="btn border-secondary py-2 px-4 rounded-pill text-primary">
                  Read More
                </a>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="d-flex flex-column text-start footer-item">
              <h4 class="text-light mb-3">Shop Info</h4>
              <router-link to="/about">
                <a class="btn-link" href="javascript:void(0);">About Us</a>
              </router-link>
              <router-link to="/contact">
                <a class="btn-link" href="javascript:void(0);">Contact Us</a>
              </router-link>
              <router-link to="/privacyPolicy">
                <a class="btn-link" href="javascript:void(0);">Privacy Policy</a>
              </router-link>
              <router-link to="/termsOfUse">
                <a class="btn-link" href="javascript:void(0);">Terms of Use</a>
              </router-link>
              <router-link to="/salesAndRefunds">
                <a class="btn-link" href="javascript:void(0);">Sales and Refunds</a>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="d-flex flex-column text-start footer-item">
              <h4 class="text-light mb-3">Account</h4>
              <router-link to="/orders">
                <a class="btn-link" href="javascript:void(0);">Order details</a>
              </router-link>
              <router-link to="/shop">
                <a class="btn-link" href="javascript:void(0);">Shopping</a>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-item">
              <h4 class="text-light mb-3">Contact</h4>
              <p>Address: 123 Street Tapiei.TAIWAN</p>
              <p>Email: shenFamily@gmail.com</p>
              <p>Phone: (+886) 1234 5678</p>
              <p>Payment Accepted</p>
              <img src="@/assets/img/payment.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright Start -->
    <div class="container-fluid copyright bg-dark py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span class="text-light">
              <a href="javascript:void(0);">
                <i class="fas fa-copyright text-light me-2"></i>Jessie
              </a>, All right reserved.
            </span>
          </div>
          <div class="col-md-6 my-auto text-center text-md-end text-white">
            Designed By
            <a class="border-bottom" href="#">Jessie</a>
            Distributed By
            <a class="border-bottom" href="#">Shen Family</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright End -->

    <!-- Modal -->
    <div class="modal fade" id="emailModal" tabindex="-1"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <i class="fas fa-paper-plane fs-3 text-success"></i>
            已成功訂閱電子報。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterView',
};
</script>
