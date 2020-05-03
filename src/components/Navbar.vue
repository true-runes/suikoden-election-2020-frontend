<template>
  <div>
    <v-app-bar dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" class="white--text">
          幻水総選挙 2020
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-title>
                ホーム
              </v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/status_of_illustrations">
            <v-list-item>
              <v-list-item-title>
                開票イラスト応募状況
              </v-list-item-title>
            </v-list-item>
          </router-link>

          <a href="https://election-2019.suikoden.info/" target="_blank">
            <v-list-item>
              <v-list-item-title>幻水総選挙 2019（別サイト）</v-list-item-title>
            </v-list-item>
          </a>

          <a href="https://election-2018.suikoden.info/" target="_blank">
            <v-list-item>
              <v-list-item-title>幻水総選挙 2018（別サイト）</v-list-item-title>
            </v-list-item>
          </a>

          <a href="https://election-2017.suikoden.info/" target="_blank">
            <v-list-item>
              <v-list-item-title>幻水総選挙 2017（別サイト）</v-list-item-title>
            </v-list-item>
          </a>

          <a href="https://corselia.sakura.ne.jp/gensui/sosenkyo_2016_result/index.php" target="_blank">
            <v-list-item>
              <v-list-item-title>幻水総選挙 2016（別サイト）</v-list-item-title>
            </v-list-item>
          </a>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
