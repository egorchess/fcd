<template>
  <div><h1>Страница авторизации</h1>
    <v-button :onClick="testClick">Войти</v-button>
  </div>
</template>

<script>
  import Button from './MainButton.vue';

  export default {
    title: 'Авторизация',
    components: {
      'v-button': Button
    },
    methods: {
      testClick() {
        // код обработчика
      }
    }
  };
</script>

<style>
</style>
