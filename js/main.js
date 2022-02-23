// генерация случайного числа, максимум и минимум включаются
//https://myrusakov.ru/js-random-numbers.html
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt();


//Функция для проверки максимальной длины строки
//https://www.w3resource.com/javascript/form/string-length.php

function checkRange(inputText, maxLength) {
  const userInput = inputText.value;
  if (userInput.length < maxLength) {
    return true;
  }
  return false;
}

checkRange();
