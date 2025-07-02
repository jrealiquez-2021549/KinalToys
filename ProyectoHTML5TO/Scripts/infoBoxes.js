document.addEventListener('DOMContentLoaded', () => {
    const infoBox = document.getElementById('infoBox');
    const prevButton = document.getElementById('prevInfo');
    const nextButton = document.getElementById('nextInfo');
    let currentIndex = 0;

    const infoData = [
        {
            title: 'Bienvenido a nuestra Tienda de Teléfonos',
            description: 'Somos tu destino ideal para encontrar los últimos smartphones y accesorios. Ofrecemos una amplia selección de marcas líderes y modelos innovadores para satisfacer todas tus necesidades tecnológicas.'
        },
        {
            title: 'Samsung: Innovación y Liderazgo',
            description: 'Samsung es una marca líder mundial en tecnología, conocida por sus pantallas de alta calidad, cámaras innovadoras y una amplia gama de dispositivos que van desde la gama de entrada hasta los plegables premium.'
        },
        {
            title: 'Apple: Experiencia y Ecosistema',
            description: 'Apple se destaca por su diseño elegante, su potente rendimiento y su ecosistema integrado de hardware y software. Sus iPhones son famosos por su facilidad de uso, seguridad y un vasto catálogo de aplicaciones.'
        },
        {
            title: 'Google Pixel: Inteligencia Artificial y Fotografía',
            description: 'Los teléfonos Google Pixel ponen la inteligencia artificial en el centro de la experiencia del usuario, ofreciendo cámaras excepcionales con fotografía computacional avanzada y las últimas actualizaciones de Android directamente de Google.'
        },
        {
            title: 'Xiaomi: Tecnología Accesible',
            description: 'Xiaomi ofrece dispositivos con una excelente relación calidad-precio, combinando un rendimiento potente con características innovadoras. Su amplia gama de smartphones cubre todas las necesidades y presupuestos.'
        },
        {
            title: 'OnePlus: Velocidad y Fluidéz',
            description: 'OnePlus se ha ganado la reputación de ofrecer smartphones con un rendimiento extremadamente rápido y una experiencia de usuario muy fluida, gracias a su hardware potente y su software OxygenOS optimizado.'
        },
        // Puedes añadir más marcas o información aquí
        {
            title: 'Tu Compañero Tecnológico',
            description: 'Explora nuestras categorías, compara modelos y encuentra el dispositivo perfecto que se adapte a tu estilo de vida. ¡La tecnología del mañana te espera hoy!'
        }
    ];

    function updateInfoBox(index) {
        // Asegura que el índice esté dentro de los límites del array y sea circular
        currentIndex = (index + infoData.length) % infoData.length;
        
        const currentInfo = infoData[currentIndex];
        infoBox.innerHTML = `<h3>${currentInfo.title}</h3><p>${currentInfo.description}</p>`;
    }

    // Event listeners para los botones
    prevButton.addEventListener('click', () => {
        updateInfoBox(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        updateInfoBox(currentIndex + 1);
    });

    // Cargar el primer cuadro de información al inicio
    updateInfoBox(0);
});