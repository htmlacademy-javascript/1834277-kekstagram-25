import {getPictureCollection} from './data.js';
const photosList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photos = getPictureCollection();

const photosListFragment = document.createDocumentFragment();

photos.forEach(({url, likes, comments}) => {
  const newPhoto = photoTemplate.cloneNode(true);
  newPhoto.querySelector('.picture__img').src = url;
  newPhoto.querySelector('.picture__likes').textContent = likes;
  newPhoto.querySelector('.picture__comments').textContent = comments.length;
  photosListFragment.appendChild(newPhoto);
});

photosList.appendChild(photosListFragment);
export {photos};
