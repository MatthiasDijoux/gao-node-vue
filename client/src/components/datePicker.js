export default {
    props: {
        ordinateur: {
            default: function () {
                return {}
            }
        }
    },

    data() {
        return {
            date: new Date().toISOString().substr(0, 10),
            min: new Date().toISOString().slice(0, 10),
            modal: false,
            menu: false,
        }
    },

    created() {
        this.addDate();
    },

    methods: {
        addDate() {
            this.$emit('addDate', this.date);
        }
    }
}