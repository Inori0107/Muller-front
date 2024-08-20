<template>
  <Swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="40"
    :loop="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :breakpoints="breakpoints"
    class="pa-16"
  >
    <SwiperSlide v-for="(video, index) in videos" :key="index">
      <iframe
        :src="video.src"
        :width="videoWidth"
        height="315"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
const modules = [Autoplay];

const videos = [
  {
    src: "https://www.youtube.com/embed/t3HXDgy9itY?si=xy3h4u9P447KevWF",
  },
  {
    src: "https://www.youtube.com/embed/e1QGblhrRNM?si=BTL3G1V4Z0f-taEw",
  },
  {
    src: "https://www.youtube.com/embed/XSk4hVITaO0?si=1Lps3h2013M8bhZo",
  },
  {
    src: "https://www.youtube.com/embed/wXy125yhYsM?si=x09Tw1-e-lNeaJKt",
  },
];

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
    videoWidth: "100%", // 在小螢幕上 iframe 寬度佔滿
  },
  960: {
    slidesPerView: 3,
    spaceBetween: 40,
    videoWidth: "500px", // 在大螢幕上設置固定寬度
  },
};

const videoWidth = computed(() => {
  if (window.innerWidth < 960) {
    return breakpoints[0].videoWidth;
  } else {
    return breakpoints[960].videoWidth;
  }
});
</script>
