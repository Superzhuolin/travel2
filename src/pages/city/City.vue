<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter">
    </city-list>
    <city-alphabet :cities="cities"  @change="handleLetterChange">
    </city-alphabet>

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
    },
    handleLetterChange(letter){
      this.letter=letter;
    }
    
  },
  mounted(){
    this.getCityInfo();
  }
};
</script>
<style lang="stylus" scoped></style>