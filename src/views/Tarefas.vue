<template>
  <div>
    <v-col
      cols="12"
    >

    <!-- o keyup e um evento para quando soltar um tecla, no caso enter -->
      <v-text-field
        v-model="campoInput"
        label="Qual a sua tarefa?"
        outlined
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>
    <v-list
      flat
      subheader
    >

      <v-list-item-group
        multiple
        active-class=""
      >
      <div v-for="tarefa,index in $store.state.tarefas" :key="index">
        <tarefa
        :tarefa="tarefa"
        />
      </div>
       

      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefa from '../components/Tarefas/Tarefa.vue'
  
  export default {
    name: 'Home',

    components: {
     Tarefa
    },
    data(){
      return{
        campoInput:null
      }
    },
    methods:{
      handleAddTarefa(){
        this.$store.commit('adicionarTarefa',this.campoInput)
        this.campoInput=null;
      }
    }
  }
</script>
