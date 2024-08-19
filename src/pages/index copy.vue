<template>
  <!-- heroPic -->
  <v-container class="heroPic">
    <v-col>
      <v-img src="../assets/home/carousel01.jpg"></v-img>
    </v-col>
    <v-col class="py-2">
      <v-img src="../assets/home/medal.webp" height="120"></v-img>
    </v-col>
  </v-container>
  <!-- about us -->
  <v-container>
    <h1 class="leader_text" data-aos="fade-right">About Us</h1>
  </v-container>
  <v-sheet style="position: relative" class="py-8">
    <h2 class="text-center py-2 mb-4 intro" data-aos="fade-left">
      「木樓」之名，源自於建國中學古老的木造音樂教室。<br />
      藉著歌唱，在各自的生命經歷裡找到相同的感動，
      也譜出一段段令人動容的音樂記憶。<br />
      這是木樓的精神根基，也是前進的動力。<br />
      <v-btn
        color="surface-variant"
        variant="flat"
        class="btn mt-4"
        to="/introduce"
        >learn more</v-btn
      >
    </h2>
    <v-container>
      <v-row>
        <v-col
          v-for="(image, index) in images"
          :key="index"
          :class="[
            'image-col',
            {
              expanded: activeIndex === index,
            },
          ]"
          @mouseover="expandImage(index)"
          @mouseleave="resetImages"
          data-aos="zoom-in"
        >
          <router-link to="/introduce">
            <v-img :src="image.src" class="about_img" cover></v-img>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <!-- our services -->
  <v-container>
    <h1 class="leader_text" data-aos="fade-down">Our Services</h1>
  </v-container>
  <v-sheet>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="4" lg="5" class="product" data-aos="flip-left">
          <router-link to="/shop/product">
            <v-img src="../assets/home/love.webp"></v-img>
          </router-link>
        </v-col>
        <v-col cols="4" lg="5" class="ticket" data-aos="flip-right">
          <router-link to="/shop/ticket">
            <v-img src="../assets/home/gototicket.jpg"></v-img>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <!-- learn more -->
  <v-container>
    <h1 class="leader_text" data-aos="fade-up">Learn More</h1>
  </v-container>
  <v-sheet style="height: 60dvh">
    <v-container>
      <v-row>
        <v-col>
          <div class="box"></div>
        </v-col>
        <v-col
          ><v-img
            src="../assets/home/review.webp"
            data-aos="fade-up"
            data-aos-delay="100"
          ></v-img
        ></v-col>
        <v-col
          ><v-img
            src="../assets/home/review.webp"
            data-aos="fade-up"
            data-aos-delay="200"
          ></v-img
        ></v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { definePage } from "vue-router/auto";
import { ref } from "vue";
import pianist from "../assets/about/pianist.webp";
import choir from "../assets/home/bg.jpg";
import conductor from "../assets/about/conductor.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ offset: 400, duration: 1500, once: true });

definePage({
  meta: {
    title: "木樓合唱團",
    login: false,
    admin: false,
  },
});
const images = [{ src: pianist }, { src: choir }, { src: conductor }];

const activeIndex = ref(null);
const expandImage = (index) => {
  activeIndex.value = index;
};
const resetImages = () => {
  activeIndex.value = null;
};
</script>

<style scoped lang="scss">
@import "../styles/settings.scss";

/* about us */
.intro {
  font-size: 1.2rem;
  @include md {
    font-size: 1.5rem;
  }
}
.image-col {
  transition: 0.5s ease;
  cursor: pointer;
  border-radius: 5px;
}
.image-col.expanded {
  @include lg {
    flex: 3 0 0;
  }
}
.btn {
  @include lg {
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    bottom: 5%;
  }
}
.about_img {
  height: 200px;
  @include lg {
    height: 400px;
  }
}

/* our services */
.product,
.ticket {
  margin: 30px;
  position: relative;
  @include lg {
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-height: 550px;
  }
}
.product::before,
.ticket::before {
  font-size: 1.2em;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  transition: 0.5s ease;
  pointer-events: none;
  @include lg {
    font-size: 2em;
  }
}

.product::before {
  content: "出版品";
  left: 0;
  clip-path: ellipse(15% 15% at 0% 0%);
}

.ticket::before {
  content: "購票";
  right: 0;
  clip-path: ellipse(15% 15% at 100% 0%);
}

.product:hover::before,
.ticket:hover::before {
  clip-path: ellipse(150% 150% at 0% 0%);
}

/* learn more */
.box {
  width: 100%;
  height: 300px;
  background: #000;
}
</style>
