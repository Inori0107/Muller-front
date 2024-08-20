<template>
  <v-container fluid style="padding: 0">
    <v-img src="../assets/home/heroPic.png" style="position: relative">
      <h1 class="title">MÜLLER CHAMBER CHOIR <br />木樓合唱團</h1>
    </v-img>
    <div class="diagonal-section"></div>
  </v-container>

  <v-container fluid style="padding: 0">
    <v-row>
      <v-col cols="10">
        <v-img src="../assets/home/bg.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4"
        ><v-img src="../assets/about/conductor.png" class="conductor_img"
      /></v-col>
      <v-col cols="5" class="about">
        <h1>
          關於木樓<br />
          於1999年成立至今...
        </h1>
        <h3>
          「木樓」之名，源自於建國中學古老的木造音樂教室。藉著歌唱，在各自的生命經歷裡找到相同的感動，
          也譜出一段段令人動容的音樂記憶。這是木樓的精神根基，也是前進的動力。
        </h3>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid id="bg_1">
    <CarouselYoutube />
    <h1>
      木樓合唱團YouTube頻道 歡迎訂閱
      <v-icon style="padding-bottom: 6px">mdi-arrow-right</v-icon>
    </h1>
    <v-img src="../assets/home/bg_2.png"></v-img>
  </v-container>

  <v-container fluid>
    <h1 class="text-center my-8">近期演出</h1>
    <v-container class="my-8">
      <v-row class="my-4" v-for="session in sessions" :key="session._id">
        <v-col class="ms-4">{{ formatDate(session.date) }}</v-col>
        <v-col>{{ session.name }}</v-col>
        <v-col>{{ session.location }}</v-col>
        <v-col class="text-end me-4">立即購票</v-col>
        <v-divider />
      </v-row>
      <p class="text-end me-4">...more</p>
    </v-container>
  </v-container>
  <v-container fluid class="bg-black footer">
    <v-row align="center" style="height: 60dvh">
      <v-col><h1>MÜLLER CHAMBER CHOIR</h1></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CarouselYoutube from "@/components/carousel/carouselYoutube.vue";
import { ref, onMounted } from "vue";
import { useApi } from "@/composables/axios";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    title: "木樓合唱團",
    login: false,
    admin: false,
  },
});

// 使用 useApi composable 來進行 API 請求
const { apiAuth } = useApi();

const sessions = ref([]);

// 日期格式化函數
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "／");
};

// 加載場次資料的函數
const loadSessions = async () => {
  try {
    const { data } = await apiAuth.get("/session", {
      params: {
        upcoming: true, // 假設 API 支援查詢即將到來的演出
      },
    });
    sessions.value = data.result.data;
  } catch (error) {
    console.error("Failed to load sessions:", error);
  }
};

// 在組件掛載後立即加載場次資料
onMounted(() => {
  loadSessions();
});
</script>

<style scoped lang="scss">
@import "../styles/settings.scss";

.title {
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  line-height: 1.5;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include md {
    font-size: 3rem;
  }
}

.diagonal-section {
  background-color: white;
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0% 100%);
  transform: translateY(-30%);
  height: 150px;
  @include md {
    height: 250px;
  }
}

.conductor_img {
  transform: translateY(-30%);
}
.about {
  padding: 20px;
  h1 {
    line-height: 1.2;
    margin-bottom: 10px;
    font-size: 1.5rem;
    @include md {
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 1rem;
    @include md {
      font-size: 1.2rem;
    }
  }
}
#bg_1 {
  background: url(../assets/home/bg_1.png) no-repeat;
  position: relative;
  padding: 0;
  padding-top: 16rem;
  h1 {
    line-height: 1.2;
    margin-left: 4rem;
    font-size: 1.2rem;
    @include md {
      font-size: 2rem;
    }
  }
}
.footer {
  h1 {
    padding: 20px;
    font-size: 2rem;
    font-weight: normal;
    @include md {
      font-size: 3rem;
    }
  }
}
</style>
