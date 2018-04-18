<template>
    <div class="star" :class="starType">

      <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>

    </div>
</template>

<script type="text/ecmascript-6">

  const LENGTH = 5;
  const CLS_ON ="on";
  const CLS_HALF = "half";
  const CLS_OFF = "off";


  export default {

      props:{

        size:{
            type:Number
        },

        score:{
            type:Number
        }

      },

      computed:{
        starType(){
            return 'star-' + this.size;
        },

        itemClasses(){

            let result = [];
            //向下取 0.5倍数的值
            let score = Math.floor(this.score*2)/2;
            // 取小数部分
            let hasDecimal = score % 1 !==0;
            //取整数部分
            let integer = Math.floor(score);

            //全星
            for (let i=0; i<integer;i++) {

                result.push(CLS_ON);
            }
            //半星
            if (hasDecimal) {

                result.push(CLS_HALF);
            }
            //补星星
            while(result.length<LENGTH){

                result.push(CLS_OFF);
            }

            return result;

        }
      }
  };

</script>

<style scoped="">

  .star {
    font-size: 0;
  }

  div.star-48 span.on {

    background: url("star48_on@2x.png");

  }

  div.star-48 span.half {

    background: url("star48_half@2x.png");
  }

  div.star-48 span.off {

    background: url("star48_off@2x.png");
  }

  div.star-48 span:last-child {

    margin-right: 0;
  }

  div.star-48 .star-item {

    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px!important;
  }

  div.star-36 span.on {

    background: url("star36_on@2x.png");

  }

  div.star-36 span.half {

    background: url("star36_half@2x.png");
  }

  div.star-36 span.off {

    background: url("star36_off@2x.png");
  }

  div.star-36 span:last-child {

    margin-right: 0;
  }

  div.star-36 .star-item{

    width: 15px;
    height: 15px;
    margin-right: 16px;
    background-size: 15px 15px!important;

  }


  div.star-24 span.on {

    background: url("star24_on@2x.png");

  }

  div.star-24 span.half {

    background: url("star24_half@2x.png");
  }

  div.star-24 span.off {

    background: url("star24_off@2x.png");
  }

  div.star-24 span:last-child {

    margin-right: 0;
  }

  div.star-24 .star-item {

    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px!important;
  }



  .star .star-item {

    display: inline-block;
    background-repeat: no-repeat;

  }

</style>
