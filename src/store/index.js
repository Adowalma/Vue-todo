import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      {id:1, titulo:"Ir ao mercado", concluido:false},
      {id:2, titulo:"Ir ao cinema", concluido:false},
    ]
  },
  mutations: {
    adicionarTarefa(state,titulo){
      if(titulo){
        state.tarefas.push(
          { 
            id: new Date().getTime(),
            titulo,
            concluido:false
          }
        )
      }
    },
    removeTarefa(state,id){
      //filter e exatamente para filtar algun dado de um array
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id != id)
    }

  },
  actions: {
  },
  modules: {
  }
})
