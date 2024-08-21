<template>
  <!-- Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    width="2000"
    class="custom-drawer"
  >
    <template v-if="!isMobile">
      <v-btn variant="plain" icon @click="drawer = false" class="close-btn">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-row justify="center" align="center" class="mt-10 pt-10">
        <!-- 左側圖片部分 -->
        <v-col cols="3">
          <img src="../assets/home/review.png" />
        </v-col>
        <!-- 右側選單部分 -->
        <v-col cols="5" offset="1">
          <v-row>
            <!-- 關於我們 -->
            <v-col>
              <v-list>
                <v-list-item
                  v-for="item in menuItems[0].items"
                  :key="item.text"
                  :to="item.to"
                  link
                  class="my-8"
                  :active="false"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.text }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <!-- 瞭解更多-->
            <v-col>
              <v-list>
                <v-list-item
                  v-for="item in menuItems[1].items"
                  :key="item.text"
                  :to="item.to"
                  link
                  class="my-8"
                  :active="false"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.text }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <!-- icon -->
          <v-row align="center">
            <v-col>
              <img src="../assets/LOGO/logo01.webp" />
            </v-col>
            <v-col>
              <v-btn icon variant="plain">
                <v-icon size="x-large">mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon variant="plain">
                <v-icon size="x-large">mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon variant="plain">
                <v-icon size="x-large">mdi-youtube</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
    <!-- 在小於 md 尺寸時顯示 v-list-group -->
    <template v-else>
      <v-btn variant="plain" icon @click="drawer = false" class="close-btn">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-list class="mt-10">
        <v-list-item
          v-for="item in menuItems.flatMap((group) => group.items)"
          :key="item.text"
          :to="item.to"
          link
          class="mt-6"
          :active="false"
        >
          <v-list-item-content>
            <v-list-item-title class="text-center">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
  <!-- Main content -->
  <template v-if="!isMobile">
    <v-app-bar flat>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <span>MENU</span>
      <v-spacer></v-spacer>
      <v-img
        src="../assets/LOGO/logo.gif"
        @click="$router.push('/')"
        style="cursor: pointer"
      />
      <v-spacer></v-spacer>
      <div class="scroll-indicator">
        <span :class="fadeClass">{{ currentText }}</span>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
  </template>
  <template v-else>
    <v-btn icon variant="plain" @click="drawer = !drawer" class="drawer-btn">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </template>
  <!-- fab -->
  <div class="fab-button">
    <MemberDialog ref="MemberDialogRef" />
  </div>
  <v-btn icon @click="toggleFab" class="fab-button" v-show="user.isLogin">
    <v-icon>{{ isFabOpen ? "mdi-close" : "mdi-plus" }}</v-icon>
  </v-btn>
  <!-- FAB 展開的按鈕 -->
  <div v-if="isFabOpen" class="fab-actions">
    <v-btn
      v-for="(button, index) in buttons"
      :key="index"
      icon
      @click="handleClick(button.route)"
      v-show="button.showCondition"
    >
      <v-icon>{{ button.icon }}</v-icon>
      <component :is="button.component" v-if="button.component"></component>
    </v-btn>
  </div>
  <!-- Router content -->
  <v-main style="padding: 0">
    <router-view :key="$route.fullPath" />
  </v-main>
  <!-- footer -->
  <v-footer>
    <v-icon>mdi-copyright</v-icon>
    <a href="https://www.muller.org.tw/about">木樓合唱團</a>
    <p>Müller Chamber Choir</p>
  </v-footer>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useSnackbar } from "vuetify-use-dialog";
import MemberDialog from "@/components/dialog/dialogMember.vue";
import { useDisplay } from "vuetify";

// 控制抽屜開關的狀態
const drawer = ref(false);

const isScroll = ref(false);
const currentText = ref("SCROLL DOWN →");
const fadeClass = ref("");
// 處理滾動事件
const handleScroll = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;

  // 設置 isScroll 的值
  isScroll.value = scrollPosition > windowHeight;
};
// 監聽 isScroll 的變化
watch(isScroll, (newValue) => {
  // 觸發淡出效果
  fadeClass.value = "fade-out";
  // 延遲變更文字，等淡出效果結束後觸發淡入效果
  setTimeout(() => {
    currentText.value = newValue ? "← PAGE TOP" : "SCROLL DOWN →";
    fadeClass.value = "fade-in";
  }, 500); // 與 CSS transition 的時間一致
});
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isFabOpen = ref(false);
const toggleFab = () => {
  isFabOpen.value = !isFabOpen.value;
};

const user = useUserStore();
const router = useRouter();
const route = useRoute();
const createSnackbar = useSnackbar();
const MemberDialogRef = ref(null);

// 導航選單項目
const menuItems = ref([
  {
    name: "關於我們",
    items: [
      { text: "TOP", to: "/" },
      { text: "CHOIR", to: "/introduce" },
      { text: "CONDUCTOR", to: "/introduce" },
      { text: "PIANIST", to: "/introduce" },
    ],
  },
  {
    name: "了解更多",
    items: [
      { text: "INFORMATION", to: "/information" },
      { text: "PRODUCT", to: "/shop/product" },
      { text: "TICKET", to: "/shop/ticket", requiresAuth: true },
      { text: "MEMBER", to: "/member", requiresAuth: true },
    ],
  },
]);

// 按鈕資料
const buttons = computed(() => [
  { icon: "mdi-account-cog", route: "/admin", showCondition: user.isAdmin },
  { icon: "mdi-cart", route: "/shop/cart", showCondition: user.isLogin },
  { icon: "mdi-clipboard", route: "/member", showCondition: user.isLogin },
  {
    icon: "mdi-account-arrow-right",
    route: "/logout",
    showCondition: user.isLogin,
  },
]);

// 功能按鈕點擊處理
const handleClick = (route) => {
  if (route === "/logout") {
    logout();
  } else {
    router.push(route);
  }
};

// 登出處理
const logout = async () => {
  await user.logout();
  createSnackbar({
    text: "登出成功",
    snackbarProps: { color: "green" },
  });
};

watch(
  () => route.query.login,
  (login) => {
    if (login) {
      MemberDialogRef.value.isActive = true;
      router.replace({ query: {} });
    }
  }
);

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
.custom-drawer {
  transition: 0.5s;
  .close-btn {
    font-size: 24px;
    position: absolute;
    right: 24px;
    top: 24px;
  }
  .v-list-item-title {
    font-size: 1.5rem;
  }
}
.v-app-bar {
  background: rgba(255, 255, 255, 0.42);
  backdrop-filter: blur(6.5px);
  width: 100dvh !important;
  left: 100% !important;
  transform: rotate(90deg) !important;
  transform-origin: top left !important;
  padding: 16px;
  font-size: 1.5rem;
  .scroll-indicator span {
    position: absolute;
    transform: translate(-50%, -50%);
    transition: 0.3s ease;
    width: 250px;
  }
  .fade-in {
    opacity: 1;
  }
  .fade-out {
    opacity: 0;
  }
}

.drawer-btn {
  position: fixed;
  top: 16px;
  right: 16px;
  background: #000;
  color: white;
  z-index: 10;
}

.fab-button {
  position: fixed;
  bottom: 64px;
  left: 24px;
  z-index: 100;
}

.fab-actions {
  position: fixed;
  bottom: 120px;
  left: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 100;
}

.v-footer {
  background: lighten($third-color, 5%);
  padding: 16px;
  font-size: 12px;
  font-weight: 500;
}
</style>
