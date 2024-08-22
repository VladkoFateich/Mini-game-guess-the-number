const wrapper = document.querySelector('#wrapper');
const start = wrapper.querySelector('#start');
let count = 0;

start.addEventListener('click', function () {
  start.style.cssText = 'display:none';

  const responseField = document.createElement('input');

  //   responseField.id = 'responseField';
  const response = document.createElement('div');
  response.id = 'response';
  wrapper.append(responseField);
  wrapper.append(response);

  // let num = Math.floor(Math.random() * 100 + 1);
  let num = 5;
  responseField.addEventListener('blur', function (e) {
    count++;
    console.log(count);

    if (e.target.value < num) {
      response.textContent = `${e.target.value} меньше загадонного числа, попробуй еще`;
      e.target.value = '';
    } else if (e.target.value > num) {
      response.textContent = `${e.target.value} больше загадонного числа, попробуй еще`;
      e.target.value = '';
    } else {
      response.textContent = `Верно загаданное число ${e.target.value} отгадано с ${count} попытки`;
      responseField.style.display = 'none';
      start.style.display = 'block';
      count = 0;
    }
  });
});
