document.addEventListener("DOMContentLoaded", () => {
    const categoria = document.body.dataset.categoria;
    const vm = new ViewModel();
    const productos = vm.obtenerProductos(categoria);
    const contenedor = document.getElementById("productos");

    productos.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-img" src="../${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p class="precio">${p.precio}</p>
            <p class="descripcion">${p.descripcion}</p>
            <button class="ver-mas">Ver más</button>
        `;
        contenedor.appendChild(div);

        // inicializar botón 'Ver más' para mostrar/ocultar descripción completa
        const btn = div.querySelector('.ver-mas');
        const desc = div.querySelector('.descripcion');
        if (!p.descripcion || p.descripcion.trim().length === 0) {
            // si no hay descripción, ocultar el botón
            btn.style.display = 'none';
        } else if (p.descripcion.length < 120) {
            // descripciones cortas no necesitan botón
            btn.style.display = 'none';
        } else {
            // Attach listener that operates on the specific card where the click happened.
            btn.addEventListener('click', (e) => {
                const button = e.currentTarget;
                const card = button.closest('.producto');
                if (!card) return;
                const localDesc = card.querySelector('.descripcion');
                if (!localDesc) return;
                const expanded = localDesc.classList.toggle('expanded');
                button.textContent = expanded ? 'Ver menos' : 'Ver más';
            });
        }
    });
});