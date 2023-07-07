// TRAEMOS LOS DATOS PARA EL FORMULARIO
console.log(location.search)
const args = location.search.substr(1).split('&');  
console.log(args)
const parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(parts)

// @ts-ignore
document.getElementById("id").value = decodeURIComponent(parts[0][1])
// @ts-ignore
document.getElementById("nombre").value = decodeURIComponent(parts[1][1])
// @ts-ignore
document.getElementById("descripcion").value = decodeURIComponent(parts[2][1])
// @ts-ignore
document.getElementById("precio").value = decodeURIComponent(parts[3][1])
// @ts-ignore
document.getElementById("stock").value =decodeURIComponent( parts[4][1])
// @ts-ignore
document.getElementById("imagen").value =decodeURIComponent( parts[5][1])

function modificar() {
    // @ts-ignore
    let id = document.getElementById("id").value
    // @ts-ignore
    let nombre = document.getElementById("nombre").value
    // @ts-ignore
    let descripcion = document.getElementById("descripcion").value
    // @ts-ignore
    let precio = parseFloat(document.getElementById("precio").value)
    // @ts-ignore
    let stock = parseInt(document.getElementById("stock").value)
    // @ts-ignore
    let imagen = document.getElementById("imagen").value
   
    let producto = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        stock: stock,
        imagen:imagen
    }
    let url = "http://localhost:5000/productos/"+id
    const options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    // @ts-ignore
    fetch(url, options)
        .then(function () {
            alert("Su producto fue modificado con exito")
            window.location.href = "./productos.html";  
        })
        .catch(err => {
            console.error(err);
            alert("Error al Modificar producto")
        })    
        console.log(producto)  
}