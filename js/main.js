const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const AUTHOR_NAMES = [
  'Санта',
  'Алиса',
  'Бэтмен',
  'Рудольф',
  'Патрик',
  'Джордж',
  'Тифани'
];

const COLLECTION_PICTURES_COUNT = 25;

const AVATAR_MIN_NUMBER = 1;
const AVATAR_MAX_NUMBER = 6;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_NUMBER_MIN = 0;
const COMMENTS_NUMBER_MAX = 5;
const ID_MAX_NUMBER = 1000;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArrayElement = function (elements) {
  return elements[getRandomInt(0, elements.length - 1)];
};

const getComment = function () {
  return {
    id: getRandomInt(1, ID_MAX_NUMBER),
    avatar: `img/avatar-${  getRandomInt(AVATAR_MIN_NUMBER, AVATAR_MAX_NUMBER)  }.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(AUTHOR_NAMES)
  };
};

const getPictureDescription = function (index) {
  return {
    id: getRandomInt(1, ID_MAX_NUMBER),
    url: `photos/${ index + 1 }.jpg`,
    description: `Фото №${ index + 1 }`,
    likes: getRandomInt(LIKES_MIN, LIKES_MAX),
    comments: Array.from({ length: getRandomInt(COMMENTS_NUMBER_MIN, COMMENTS_NUMBER_MAX) }, () => getComment())
  };
};

const pictureCollection = Array.from({ length: COLLECTION_PICTURES_COUNT }, (it, index) => getPictureDescription(index));
