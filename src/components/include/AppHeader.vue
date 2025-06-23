<template>
  <v-app-bar
    app
    fixed
    flat
    :color="isOpaque ? 'white' : 'transparent'"
    :height="isScrolled ? 100 : 100"
    :class="[{ 'nav-border': isScrolled }, 'transition-navbar']"
  >
    <v-toolbar-title class="font-weight-bold t1 fixed-title">
      
      <v-btn text :to="'/'" size="100%">
        <div class="but"></div>
      </v-btn>
      
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu offset-y >
                <template #activator="{ props }">
                    <v-btn v-bind="props" text>
                        Company
                        <v-icon end>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in menuItems"
                    :key="index"
                    @click="navigate(item.link)"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>

    
    <v-btn class="mr-9" text :to="'/ARTIST'">ARTIST</v-btn>
    <v-btn class="mr-9" text :to="'/NEWSROOM'">NEWSROOM</v-btn>
    <v-btn class="mr-10" text :to="'/AUDITION'">AUDITION</v-btn>
  </v-app-bar>

  <router-view></router-view>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isScrolled: false,
      isOpaque: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      this.isScrolled = scrollY > 0;
      this.isOpaque = scrollY > 150; // 100px 넘으면 배경색 채움, 조절 가능
    },
  },
};
</script>

<style scoped>
.v-app-bar {
  width: 100%;
  position: relative;
  transition: background-color 0.1s ease, height 0.1s ease, border-bottom 0.3s ease;
}

.but {
  background-image: url(../../assets/img/logo2.png);
  background-size:contain;
  width: 15vw;
  height: 7vh;
}

.nav-border {
  border-bottom: 2px solid black;
}

.fixed-title {
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  padding: 0;
}
</style>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuItems = ref([
    {title:'Introduction', link:'/companyintro'},
    {title:'History', link:'/companyhistory'},
    
  ])

/*const artist = ref([
    {title:'Kangkiyoung', link:'/kangkiyoung'},
])*/

function navigate(path) {
  router.push(path)
}

</script>

