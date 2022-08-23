window.addEventListener('load', solution);

function solution() {
  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneNumberElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let postalCodeElement = document.getElementById('code');

  let previewInfoElement = document.getElementById('infoPreview');
  let divBlockElement = document.getElementById('block');

  let submitButton = document.getElementById('submitBTN');
  let editButton = document.getElementById('editBTN');
  let continueButton = document.getElementById('continueBTN');

  submitButton.disabled = false;
  editButton.disabled = true;
  continueButton.disabled = true;

  submitButton.addEventListener('click', onSubmit);

  function onSubmit(event) {
    event.preventDefault();

    if(!fullNameElement.value || !emailElement.value) {
      return;
    }

    let fullName = fullNameElement.value;
    let email = emailElement.value;
    let phoneNumber = phoneNumberElement.value;
    let address = addressElement.value;
    let postalCode = postalCodeElement.value;

    let liFullNameElement = document.createElement('li');
    liFullNameElement.textContent = `Full Name: ${fullName}`;

    let liEmailElement = document.createElement('li');
    liEmailElement.textContent = `Email: ${email}`;

    let liPhoneNumberElement = document.createElement('li');
    liPhoneNumberElement.textContent = `Phone Number: ${phoneNumber}`;

    let liAddressElement = document.createElement('li');
    liAddressElement.textContent = `Address: ${address}`;

    let liPostalCodeElement = document.createElement('li');
    liPostalCodeElement.textContent = `Postal Code: ${postalCode}`;

    fullNameElement.value = '';
    emailElement.value = '';
    phoneNumberElement.value = '';
    addressElement.value = '';
    postalCodeElement.value = '';
  
    previewInfoElement.appendChild(liFullNameElement);
    previewInfoElement.appendChild(liEmailElement);
    previewInfoElement.appendChild(liPhoneNumberElement);
    previewInfoElement.appendChild(liAddressElement);
    previewInfoElement.appendChild(liPostalCodeElement);

    event.target.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;

    editButton.addEventListener('click', onEdit);
    continueButton.addEventListener('click', onContinue);

    function onEdit(event) {
      fullNameElement.value = fullName;
      emailElement.value = email;
      phoneNumberElement.value = phoneNumber;
      addressElement.value = address;
      postalCodeElement.value = postalCode;

      submitButton.disabled = false;
      editButton.disabled = true;
      continueButton.disabled = true;

      Array.from(previewInfoElement.children).forEach(li => li.remove());
      //previewInfoElement.innerHTML = '';
    }

    function onContinue(event) {
      
      divBlockElement.innerHTML = '';
      
      let h3Element = document.createElement('h3');
      h3Element.textContent = 'Thank you for your reservation!';

      divBlockElement.appendChild(h3Element);
    }
  }
}
