// My own script goes here
const baton = document.querySelector('#baton');
const arow = document.querySelector('#arow');

baton.addEventListener('click', () => {
    arow.classList.toggle('bi-arrow-up-short');
    if(arow.innerHTML === " Show More") {
        arow.innerHTML = " Show Less";
    } else {
        arow.innerHTML = " Show More";
    }
});

// Enable tooltip landing page
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
