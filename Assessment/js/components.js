document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll('.like-button');

  likeButtons.forEach(button => {
      button.addEventListener('click', function () {
          const likeCountElement = this.nextElementSibling;
          let count = parseInt(likeCountElement.innerText);

          if (this.classList.contains('liked')) {
              count--;
              this.classList.remove('liked');
              this.innerText = '♡';
          } else {
              count++;
              this.classList.add('liked');
              this.innerText = '❤';
          }

          likeCountElement.innerText = count;
      });
  });
});