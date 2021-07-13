/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      todos: []
    };
  },
  methods: {
    loadTodos: function () {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          console.log(response.data);
          this.todos = response.data;
        });
    },
  }
});