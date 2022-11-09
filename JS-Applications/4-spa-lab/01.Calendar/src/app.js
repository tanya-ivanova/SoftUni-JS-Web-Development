import { removeAllSections } from './util.js';
import { showYears, sectionYears } from './years.js';
import { showMonths } from './months.js';

removeAllSections();
showYears();

const tableYears = sectionYears.querySelector('table');
tableYears.addEventListener('click', yearsOnClick);

function yearsOnClick(event) {
    if(event.target.tagName === 'TD') {
        const year = event.target.children[0].textContent;
        showMonths(year);
    }
}








