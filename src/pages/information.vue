<template>
  <v-main>
    <!-- Contact us -->
    <v-sheet style="height: 100dvh; padding-top: 84px">
      <v-img src="../assets/review/contact.jpg"></v-img>
    </v-sheet>
    <!-- Review -->
    <v-sheet
      class="text-center"
      style="height: 100dvh; margin-top: 48px"
      data-aos="fade-in"
    >
      <h1>演出回顧</h1>
      <CarouselImage />
      <div class="mt-5 pt-5">
        <DialogComponent title="關於我們">
          <!-- Timeline -->
          <!-- <template #content></template> -->
        </DialogComponent>
      </div>
    </v-sheet>
    <!-- Youtube -->
    <v-container class="mt-16">
      <v-row data-aos="fade-in">
        <v-col lg="6" cols="12" class="text-center text-lg-left">
          <h1>木樓合唱團 YouTube頻道</h1>
        </v-col>
        <v-col lg="6" cols="12" class="text-center text-lg-right">
          <iframe
            style="height: 55px; width: 200px"
            target="_blank"
            frameborder="0"
            src="https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/media/iframe.deb83caf.html?channel=MullerOfficial&amp;layout=full&amp;theme=default"
          ></iframe>
        </v-col>
      </v-row>
      <v-row
        class="text-center pt-3 pb-5"
        data-aos="fade-left"
        data-aos-offset="300"
      >
        木樓合唱團官方YouTube頻道，承載了創立至今不同時期的豐富音樂風貌：在國際賽事上得獎的動人時刻、充滿土地情懷的委託創作作品及近年音樂會精選曲目，依照宗教、國際大賽、當代、委託創作、民謠等分門別類，歡迎您盡情地參觀木樓音樂「聲」林！
        <v-divider class="mt-5" />
      </v-row>
      <v-row
        v-for="(video, index) in videos"
        :key="index"
        class="d-flex align-center"
        :data-aos="'fade-down'"
        :data-aos-delay="index * 100"
        :data-aos-offset="100"
      >
        <template v-if="index % 2 === 0">
          <v-col cols="6">
            <p class="pt-3 pb-5">{{ video.title }}</p>
            <iframe
              width="100%"
              height="200"
              :src="video.src"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </v-col>
          <v-col cols="6">
            <p v-html="video.info" class="text-center"></p>
          </v-col>
        </template>
        <template v-else>
          <v-col cols="6">
            <p v-html="video.info" class="text-center"></p>
          </v-col>
          <v-col cols="6">
            <p class="pt-3 pb-5 text-right">{{ video.title }}</p>
            <iframe
              width="100%"
              height="200"
              :src="video.src"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </v-col>
        </template>
        <v-divider class="mt-5 mb-5" />
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { definePage } from "vue-router/auto";
import CarouselImage from "@/components/carousel/carouselImage.vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ offset: 400, duration: 1500, once: true });

definePage({
  meta: {
    title: "木樓合唱團 | 了解更多",
    login: false,
    admin: false,
  },
});

const videos = [
  {
    title: "〈如果明天就是下一生〉",
    src: "https://www.youtube.com/embed/t3HXDgy9itY?si=xy3h4u9P447KevWF",
    info: `木樓合唱團 2019 年度公演 <br />
          《樂綺當代‧璀璨二十》<br />
          <br />
          國家音樂廳 2019.6.9 <br />
          指　　揮: 彭孟賢<br />
          鋼　　琴: 王乃加<br />
          錄音工程: 王昭惠<br />`,
  },
  {
    title: "Fear Not, Dear Friend〈別害怕，親愛的朋友〉",
    src: "https://www.youtube.com/embed/e1QGblhrRNM?si=BTL3G1V4Z0f-taEw",
    info: `木樓合唱團 2019 年度公演 <br />
          《慶典－璀璨二十。木色》<br />
          <br />
          國家音樂廳 2019.12.14 <br />
          指　　揮: 彭孟賢<br />
          錄音工程: 王昭惠<br />`,
  },
  {
    title: "《慶典 - 璀璨二十。木色》幕後花絮",
    src: "https://www.youtube.com/embed/XSk4hVITaO0?si=1Lps3h2013M8bhZo",
    info: `木樓合唱團 <br />
          《慶典─璀璨二十。木色》幕後花絮<br />
          <br />
          國家音樂廳 2019.12.14 <br />
          指　　揮: 彭孟賢<br />
          鋼　　琴: 王乃加<br />`,
  },
  {
    title: "〈綠光〉",
    src: "https://www.youtube.com/embed/wXy125yhYsM?si=x09Tw1-e-lNeaJKt",
    info: `木樓合唱團 2019 年度公演 <br />
          《樂綺當代‧璀璨二十》<br />
          <br />
          國家音樂廳 2019.6.9 <br />
          指　　揮: 彭孟賢<br />
          錄音工程: 王昭惠<br />`,
  },
];
</script>
