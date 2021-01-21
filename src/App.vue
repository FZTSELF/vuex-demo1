<template>
  <div id="app">
    <span>小米9</span>
    数量：{{num}}
    <br>
    <button :disabled="num>0?false:true" @click="$store.commit('increment')">购买1个</button>
    <button :disabled="num>1?false:true" @click="$store.commit('increment2')">购买2个 </button><br>

    <button id="btn" :disabled="num>0?false:true" @click="$store.commit('increment3')">购买</button>
    <input type="number"  min="1" v-model="$store.state.buy">个
<!--    {{count}}-->
<!--    {{$store.getters.doubleCount}}-->
<!--    <button @click="$store.commit('increment')">count++</button>-->
<!--    <button @click="$store.dispatch('increment2')">count++</button>-->
  </div>
</template>

<script>
  export default {
    name: 'App',
    // computed: {
    //   count(){
    //     return this.$store.state.count
    //   }
    // }
    computed: {
      num(){
        return this.$store.state.num
      }
    }
  }
</script>

<style>

</style>
