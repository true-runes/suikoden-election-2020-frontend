<template>
  <v-app>
    <v-app-bar dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>幻水総選挙2020</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title
              >開票イラストについて（準備中）</v-list-item-title
            >
          </v-list-item>

          <a href="https://election-2019.suikoden.info/" target="_blank">
            <v-list-item>
              <v-list-item-title>幻水総選挙2019</v-list-item-title>
            </v-list-item>
          </a>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <div class="d-flex align-center">
      <v-img
        alt="幻水総選挙2020 タイトル"
        class="shrink"
        contain
        src="/gensosenkyo_2020_title.png"
        transition="scale-transition"
      />
    </div>

    <v-content>
      <VotingTerm />
      <ShowResultDate />
      <EnabledVotingCountNumber />
      <HowToVote />
      <VotingExample />
      <NoteForVoting />
      <AboutIllustrationsCountingOfVotes />
      <NoteForThisEvent />

      <hr />

      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import VotingTerm from "./components/cards/VotingTerm";
import ShowResultDate from "./components/cards/ShowResultDate";
import EnabledVotingCountNumber from "./components/cards/EnabledVotingCountNumber";
import HowToVote from "./components/cards/HowToVote";
import NoteForVoting from "./components/cards/NoteForVoting";
import NoteForThisEvent from "./components/cards/NoteForThisEvent";
import VotingExample from "./components/cards/VotingExample";
import AboutIllustrationsCountingOfVotes from "./components/cards/AboutIllustrationsCountingOfVotes";

export default {
  name: "App",

  components: {
    VotingTerm,
    ShowResultDate,
    EnabledVotingCountNumber,
    HowToVote,
    VotingExample,
    NoteForVoting,
    NoteForThisEvent,
    AboutIllustrationsCountingOfVotes,
    Footer
  },

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
