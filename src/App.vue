<template>
  <div id="app">
    <Chapter1_1/>
    <Chapter1_2/>
    <Chapter1_3/>
  </div>
</template>

<script>
import Chapter1_1 from './components/Chapter1/1.vue'
import Chapter1_2 from './components/Chapter1/2.vue'
import Chapter1_3 from './components/Chapter1/3.vue'

export default {
  name: 'app',
  components: {
    Chapter1_1,
    Chapter1_2,
    Chapter1_3
  }
}
</script>

<style>
</style>
