<template>
  <div class="header">

      <div class="content-wrapper">

        <div class="avatar">
          <img height="64" width="64" :src="seller.avatar">
        </div>

        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>

          <div class="description">
              {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>

          <div  v-if="seller.supports"  class="support">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>

        <div  v-if="seller.supports" class="support-count" @click="showDetail">
            <span class="count">{{seller.supports.length}}个</span>
            <i class="icon-keyboard_arrow_right">></i>
        </div>

      </div>

      <div class="bulletin-wrapper">
        <span class="bulletin-title"></span>
        <span class="bulletin-text">{{seller.bulletin}}</span>
        <i class="icon-keyboard_arrow_right">></i>
      </div>

      <div class="background">
        <img :src="seller.avatar" alt="" width="100%" height="100%">
      </div>

      <transition name="fade">
        <div class="detail" v-show="detailShow">

          <div class="detail-wrapper clearfix">

            <div class="detail-main">
              <h1 class="name">{{seller.name}}</h1>

              <div class="star-wrapper">
                <star :size="48" :score="seller.score"></star>
              </div>

              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>

              <ul v-if="seller.supports" class="supports">
                <li class="support-item" v-for="(item,index) in seller.supports">
                  <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                  <span class="text">{{seller.supports[index].description}}</span>
                </li>
              </ul>

              <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>

              <div class="bulletin">
                <p class="content">{{seller.bulletin}}</p>
              </div>

            </div>
          </div>

          <div class="detail-close" @click="hideDetail">
            <i class="icon-close">x</i>
          </div>
        </div>
      </transition>

  </div>
</template>


<script type="text/ecmascript-6">

  import star from '../star/star.vue';

  export default {

    data(){
      return {
        seller: {},
        detailShow:false,
      }
    },

    mounted(){

      this.classMap = ["decrease","discount","guarantee","invoice","special"]
//      this.fetchData();
    },

    methods: {

      fetchData(){

        var _this = this;

        _this.$http.get("src/data.json").then(function (res) {

            console.log(res.data.seller);
          _this.seller = res.data.seller;


        }).catch(function (err) {

          console.log(err);
          alert(1);
        })
      },

      showDetail(){

        this.detailShow = true
      },
      hideDetail(){
        this.detailShow = false;
      }

    },

    components:{
      star,
    },
  }
</script>


<style scoped="">
  .header {
    background: rgba(7,17,27,0.5);
    color: #ffffff;
    position: relative;
    overflow: hidden;

  }

  .header .content-wrapper {

    padding: 24px 12px 18px 24px;
    font-size: 0;
    position: relative;
  }

  .header .content-wrapper .avatar {

    display: inline-block;
  }

  .header .content-wrapper .content {
    display: inline-block;
    font-size: 14px;
    margin-left: 16px;
  }

  .header .content-wrapper .content .title {

    margin: 2px 0 8px 0;
  }
  .header .content-wrapper .content .title .brand {

    width: 30px;
    height: 18px;
    display: inline-block;
    background: url("./brand@2x.png") no-repeat 0 0;
    background-size: 30px 18px;
    vertical-align: top;
  }

  .header .content-wrapper .content .title .name {

    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
  }

  .header .content-wrapper .content .description {

    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  }

  .header .content-wrapper .content .description {

    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  }

  .header .content-wrapper .content .support span.decrease {

    background: url("./decrease_1@2x.png");
  }

  .header .content-wrapper .content .support span.discount {

    background: url("./discount_1@2x.png");

  }

  .header .content-wrapper .content .support span.guarantee {

    background: url("./guarantee_1@2x.png");
  }

  .header .content-wrapper .content .support span.invoice {

    background: url("./invoice_1@2x.png");
  }

  .header .content-wrapper .content .support span.special {

    background: url("./special_1@2x.png");
  }

  .header .content-wrapper .content .support span.icon {

    vertical-align: top;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;

  }

  .header .content-wrapper .content .support span.text {

    line-height: 12px;
    font-size: 12px;
    vertical-align: top;
  }

  .header .content-wrapper .support-count {
    position: absolute;
    right: 12px;
    bottom: 18px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0,0,0,0.2);
    text-align: center;

  }

  .header .content-wrapper .support-count .count {

    font-size: 10px;
  }

  .header .content-wrapper .support-count .icon-keyboard_arrow_right {

    font-size: 10px;
    margin-left: 2px;
    line-height: 24px;
  }

  .header .bulletin-wrapper {

    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    background: rgba(7,17,27,0.2);
  }

  .header .bulletin-wrapper .bulletin-title {

    display: inline-block;
    width: 22px;
    height: 12px;
    background: url("./bulletin@2x.png ") no-repeat;
    background-size: 22px 12px;
    vertical-align: top;
    margin-top: 7px;
  }

  .header .bulletin-wrapper .bulletin-text {

    font-size: 10px;
    margin: 0 4px;
    vertical-align: top;
  }

  .header .bulletin-wrapper .icon-keyboard_arrow_right {

    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 2px;
  }

  .header .background {

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }

  .header div.detail {

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    /*transition: all 0.5s;*/
    background: rgba(7,17,27,0.8);

  }

  .header .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .header .fade-enter, .fade-leave-to  {
    opacity: 0;
  }


  .header .detail .detail-wrapper {

    min-height: 100%;
    width: 100%;
  }
  .header .detail .detail-wrapper .detail-main {

    margin-top: 64px;
    padding-bottom: 64px;
  }

  .header .detail .detail-wrapper .detail-main .name {

    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;

  }

  .header .detail .detail-wrapper .detail-main .star-wrapper {

    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
  }

  .header .detail .detail-wrapper .detail-main .title {

    display: flex;
    width: 80%;
    margin: 28px auto 24px auto;
  }

  .header .detail .detail-wrapper .detail-main .line {

    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }

  .header .detail .detail-wrapper .detail-main .text {

    padding: 0 12px;
    font-size: 14px;
    font-weight: 700;
  }

  .header .detail .detail-wrapper .detail-main .supports {

    width: 80%;
    margin: 0 auto;
  }

  .header .detail .detail-wrapper .detail-main .supports .support-item {

    padding: 0px 12px;
    /*margin-bottom: 12px;*/
    font-size: 0;
  }

  .header .detail .detail-wrapper .detail-main .supports .support-item:last-child {

    margin-bottom: 0;
  }


  .header .detail .detail-wrapper .detail-main .supports .support-item span.decrease {

    background: url("./decrease_2@2x.png");
  }

  .header .detail .detail-wrapper .detail-main .supports .support-item span.discount {

    background: url("./discount_2@2x.png");
  }

  .header .detail .detail-wrapper .detail-main .supports .support-item span.guarantee {

    background: url("./guarantee_2@2x.png");
  }

  .header .detail .detail-wrapper .detail-main .supports .support-item span.invoice {

    background: url("./invoice_2@2x.png");
  }

  .header .detail .detail-wrapper .detail-main .supports .support-item span.special {

    background: url("./special_2@2x.png");
  }

  .header .detail .detail-wrapper .detail-main .supports .support-item span.icon {

    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-right: 3px;
    background-size: 16px 16px;
    background-repeat: no-repeat;

  }

  .header .detail .detail-wrapper .detail-main .supports .support-item span.text {

    line-height: 16px;
    font-size: 12px;

  }

  .header .detail .detail-wrapper .detail-main .bulletin {

    width: 80%;
    margin: 0 auto;
  }

  .header .detail .detail-wrapper .detail-main .bulletin .content {

    padding: 0 12px;
    line-height: 24px;
    font-size: 12px;
  }

  .header .detail .detail-close {

    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 32px;
  }

</style>
