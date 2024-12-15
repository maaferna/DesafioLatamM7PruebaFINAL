<template>
    <div>
      <h2>Child Component</h2>
      <input type="text" v-model="inputText" placeholder="Escribe algo aquí..." />
      <button @click="sendText">Enviar al Parent</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText: '', 
      };
    },
    methods: {
      sendText() {
        this.$emit('textSubmitted', this.inputText); 
      },
    },
  };
  </script>
  