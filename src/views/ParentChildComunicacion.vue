<template>
  <section>
    <h1>Parent-Child Communication</h1>
    <Parent />
  </section>
</template>

<script>
import Parent from '@/components/Parent.vue';

export default {
  components: {
    Parent,
  },
};
</script>

<style scoped>
section {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
h1 {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
