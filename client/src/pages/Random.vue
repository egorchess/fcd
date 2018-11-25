<template>
  <div class="random-page">
    <h1>Демонстрационная страница: взаимодействие с сервером</h1>
    <div>Случайное число с сервера: {{ random }}</div>
  </div>
</template>

<script>
import query from '../libs/query';

export default {
  data() {
    return {
      random: 'Загрузка...'
    };
  },
  async beforeMount() {
    this.random = await query('GetRandomNumber');
  }
};
</script>

<style>
.random-page {
  margin: 20px;
}

.random-page h1 {
  margin-bottom: 10px;
}
</style>
