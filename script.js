$(document).ready(() => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || {};

  $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

  const currentHour = moment().hour();

  console.log(currentHour);
  for (let i = 9; i <= 17; i++) {
    // conditional rendering according to current time
    const el = $(
      `<div class="row mb-1">
      <div class="col-2">${i <= 12 ? i + 'AM' : i - 12 + 'PM'}</div>
      <textarea type="text"   
      class="form-control col-9  ${
        i === currentHour ? 'present' : i < currentHour ? 'past' : 'future'
      }" 
      data-key=${i}>${tasks[i] || ''}</textarea>
      <div class="col-1 saveBtn">
      <i class="fas fa-lock icon fa-2x" ></i>
      </div>
      </div>`
    );

    $('.container').append(el);
  }

  $('.saveBtn').on('click', (e) => {
    if (e.target.matches('i')) {
      // target the textarea corrosponding to the save button
      const input = e.target.parentElement.previousElementSibling;

      // get the key of that textarea box
      const key = parseInt(input.getAttribute('data-key'));

      // get the value of that textarea box
      const value = input.value;

      // update the tasks array at that index
      tasks[key] = value;

      // stored new tasks array to localstorage
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
});
