const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
};

// update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

    console.log('seatIndex', seatIndex);
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
};

// movie select event
movieSelect.addEventListener('change', (event) => {
    const { value, selectedIndex } = event.target;
    ticketPrice = +value;
    setMovieData(selectedIndex, value);
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
