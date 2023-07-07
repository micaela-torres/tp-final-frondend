// @ts-ignore
const { createApp } = Vue

  createApp({
    data() {
      return {
        url:"https://mica2111.pythonanywhere.com/productos",
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
            const url = 'https://mica2111.pythonanywhere.com/productos' + producto;
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