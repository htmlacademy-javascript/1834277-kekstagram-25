import { getPictureCollection } from './data.js';
const photosList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').textContent.querySelector('.picture');

const photos = getPictureCollection();

const photosListFragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const newPhoto = photoTemplate.cloneNode(true);
  newPhoto.querySelector('.picture__img').src = photo.url;
  newPhoto.querySelector('.picture__likes').src = photo.likes;
  newPhoto.querySelector('.picture__comments').src = photo.comments;
  photosListFragment.appendChild(newPhoto);
});

photosList.appendChild(photosListFragment);
