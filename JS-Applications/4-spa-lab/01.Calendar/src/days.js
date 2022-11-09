import { removeAllSections } from './util.js';
import { showMonths } from './months.js';

const sectionsDays = Array.from(document.querySelectorAll('.daysCalendar'));

export function showDays(month, year) {
    const monthAsNumber = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sept: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12
    };

    removeAllSections();
    const days = sectionsDays.filter(s => s.id.includes(year) && s.id.includes(monthAsNumber[month]))[0];    
    document.querySelector('body').appendChild(days);

    const captionMonthYear = days.querySelector('caption');
    captionMonthYear.addEventListener('click', (e) => {
        removeAllSections();
        showMonths(year);
    });    
}