import cookie from 'js-cookie'
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
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
      const feToken = cookie.get('token')
      console.log("/*/*/*/*/*/" + feToken);
      if (feToken !== undefined && feToken.length > 0) {
        try {
          const obj = JSON.parse(feToken)
          if (obj.access_token && obj.access_token.length > 0) {
            console.log('loged in')
            commit('SET_USRE_INFO', obj)
            commit('SET_USRE_LOGIN', true)
          }
        } catch (error) {
          console.error(error,'检验登陆')
        }
      } else {
        console.log('did not login')
      }
    },
    onLogout({ commit }) {
      console.log('onLogout')
      cookie.remove('token', { domain: '.zeunpro.com' })
      commit('SET_USRE_INFO', {})
    },
    setSaveChecked({ commit },data) {
      commit('SET_SAVE_CHECKED',data);
    },
    //获取用户详情
    getPersonOrgan({ commit },data) {
      commit('GET_PERSON_ORGAN',data);
    }
  }
});
export default store;
