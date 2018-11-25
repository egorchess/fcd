<template>
  <div id="app">
    <component :is="page"/>
  </div>
</template>

<script>
// Клиентский роутинг
// Преобразуем путь в название компонента
// Vue-компоненты именуются с заглавной буквы
let pageName = window.location.pathname.slice(1).toLowerCase() || 'index';
pageName = pageName[0].toUpperCase() + pageName.slice(1);

// Если страница не найдена, показываем шаблон страницы 404
let Page;
try {
  Page = require(`./pages/${pageName}.vue`).default;
} catch (err) {
  Page = require('./pages/NotFound.vue').default;
}

// Устанавливаем заголовк страницы из свойства title компонента страницы
document.title = Page.title || 'Free Cash Desk';

export default {
  name: 'app',
  data() {
    return { page: Page };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
