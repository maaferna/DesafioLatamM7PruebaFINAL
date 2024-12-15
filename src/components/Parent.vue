<template>
    <div>
      <h1>Parent Component</h1>
      <p>Texto recibido del Child: {{ receivedText }}</p>
      <Child @textSubmitted="handleText" />
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    components: { Child },
    data() {
      return {
        receivedText: '', 
      };
    },
    methods: {
      handleText(text) {
        this.receivedText = text; 
      },
    },
  };
  </script>
  