<template>
  <div id="app">

    <v-header></v-header>
    <v-tab></v-tab>
    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

  import header from './components/header/header.vue';
  import tab from './components/nav/Tab.vue';

  export default {

    data(){
      return {
        seller:{}
      }
    },

    components:{
      'v-header':header,
      'v-tab':tab
    }
  }
</script>
