<template>
  <div>
    <p class="is-pulled-left">{{count}} items left</p>
    <visibility-input/>
  </div>
</template>

<script>
import VisibilityInput from '@/components/VisibilityInput'
import { mapGetters } from 'vuex'
export default {
  components: {
    VisibilityInput
  },
  computed: {
    ...mapGetters(['todos']),
    count () {
      return this.todos.filter(todo => todo.completed === false).length
    }
  }
}
</script>
