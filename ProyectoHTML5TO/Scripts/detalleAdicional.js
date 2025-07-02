document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    const detailTitle = document.getElementById('detailTitle');
    const headerTitle = document.getElementById('headerTitle');
    const productName = document.getElementById('productName');
    const productImage = document.getElementById('productImage');
    const productDescription = document.getElementById('productDescription');
    const productPrice = document.getElementById('productPrice');
    const addToCartBtn = document.getElementById('addToCartBtn');

    // Definición de datos para accesorios, productos tecnológicos y servicios
    const itemsData = {
        // Accesorios
        'fundaSilicona': {
            name: 'Funda de Silicona Ultra',
            image: '../Images/FundaSilicona.jpg',
            description: 'Protección elegante y ligera, diseñada a medida para tu smartphone, con un tacto suave y agradable. Material duradero que absorbe impactos.',
            price: '$15.99'
        },
        'cargadorUSBC': {
            name: 'Cargador Rápido USB-C',
            image: '../Images/Cargador.jpg', 
            description: 'Carga tu dispositivo en tiempo récord con este cargador de alta potencia. Compatible con la mayoría de dispositivos USB-C y con protección contra sobrecarga.',
            price: '$29.99'
        },
        'auricularesInalambricos': {
            name: 'Auriculares Inalámbricos Pro',
            image: '../Images/Auriculares.jpg', 
            description: 'Disfruta de sonido envolvente de alta fidelidad y llamadas nítidas sin cables. Diseño ergonómico para comodidad durante todo el día y batería de larga duración.',
            price: '$49.99'
        },
        'powerBank10000': {
            name: 'Power Bank 10000 mAh',
            image: '../Images/PowerBank.jpg', 
            description: 'No te quedes sin batería. Este power bank portátil de 10000 mAh te proporciona múltiples cargas para tus dispositivos en cualquier lugar. Con doble salida USB.',
            price: '$34.99'
        },
        // Otros Productos Tecnológicos
        'memoriaMicroSD128': {
            name: 'Memoria Micro SD 128GB',
            image: '../Images/MemoriaMicro.jpg', 
            description: 'Amplía el almacenamiento de tu smartphone, tablet o cámara con esta tarjeta Micro SD de 128GB de alta velocidad. Ideal para fotos y videos 4K.',
            price: '$22.50'
        },
        'usbFlashDrive64': {
            name: 'USB Flash Drive 64GB',
            image: '../Images/USBFlash.jpg', 
            description: 'Transfiere tus archivos de forma rápida y segura con esta unidad flash USB de 64GB. Diseño compacto y duradero, perfecta para llevar tu información contigo.',
            price: '$12.00'
        },
        'miniDronePrincipiantes': {
            name: 'Mini Drone para Principiantes',
            image: '../Images/MiniDron.jpg', 
            description: 'Ideal para aprender a volar. Este mini drone es fácil de controlar, incluye cámara HD para fotos y videos aéreos, y funciones de despegue/aterrizaje automático.',
            price: '$85.00'
        },
        'tecladoMouseInalambricos': {
            name: 'Teclado y Mouse Inalámbricos',
            image: '../Images/TecladoMouse.jpg', 
            description: 'Mejora tu productividad con este combo de teclado y mouse inalámbricos. Conexión estable, diseño ergonómico y larga duración de batería. Plug and play.',
            price: '$39.99'
        },
        // Servicios
        'reparacionTelefonos': {
            name: 'Reparación de Teléfonos',
            image: '../Images/ReparacionTelefonos.jpg', 
            description: 'Ofrecemos diagnóstico y reparación profesional de teléfonos móviles. Pantallas rotas, problemas de batería, fallos de software y más. ¡Garantía en todas las reparaciones!',
            price: 'Consulta en Tienda'
        },
        'liberacionCelulares': {
            name: 'Liberación de Celulares',
            image: '../Images/LiberacionCelular.jpg', 
            description: 'Desbloquea tu dispositivo para que pueda ser utilizado con cualquier compañía telefónica del mundo. Servicio rápido y seguro, compatible con la mayoría de marcas y modelos.',
            price: 'Consulta en Tienda'
        },
        'ventaChips': {
            name: 'Venta de Chips o SIM Cards',
            image: '../Images/Chips.jpg', 
            description: 'Disponemos de una amplia variedad de chips y tarjetas SIM de las principales compañías telefónicas. Actívalos al instante y mantente conectado.',
            price: 'Desde $5.00'
        },
        'actualizacionSoftware': {
            name: 'Actualización de Software',
            image: '../Images/ActualizacionSoftwar.jpg', 
            description: 'Mantenemos tu teléfono al día con las últimas versiones del sistema operativo y parches de seguridad. Optimizamos el rendimiento y resolvemos problemas de software.',
            price: 'Consulta en Tienda'
        }
    };

    if (itemId && itemsData[itemId]) {
        const item = itemsData[itemId];
        detailTitle.textContent = `${item.name} - Tienda de Teléfonos`;
        headerTitle.textContent = item.name; // Actualiza el título del header
        productName.textContent = item.name;
        productImage.src = item.image;
        productImage.alt = item.name;
        productDescription.textContent = item.description;
        productPrice.textContent = item.price;
        
        // Ocultar el botón "Agregar al Carrito" si es un servicio o no tiene precio
        if (item.price === 'Consulta en Tienda' || itemId.startsWith('reparacion') || itemId.startsWith('liberacion') || itemId.startsWith('ventaChips') || itemId.startsWith('actualizacionSoftware')) {
            addToCartBtn.style.display = 'none';
        } else {
            addToCartBtn.style.display = 'inline-block'; // Asegurarse de que esté visible para productos con precio
        }

    }
});