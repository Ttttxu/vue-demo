import cookie from 'js-cookie'
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    // localUrl: 'http://120.78.68.168',
    localUrl: 'http://localhost:8080',
    userInfo: {},
    isLoged: false,
    //用户详情
    personOrgan:{},
    saveChecked:[] //保存每页选中状态
  },
  mutations: {
    SET_USRE_INFO(state, data) {
      if (!data.access_token) {
        state.isLoged = false
      }
      state.userInfo = data
    },
    SET_USRE_LOGIN(state, isLoged) {
      state.isLoged = isLoged
    },
    //存储保存选中的
    SET_SAVE_CHECKED(state,data) {
      state.saveChecked = data;
    },
     //获取用户详情
    GET_PERSON_ORGAN(state,data) {
      state.personOrgan = data;
    }
  },
  actions:{
    initStatus({ commit }) {
      console.log(cookie);
      const feToken = cookie.get('token');
      if (feToken !== undefined && feToken.length > 0) {
        try {
          const obj = JSON.parse(feToken)
          if (obj.username && obj.username.length > 0) {
            commit('SET_USRE_INFO', obj)
            commit('SET_USRE_LOGIN', true)
          }
        } catch (error) {
          console.error(error,'检验登陆')
        }
      } else {
        console.log('did not login')
      }
    }
  }
});
export default store;
