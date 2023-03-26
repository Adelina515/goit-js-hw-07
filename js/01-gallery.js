import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
/*
Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:
Створення і рендер розмітки на підставі масиву даних galleryItems
 і наданого шаблону елемента галереї.+++
Реалізація делегування на ul.gallery і отримання url великого зображення.+++
Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. +++
Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
Відкриття модального вікна по кліку на елементі галереї. +++
Для цього ознайомся з документацією і прикладами.
Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
 Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
Розмітка елемента галереї
Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>,
 і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих,
  що містяться в цьому шаблоні.
</li>Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням
 користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.event.preventDefault();
*/
const galleryUl = document.querySelector(".gallery");
const galleryMarkupLi = galleryItems.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
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
    
    import * as basicLightbox from 'basiclightbox' 
    
    const instance = basicLightbox.create(` <img
                class="gallery__image"
                src="${currentLi.dataset.sourse}"
                width="800" height="600"
            />`).show() 


};


