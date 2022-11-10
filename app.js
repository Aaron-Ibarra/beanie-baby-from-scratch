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

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
