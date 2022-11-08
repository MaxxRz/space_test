<template>
  <div class="homeDescription">
    <div class="subtitle">SO, YOU WANT TO TRAVEL TO</div>
    <div class="homeTitle"><h1>SPACE</h1></div>
    <div class="homeText">
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
  </div>
  <div class="homeBall">
    <div class="spaceball">EXPLORE</div>
  </div>
  
</template>

<script>
import { onMounted } from "vue";
export default {
   name: "HomeApp",
   components: {},
   props: {
      name: String,
   },
   setup() {
    onMounted(() => {
      let body = document.querySelector("body");
      body.style.backgroundImage =
        `url(` +
        require("@/assets/images/backs/background-home-tablet.jpg") +
        `)`;
    });
  },
};
</script>