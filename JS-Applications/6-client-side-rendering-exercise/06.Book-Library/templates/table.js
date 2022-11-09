import { html } from "../node_modules/lit-html/lit-html.js";


export const tableTemplate = (books) => html`
<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    ${books.map(
      (b) => html`
      <tr>
        <td>${b[1].title}</td>
        <td>${b[1].author}</td>
        <td>
          <button class="edit" data-id=${b[0]}>Edit</button>
          <button class="delete" data-id=${b[0]}>Delete</button>
        </td>
      </tr>`
    )}
  </tbody>
</table>`;
