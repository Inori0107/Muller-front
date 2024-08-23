<template>
  <!-- heroPic -->
  <v-container fluid style="padding: 0">
    <v-img
      src="../assets/about/heroPic.png"
      style="position: relative"
      class="heroPic"
    >
      <h1 class="title">關於木樓</h1>
      <div class="diagonal-section"></div>
    </v-img>
    <v-row justify="center" class="content">
      <v-col md="6" class="text-center" v-if="!isMobile">
        <h1>歷史...</h1>
        <h1>人物...</h1>
      </v-col>
      <v-col cols="7" md="6">
        <h4>
          木樓合唱團為室內男聲合唱團，<br />
          1999年成立至今秉持「男聲合唱藝術精緻化」的理念，<br />
          透過追求完美的演唱，呈現深度藝術性的音樂內涵；<br />
          透過歌者與聽眾間心靈感受的對話，傳達出音樂精緻的美感
        </h4>
      </v-col>
    </v-row>
  </v-container>

  <!-- history -->
  <v-container fluid style="padding: 0 !important">
    <!-- nav -->
    <v-row align="center" style="border-bottom: 2px solid #b2b2b2">
      <v-col cols="3" md="3" class="nav-history text-center">歷 史</v-col>
      <v-col cols="3" md="2" class="nav-item">1999</v-col>
      <v-col cols="3" md="2" class="nav-item">2010</v-col>
      <v-col cols="3" md="2" class="nav-item">2020</v-col>
    </v-row>
    <v-row>
      <v-col style="border-right: 2px solid #b2b2b2">
        <h2>
          1996年 <br />
          木樓合唱團正式成立
        </h2>
        <v-img src="../assets/about/choir.png"></v-img>
      </v-col>
      <v-col align-self="end" class="py-8">
        <v-row class="me-4">
          <v-col cols="4" class="text-center"><h3>2007年</h3></v-col>
          <v-col cols="8" align-self="center">
            <span>
              赴日參加《第23屆寶塚國際室內合唱比賽》，獲民謠組金牌、浪漫組銀牌、綜合成績第二名。
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- 2010 -->
    <h1 class="years_title">2010年</h1>
    <v-row style="margin-top: 0px">
      <v-col class="left_2010 pb-8">
        <v-row>
          <v-col cols="4" class="text-center"><h3>2010年</h3></v-col>
          <v-col cols="8" align-self="center">
            <span>
              發行專輯《Wandering in a Song
              流＋轉》：2010年《大鳴大放》音樂會實況錄音，入圍第22屆金曲獎傳統暨藝術音樂類『最佳演唱獎』。
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="text-center"><h3>2012年</h3></v-col>
          <v-col cols="8" align-self="center">
            <span>
              受邀於新加坡、馬來西亞新山、泰國曼谷等地舉辦四場巡演音樂會。
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="text-center"><h3>2014年</h3></v-col>
          <v-col cols="8" align-self="center">
            <span>
              啟動《吹動島嶼的風》委託創作計畫，並於臺北中山堂正式發表。
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="text-center"><h3>2015年</h3></v-col>
          <v-col cols="8" align-self="center">
            <span>
              赴德參加《第九屆德國布拉姆斯國際合唱大賽》獲得宗教組、民謠組、男聲室內合唱組等三面金牌，並榮獲大賽總冠軍。
            </span>
          </v-col>
        </v-row>
        <v-img class="my-4" src="../assets/about/champion.png"></v-img>
        <v-row justify="end">
          <v-col cols="4" class="text-center"><h3>2019年</h3></v-col>
          <v-col cols="8" align-self="center">
            <span>
              2月接受美國合唱指揮協會ACDA邀請，赴堪薩斯於《60周年全美雙年總會》演出；
            </span>
          </v-col>
          <v-col cols="11">
            <span>
              同時受邀於舊金山史丹佛大學紀念教堂與洛杉磯巡演。成立首支附屬團隊「木樓松柏合唱團」，推廣並經營精緻純男聲合唱。
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="pb-8">
        <v-img src="../assets/about/conductor.png"></v-img>
        <h2>
          2013年 <br />
          <span>
            彭孟賢老師接任藝術總監暨指揮，並首度於國家音樂廳舉辦專場音樂會。
          </span>
        </h2>
        <v-row class="me-4" justify="end">
          <v-col cols="4" class="text-center"><h3>2016年</h3></v-col>
          <v-col cols="8" align-self="center">
            <span>
              赴俄羅斯參加《第九屆世界合唱大賽：冠軍賽》獲得無伴奏宗教音樂組、男聲室內合唱組、現代音樂組等三面金牌。
            </span>
          </v-col>
          <v-col cols="11">
            <span>
              打破大會紀錄之高分贏得男聲室內合唱世界金牌冠軍！因代表臺灣參賽，表現優異、為國爭光，回國後接受蔡英文總統與文化部鄭麗君部長接見表揚。
            </span>
          </v-col>
        </v-row>
        <v-row class="me-4" justify="end">
          <v-col cols="4" class="text-center"><h3>2017年</h3></v-col>
          <v-col cols="8" align-self="center">
            <span>
              7月受《新加坡國際合唱節》邀請擔任駐節邀請團，於活動中舉辦兩場專場公演，並與星洲日報合作於馬來西亞吉隆坡舉辦《璀璨臺灣》音樂會。
            </span>
          </v-col>
          <v-col cols="11">
            <span>
              發行專輯《吹動島嶼的風》，為詞曲全委創專輯，獲財團法人國家文化藝術基金會補助出版。另發行精選輯《木色Ⅱ》，收錄華語、臺語等多首作品。
            </span>
          </v-col>
        </v-row>
        <v-row class="me-4" justify="end">
          <v-col cols="4" class="text-center"><h3>2018年</h3></v-col>
          <v-col cols="8" align-self="center">
            <span>
              首度受邀赴美，於西雅圖、達拉斯、舊金山等三城舉辦巡迴音樂會。
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- 2020 -->
    <h1 class="years_title">2020年</h1>
    <v-row style="margin: 0px -12px">
      <v-col style="border-right: 2px solid #b2b2b2">
        <v-row>
          <v-col cols="4" class="text-center"><h3>2020年</h3></v-col>
          <v-col cols="8" align-self="center">
            <span>
              接受國際合唱聯盟IFCM邀請，赴紐西蘭奧克蘭市於每三年舉辦一次的合唱盛事─《世界合唱大會WSCM》演出兩場專場音樂會（因COVID-19疫情最終未能成行）。
            </span>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col cols="4" class="text-center"><h3>2021年</h3></v-col>
          <v-col cols="8" align-self="center">
            <span>
              發行專輯《木色Ⅲ愛的禮讚》，獲110年度財團法人國家文化藝術基金會及臺北市政府文化局補助出版。
            </span>
          </v-col>
          <v-col cols="11">
            <span>
              成立「木色歌手」，培養追求頂尖卓越並具備豐富音樂素養、優秀演唱能力的歌手，持續琢磨打造木樓作為精緻男聲合唱的品牌。
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col align-self="end">
        <v-img src="../assets/about/singer.jpg"></v-img>
      </v-col>
    </v-row>
    <h1 class="text-center">⋯</h1>
    <h3 class="text-center" style="color: black">
      在未來，木樓將飛往更多國家與土地，傳遞更多精緻樂音；<br />
      在臺灣，以溫暖的歌聲讚頌寶島的美，延續良善，讓愛扎根。
    </h3>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";

// 使用 useDisplay 來偵測螢幕尺寸
const { mobile } = useDisplay();
const isMobile = ref(false);

watch(
  mobile,
  (newVal) => {
    isMobile.value = newVal;
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
@import "../styles/settings.scss";
// heroPic
.title {
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  position: absolute;
  top: 70%;
  left: 25%;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7); /* 光芒效果 */
  @include md {
    font-size: 3rem;
  }
}
.diagonal-section {
  width: 100%;
  height: 75px;
  position: absolute;
  bottom: 0;
  background-color: white;
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0% 100%);
  transform: translateY(1px);
  @include md {
    height: 200px;
  }
}
.content {
  transform: translateY(-25%);
  @include md {
    transform: translateY(-100%);
  }
}

// history
.nav-history {
  padding: 0;
  font-size: 1.5rem;
  font-weight: 500;
  position: relative;
  background: #000;
  color: #fff;
  transform: skew(-20deg) translateX(-5%);
  font-size: 1.2rem;
  @include md {
    font-size: 2rem;
  }
}
.nav-item {
  padding: 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  transform: skew(-20deg);
  border-right: 2px solid #b2b2b2;
  @include md {
    font-size: 1.5rem;
  }
}

.years_title {
  padding: 16px;
  margin-top: 10px;
  background: #b2b2b2;
  color: white;
  @include md {
    padding: 32px;
  }
}
.left_2010 {
  padding-top: 6rem;
  border-right: 2px solid #b2b2b2;
  @include md {
    padding-top: 12rem;
  }
}

h2 {
  padding: 32px;
  font-size: 1.2rem;
  @include md {
    font-size: 2rem;
  }
}

h3 {
  padding: 16px 0;
  font-size: 1rem;
  color: #b2b2b2;
  @include md {
    font-size: 1.5rem;
  }
}
span {
  font-size: 0.6rem;
  color: black;
  @include md {
    font-size: 1rem;
  }
}
</style>
