const btnGirl = document.querySelectorAll('.btn-girl');
const btnBoy = document.querySelectorAll('.btn-boy');
const btnMain = document.querySelectorAll('.btn-main');
let btnMainCount = [0, 0, 0];

// Get background from Girl
btnGirl.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('girl');
  });
});

// Get background from Boy
btnBoy.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('boy');
  });
});

// Check if main buttons got clicked
btnMain.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    btnMainCount[i] = 1;
    console.log(i);
    console.log(btnMainCount);

    if (!btnMainCount.includes(0)) {
      setTimeout(itemScale, 500);
      setTimeout(() => {
        Swal.fire({
          title: 'Es wird ein Mädchen 😍',
          // title: 'Будет девочка 😍',
          // imageUrl: '../images/babystuff.png',
          // background: '#fff url(../images/babystuff.png) no-repeat top center/cover',
          imageHeight: 500,
          showConfirmButton: false,
        });
      }, 2000);
    }
  });
});

function itemScale() {
  btnMain.forEach((btn) => {
    btn.classList.add('scale');
  });
}

// Swal.fire({
//   title: 'Es wird ein Mädchen 😍',
//   imageUrl: '../images/babystuff.png',
//   // background: '#fff url(../images/babystuff.png) no-repeat top center/cover',
//   imageHeight: 500,
//   showConfirmButton: false,
// });
