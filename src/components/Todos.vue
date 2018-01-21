<template>
  <div>
    <div v-for="todo,index in todos" :key="todo.title">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="check(index, $event)">
          <strike v-if="todo.completed === true">{{ todo.title }}</strike>
          <div v-else>{{ todo.title }}</div>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="removeTodos(index)"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapActions(['removeTodos', 'changeCompleted']),
    check (index, event) {
      this.changeCompleted({
        index,
        status: event
      })
    }
  }
}
</script>
