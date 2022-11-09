import { render } from "./node_modules/lit-html/lit-html.js";
import { addFormTemplate } from "./templates/addForm.js";
import { editFormTemplate } from "./templates/editForm.js";
import { tableTemplate } from "./templates/table.js";

const sectionTable = document.getElementById("table");
const sectionForms = document.getElementById("forms");

document.getElementById("loadBooks").addEventListener("click", onAdd);

async function getAllBooks() {
  try {
    const res = await fetch(
      "http://localhost:3030/jsonstore/collections/books"
    );
    if (res.ok === false) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();
    const books = Object.entries(data);
    render(tableTemplate(books), sectionTable);
  } catch (error) {
    alert(error.message);
  }
}

async function onAdd(event) {
  await getAllBooks();
  render(addFormTemplate(), sectionForms);

  const addForm = document.getElementById("add-form");
  const tbody = document.querySelector("tbody");

  addForm.addEventListener("submit", addBook);

  tbody.addEventListener("click", onDelete);
  tbody.addEventListener("click", onEdit);
}

async function addBook(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const title = formData.get("title");
  const author = formData.get("author");

  if(title === '' || author === '') {
    return;
  }

  try {
    const res = await fetch(
      "http://localhost:3030/jsonstore/collections/books",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          author,
          title,
        }),
      }
    );
    if (res.ok === false) {
      const error = await res.json();
      throw new Error(error.message);
    }
  } catch (error) {
    alert(error.message);
  }

  await getAllBooks();

  event.target.reset();
}

async function onDelete(event) {
  if (event.target.className === "delete") {
    const id = event.target.dataset.id;

    try {
      const res = await fetch(
        `http://localhost:3030/jsonstore/collections/books/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok === false) {
        const error = await res.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
    }

    await getAllBooks();
  }
}

async function onEdit(event) {
  if(event.target.className === 'edit') {
    render(editFormTemplate(), sectionForms);
    const id = event.target.dataset.id;    
    const titleElement = document.querySelector('input[name="title"]');
    const authorElement = document.querySelector('input[name="author"]');
    document.getElementById('edit-form').addEventListener('submit', onSave);
    
    try {
        const res = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`);
        if (res.ok === false) {
          const error = await res.json();
          throw new Error(error.message);
        }

        const data = await res.json();
        titleElement.value = data.title;
        authorElement.value = data.author;

    } catch (error) {
        alert(error.message);
    }

    async function onSave(event) {
        event.preventDefault();

        if(titleElement.value === '' || authorElement.value === '') {
            return;
        }
        try {
            const res = await fetch(
              `http://localhost:3030/jsonstore/collections/books/${id}`,
              {
                method: "PUT",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  author: authorElement.value,
                  title: titleElement.value,
                }),
              }
            );
            if (res.ok === false) {
              const error = await res.json();
              throw new Error(error.message);
            }
          } catch (error) {
            alert(error.message);
          }
          event.target.reset();
          await getAllBooks();
          render(addFormTemplate(), sectionForms);
    }
  }
}
