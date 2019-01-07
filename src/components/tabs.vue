<template>
  <div class="tabs tabs--bottom-line border--b">
    <div class="tabs__item" v-for="item in items" :key="item">Item: {{item}}</div>
  </div>
</template>
<script>
export default {
  props: {
    items: Array
  }
};
</script>