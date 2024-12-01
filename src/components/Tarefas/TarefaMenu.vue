<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon> mdi-dots-vertical</v-icon>

        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in itens"
          :key="index"
          @click="item.click()"
        >
           <v-icon left> {{item.icone}}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditar v-if="itens[0].modal"
      @fechaModal = 'itens[0].modal=false'
      :tarefa ="tarefa"
    />
    <ModalDelete
      v-if="itens[1].modal"
      @fechaModal = 'itens[1].modal=false'
      :tarefa ="tarefa"
    />
  </div>
</template>

<script>
import ModalDelete from '../Modal/ModalDelete.vue';
import ModalEditar from '../Modal/ModalEditar.vue'
  export default {
    props:["tarefa"],
    components: { ModalEditar, ModalDelete },
    data: () => ({
      itens: [
        { 
          icone:"mdi-pencil", 
          title: 'Editar',
          modal: false,
          click(){
            this.modal = true;
          } 
        },
        { icone:"mdi-delete", 
          title: 'Excluir',
          modal:false, 
          click(){
            this.modal = true;
          }
        
        },
      ],
    })
  }
</script >

<style>

</style>