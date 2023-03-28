import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
/*

Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery.
 Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. 
Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
*/
const galleryUl = document.querySelector(".gallery");
const galleryMarkupLi = galleryItems.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>`).join(" ");
    galleryUl.insertAdjacentHTML("afterbegin", galleryMarkupLi);
galleryUl.addEventListener('click', handleModalOpen);

function handleModalOpen(event) {
    event.preventDefault();
    const currentLi = event.target;

     if (currentLi.nodeName !== "IMG") {
    return;
     }
    const lightbox = new SimpleLightbox('.gallery .gallery__link', {
        captions: true,
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
});
  
};