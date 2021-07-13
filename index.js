/* global Vue */
var app = new Vue({
  el: '#app',
  data: {
    message: "stuff",
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
    showHiddenInfo: false,
    disableText: false

  },
  methods: {
    addAwesomesauce: function () {
      this.todos.push({ text: "Awesomesauce" });
    },
    toggleShow: function () {
      this.showHiddenInfo = !this.showHiddenInfo;
    },
    disableTextToggle: function () {
      this.disableText = !this.disableText;
    }
  }

});
