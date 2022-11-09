import { showAdd } from "./add.js";
import { showDetails } from "./details.js";
import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";

showHome();

document.getElementById('homeLink').addEventListener('click', showHome);
document.getElementById('login').addEventListener('click', showLogin);
document.getElementById('register').addEventListener('click', showRegister);
document.getElementById('add-btn').addEventListener('click', showAdd);
document.getElementById('movies-list').addEventListener('click', showDetails);