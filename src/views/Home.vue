<template>
    <div>
      <p>Contador Pinia: {{ count }}</p>
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Disminuir</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'pinia';
  import { useCounterStore } from '@/stores/counter';

  export default {
    name: 'Home',
    computed: {
      ...mapState(useCounterStore, ['count']),
    },
    methods: {
      ...mapActions(useCounterStore, ['increment', 'decrement']),
    },
  };
</script>
