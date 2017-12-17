import Vue from 'vue'
import Vuex from 'vuex'
import fetch from 'isomorphic-fetch';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        newTodo: ''
    },
    mutations: {
        FETCH_TODOS(state, todos) {
            state.todos = todos;
        },
        GET_TODO(state, todo) {
            state.newTodo = todo
        },
        ADD_TODO(state, todo) {
            state.todos.push(todo)
        },
        EDIT_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
            state.todos = todos
            state.newTodo = todo.body
        },
        REMOVE_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
        },
        COMPLETE_TODO(state, todo) {
            todo.completed = !todo.completed
        },
        CLEAR_TODO(state) {
            state.newTodo = ''
        }
    },

    actions: {
        fetchTodos({commit}, todo) {
            fetch('/api/todos', {})
                  .then(response => response.json())
                  .then((json) => {
                    commit('FETCH_TODOS', json.data);
                  });
        },
        getTodo({commit}, todo) {
            commit('GET_TODO', todo)
        },
        addTodo({commit}, todo) {
            fetch('/api/todos', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ todo: todo })
                })
                  .then(response => response.json())
                  .then((json) => {
                    commit('ADD_TODO', todo)
                  });
        },
        editTodo({commit}, todo) {
            fetch('/api/todos/' + todo.id, {
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ todo: { id: todo.id, _id: todo._id, body: todo.body, completed: todo.completed } } )
            })
            .then(response => response.json())
            .then((json) => {
               commit('EDIT_TODO', todo)
            });
        },
        removeTodo({commit}, todo) {
            commit('REMOVE_TODO', todo)
        },
        completeTodo({commit}, todo) {
            fetch('/api/todos/' + todo.id, {
                method: 'PUT',
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },
                body: JSON.stringify({ todo: { id: todo.id, body: todo.body, completed: !todo.completed } } )
            })
            .then(response => response.json())
            .then((json) => {
               commit('COMPLETE_TODO', todo)
            });
        },
        clearTodo({commit}) {
            commit('CLEAR_TODO')
        }
    },

    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos.filter((todo) => {return !todo.completed}),
        completedTodos: state => state.todos.filter((todo) => {return todo.completed})
    }
})
