// Пример с обработкой ошибок
module.exports = function(number) {
  if (number !== 0) {
    return new Error('Введите ноль!!!');
  }
  return 'success';
};
