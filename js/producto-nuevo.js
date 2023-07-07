function guardar() {
    // @ts-ignore
    let id = parseInt(document.getElementById("id").value)
    // @ts-ignore
    let nombre = document.getElementById("nombre").value
    // @ts-ignore
    let precio = parseFloat(document.getElementById("precio").value)
    // @ts-ignore
    let descripcion = document.getElementById("descripcion").value
    // @ts-ignore
    let stock = parseInt(document.getElementById("stock").value)
    // @ts-ignore
    let imagen = document.getElementById("imagen").value


    let producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        stock: stock,
        imagen: imagen
    }
    let url = "http://localhost:5000/productos"
    const options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            alert("Su producto fue creado con exito")
            window.location.href = "./productos.html";  
        })
        .catch(err => {
            //this.errored = true
            alert("Error al registrar nuevo producto" )
            console.error(err);
        })
        console.log(producto)
    }
