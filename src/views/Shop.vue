<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <div class="container-fluid fruite py-5">
      <div class="container py-5">
        <h1 class="mb-4">Fresh fruits shop</h1>
        <div class="row g-4">
          <div class="col-lg-12">
            <div class="row g-4">
              <div class="col-xl-3">
                <KeyWord class="w-100"/>
              </div>
              <div class="col-6"></div>
              <div class="col-xl-3">
                <div class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                  <label for="fruits">Default Sorting:</label>
                  <select
                    id="fruits"
                    name="fruitlist"
                    class="border-0 form-select-sm bg-light me-3"
                    form="fruitform"
                  >
                    <option value="volvo">Nothing</option>
                    <option value="saab">Popularity</option>
                    <option value="opel">Organic</option>
                    <option value="audi">Fantastic</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row g-4">
              <div class="col-lg-3">
                <div class="row g-4">
                  <div class="col-lg-12">
                    <Category/>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <h4 class="mb-2">Price</h4>
                      <input
                        type="range"
                        class="form-range w-100"
                        id="rangeInput"
                        name="rangeInput"
                        min="0"
                        max="500"
                        value="0"
                        oninput="amount.value=rangeInput.value"
                      />
                      <output
                        id="amount"
                        name="amount"
                        min-velue="0"
                        max-value="500"
                        for="rangeInput"
                      >0
                      </output>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <h4>Additional</h4>
                      <div class="mb-2">
                        <input
                          type="radio"
                          class="me-2"
                          id="Categories-1"
                          name="Categories-1"
                          value="Beverages"
                        />
                        <label for="Categories-1"> Organic</label>
                      </div>
                      <div class="mb-2">
                        <input
                          type="radio"
                          class="me-2"
                          id="Categories-2"
                          name="Categories-1"
                          value="Beverages"
                        />
                        <label for="Categories-2"> Fresh</label>
                      </div>
                      <div class="mb-2">
                        <input
                          type="radio"
                          class="me-2"
                          id="Categories-3"
                          name="Categories-1"
                          value="Beverages"
                        />
                        <label for="Categories-3"> Sales</label>
                      </div>
                      <div class="mb-2">
                        <input
                          type="radio"
                          class="me-2"
                          id="Categories-4"
                          name="Categories-1"
                          value="Beverages"
                        />
                        <label for="Categories-4"> Discount</label>
                      </div>
                      <div class="mb-2">
                        <input
                          type="radio"
                          class="me-2"
                          id="Categories-5"
                          name="Categories-1"
                          value="Beverages"
                        />
                        <label for="Categories-5"> Expired</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <FeatureProducts/>
                  </div>
                  <div class="col-lg-12">
                    <Banner/>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="row g-4 justify-content-center">
                  <div class="col-md-6 col-lg-6 col-xl-4">
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          src="@/assets/img/fruite-item-5.jpg"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        Fruits
                      </div>
                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Grapes</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                          incididunt
                        </p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                            ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-4">
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          src="@/assets/img/fruite-item-5.jpg"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        Fruits
                      </div>
                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Grapes</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                          incididunt
                        </p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                            ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-4">
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          src="@/assets/img/fruite-item-2.jpg"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        Fruits
                      </div>
                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Raspberries</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                          incididunt
                        </p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                            ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-4">
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          src="@/assets/img/fruite-item-4.jpg"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        Fruits
                      </div>
                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Apricots</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                          incididunt
                        </p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                            ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-4">
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          src="@/assets/img/fruite-item-3.jpg"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        Fruits
                      </div>
                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Banana</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                          incididunt
                        </p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                            ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-4">
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          src="@/assets/img/fruite-item-1.jpg"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        Fruits
                      </div>
                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Oranges</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                          incididunt
                        </p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                            ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-4">
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          src="@/assets/img/fruite-item-2.jpg"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        Fruits
                      </div>
                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Raspberries</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                          incididunt
                        </p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                            ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-4">
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          src="@/assets/img/fruite-item-5.jpg"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        Fruits
                      </div>
                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Grapes</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                          incididunt
                        </p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                            ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-4">
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img">
                        <img
                          src="@/assets/img/fruite-item-1.jpg"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        Fruits
                      </div>
                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>Oranges</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                          incididunt
                        </p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                          <a
                            href="#"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                            ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="pagination d-flex justify-content-center mt-5">
                      <a href="#" class="rounded">&laquo;</a>
                      <a href="#" class="active rounded">1</a>
                      <a href="#" class="rounded">2</a>
                      <a href="#" class="rounded">3</a>
                      <a href="#" class="rounded">4</a>
                      <a href="#" class="rounded">5</a>
                      <a href="#" class="rounded">6</a>
                      <a href="#" class="rounded">&raquo;</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KeyWord from '@/components/KeyWord.vue';
import Category from '@/components/Category.vue';
import FeatureProducts from '@/components/FeatureProducts.vue';
import Banner from '@/components/Banner.vue';

export default {
  name: 'ShopPage',
  components: {
    KeyWord,
    Category,
    FeatureProducts,
    Banner,
  },
};
</script>
