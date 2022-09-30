<template>
  <div>
    <city-header></city-header>
  </div>
</template>
<script>
import axios from "axios";
import CityHeader from "./componets/Header.vue";
import CitySearch from "./componets/Search.vue";
import CityList from "./componets/List.vue";
import CityAlphabet from "./componets/Alphabet.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: "",
    };
  },
};
</script>
<style lang="stylus" scoped></style>