<template>
  <div id="app">
    <Chapter1_1/>
    <Chapter1_2/>
    <Chapter1_3/>
    <Chapter2_1/>
  </div>
</template>

<script>
import Chapter1_1 from './components/Chapter1/1.vue'
import Chapter1_2 from './components/Chapter1/2.vue'
import Chapter1_3 from './components/Chapter1/3.vue'
import Chapter2_1 from './components/Chapter2/1.vue'

export default {
  name: 'app',
  components: {
    Chapter1_1,
    Chapter1_2,
    Chapter1_3,
    Chapter2_1
  }
}
</script>

<style>
</style>
