<template>
  <div>
    <h3>Chapter2_1</h3>
    <input type="text" v-model="name" v-on:blur="hundleBlurName">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nameValidatable: false,
      message: ''
    };
  },
  watch: {
    name() {
      if(this.nameValidatable) { this.nameValidate }
    }
  },
  methods: {
    nameValidate() {
      if (this.name.length > 10) {
        this.message = "too long";
      } else {
        this.message = "";
      }
    },
    hundleBlurName() {
      this.nameValidatable = true;
      this.nameValidate();
    }
  }
}
</script>

<style>
</style>
