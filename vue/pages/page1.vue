<template>
  <section class="container">
    <div id='app1'>
      <div id="app">
        {{ message }}
      </div>
      <br />

      <div id="app-2">
        <span v-bind:title="message2">
          {{ $t("page1.app2-msg") }}
        </span>
      </div>
      <br />

      <div id="app-3">
        <p v-if="seen">{{ $t("page1.app3-msg") }}</p>
      </div>
      <br />

      <div id="app-4">
        <ol>
          <li v-bind:key="todo" v-for="todo in todos">
            {{ todo.text }}
          </li>
        </ol>
      </div>
      <br />

      <div id="app-5">
        <button v-on:click="reverseMessage">{{ $t("page1.app5-msg") }}</button>
      </div>
      <br />

      <div id="app-6">
        <input v-model="message">
      </div>
      <br />

      <div id="app-7">
        <ol>
          <todo-item
            v-for="item in groceryList"
            v-bind:todo="item"
            v-bind:key="item.id">
          </todo-item>
        </ol>
      </div>
      <br />

      <div id="app-5">
        <button v-on:click="changeLanguage('ko')">한국어</button>
        <button v-on:click="changeLanguage('en')">English</button>
      </div>
      <br />

    </div>
  </section>
</template>

<script>
import TodoItem from '~/components/TodoItem.vue'

export default {
  computed: {
    message2() {
      return this.$t("page1.message2") + new Date();
    },
    todos() {
      return [
        { text: this.$t("page1.todos.text1") },
        { text: this.$t("page1.todos.text2") },
        { text: this.$t("page1.todos.text3") }
      ]
    }
  },
  data() {
    return {
      message: 'Vue',
      seen: true,

      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  },
  components: {
      TodoItem
  }
}

</script>

<style>
</style>
