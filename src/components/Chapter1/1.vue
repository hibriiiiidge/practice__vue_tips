<template>
  <div>
    <div>
      <h3>Chapter1_1</h3>
      <em>タグの配列</em>
      <ul>
        <li v-for="(tag, index) in tags" v-bind:key="`tag-${index}`">
          {{ tag }}
        </li>
      </ul>
    </div>
    <div>
      <em>タグの文字列</em>
      <p>{{ tagsString }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ["JavaScript", "Vue.js", "Computed"]
    };
  },
  computed: {
    tagsString() {
      return this.tags.join(',');
    }
  }
}
</script>

<style>
</style>
