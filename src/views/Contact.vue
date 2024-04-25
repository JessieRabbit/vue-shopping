<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <div class="container-fluid contact py-5">
      <div class="container py-5">
        <div class="p-5 bg-light rounded">
          <div class="row g-4">
            <div class="col-12">
              <div class="text-center mx-auto" style="max-width: 700px">
                <h1 class="text-primary">Get in touch</h1>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="h-100 rounded">
                <iframe
                  class="rounded w-100"
                  style="height: 400px"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0027471431385!2d121.56196397414745!3d25.033980838294582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da9c9e1f%3A0x1206bcf082fd10a6!2zVGFpcGVpIDEwMSwgTm8uIDfkv6Hnvqnot6_kupTmrrXkv6HnvqnljYDlj7DljJfluIIxMTA!5e0!3m2!1szh-TW!2stw!4v1713956894976!5m2!1szh-TW!2stw"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="googlemap"
                ></iframe>
              </div>
            </div>
            <div class="col-lg-7">
              <form action="" class="">
                <input
                  type="text"
                  class="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  class="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your Email"
                />
                <textarea
                  class="w-100 form-control border-0 mb-4"
                  rows="5"
                  cols="10"
                  placeholder="Your Message"
                ></textarea>
                <button
                  class="w-100 btn form-control border-secondary py-3 bg-white text-primary"
                  type="submit"
                  data-bs-toggle="modal" data-bs-target="#infoModal"
                >
                  Submit
                </button>
              </form>
            </div>
            <div class="col-lg-5">
              <div class="d-flex p-4 rounded mb-4 bg-white">
                <i class="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                <div>
                  <h4>Address</h4>
                  <p class="mb-2">123 Street Tapiei.TAIWAN</p>
                </div>
              </div>
              <div class="d-flex p-4 rounded mb-4 bg-white">
                <i class="fas fa-envelope fa-2x text-primary me-4"></i>
                <div>
                  <h4>Mail Us</h4>
                  <p class="mb-2">shenFamily@gmail.com</p>
                </div>
              </div>
              <div class="d-flex p-4 rounded bg-white">
                <i class="fa fa-phone-alt fa-2x text-primary me-4"></i>
                <div>
                  <h4>Telephone</h4>
                  <p class="mb-2">(+886) 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="infoModal" tabindex="-1"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <i class="fas fa-paper-plane fs-3 text-success"></i>
            信件已寄送成功，我們會盡快為您答覆!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>
