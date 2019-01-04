<template>
  <div class="tabs tabs--bottom-line border--b">
    <div
      class="tabs__item"
      v-for="item in items"
      v-bind:class="{ active: active === item, 'text-danger': hasError }"
    >Item: {{item}}</div>
  </div>
</template>
<script>
export default {
  props: {
    items: Array,
    active: true
  }
};
</script>