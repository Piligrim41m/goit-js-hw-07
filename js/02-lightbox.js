import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')
const makeImages = galleryItem => {
    return galleryItems.map(galleryItem => {
        const newElementCard = document.createElement('li');
        newElementCard.classList.add("gallery__item");
        const newElementLink = document.createElement('a');
        newElementLink.classList.add("gallery__link");
        newElementLink.href = galleryItem.original
        newElementCard.appendChild(newElementLink)
        const imageElement = 
        `<img class='gallery__image'
          src='${galleryItem.preview}' 
          alt='${galleryItem.description}'>`;
        newElementLink.insertAdjacentHTML("beforeend", imageElement)
        return newElementCard;
    })
}
const elements = makeImages(galleryItems);
console.log(elements)
galleryRef.append(...elements)


galleryRef.addEventListener('click', onClikCard);

function onClikCard(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});

}

