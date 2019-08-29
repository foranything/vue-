<template>
  <v-container>
    <div id="app1">
      <h1>1. default</h1>
      <div id="app">
        {{ message }}
      </div>
      <br />

      <h1>2. v-bind</h1>
      <div id="app-2">
        <span :title="message2">
          {{ $t('page1.app2-msg') }}
        </span>
      </div>
      <br />

      <h1>3. v-if</h1>
      <div id="app-3">
        <p v-if="seen">{{ $t('page1.app3-msg') }}</p>
      </div>
      <br />

      <h1>4. v-for</h1>
      <div id="app-4">
        <v-card>
          <v-list>
            <v-list-item v-for="todo in todos" :key="todo.id">
              <v-list-item-content>
                <v-list-item-title>{{ todo.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
      <br />

      <h1>5. v-on:click</h1>
      <div id="app-5">
        <v-btn outlined @click="reverseMessage">
          {{ $t('page1.app5-msg') }}
        </v-btn>
      </div>
      <br />

      <h1>6. v-model</h1>
      <div id="app-6">
        <v-text-field v-model="message" :messages="'message'"> </v-text-field>
      </div>
      <br />

      <h1>7. component</h1>
      <div id="app-7">
        <v-card>
          <v-list>
            <todo-item v-for="item in groceryList" :key="item.id" :todo="item">
            </todo-item>
          </v-list>
        </v-card>
      </div>
      <br />

      <h1>8. i18n</h1>
      <div id="app-8">
        <v-btn outlined @click="changeLanguage('ko')">
          한국어
        </v-btn>
        <v-btn outlined @click="changeLanguage('en')">
          English
        </v-btn>
      </div>
      <br />
    </div>
  </v-container>
</template>

<script>
import TodoItem from '~/components/TodoItem.vue'

export default {
  components: {
    TodoItem
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
  computed: {
    message2() {
      return this.$t('page1.message2') + new Date()
    },
    todos() {
      return [
        { id: 0, text: this.$t('page1.todos.text1') },
        { id: 1, text: this.$t('page1.todos.text2') },
        { id: 2, text: this.$t('page1.todos.text3') }
      ]
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang
      history.pushState(null, null, `/${lang}/Page1`)
      this.$store.commit('SET_LANG', lang)
    }
  }
}
</script>
