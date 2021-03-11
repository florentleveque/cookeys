export default {
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      },
    },
  },
  beforeRouteLeave (to, from , next) {
    this.resetWatch()
    next()
  },
  methods: {
    clearRequireCache() {
      Object.keys(require.cache).forEach(function(key) {
        delete require.cache[key]
      })
    }
  }
}