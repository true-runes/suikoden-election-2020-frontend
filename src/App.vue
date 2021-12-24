<template>
  <v-app>
    <v-content>
      <Navbar />

      <div class="justify-content align-self-items">
        <v-img
          alt="幻水総選挙 2020 タイトル"
          class="shrink"
          contain
          src="/gensosenkyo_header_2020_black.jpg"
          transition="fade-transition"
        />
      </div>

      <router-view />

      <hr />
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
  data: function () {
    return {
      drawer: false,
      group: null,
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style scoped></style>
