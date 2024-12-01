import Vue from 'vue'
import Vuex from 'vuex'

import Localbase from 'localbase'
let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
      // {id:1, titulo:"Ir ao mercado", concluido:false},
      // {id:2, titulo:"Ir ao cinema", concluido:false},
    ]
  },
  mutations: {
    buscaTarefa(state){
      db.collection('tarefas').get().then(tarefasDB => {
        state.tarefas = tarefasDB
      })
    },
    adicionarTarefa(state,titulo){
      db.collection('tarefas').add({
        id: new Date().getTime(),
        titulo,
        concluido:false
        }
      )
      // if(titulo){
      //   state.tarefas.push(
      //     { 
      //       id: new Date().getTime(),
      //       titulo,
      //       concluido:false
      //     }
      //   )
      // }
    },
    removeTarefa(state,id){
      //filter e exatamente para filtar algun dado de um array
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id != id)
    },
    editarTarefa(state,novaTarefa){
      let tarefa = state.tarefas.filter(tarefa => tarefa.id == novaTarefa.id)[0];
      tarefa.titulo= novaTarefa.titulo;
    }

  },
  actions: {
    // async indica assincronia da execucao da funcao, isto e, sao executados indepentemente do momento, nao seguem uma sincronia exacta
    async adicionarTarefa({commit},titulo){
      await commit('adicionarTarefa',titulo)
      await commit('buscaTarefa')
    }
  },
  modules: {
  }
})
