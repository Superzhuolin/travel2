<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>

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
  methods:{
    getCityInfo(){ 
      axios.get("/api/city.json")
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res){
      res = res.data;
      if(res.ret &&res.data){
        const  data = res.data
        this.cities = data.cities
        this.hotCities=data.hotCities
        // this.letter=data.letter
      }
      console.log(res);
    }
  },
  mounted(){
    this.getCityInfo();
  }
};
</script>
<style lang="stylus" scoped></style>