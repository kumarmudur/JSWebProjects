const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// movie select event
movieSelect.addEventListener('change', (event) => {
    ticketPrice = +event.target.value;
    updateSelectedCount();
});

// seat click event
container.addEventListener('click', (event) => {
    const { classList } = event.target
    if (classList.contains('seat') && !classList.contains('occupied')) {
        classList.toggle('selected');
        updateSelectedCount();
    }
});
