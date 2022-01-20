const hamburger = document.querySelector('.hamburger')
const mavMenu = document.querySelector('.nav-menu')

hamburger.addEventListener( 'click', () => {
    hamburger.classList.toggle( 'active' );
    mavMenu.classList.toggle( 'active' );
} );

const starbucks = document.querySelector( '.starbucks' );

function update_starbucks(imgSrc) {
    starbucks.src = imgSrc;
}