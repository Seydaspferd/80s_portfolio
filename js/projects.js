// var modal = document.getElementById('simpleModal');
// var modalBtn = document.getElementById('modalBtn');
// var closeBtn = document.getElementsByClassName('closeBtn')[0];

// modalBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', clickOutside);

// function openModal() {
//   modal.style.display = 'block';
// }

// function closeModal() {
//   modal.style.display = 'none';
// }

// function clickOutside(e) {
//   if (e.target == modal) {
//     modal.style.display = 'none';
//   }
// }

var modals = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btns = document.getElementsByClassName('button');
var spans = document.getElementsByClassName('closeBtn');

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    modals[i].style.display = 'block';

    window.addEventListener('click', function (e) {
      if (e.target == modals[i]) {
        modals[i].style.display = 'none';
      }
    });
  };
}
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    modals[i].style.display = 'none';
  };
}
