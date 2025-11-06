class ViewModel {
    constructor() {
        this.categorias = {
            electronica: [      // rutas de las img
                new Producto("Televisor LG LN340C 32\" Clase HD", "S/ 2,509.00", "img/televisor-lg.jpg", `Especificaciones de LG LN340C 32" Class HD. Tamaño de la pantalla (diagonal): 32\". Resolución: 1366 x 768. Brillo máximo: 240 nits / cd/m2. Relación de aspecto: 16:9. Conectividad: 2 x HDMI, 1 x toslink óptica (audio), 1 x USB, 1 x RJ45. Control de E/S: RS-232C. Vida útil aproximada: 30000 horas. Ajuste giratorio e inclinación. Ranura de bloqueo Kensington. Peso del paquete: 13.475 lb. Dimensiones caja (LxWxH): 31.7 x 19.9 x 5.4.`), //cambiar dirrecion
                new Producto("LAPTOP GAMING VICTUS 15-FB2002LA", "S/ 3,199.00", "img/laptop-victus.jpg", `Especificaciones técnicas: Procesador AMD Ryzen 5 8645HS (hasta 5 GHz, 6 núcleos, 12 hilos). Memoria: 8 GB DDR5-5600 (1x8). Almacenamiento: SSD PCIe Gen4 NVMe 512 GB. GPU: NVIDIA GeForce RTX 3050 (6 GB GDDR6). Batería: hasta 13 horas. SO: Windows 11 Home. Pantalla: FHD 15.6" IPS 144 Hz, 300 nits. Peso: 2.29 kg. Dimensiones: 35.79 x 25.5 x 2.35 cm. Audio: DTS:X Ultra. Webcam: HD 720p.`), //cambiar dirrecion
                new Producto("Audífonos Sony WH-CH720N", "S/ 259.00", "img/audifonos-sony.jpg", `Noise cancelling con sensor de ruido dual y procesador integrado V1. Diseño cómodo y ligero. Autonomía hasta 35 horas y carga rápida.`) //cambiar dirrecion
            ],
            moda: [
                 new Producto("CASACA MOTORISTA DE CUERO Nike", "S/ 314.00", "img/casaca-cuero.jpg", `Casaca estilo motorista con diseño deportivo y ajuste cómodo.`), //cambiar dirrecion
                 new Producto("Jeans Wide High Jeans", "S/ 109", "img/jeans-wide-high.jpg", `Jeans de cinco bolsillos en denim de algodón. Talle alto, pierna ancha y corte recto. Modelo referencial: 177 cm, talla 38.`) //cambiar dirrecion
            ],
            hogar: [
                new Producto("Sofá 3 cuerpo REIMS", "S/ 899", "img/sofa-reims.jpg", `El Sofá 3 Cuerpos REIMS destaca por su diseño simple y elegante, ideal para espacios reducidos. Estructura sólida y tapizado de fácil cuidado. Dimensiones aprox.: Alto 75 cm · Ancho 180 cm · Profundidad 75 cm. Materiales: estructura y patas de madera, relleno de espuma y tapiz de tela. Política de envío (Lima Metropolitana): entrega hasta 3 pisos si las escaleras son accesibles; no se suben por escaleras de caracol.`), //cambiar dirrecion
                new Producto("LED Lámparas de Techo", "S/ 135.00", "img/lampara-techo.jpg", `Plafón LED de techo con cuerpo de metal y acrílico y difusor de alta transmitancia. Dimensiones: 20×20×7 cm. Potencia: 24W. Temperaturas de color: 3000K/4500K/6500K. Cobertura aproximada: 15–20 m². Fácil de instalar y limpiar.`) //cambiar dirrecion
            ],
            deportes: [
                new Producto("Bicicleta Monark Highlander XT aro 29", "S/ 1,399.00", "img/bicicleta-monark.jpg", `Modelo MKP HIGHLANDER XT 29. Aro 29" con llantas KENDA K1080 29×2.20. Suspensión delantera y trasera, frenos de disco hidráulicos, transmisión 3×8 (componentes Shimano). Componentes principales en aluminio y asiento ergonómico; ideal para rutas y montaña.`), //cambiar dirrecion
                new Producto("Pelotas Adidas CNXT25", "S/ 120.00", "img/balon-adidas.jpg", `Pelota Adidas oficial, excelente rebote y durabilidad.`) //cambiar dirrecion
            ],
            juguetes: [
                new Producto("LEGO Star Wars Imperial Star Destroyer", "S/ 1,185.00", "img/lego-star-wars-imperial-star-destroyer.jpg", `Set de colección LEGO Star Wars: Imperial Star Destroyer. Piezas detalladas recomendado para mayores de 10 años y fanáticos/coleccionistas.`), //cambiar dirrecion
                new Producto("Muñeca Barbie Viajera", "S/ 149.90", "img/muneca-barbie-viajera.jpg", `Muñeca Barbie Viajera con varios accesorios (maleta, mochila, cachorro, cámara, teléfono, entre otros). Colores y decoraciones pueden variar. Recomendado para niños mayores de 3 años; contiene piezas pequeñas.`) //cambiar dirrecion
            ]
        };
    }

    obtenerProductos(categoria) {
        return this.categorias[categoria] || [];
    }
}