/*
 * Basic script to handle the change for the plots relative to hues and categories
 * 
 */

const HUES_STR = ['red', 'orange', 'yellow', 'yellow-green', 'green', 'green-cyan',
    'cyan', 'cyan-blue', 'blue', 'blue-magenta', 'magenta', 'pink']

let selectCat = document.getElementById('catPlotSelect');
let iframeCat = document.getElementById('catPlotIframe');

// Exported as var since we are going to need it directly in the reade for the buttons.
var setCatIframe = function (hue) {
    selectCat.value = hue;
    iframeCat.setAttribute('src', `assets/plots/cat_${hue}.html`)
}

selectCat.onchange = (evt) => setCatIframe(evt.target.value);

HUES_STR.forEach(hue => {
    let option = document.createElement("option");
    option.text = hue.replace(/^\w/, c => c.toUpperCase());;
    option.value = hue;
    selectCat.add(option);
})

setCatIframe('red');