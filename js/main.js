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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArrayElement = function (elements) {
  return elements[getRandomInt(0, elements.length - 1)];
};

const createComment = function (count) {
  const comments = [];
  for (let i = 0; i < count; i++) {
    const comment = {
      id: getRandomInt(1, 1000) + i,
      avatar: `img/avatar-${  getRandomInt(AVATAR_MIN_NUMBER, AVATAR_MAX_NUMBER)  }.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(AUTHOR_NAMES)
    };
    comments.push(comment);
  }
  return comments;
};

const getPictureDescription = function (count) {
  const pictures = [];
  for (let i = 0; i < count; i++) {
    const picture = {
      id: i + 1,
      url: `photos/${  i + 1  }.jpg`,
      description: `Фото №${  i + 1}`,
      likes: getRandomInt(LIKES_MIN, LIKES_MAX),
      comments: createComment(getRandomInt(COMMENTS_NUMBER_MIN, COMMENTS_NUMBER_MAX))
    };
    pictures.push(picture);
  }
  return pictures;
};

getPictureDescription(COLLECTION_PICTURES_COUNT);
