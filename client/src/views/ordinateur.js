import Axios from "axios";
import Ordinateur from '../components/Ordinateurs.vue'
import DatePicker from '../components/DatePicker.vue';

export default {
  components: {
    Ordinateur,
    DatePicker
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      ordinateurs: []
    }
  },

  methods: {
    selectDate(date) {
      this.ordinateurs = [];
      this.date = date;
      this.getOrdinateur();
      

  },
    getOrdinateur() {
      this.ordinateurs = []
      Axios.get('http://localhost:8008/api/computers', { params: { dates: this.date } }).then(({ data }) => {
        data.ordinateurs.forEach(ordinateur => {

          this.ordinateurs.push(ordinateur)
        });
      })
    }
  }
}