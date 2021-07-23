/*
 * @file: test store数据管理
 */
//state
const state = () =>({
  name:'lisi'
})

// getters
const getters = {
  changeName:(state,getters)=>{
    return state.name+'11'
  }
}
// mutations
const mutations={

}

//actions
const actions = {

}
export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}