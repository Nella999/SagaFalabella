document.addEventListener("DOMContentLoaded", () => {
    const categoria = document.body.dataset.categoria;
    const vm = new ViewModel();
    const contenedor = document.getElementById("productos");
    // appState se expone desde viewmodel.js
    const appState = window.appState || { categorias: {} };

    if (window.Vue && contenedor) {
        const { createApp, reactive, computed } = Vue;

        const ProductCard = {
            name: 'ProductCard',
            props: ['p'],
            data() {
                return { expanded: false };
            },
            computed: {
                needsButton() {
                    return this.p.descripcion && this.p.descripcion.length > 120;
                },
                imgSrc() {
                    // En páginas dentro de views/ necesitamos prefijar '../'
                    return (this.p.imagen && !this.p.imagen.startsWith('http')) ? '../' + this.p.imagen : this.p.imagen;
                }
            },
            methods: {
                toggle() { this.expanded = !this.expanded; }
            },
            template: `
                <div class="producto">
                    <img class="producto-img" :src="imgSrc" :alt="p.nombre">
                    <h3>{{ p.nombre }}</h3>
                    <p class="precio">{{ p.precio }}</p>
                    <p class="descripcion" :class="{expanded: expanded}">{{ p.descripcion }}</p>
                    <button v-if="needsButton" class="ver-mas" @click="toggle">{{ expanded ? 'Ver menos' : 'Ver más' }}</button>
                </div>
            `
        };

        // Envolver el estado expuesto por viewmodel en reactive() para que Vue lo observe
        const state = reactive(appState);

        const app = createApp({
            setup() {
                const productos = computed(() => state.categorias[categoria] || []);
                return { productos };
            },
            // Template raíz: itera 'productos' y renderiza un product-card por cada uno
            template: `
                <div>
                    <product-card v-for="(p, idx) in productos" :key="idx" :p="p"></product-card>
                </div>
            `
        });
        app.component('product-card', ProductCard);

    contenedor.innerHTML = '';
    app.mount(contenedor);
        return;
    }

    if (!contenedor) return;
});