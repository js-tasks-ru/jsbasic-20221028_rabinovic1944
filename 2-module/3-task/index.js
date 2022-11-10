let calculator = {
  num1 : 0,
  num2 : 0,
  read(num1,num2) {
    this.num1 = Number(prompt('Please enter first number', 0));
    this.num2 = Number(prompt('Pleate enter second number', 0));
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },

}






// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
