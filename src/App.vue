<template>

  <navApp />
  <div class="containerBody">
    <router-view />
  </div>
</template>

<style>

.containerBody{
   margin-left: 1.5rem;
   margin-right: 1.5rem;
   margin-top: 1.5rem;
}

</style>


<script>
// import style 
import "@/assets/style/style.scss";

import navApp from './components/NavApp.vue';

export default {
  name: "App",
  components:{
    navApp
  },
  setup() {
    let prueba = "esta es la variable en APP";

    return {
      prueba
    };
  },
};

</script>
