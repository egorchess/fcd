<template>
  <button class="main_button" @click="onClick" >
    <slot>Button</slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      onClick: {
        type: Function,
        required: true
      }
    }
  };
</script>

<style scoped>
  .main_button {
    height: 50px;
    width: 350px;
    display: inline-block;
    padding: 5px 25px 5px;
    font-size: 30px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #1FA19C;
    border: 3px solid #509c99;
    border-radius: 20px;
    background: linear-gradient(to top, #087d78 20%, #1FA19C 50%, #64BAB7 80%);
    box-shadow: 4px 4px 8px #64BAB7;
  }
  .main_button:hover {
    background-color: #64BAB7;
    background: linear-gradient(to top, #085f5a 20%, #1c837e 50%, #509c99 80%);
  }
</style>
