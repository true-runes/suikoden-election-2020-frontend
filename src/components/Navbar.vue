<template>
  <div>
    <v-app-bar dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link :to="{ name: 'root' }" class="white--text"
          >幻水総選挙 2020</router-link
        >
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item class="title font-weight-bold">
          幻水総選挙 2020
        </v-list-item>

        <v-divider></v-divider>

        <router-link :to="{ name: 'root' }">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link :to="{ name: 'past-events' }">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-book-open-page-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>過去の総選挙結果</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link :to="{ name: 'check-your-vote' }">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-question</v-icon>
            </v-list-item-icon>
            <v-list-item-title>投票チェック</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link :to="{ name: 'status-of-illustrations' }">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-image-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title>開票イラストについて</v-list-item-title>
          </v-list-item>
        </router-link>

        <a href="https://min.togetter.com/kStoOfK" target="_blank">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-vote</v-icon>
            </v-list-item-icon>
            <v-list-item-title>投票方法（外部サイト）</v-list-item-title>
          </v-list-item>
        </a>

        <a href="https://election-2019.suikoden.info/" target="_blank">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-open-in-new</v-icon>
            </v-list-item-icon>
            <v-list-item-title>幻水総選挙 2019</v-list-item-title>
          </v-list-item>
        </a>

        <a href="https://election-2018.suikoden.info/" target="_blank">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-open-in-new</v-icon>
            </v-list-item-icon>
            <v-list-item-title>幻水総選挙 2018</v-list-item-title>
          </v-list-item>
        </a>

        <a href="https://election-2017.suikoden.info/" target="_blank">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-open-in-new</v-icon>
            </v-list-item-icon>
            <v-list-item-title>幻水総選挙 2017</v-list-item-title>
          </v-list-item>
        </a>

        <a href="https://election-2016.suikoden.info/" target="_blank">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-open-in-new</v-icon>
            </v-list-item-icon>
            <v-list-item-title>幻水総選挙 2016</v-list-item-title>
          </v-list-item>
        </a>

        <router-link :to="{ name: 'staff' }">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>スタッフ</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
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

<style scoped>
a {
  text-decoration: none;
}
</style>
