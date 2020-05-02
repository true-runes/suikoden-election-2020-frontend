<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p class="headline text--primary font-weight-bold">
          開票イラスト応募状況（準備中）
        </p>

        <ul>
          <li>1キャラにつき4枚募集（添付画像が最大4枚の為）</li>
          <li>4枠埋まった時点で募集終了となります</li>
        </ul>

        <br />

        <div>
          <v-btn depressed color="primary" class="mr-2">応募状況一覧</v-btn>
          <v-btn depressed color="primary">満了キャラ一覧</v-btn>
        </div>

        <br />

        <div>info: {{ info }}</div>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left subtitle-1">キャラ名</th>
                <th class="text-left subtitle-1">応募数</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in currentStatusInfo" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      currentStatusInfo: []
    };
  },
  mounted() {
    axios.get("https://yesno.wtf/api").then(response => (this.info = response));

    this.currentStatusInfo = [
      {
        name: "Frozen Yogurt",
        calories: 159
      },
      {
        name: "Ice cream sandwich",
        calories: 237
      },
      {
        name: "Eclair",
        calories: 262
      },
      {
        name: "Cupcake",
        calories: 305
      },
      {
        name: "Gingerbread",
        calories: 356
      },
      {
        name: "Jelly bean",
        calories: 375
      },
      {
        name: "Lollipop",
        calories: 392
      },
      {
        name: "Honeycomb",
        calories: 408
      },
      {
        name: "Donut",
        calories: 452
      },
      {
        name: "KitKat",
        calories: 518
      }
    ];
  }
};
</script>

<style scoped></style>
