import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.querySelector('tbody');
const inputElement = document.getElementById('searchField');
let rowsData = [];

const rowTemplate = (student) => html`
<tr class=${student.match ? 'select' : ''}>
   <td>${student.item.firstName} ${student.item.lastName}</td>
   <td>${student.item.email}</td>
   <td>${student.item.course}</td>
</tr>`;

document.querySelector('#searchBtn').addEventListener('click', onSearch);

start();

let students;

function update() {
   render(students.map(rowTemplate), root);
}

async function start() {
   try {
      const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
      if(res.ok === false) {
         const error = await res.json();
         throw new Error(error.message);
      }
      const data = await res.json()
      students = Object.values(data).map(s => ({item: s, match: false}));         
           
      update();

   } catch (error) {
      alert(error.message);
   }
}


function onSearch() {
   const searched = inputElement.value.trim().toLocaleLowerCase();    

   for(let student of students) {
      student.match = Object.values(student.item).some(v => searched && v.toLocaleLowerCase().includes(searched));
   }

   update();
}
