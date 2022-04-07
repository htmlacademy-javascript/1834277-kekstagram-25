import {getPictureCollection} from './data.js';
const photosList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photos = getPictureCollection();

const photosListFragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const newPhoto = photoTemplate.cloneNode(true);
  newPhoto.querySelector('.picture__img').src = photo.url;
  newPhoto.querySelector('.picture__likes').textContent = photo.likes;
  newPhoto.querySelector('.picture__comments').textContent = photo.comments.length;
  photosListFragment.appendChild(newPhoto);
});

photosList.appendChild(photosListFragment);
