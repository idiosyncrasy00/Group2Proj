<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Đánh giá cho {{ roomname }} 
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- modal body 2-->
          <div class="container">
            <div class="row bootstrap">
              <div class="col-md-12 col-sm-12">
                <div class="comment-wrapper">
                  <div class="panel panel-info">
                    <div class="panel-body">
                      <ul class="media-list">
                        <li
                          class="media"
                          v-for="comment in commentList"
                          :key="comment.id"
                        >
                          <div class="media-body">
                            <span class="text-muted pull-right">
                              <strong class="text-success">{{
                                comment.user.fullname
                              }}</strong>
                              -
                              <!-- <small class="text-muted">01/12/2021</small> -->
                              <small class="text-muted">{{
                                comment.time
                              }}</small>
                              - Chấm điểm:
                              <small class="text-muted">{{
                                comment.rating
                              }}</small>
                              / 10
                            </span>

                            <!-- <p>{{ comment.message }}</p> -->
                            <p>{{ comment.message }}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--end modal body -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Đóng
          </button>
        </div>

        <!--End modal 2-->
      </div>
    </div>
  </div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  props: ["roomid", "roomname", "commentList"],
  inheritAttrs: false,
  data() {
    // return {
    //   content: JSON.stringify(this.comments),
    // };
  },
  methods: {},
  async created() {
    //console.log(this.comments);
  },
};
</script>
