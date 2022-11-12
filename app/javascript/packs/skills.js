var aList = document.getElementsByClassName('box-A');
var bList = document.getElementsByClassName('box-B');

var boxA;
var boxB;

const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length )



// Click-out
const hideOnClick = (elemA, elemB) => {
  const certClickListener = event => {
    var $target = event.target;
    if ($target === elemB || elemB.contains($target)) {
      elemB.classList.remove('animated');
      elemB.children[0].classList.remove('appear');
      elemB.classList.add('unanimated');
      elemB.children[0].classList.add('disappear');
      removeClickListener();
      setTimeout(() => {
        elemB.classList.remove('unanimated');
        elemB.children[0].classList.remove('disappear');
        elemA.classList.remove('hide');
        elemB.classList.remove('show');
      }, 1500);
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', certClickListener);
  }

  document.addEventListener('click', certClickListener);
}

// Click-in
const hideSelfShowBig = (elemA, elemB) => {
  const iconClickListener = event => {
    var $target = event.target;
    if (($target === elemA || elemA.contains($target)) ||
        ($target === elemB || elemB.contains($target))) {
      elemA.classList.add('hide');
      elemB.classList.add('show');
      elemB.style.margin = '1.5rem';
      elemB.classList.add('animated');
      elemB.children[0].classList.add('appear');
      hideOnClick(elemA, elemB);
      setTimeout(() => {
        elemB.scrollIntoView(true);
        elemB.style.margin = '7rem 2rem';
      }, 1750);
    }
  }

  elemA.addEventListener('click', iconClickListener);
}

// Initialize
for (var i = 0; i < aList.length; i++) {
  hideSelfShowBig(aList[i], bList[i]);
}
