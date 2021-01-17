import Axios from "axios"

export default {
  props: {
    attribution: {
      default: function () {
        return {}
      }
    },

    horaire: {
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    deletePoste() {
      Axios.delete('http://localhost:8008/api/attr/' + this.attribution.id).then(data => {
        console.log(data);
        this.$emit('deleteAttribution', this.horaire)
      })
    }
  },
}