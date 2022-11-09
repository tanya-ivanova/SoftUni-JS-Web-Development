import { showDays } from './days.js';
import { removeAllSections } from './util.js';
import { showYears } from './years.js';

const sectionsMonths = Array.from(document.querySelectorAll('.monthCalendar'));

export function showMonths(year) {
    removeAllSections();

    const months = sectionsMonths.filter(s => s.id.includes(year))[0];
    document.querySelector('body').appendChild(months);

    const captionYear = months.querySelector('caption');
    captionYear.addEventListener('click', (e) => {
        removeAllSections();
        showYears();
    });

    const tBody = months.querySelector('tbody');
    tBody.addEventListener('click', (event) => {
        if(event.target.tagName === 'TD') {
            const month = event.target.children[0].textContent;
            const year = event.target.parentElement.parentElement.parentElement.children[0].textContent;
            
            showDays(month, year);
        }
    });
}