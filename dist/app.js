"use strict";

var galleryItems = [{
  preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
  description: "Hokkaido Flower"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
  description: "Container Haulage Freight"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
  description: "Aerial Beach View"
}, {
  preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
  original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
  description: "Flower Blooms"
}, {
  preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
  original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
  description: "Alpine Mountains"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
  description: "Mountain Lake Sailing"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
  description: "Alpine Spring Meadows"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
  description: "Nature Landscape"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
  description: "Lighthouse Coast Sea"
}];
var gallery = document.querySelector("ul.js-gallery");
var bigImg = document.querySelector("img.lightbox__image");

var makeGalleryItemMarkup = function makeGalleryItemMarkup(image) {
  var description = image.description,
      original = image.original,
      preview = image.preview;
  return "\n  <li class=\"gallery__item\">\n  <a\n    class=\"gallery__link\"\n    href= ".concat(original, "\n  >\n    <img\n      class=\"gallery__image\"\n      src=").concat(preview, "\n      data-source=").concat(original, "\n      alt=").concat(description, "\n    />\n  </a>\n</li>");
};

var makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join("");
gallery.insertAdjacentHTML("beforeend", makeGalleryMarkup); // open and close modal

var modal = document.querySelector(".js-lightbox");
var button = document.querySelector(".lightbox__button");

var openModal = function openModal() {
  return modal.classList.add("is-open");
};

var closeModal = function closeModal() {
  return modal.classList.remove("is-open");
};

var overlay = document.querySelector(".lightbox__overlay");
gallery.addEventListener("click", imageEnlarge);

function imageEnlarge(evt) {
  evt.preventDefault();
  var imgClick = evt.target;

  if (imgClick.nodeName !== "IMG") {
    return;
  }

  console.log("Img clicked");
  openModal();
  console.log(imgClick.src);
  bigImg.src = imgClick.dataset.source;
  bigImg.alt = imgClick.dataset.alt;
  overlay.addEventListener("click", closeModalByClick);
  document.addEventListener("keydown", closeModalByEsc);
}

button.addEventListener("click", imageClose);

function imageClose() {
  closeModal();
  bigImg.src = "";
  overlay.removeEventListener("click", closeModalByClick);
  document.removeEventListener("keydown", closeModalByEsc);
}

function closeModalByClick(e) {
  if (e.target === e.currentTarget) {
    imageClose();
  }
}

function closeModalByEsc(e) {
  if (e.key === "Escape") {
    imageClose();
  }
}