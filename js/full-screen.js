import {photos} from './upload-photo.js';

const fullScreenPopup = document.querySelector('.big-picture');
const fullScreenPhoto = document.querySelector('.big-picture__img > img');
const thumbnails = document.querySelectorAll('.picture');
const buttonClose = document.querySelector('.big-picture__cancel');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const commentsCountBlock = document.querySelector('.social__comment-count');
const commentsLoaderButton = document.querySelector('.comments-loader');
const body = document.querySelector('body');

const socialComments = document.querySelector('.social__comments');
socialComments.innerHTML = '';

const createCommentTemplate = function () {

  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const newCommentAvatarPhoto = document.createElement('img');
  newCommentAvatarPhoto.classList.add('social__picture');
  newCommentAvatarPhoto.width = '35';
  newCommentAvatarPhoto.height = '35';
  newComment.appendChild(newCommentAvatarPhoto);

  const newCommentText = document.createElement('p');
  newCommentText.classList.add('social__text');
  newComment.appendChild(newCommentText);

  socialComments.appendChild(newComment);
};

createCommentTemplate();
const commentTemplate = document.querySelector('.social__comment');

const addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', () => {
    fullScreenPopup.classList.remove('hidden');
    fullScreenPhoto.src = photo.url;
    likesCount.textContent = photo.likes;
    commentsCount.textContent = photo.comments.length;
    commentsCountBlock.classList.add('hidden');
    commentsLoaderButton.classList.add('hidden');
    body.classList.add('modal-open');
    for (let i = 0; i < photo.comments.length; i++) {
      const commentElement = commentTemplate.cloneNode(true);
      commentElement.querySelector('.social__picture').src = photo.comments[i].avatar;
      commentElement.querySelector('.social__picture').alt = photo.comments[i].name;
      commentElement.querySelector('.social__text').textContent = photo.comments[i].message;
      socialComments.appendChild(commentElement);
    }
  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}

buttonClose.addEventListener('click', () => {
  fullScreenPopup.classList.add('hidden');
  commentsCountBlock.classList.remove('hidden');
  commentsLoaderButton.classList.remove('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    fullScreenPopup.classList.add('hidden');
    commentsCountBlock.classList.remove('hidden');
    commentsLoaderButton.classList.remove('hidden');
    body.classList.remove('modal-open');
  }
});
