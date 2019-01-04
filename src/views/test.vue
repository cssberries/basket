<template>
  <div class="">
    <tabs :active="'b'" :items="['a','b','c']"></tabs>
  </div>
</template>

<script>
import tabs from '@/components/tabs.vue'

export default {
  name: 'test',
  components: {
    tabs
  }
}
</script>
