$(document).ready(() => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || {};

  $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

  const currentHour = moment().hour();

  console.log(currentHour);
  for (let i = 9; i <= 17; i++) {
    const el = $(
      `<div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">${
        i <= 12 ? i + 'AM' : i - 12 + 'PM'
      }</span></div><textarea type="text" value="${
        tasks[i] || ''
      }"  class="form-control  ${
        i === currentHour ? 'present' : i < currentHour ? 'past' : 'future'
      }" data-key=${i} aria-label="Amount (to the nearest dollar)"/><div class="input-group-append saveBtn"><i class="fas fa-lock input-group-text" ></i></div></div>`
    );

    $('.container').append(el);
  }

  $('.input-group-append').on('click', (e) => {
    // target the input box corrosponding to the save button
    const input = e.target.parentElement.previousElementSibling;

    // get the key of that input box
    const key = parseInt(input.getAttribute('data-key'));

    // get the value of that input box
    const value = input.value;

    // update the tasks array at that index
    tasks[key] = value;

    // stored new tasks array to localstorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
});
