class ViewModel {
    constructor() {
        this.categorias = {
            electronica: [      //rutas de las img
                new Producto("Televisor Lg Ln340C de 32 Clase Hd", "S/ 2,509.00", "img/televisor-lg.jpg"),
                new Producto("LAPTOP GAMING VICTUS 15-FB2002LA", "S/ 3,199", "img/laptop-victus.jpg"),
                new Producto("Audífonos Sony WH-CH720N", "S/ 259", "img/audifonos-sony.jpg")
            ],
            moda: [
                new Producto("Casaca de cuero", "S/ 250", "img/casaca-cuero.jpg"),
                new Producto("CASACA MOTORISTA DE CUERO Nike", "S/ 314 ", "img/casaca-motorista.jpg"),
                new Producto("Jeans Wide High Jeans", "S/ 109", "img/jeans-wide-high.jpg")
            ],
            hogar: [
                new Producto("Sofá 3 cuerpo REIMS", "S/ 899", "img/sofa-reims.jpg"),
                new Producto("LED Lámparas de Techo", "S/ 135", "img/lampara-techo.jpg")
            ],
            deportes: [
                new Producto("Bicicleta Monark highlander xt aro 29", "S/ 1,399.00", "img/bicicleta-monark.jpg"),
                new Producto("Pelotas Adidas CNXT25", "S/ 120.00", "img/balon-adidas.jpg")
            ],
            juguetes: [
                new Producto("LEGO Star Lego Star Wars Imperial Star Destroyer", "S/ 1,185.00", "img/lego-star-wars-imperial-star-destroyer.jpg"),
                new Producto("Muñeca Barbie Viajera", "S/ 149.90", "img/muneca-barbie-viajera.jpg")
            ]
        };
    }

    obtenerProductos(categoria) {
        return this.categorias[categoria] || [];
    }
}