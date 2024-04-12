document.addEventListener('DOMContentLoaded', function () {
  let burger = document.querySelector('.burger');

  let top = document.querySelector('.burger__line-top');
  let mid = document.querySelector('.burger__line-middle');
  let bot = document.querySelector('.burger__line-bot');
  let bl = document.querySelector('.burger__line');

  let isCentered = false;
  let timeoutId = null;
  let delay0 = 0;
  let delay100 = 100;
  let delay400 = 400;
  let delay500 = 500;
  let delay800 = 800;

  burgerHeight = burger.clientHeight;
  blHeight = bl.clientHeight;

  let centerY = (burger.clientHeight * 0.5) - (top.clientHeight / 2);
  mid.style.top = centerY + 'px';

  burger.addEventListener('click', function () {
    if (!isCentered) {

      top.style.top = centerY + 'px';
      bot.style.bottom = centerY + 'px';
      isCentered = true;

      timeoutId = setTimeout(function () {
        mid.style.opacity = '0';
        bot.style.transform = 'rotate(-225deg)';
      }, delay400);

      timeoutId = setTimeout(function () {
        top.style.transform = 'rotate(225deg)';
      }, delay500);

    } else {

      clearTimeout(timeoutId);

      top.style.transform = 'rotate(0deg)';

      timeoutId = setTimeout(function () {
        bot.style.transform = 'rotate(0deg)';
      }, delay100);

      timeoutId = setTimeout(function () {
        mid.style.opacity = '1';
        bot.style.bottom = '0';
        top.style.top = '0';
      }, delay800);
      isCentered = false;
    }
  });

});

// https://github.com/EpikeS/burger