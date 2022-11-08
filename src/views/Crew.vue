<template>
  <div class="titlePage"><span>02</span> Meet your crew</div>
  <div class="containerGrid">
    <ul class="crewOptions">
      <li>
        <button class="crewActiv" v-on:click="change"></button>
      </li>
      <li>
        <button v-on:click="change"></button>
      </li>
      <li>
        <button v-on:click="change"></button>
      </li>
      <li>
        <button v-on:click="change"></button>
      </li>
    </ul>
    <div class="crewSubtitle title"><h3>{{dataCrew.role}}</h3> </div>
    <div class="crewTitle firstTitle"><h2>{{dataCrew.name}}</h2>  </div>
    <div class="crewBio"><p>{{dataCrew.bio}}</p></div>
    <div class="crewImage"><img :src="dataCrew.image" :alt="dataCrew.name + 'photo'"></div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Crew",
  setup() {
    const content = [
      {
        name: "Douglas Hurley",
        image: require("@/assets/images/crew/image-douglas-hurley.png"),
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      },
      {
        name: "Mark Shuttleworth",
        image: require("@/assets/images/crew/image-mark-shuttleworth.png"),
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      },
      {
        name: "Victor Glover",
        image: require("@/assets/images/crew/image-victor-glover.png"),
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      },
      {
        name: "Anousheh Ansari",
        image: require("@/assets/images/crew/image-anousheh-ansari.png"),
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      },
    ];

    let dataCrew = content[0];

    // Methoods
    // hooks
    onMounted(() => {
      let body = document.querySelector("body");
      body.style.backgroundImage =
        `url(` +
        require("@/assets/images/backs/background-crew-mobile.jpg") +
        `)`;
    });

    return {
      dataCrew,
    };
  },
};
</script>