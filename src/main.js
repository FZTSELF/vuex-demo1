import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store =new Vuex.Store({
  state:{
    //count:0
    num:10,
    buy:1
  },
  mutations:{
    increment(state){
      state.num--
    },
    increment2(state){
      state.num-=2
    },
    increment3(state){
      if(state.num>=state.buy && state.buy>=0){
        state.num-=state.buy
      }
    }
  }

  // mutations:{
  //   increment(state){
  //     state.count++
  //   }
  // },
  // actions:{
  //   increment2(action){
  //     setTimeout(()=>{
  //       action.commit('increment')
  //     },2000);
  //   }
  // }
})


Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
