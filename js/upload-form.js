import {body} from './full-screen.js';

const COMMENTS_MAX_LENGTH = 140;
const HASHTAG_MAX_LENGTH = 20;
const HASHTAG_MAX_NUMBER = 5;
const form = document.querySelector('#upload-select-image');
const hashtag = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');
const checkRepeatHashtag = (arg) => arg.some((val, index, arr) => arr.indexOf(val) !== index);
const checkLengthHashtag = (arg) => arg.some((value) => value.length > HASHTAG_MAX_LENGTH);

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__form-error'
});

function validateHashtags () {
  const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;
  const hashtagLowerCase = hashtag.value.toLowerCase();
  const hashtagsArray = hashtagLowerCase.split(' ');

  if (hashtagsArray.length > HASHTAG_MAX_NUMBER) {
    hashtag.setCustomValidity(`Хэштегов должно быть не больше ${HASHTAG_MAX_NUMBER}`);
    return false;
  }

  if (checkLengthHashtag(hashtagsArray)) {
    hashtag.setCustomValidity(`Хэш-тег не должен превышать ${HASHTAG_MAX_LENGTH} символов`);
    return false;
  }

  if (hashtagsArray.every((element) => re.test(element)) === false) {
    hashtag.setCustomValidity('Хэштеги должны состоять из решетки, букв и цифр');
    return false;
  }

  if (checkRepeatHashtag(hashtagsArray)) {
    hashtag.setCustomValidity('Хэштеги не должны повторяться');
    return false;
  }
  hashtag.setCustomValidity('');
  return true;
}

function validateTextDescription () {
  const textDescriptionArray = textDescription.value.split('');
  if (textDescriptionArray.length <= COMMENTS_MAX_LENGTH) {
    return true;
  }
  return false;
}

pristine.addValidator(hashtag, validateHashtags, 'что-то не красивое');

pristine.addValidator(textDescription, validateTextDescription,'что-то не красивое');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const uploadFile = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');

uploadFile.addEventListener('change', () => {
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');
});

const uploadCancelButton = document.querySelector('#upload-cancel');

uploadCancelButton.addEventListener('click', () => {
  imgUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    imgUpload.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadFile.value = '';
  }
});

hashtag.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

textDescription.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
