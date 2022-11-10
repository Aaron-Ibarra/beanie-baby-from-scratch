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
});

async function findBeanieBabies() {
    const response = await getBeanieBabies();
    beanieBabies = response.data;
    displayBeanieBabies();
}

/* Display Functions */
function displayBeanieBabies() {
    beanieList.innerHTML = '';
    for (let beanieBaby of beanieBabies) {
        const beanieBabyEl = renderBeanieBabies(beanieBaby);
        beanieList.append(beanieBabyEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
