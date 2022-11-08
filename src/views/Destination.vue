<template>
  <div class="titlePage"><span>01</span> Pick your destination</div>
  <div class="containerGrid">
    <ul class="destinationOptions">
      <li>
        <button v-on:click="destinationChange(0)" class="subtitle destinyActiv">
          moon
        </button>
      </li>
      <li>
        <button v-on:click="destinationChange(1)" class="subtitle">MARS</button>
      </li>
      <li>
        <button v-on:click="destinationChange(2)" class="subtitle">
          EUROPA
        </button>
      </li>
      <li>
        <button v-on:click="destinationChange(3)" class="subtitle">
          TITAN
        </button>
      </li>
    </ul>

    <div class="destinationImg">
      <img data-destiny="img" :src="destination.image" alt="" />
    </div>
    <div class="destinationPlanet">
      <h2 class="" data-destiny="name">{{ destination.name }}</h2>
    </div>
    <div class="destinationInfo">
      <p data-destiny="descrip">{{ destination.description }}</p>
    </div>
    <div class="destinationDatos">
      <div class="destinationDistance">
        <span>AVG. DISTANCE</span>
        <P data-destiny="distance">{{ destination.distance }}</P>
      </div>
      <div class="destinationTravel">
        <span>EST. TRAVEL TIME</span>
        <P data-destiny="travel">{{ destination.travel }}</P>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted } from "vue";

export default {
  name: "DestinationPlanet",
  setup() {
    const dataDestination = [
      {
        name: "Moon",
        image: require("@/assets/images/destination/image-moon.png"),
        description:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
      },
      {
        name: "Mars",
        image: require("@/assets/images/destination/image-mars.png"),
        description:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months",
      },
      {
        name: "Europa",
        image: require("@/assets/images/destination/image-europa.png"),
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years",
      },
      {
        name: "Titan",
        image: require("@/assets/images/destination/image-titan.png"),
        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years",
      },
    ];

    let destination = dataDestination[0];

    // Methoods
    function destinationChange(number) {
      let destination = document.querySelectorAll("[data-destiny]");
      const options = document.querySelector(".destinationOptions");

      options.childNodes.forEach((option) => {
        if (options.childNodes[number] != option) {
          option.firstChild.classList.remove("destinyActiv");
        } else {
          option.firstChild.classList.add("destinyActiv");
          
          changeContent(destination[0], number);
          changeContent(destination[1], number);
          changeContent(destination[2], number);
          changeContent(destination[3], number);
          changeContent(destination[4], number);
        }
      });
    }

    function changeContent(element, indexElement) {
      element.parentElement.classList.add("change");

      element.addEventListener("animationstart", () => {
        setTimeout(function () {
          switch (element.dataset.destiny) {
            case "img":
              element.src = dataDestination[indexElement].image;
              break;
            case "name":
              element.innerHTML = dataDestination[indexElement].name;
              break;
            case "descrip":
              element.innerHTML = dataDestination[indexElement].description;
              break;
            case "distance":
              element.innerHTML = dataDestination[indexElement].distance;
              break;
            case "travel":
              element.innerHTML = dataDestination[indexElement].travel;
              break;
          }
        }, 750);
      });

      element.addEventListener("animationend", () => {
        element.parentElement.classList.remove("change");
      });
    }

    // HOOKS
    onMounted(() => {
      let body = document.querySelector("body");
      body.style.backgroundImage =
        `url(` +
        require("@/assets/images/backs/background-destination-mobile.jpg") +
        `)`;
    });

    return {
      // Variables
      destination,

      // methood
      destinationChange,
    };
  },
};
</script>