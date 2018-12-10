<template>
  <MainButton :text="buttonText" @onClick="handleClick"></MainButton>
</template>

<script>
import MainButton from './MainButton.vue';

export default {
  components: {
    MainButton
  },
  data() {
    return {
      buttonText: 'Войти'
    };
  },
  methods: {
    handleClick() {
      alert('Hello world');
    }
  }
};
</script>

<style>
</style>
