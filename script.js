$(document).ready(() => {
  $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

  const currentHour = moment().hour();
  console.log(currentHour);
  for (let i = 9; i <= 17; i++) {
    var el = $(
      `<div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">${
        i <= 12 ? i + 'AM' : i - 12 + 'PM'
      }</span></div><input type="text"  class="form-control ${
        i === currentHour
          ? 'bg-danger'
          : i < currentHour
          ? 'bg-secondary'
          : 'bg-success'
      }" aria-label="Amount (to the nearest dollar)"/><div class="input-group-append"><i class="fas fa-lock input-group-text" ></i></div></div>`
    );

    $('.container').append(el);
  }

  $('.input-group-append').on('click', (e) => {
    console.log(e.target.parentElement.previousElementSibling.value);
  });
});
