/*
 * Basic script to handle the change for the plots relative to hues and categories
 * 
 */

const HUES_STR = ['red', 'orange', 'yellow', 'yellow-green', 'green', 'green-cyan',
    'cyan', 'cyan-blue', 'blue', 'blue-magenta', 'magenta', 'pink']

let select = document.getElementById('catPlotSelect');
let iframe = document.getElementById('catPlotIframe');

// Exported as var since we are going to need it directly in the reade for the buttons.
var setCatIframe = function (hue) {
    select.value = hue;
    iframe.setAttribute('src', `assets/plots/cat_${hue}.html`)
}

select.onchange = (evt) => setCatIframe(evt.target.value);

HUES_STR.forEach(hue => {
    let option = document.createElement("option");
    option.text = hue.replace(/^\w/, c => c.toUpperCase());;
    option.value = hue;
    select.add(option);
})

setCatIframe('red');