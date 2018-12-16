/*
 * Basic script to handle the change for the plots relative to nutri facts
 * 
 */

const NUTRI_COLS = [
    'sugars_100g',
    'energy_100g',
    'fat_100g',
    'saturated-fat_100g',
    'carbohydrates_100g',
    'proteins_100g',
    'salt_100g',
    'sodium_100g',
    'nutrition-score-fr_100g']

let selectNutri = document.getElementById('nutriPlotSelect');
let iframeNutri = document.getElementById('nutriPlotIframe');

// Exported as var since we are going to need it directly in the reade for the buttons.
var setNutriIframe = function (nutriFact) {
    selectNutri.value = nutriFact;
    iframeNutri.setAttribute('src', `assets/plots/CDF_${nutriFact}.html`)
}

selectNutri.onchange = (evt) => setNutriIframe(evt.target.value);

NUTRI_COLS.forEach(nutriFact => {
    let option = document.createElement("option");
    let text = nutriFact.replace(/^\w/, c => c.toUpperCase());
    text = text.split('_').join(' /');
    option.text = text;
    option.value = nutriFact;
    selectNutri.add(option);
})

setNutriIframe('sugars_100g');