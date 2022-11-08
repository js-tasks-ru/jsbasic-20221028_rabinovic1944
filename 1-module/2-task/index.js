/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}
//sayHello();
/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if ((name === "") || (name === null) || (name.length < 4) || name.includes(" ")) {
    return false;
  }
    else {
      return true;
    }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    alert(`Welcome back, ${userName}!`);
  } else {
    alert('Некорректное имя');
  }
}
