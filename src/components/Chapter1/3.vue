<template>
  <div>
    <h3>Chapter1_3</h3>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model.trim="name">
        <p v-if="invalidName">{{ messageName }}</p>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="email">
        <p v-if="invalidEmail">{{ messageEmail }}</p>
      </div>
      <button v-bind:disabled="hasError" type="submit">送信</button>
    </form>
    <div v-text="sendData"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      sendData: null
    };
  },
  computed: {
    messageName() {
      return this.name.length === 0 ? '入力してください' : '';
    },
    messageEmail() {
      if (this.email.length === 0) {
        return '入力してください';
      }
      if (/\w+@\w+/.test(this.email) === false) {
        return 'メールアドレスを入力してください';
      }
      return '';
    },
    invalidName() {
      return this.messageName.length > 0;
    },
    invalidEmail() {
      return this.messageEmail.length > 0;
    },
    hasError() {
      return this.invalidName || this.invalidEmail;
    }
  },
  methods: {
    handleSubmit() {
      this.sendData = JSON.stringify({
        name: this.name,
        email: this.email
      });
    }
  }
};
</script>

<style>
</style>
