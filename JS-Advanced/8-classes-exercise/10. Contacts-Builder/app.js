// not working correctly
class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;        
    }
    
    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        let divs = Array.from(document.getElementsByClassName('title'));
        
        if(this._online === true) {
            divs.forEach(div => div.classList.add('online'));
        } else {
            divs.forEach(div => div.classList.remove('online'));
        }
    }    

    render(id) {
        let article = document.createElement('article');

        let divTitle = document.createElement('div');
        article.appendChild(divTitle);
        divTitle.className = 'title';
        divTitle.textContent = `${this.firstName} ${this.lastName}`;
        let button = document.createElement('button');
        divTitle.appendChild(button);
        button.textContent = '\u2139';

        let divInfo = document.createElement('div');
        article.appendChild(divInfo);
        divInfo.className = 'info';
        divInfo.style.display = 'none'
        let spanPhone = document.createElement('span');
        divInfo.appendChild(spanPhone);
        spanPhone.textContent = `\u260E ${this.phone}`;
        let spanEmail = document.createElement('span');
        divInfo.appendChild(spanEmail);
        spanEmail.textContent = `\u2709 ${this.email}`;

        button.addEventListener('click', revealInfo);

        function revealInfo(event) {
            if(divInfo.style.display === 'none') {
                divInfo.style.display = 'block';
            } else {
                divInfo.style.display = 'none';
            }
        }

        if(this._online === true) {
            divTitle.classList.add('online');
        }


        let htmlElement = document.getElementById(id);
        htmlElement.appendChild(article);        
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);