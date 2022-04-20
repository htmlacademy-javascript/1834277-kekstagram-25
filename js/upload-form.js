import {body} from './full-screen.js';

const form = document.querySelector('#upload-select-image');
const hashtag = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__form-error'
});

function validateHashtags () {
  const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;
  const hashtagsArray = hashtag.value.split(' ');
  if (hashtagsArray.length >= 1 && hashtagsArray.length <= 5) {
    hashtagsArray.forEach((element) => {
      if (re.test(element) !== true) {
        return false;
      }
      for (let i = 0; i < hashtagsArray.length - 1; i++) {
        if (element === hashtagsArray[i]) {
          return false;
        }
      }
      return true;
    });
  }
  return false;
}

function validateTextDescription () {
  const textDescriptionArray = textDescription.value.split('');
  if (textDescriptionArray.length >= 0 && textDescriptionArray.length <= 140) {
    return true;
  }
  return false;
}

pristine.addValidator(hashtag, validateHashtags);

pristine.addValidator(textDescription, validateTextDescription);

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

/* const imgUploadPreview = document.querySelector('.img-upload__preview > img'); */

/* uploadFile.addEventListener("change", function () {
  getImgData();
}); */

/* function getImgData() {
  const files = uploadFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      imgUploadPreview.style.display = "block";
      imgUploadPreview.innerHTML = '<img src="' + this.result + '" />';
    });
  }
} */

/* imgUploadPreview.src = URL.createObjectURL(uploadFile.target.files[0]); */
/* console.log(uploadFile.files[0]); */
/* console.log(URL.createObjectURL(uploadFile.target.files[0])); */

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
