document.addEventListener("DOMContentLoaded", () => {
    const categoria = document.body.dataset.categoria;
    const vm = new ViewModel();
    const productos = vm.obtenerProductos(categoria);
    const contenedor = document.getElementById("productos");

    productos.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="../${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p>${p.precio}</p>
        `;
        contenedor.appendChild(div);
    });
});