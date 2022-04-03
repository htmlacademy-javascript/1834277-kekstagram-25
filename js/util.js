function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArrayElement = function (elements) {
  return elements[getRandomInt(0, elements.length - 1)];
};

export {getRandomInt, getRandomArrayElement};
