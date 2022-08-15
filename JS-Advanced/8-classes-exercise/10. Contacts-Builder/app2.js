// working correctly
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

        if(this.divTitle) {
            this.divTitle.className = this._online ? 'title online' : 'title';
        }
    }    

    render(id) {
        this.article = document.createElement('article');

        this.divTitle = document.createElement('div');
        this.article.appendChild(this.divTitle);
        this.divTitle.className = this._online ? 'title online' : 'title';
        this.divTitle.textContent = `${this.firstName} ${this.lastName}`;
        this.button = document.createElement('button');
        this.divTitle.appendChild(this.button);
        this.button.textContent = '\u2139';

        this.divInfo = document.createElement('div');
        this.article.appendChild(this.divInfo);
        this.divInfo.className = 'info';
        this.divInfo.style.display = 'none'
        this.spanPhone = document.createElement('span');
        this.divInfo.appendChild(this.spanPhone);
        this.spanPhone.textContent = `\u260E ${this.phone}`;
        this.spanEmail = document.createElement('span');
        this.divInfo.appendChild(this.spanEmail);
        this.spanEmail.textContent = `\u2709 ${this.email}`;

        this.htmlElement = document.getElementById(id);
        this.htmlElement.appendChild(this.article); 
        
        this.button.addEventListener('click', (event) => {
            if(this.divInfo.style.display === 'none') {
                this.divInfo.style.display = 'block';
            } else {
                this.divInfo.style.display = 'none';
            }
        });          
              
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