<template>
    <div class="goods">

      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" class="menu-item">
            <span class="text">
              <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
            </span>
          </li>
        </ul>
      </div>

      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="item in goods" class="food-list">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>

                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>

      </div>

    </div>
</template>

<script type="text/ecmascript-6">


  import BScroll from  'better-scroll'



  export default {


      props:{

          seller:{
              type:Object
          }

      },

      data(){

          return {
              goods:[]
          };
      },

      created(){

        let _this = this;

        this.classMap = ["decrease","discount","guarantee","invoice","special"]

        this.$http.get('http://wechatapp.intco.com.cn:9090/api/yesread').then(function (res) {


            alert(res.data);
//            console.log(res);
//          console.log(res.data['goods']);
//          _this.goods = res.data['goods'];
//
//          _this.$nextTick(() => {
//
//            _this._initScroll();
//          });
        }).catch(function (error) {

//            alert(error);
        });
      },

      methods:{

          _initScroll(){

            this.menuScroll = new BScroll(this.$refs.menuWrapper,{});
            this.foodScroll = new BScroll(this.$refs.foodsWrapper,{});
            console.log(this.menuScroll);
            console.log(this.foodScroll);
          }
      }
  }

</script>

<style scoped="">

  .goods {

    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: scroll;
  }

  .goods .menu-wrapper {

    /*等分、内容不足缩放情况、占位控件*/
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }

  .goods .menu-wrapper .menu-item {

    display: table;
    height: 54px;
    width: 56px;
    line-height: 14px;
    padding: 0 12px;
  }

  .goods .menu-wrapper .menu-item span.decrease {

    background: url("./decrease_3@2x.png");
  }

  .goods .menu-wrapper .menu-item span.discount {

    background: url("./discount_3@2x.png");
  }

  .goods .menu-wrapper .menu-item span.guarantee {

    background: url("./guarantee_3@2x.png");
  }

  .goods .menu-wrapper .menu-item span.invoice {

    background: url("./invoice_3@2x.png");
  }

  .goods .menu-wrapper .menu-item span.special {
    background: url("./special_3@2x.png");
  }

  .goods .menu-wrapper .menu-item span.icon {

    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px 12px;
    background-repeat: no-repeat;

  }


  .goods .menu-wrapper .menu-item .text {

    font-size: 12px;
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    border-bottom: 1px solid rgba(7,17,27,0.2);
  }

  .goods .foods-wrapper {
    flex: 1;
  }

  .goods .foods-wrapper .title {

    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147,153,159);
    background: #f3f5f7;
  }

  .goods .foods-wrapper .food-item {

    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }

  .goods .foods-wrapper .food-item:last-child {

    border-bottom: 0px;
    margin-bottom: 0px;
  }

  .goods .foods-wrapper .food-item .icon {

    flex: 0 0 57px;
    margin-right: 10px;
  }

  .goods .foods-wrapper .food-item .content {

    flex: 1;
  }

  .goods .foods-wrapper .food-item .content .name {

    margin: 2px 0 8px 0;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7,17,27);

  }

  .goods .foods-wrapper .food-item .content .desc {

    margin-bottom: 8px;
    line-height: 10px;
    font-size: 10px;
    color: rgb(147,153,159);
  }

  .goods .foods-wrapper .food-item .content .extra {

    line-height: 10px;
    font-size: 10px;
    color: rgb(147,153,159);
  }

  .goods .foods-wrapper .food-item .content .extra .count {

    margin-right: 12px;
  }

  .goods .foods-wrapper .food-item .content .price {

    font-weight: 700;
    line-height: 24px;

  }

  .goods .foods-wrapper .food-item .content .price .now {

    margin-right: 18px;
    font-size: 14px;
    color: red;
  }

  .goods .foods-wrapper .food-item .content .price .old {

    text-decoration: line-through;
    font-size: 10px;
    color: rgb(147,153,159);

}
</style>


