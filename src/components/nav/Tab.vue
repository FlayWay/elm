<template>
      <div class="tab">
        <router-link class="goods tab-item" to="/goods" active-class="active">
          <a href="#">商品</a>
        </router-link>
        <router-link class="ratings tab-item" to="/ratings" active-class="active">
          <a href="#">评论</a>
        </router-link>

        <router-link class="seller tab-item" to="/sells" active-class="active">
          <a href="#">商家</a>
        </router-link>
      </div>

</template>

<script type="text/ecmascript-6">
export default {}

</script>

<style scoped="">

  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }
  .tab .tab-item {
    flex: 1;
    text-align: center;
  }
  .tab .tab-item a {

    font-size: 14px;
    color: rgb(77,85,93);
  }

  .tab .active a {

    color: rgb(240,20,20);
  }


</style>

