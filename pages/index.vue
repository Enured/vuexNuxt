<template>
  <div>
    <form class="pa3 pa5-ns" @submit.prevent="add(task)">
      <input v-model="task" type="text">
      <input type="submit" value="Add">
    </form>
    <!--{{counter}}-->
    <!--<button @click="increment">+</button>-->
    <!--<button @click="decrement">-</button>-->
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw5">Todos</h1>
      <ul class="list pl0 ml0 center mw5 ba b--light-silver br3">
        <li v-bind:key="index" v-for="(todo, index) of todos" class="flex items-center ph3 pv2 bb b--light-silver">
          <span v-bind:class="{strike: todo.complete}" class="flex-auto">{{todo.id}}-{{todo.task}}</span>
          <button @click="toggle(todo)"><img src="https://icon.now.sh/check" alt=""></button>
          <button @click="remove(todo)"><img src="https://icon.now.sh/trash" alt=""></button>
        </li>

      </ul>
    </article>
  </div>
</template>
<script>
  import navigation from '../components/navigation'
  import {mapState, mapMutations, mapActions} from 'vuex'
  import {init} from './shared'

  export default {
    data(){
      return{
        task: "some task"
      }
    },
    fetch: init,
    computed:{
      ...mapState({
        // counter: state => state.counter
        todos: state => state.todos
      })
    },
    methods:{
      ...mapActions([
        'add',
        'remove',
        'toggle'
      ])
    }
  }
</script>

