class ViewModel {
    constructor() {
        this.categorias = {
            electronica: [      //rutas de las img
                new Producto("Televisor  Lg Ln340C de 32 Clase Hd\"", "S/ 2,509.00", " "),
                new Producto("LAPTOP GAMING VICTUS 15-FB2002LA", "S/ 3,199", " "),
                new Producto("Audífonos Sony", "S/ 299", " ")
            ],
            moda: [
                new Producto("Casaca de cuero", "S/ 250", " "),
                new Producto("Zapatillas Nike", "S/ 399", " "),
                new Producto("Jeans Levis", "S/ 189", " ")
            ],
            hogar: [
                new Producto("Sofá 3 cuerpos", "S/ 899", " "),
                new Producto("Lámpara moderna", "S/ 120", " ")
            ],
            deportes: [
                new Producto("Bicicleta Trek", "S/ 1899", " "),
                new Producto("Balón Adidas", "S/ 120", " ")
            ],
            juguetes: [
                new Producto("LEGO Star Wars", "S/ 350", " "),
                new Producto("Muñeca Barbie", "S/ 150", " ")
            ]
        };
    }

    obtenerProductos(categoria) {
        return this.categorias[categoria] || [];
    }
}