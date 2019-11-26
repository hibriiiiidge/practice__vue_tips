<template>
  <div>
    <h1>お問い合わせ</h1>

    <form v-on:submit.prevent="handleSubmit">
      <form-input
        id="name"
        v-model="test"
        label="お名前/所属（必須）"
      />
    </form>
  </div>
</template>

<script>
import { FormInput } from '@/components';
import { ContactForm } from '@/forms';

export default {
  components: {
    FormInput,
  },

  data() {
    const form = new ContactForm();
    return {
      form,
    };
  },

  methods: {
    handleSubmit() {
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
