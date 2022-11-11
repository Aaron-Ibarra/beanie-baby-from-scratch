/* Imports */
import { renderBeanieBabies, renderAstrologySigns } from './render.util.js';
import { getBeanieBabies, getAstroSigns } from './fetch.utils.js';
/* Get DOM Elements */
const beanieForm = document.getElementById('beanie-form');
const astroSelect = document.getElementById('astro-select');
const beanieList = document.getElementById('beanie-babies');

/* State */
let beanieBabies = [];
let astroSigns = [];

/* Events */
window.addEventListener('load', async () => {
    findBeanieBabies();

    const response = await getAstroSigns();
    astroSigns = response.data;
    displayAstroSigns();
});

async function findBeanieBabies(astro) {
    const response = await getBeanieBabies(astro);
    console.log(response);
    beanieBabies = response.data;
    displayBeanieBabies();
}

beanieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(beanieForm);
    findBeanieBabies(formData.get('astro-pizza'));
});
/* Display Functions */
function displayBeanieBabies() {
    beanieList.innerHTML = '';
    for (let beanieBaby of beanieBabies) {
        const beanieBabyEl = renderBeanieBabies(beanieBaby);
        beanieList.append(beanieBabyEl);
    }
}

function displayAstroSigns() {
    for (let astro of astroSigns) {
        const astroEl = renderAstrologySigns(astro);
        astroSelect.append(astroEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
