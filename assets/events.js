document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const showMoreBtn = document.getElementById("showMoreBtn");
    const imagesToAdd = 5;
    let currentImageIndex = 0;

    function addImages() {
        for (let i = 0; i < imagesToAdd; i++) {
            if (currentImageIndex >= imageLinks.length) {
                showMoreBtn.style.display = "none";
                break;
            }
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");
            const img = document.createElement("img");
            img.src = imageLinks[currentImageIndex];
            img.alt = `Imagem ${currentImageIndex + 1}`;
            imageContainer.appendChild(img);
            gallery.appendChild(imageContainer);
            currentImageIndex++;
            setTimeout(() => {
                imageContainer.style.opacity = "1";
                imageContainer.style.transform = "translateY(0)";
            }, 50 * i);
        }
    }

    showMoreBtn.addEventListener("click", addImages);
    addImages(); // Adiciona as primeiras 5 imagens ao carregar a página
});

const imageLinks = [
    "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/gatos-brincando-Petlove.jpg",
    "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/gatos-brincando-Petlove.jpg",
    "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/gatos-brincando-Petlove.jpg",
    "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/gatos-brincando-Petlove.jpg",
    "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/gatos-brincando-Petlove.jpg",
    "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/gatos-brincando-Petlove.jpg",
    "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/gatos-brincando-Petlove.jpg",
    "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/gatos-brincando-Petlove.jpg",
    "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/gatos-brincando-Petlove.jpg",
    "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/gatos-brincando-Petlove.jpg",
    "https://blog-static.petlove.com.br/wp-content/uploads/2022/07/gatos-brincando-Petlove.jpg",
    
    // Adicione mais links de imagens aqui
];