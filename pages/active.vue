<template>
  <div>
    <!--{{counter}}-->
    <!--<button @click="increment">+</button>-->
    <!--<button @click="decrement">-</button>-->
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw5">Active Todos</h1>
      <ul class="list pl0 ml0 center mw5 ba b--light-silver br3">
        <li v-bind:key="index" v-for="(todo, index) of todos" class="flex items-center ph3 pv2 bb b--light-silver">
          <span v-bind:class="{strike: todo.complete}" class="flex-auto">{{todo.id}}-{{todo.task}}</span>
        </li>

      </ul>
    </article>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {init} from './shared'

  export default {
    fetch: init,
    computed:{
      ...mapState({
        // counter: state => state.counter
        todos: state => state.todos.filter(todo => !todo.complete)
      })
    }
  }
</script>


