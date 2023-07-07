// @ts-ignore
const { createApp } = Vue

  createApp({
    data() {
      return {
        url:"http://127.0.0.1:5000/productos",
        productos:[],
        error:false,
        cargando:true
      }
    },

    created() {
        this.fetchData(this.url)
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(producto) {
            const url = 'http://localhost:5000/productos/' + producto;
            const options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text())
                .then(res => {
                    location.reload();
                })
        }
    },
    
  }).mount('#app')