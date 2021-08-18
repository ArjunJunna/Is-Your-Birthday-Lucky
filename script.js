const birthDate = document.querySelector('#birthDate');
const luckyNumber = document.querySelector('#luckyNumber');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const reset = document.querySelector('#reset');
const message = document.querySelector('.message');
const policy = document.querySelector('#policy');
const policyCard = document.querySelector('#policy-card');
hideMessage();
btn.addEventListener('click', function () {
  let date = birthDate.value;
  if (date === '') {
    showMessage('Please Select Your DateOfBirth');
  } else {
    let dateInt = parseInt(date.replaceAll('-', ''));
    let number = luckyNumber.value;
    if (number === '') {
      showMessage('Please Enter Your Lucky Number');
    } else {
      isTheSumOfDigitsDivisible(dateInt, number);
    }
  }
});

function isTheSumOfDigitsDivisible(date, number) {
  let sum = 0;
  while (date > 0) {
    let lastDigit = date % 10;
    sum = sum + lastDigit;
    date = date / 10;
  }
  let sumOfDigits = parseInt(sum);
  if (sumOfDigits % number == 0) {
    output.innerText = 'Awesome!!! Your birthday is a lucky day...';
  } else {
    output.innerText = 'Oops!!! Your birthday is not a lucky day...';
  }
}
reset.addEventListener('click', function () {
  birthDate.value = '';
  output.innerText = '';
  luckyNumber.value = '';
});
policy.addEventListener('click', function () {
  policyCard.className = 'show';
  setTimeout(function () {
    policyCard.className = policyCard.className.replace('show', '');
  }, 3000);
});

function showMessage(msg) {
  message.innerText = msg;
  message.style.display = 'block';
}
function hideMessage() {
  message.style.display = 'none';
}
