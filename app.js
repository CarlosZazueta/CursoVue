Vue.createApp({
    data: () => ({
        tareas: [],
        valor: ''
    }),
    methods: {
        agregarTarea() {
            this.tareas.push(this.valor);
            this.valor = '';
        }
    }
}).mount("#app");