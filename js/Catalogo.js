let currentImageIndex = 0;
let currentCategoryImages = [];

const images = {
    dispensadores: [
        { src: 'CATEGORIA DISPENSADORES/ENCABEZADO.jpg' },
        { src: 'CATEGORIA DISPENSADORES/IMAGEN 1.jpg' },
        { src: 'CATEGORIA DISPENSADORES/IMAGEN 2.jpg' },
        { src: 'CATEGORIA DISPENSADORES/IMAGEN 3.jpg' },
        { src: 'CATEGORIA DISPENSADORES/IMAGEN 4.jpg' },
        { src: 'CATEGORIA DISPENSADORES/FINAL.jpg' }
    ],
    bar: [
        { src: 'Bar/A.jpg' },
        { src: 'Bar/B.jpg' },
        { src: 'Bar/C.jpg' },
        { src: 'Bar/D.jpg' },
        { src: 'Bar/F.png' },
        { src: 'Bar/G.jpg' },
        { src: 'Bar/H.jpg' }
    ],
    spa: [
        { src: 'Spa/A.png' },
        { src: 'Spa/B.png' },
        { src: 'Spa/E.jpg' },
        { src: 'Spa/D.jpg' },
        { src: 'Spa/F.jpg' },
        { src: 'Spa/C.jpg' },
        { src: 'Spa/H.jpg' },
        { src: 'Spa/I.jpg' },
        { src: 'Spa/G.jpg' }
    ],
    habitaciones: [
        { src: 'CATEGORIA HABITACIONES/habitacion1.jpg' },
        { src: 'CATEGORIA HABITACIONES/habitacion2.jpg' },
        { src: 'CATEGORIA HABITACIONES/habitacion3.jpg' },
        { src: 'CATEGORIA HABITACIONES/habitacion4.jpg' },
        { src: 'CATEGORIA HABITACIONES/habitacion5.jpg' }
    ],
    Marcas: [
        { src: 'NUESTRAS MARCAS/TerraB.jpg' },
        { src: 'NUESTRAS MARCAS/AGRARIA1.jpg' },
        { src: 'NUESTRAS MARCAS/OMNISENS1.jpg' },
        { src: 'NUESTRAS MARCAS/KIT DAN1.jpg' },
        { src: 'NUESTRAS MARCAS/TerraA.jpg' }
    ],
    VisionMision: [
        { src: 'Historia/MisionVision.jpeg' }
    ],
    'linea-comercial': [
        { src: 'CATEGORIA LINEA COMERCIAL/comercial1.jpg' },
        { src: 'CATEGORIA LINEA COMERCIAL/comercial2.jpg' },
        { src: 'CATEGORIA LINEA COMERCIAL/comercial3.jpg' },
        { src: 'CATEGORIA LINEA COMERCIAL/comercial4.jpg' },
        { src: 'CATEGORIA LINEA COMERCIAL/comercial5.jpg' }
    ]
};

document.querySelectorAll('a[data-catalog]').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const category = event.target.getAttribute('data-catalog');
        openModal(category);
    });
});

function openModal(category) {
    const modalImages = document.getElementById('modalImages');
    modalImages.innerHTML = '';

    currentCategoryImages = images[category];

    if (category === 'dispensadores') {
        // Insertar el encabezado
        const headerImg = document.createElement('img');
        headerImg.src = currentCategoryImages[0].src;
        headerImg.alt = 'Encabezado';
        headerImg.classList.add('header-img');
        modalImages.appendChild(headerImg);

        // Insertar las imágenes restantes
        for (let i = 1; i < currentCategoryImages.length - 1; i++) {
            const img = document.createElement('img');
            img.src = currentCategoryImages[i].src;
            img.alt = `Image ${i}`;
            img.addEventListener('click', () => openLargeModal(i));
            modalImages.appendChild(img);
        }

        // Insertar el pie de página
        const footerImg = document.createElement('img');
        footerImg.src = currentCategoryImages[currentCategoryImages.length - 1].src;
        footerImg.alt = 'Pie de página';
        footerImg.classList.add('footer-img');
        modalImages.appendChild(footerImg);
    } else {
        // Insertar todas las imágenes para otras categorías
        currentCategoryImages.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = `Image ${index + 1}`;
            img.addEventListener('click', () => openLargeModal(index));
            modalImages.appendChild(img);
        });
    }

    document.getElementById('myModal').style.display = 'flex';
}

function adjustModalSize() {
    const modalImages = document.querySelector('.modal-images');
    const images = modalImages.querySelectorAll('img');
    const modalContent = document.querySelector('.modal-content');

    if (images.length > 0) {
        const rows = Math.ceil(images.length / 3); // Ajusta según la cantidad de imágenes por fila
        const imageHeight = images[0].clientHeight;
        const newHeight = (imageHeight + 20) * rows; // Ajusta el cálculo de altura total
        modalContent.style.height = `${newHeight}px`;
    } else {
        modalContent.style.height = 'auto';
    }
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function openLargeModal(index) {
    currentImageIndex = index;
    const largeImg = document.getElementById('largeImg');
    largeImg.src = currentCategoryImages[currentImageIndex].src;
    document.getElementById('largeModal').style.display = 'flex';
}

function closeLargeModal() {
    document.getElementById('largeModal').style.display = 'none';
}

function changeImage(n) {
    currentImageIndex += n;
    if (currentImageIndex >= currentCategoryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentCategoryImages.length - 1;
    }
    const largeImg = document.getElementById('largeImg');
    largeImg.src = currentCategoryImages[currentImageIndex].src;
}

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    } else if (event.target == document.getElementById('largeModal')) {
        closeLargeModal();
    }
}
