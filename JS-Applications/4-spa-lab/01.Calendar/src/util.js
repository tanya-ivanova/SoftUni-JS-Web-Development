const allSections = Array.from(document.querySelectorAll('section'));

export function removeAllSections() {
    allSections.forEach(s => s.remove());
}