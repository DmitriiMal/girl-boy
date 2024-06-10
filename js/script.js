// Variables
const btnGirl = document.querySelectorAll('.btn-girl');
const btnBoy = document.querySelectorAll('.btn-boy');
const btnMain = document.querySelectorAll('.btn-main');
let btnMainCount = [0, 0, 0];

// Get background from Girl
btnGirl.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('burst');
  });
  btn.addEventListener('click', () => {
    setTimeout(() => {
      btn.classList.add('girl');
    }, 100);
  });
});

// Get background from Boy
btnBoy.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('burst');
  });
  btn.addEventListener('click', () => {
    setTimeout(() => {
      btn.classList.add('boy');
    }, 100);
  });
});

// Check if main buttons got clicked
btnMain.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    btnMainCount[i] = 1;

    if (!btnMainCount.includes(0)) {
      // Add scale and blinking animation
      setTimeout(itemScale, 500);

      // Alert
      setTimeout(() => {
        Swal.fire({
          title: 'Es wird ein Mädchen 😍',
          // title: 'Будет девочка 😍',
          // imageUrl: '../images/babystuff.png',
          // background: '#fff url(../images/babystuff.png) no-repeat top center/cover',
          imageHeight: 500,
          showConfirmButton: false,
        });
      }, 4500);
    }
  });
});

// Add scale and blinking animation
function itemScale() {
  btnMain.forEach((btn) => {
    btn.classList.add('scale');
  });
}

// Swal.fire({
//   title: 'Es wird ein Mädl 😍',
//   imageUrl: '../images/babystuff.png',
//   // background: '#fff url(../images/babystuff.png) no-repeat top center/cover',
//   imageHeight: 500,
//   showConfirmButton: false,
//   backdrop: `
//     rgba(0,0,0,0.4)
//     url("/images/nyan-cat.gif")
//     left top
//     no-repeat
//   `,
// });
