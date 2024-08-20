<template>
  <!-- heroPic -->
  <v-container>
    <v-img src="../assets/home/carousel01.jpg"></v-img>
  </v-container>
  <!-- about us -->
  <h1 class="leader_text" data-aos="fade-right">
    About Us
    <v-btn variant to="/introduce" class="learn_more"> learn more </v-btn>
  </h1>
  <v-container>
    <v-row class="spacer">
      <v-col>
        <span class="intro">
          「木樓」之名，源自於建國中學古老的木造音樂教室。<br />
          藉著歌唱，在各自的生命經歷裡找到相同的感動，也譜出一段段令人動容的音樂記憶。<br />
          這是木樓的精神根基，也是前進的動力。<br />
        </span>
      </v-col>
    </v-row>
    <v-row class="image-row">
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
        :style="getImageStyle(index)"
      >
        <router-link to="/introduce">
          <v-img
            :src="image.src"
            class="about_img"
            cover
            data-aos="zoom-in"
          ></v-img>
        </router-link>
      </v-col>
    </v-row>
    <v-row class="spacer">
      <v-col class="text-right">
        <span class="intro" data-aos="fade-left">
          木樓合唱團為室內男聲合唱團，<br />
          1999年成立至今秉持「男聲合唱藝術精緻化」的理念，<br />
          透過追求完美的演唱，呈現深度藝術性的音樂內涵；<br />
          透過歌者與聽眾間心靈感受的對話，傳達出音樂精緻的美感。<br />
        </span>
      </v-col>
    </v-row>
  </v-container>

  <!-- our services -->
  <h1 class="leader_text" data-aos="fade-right">Our Services</h1>
  <v-container>
    <v-col class="my-4">
      <span class="banner">PRODUCT</span>
    </v-col>
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
    <v-col class="text-right my-4">
      <span class="banner">TICKET</span>
    </v-col>
  </v-container>

  <!-- learn more -->
  <h1 class="leader_text" data-aos="fade-right">Learn More</h1>
  <v-container>
    <v-row>
      <v-col>
        <v-img
          src="../assets/home/review.webp"
          data-aos="fade-up"
          data-aos-delay="100"
        ></v-img>
      </v-col>
      <v-col>
        <v-img
          src="../assets/home/review.webp"
          data-aos="fade-up"
          data-aos-delay="200"
        ></v-img>
      </v-col>
      <v-col>
        <v-img
          src="../assets/home/review.webp"
          data-aos="fade-up"
          data-aos-delay="200"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { definePage } from "vue-router/auto";
import { ref } from "vue";
import { useDisplay } from "vuetify";
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

const { mobile } = useDisplay();
const isMobile = ref(mobile.value);

watch(mobile, (newVal) => {
  isMobile.value = newVal;
});

const getImageStyle = (index) => {
  const gap = isMobile.value ? 0 : 50; // 小螢幕時 gap 為 0
  const offset = gap * index; // 計算偏移量
  return {
    transform: `translate(0 , -${offset}px)`, // 從左下到右上排列
  };
};
</script>

<style scoped lang="scss">
@import "../styles/settings.scss";
.leader_text {
  background: rgba(236, 236, 236, 0.5);
  font-size: 2.4rem;
  margin: 1.2rem 0;
  @include md {
    font-size: 4rem;
    margin: 2.4rem 0;
  }
}
.v-container {
  margin-bottom: 4rem;
  @include md {
    margin-bottom: 16rem;
  }
}
/* about us */
.learn_more {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(30%);
  color: #333;
}
.spacer {
  margin-top: 2rem;
  @include md {
    margin-top: 4rem;
  }
}
.intro {
  font-size: 1.2rem;
  @include md {
    font-size: 1.5rem;
  }
}
.image-row {
  margin-top: 3rem;
  @include md {
    margin-top: 6rem;
  }
}
.image-col {
  transition: 0.5s ease;
  cursor: pointer;
}
.image-col.expanded {
  @include lg {
    flex: 3 0 0;
  }
}
.about_img {
  height: 200px;
  @include lg {
    height: 400px;
  }
}
.btn {
  margin: auto;
}

/* our services */
.banner {
  font-weight: bold;
  padding: 20px;
  background-color: #f5f5f5;
  color: #333;
  font-size: 1.5rem;
  @include lg {
    font-size: 2rem;
  }
}
// @media (max-width: 1279px) {
//   .product,
//   .ticket {
//     margin: 30px;
//     position: relative;
//     @include lg {
//       padding: 30px;
//       border-radius: 5px;
//       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//       max-height: 550px;
//     }
//   }
//   .product::before {
//     content: "出版品";
//     left: 0;
//     clip-path: ellipse(15% 15% at 0% 0%);
//   }
//   .ticket::before {
//     content: "購票";
//     right: 0;
//     clip-path: ellipse(15% 15% at 100% 0%);
//   }
//   .product::before,
//   .ticket::before {
//     font-size: 1.2em;
//     color: white;
//     font-weight: bold;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.4);
//     z-index: 1;
//     transition: 0.5s ease;
//     pointer-events: none;
//     @include lg {
//       font-size: 2em;
//     }
//   }
//   .product:hover::before,
//   .ticket:hover::before {
//     clip-path: ellipse(150% 150% at 0% 0%);
//   }
// }
/* learn more */
.box {
  width: 100%;
  height: 300px;
  background: #000;
}
</style>
