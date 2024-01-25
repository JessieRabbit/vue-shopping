<template>
  <div>
    <div
      class="modal fade"
      id="searchModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Search by keyword</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex align-items-center">
              <KeyWord class="w-75"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KeyWord from './KeyWord.vue';

export default {
  name: 'SearchModal',
  components: {
    KeyWord,
  },
};
</script>
