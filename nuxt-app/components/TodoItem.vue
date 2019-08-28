<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ todo.text }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: ['todo']
}
</script>
