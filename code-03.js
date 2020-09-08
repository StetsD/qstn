// Написать функцию с именем, inOrder которая принимает рандомное кол-во синхронных и ассинхронных операций и последний аргумент результирующий колбэк
// Сигнатура inOrder(operation, ..., cb)
// Реализовать inOrder с помощью колбэков, не используя Promise и async\await.
// Результат должен быть в виде массива в порядке передачи аргументов ['One', 'Two', 'Three', 'Four']

// Сами синх\асинх операции можно оборачивать и делать с ними что угодно

const logOne = setTimeout ( function () {
  return "One";
}, Math.random () * 1000 );

const logTwo = setTimeout ( function () {
  return "Two";
}, Math.random () * 1000 );

const logThree = setTimeout ( function () {
  return 'Three';
}, 0 );

const logFour = () => {
  return 'Four';
}

inOrder(logOne, logTwo, logThree, logFour, result => console.log(result));

function inOrder() {
 // ...
}