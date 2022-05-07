let isUpdate = false;
let contactObj;

window.addEventListener("DOMContentLoaded", (event) => {
  
  const name = document.querySelector("#name");
  const textError = document.querySelector(".text-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new addressBookData().name = name.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });

  const phone = document.querySelector("#phonenumber");
  const phoneError = document.querySelector(".phone-error");
  phone.addEventListener("input", function () {
    if (phone.value.length == 0) {
      phoneError.textContent = "";
      return;
    }
    try {
      new addressBookData().phone = phone.value;
      phoneError.textContent = "";
    } catch (e) {
      phoneError.textContent = e;
    }
  });

  const address = document.querySelector("#address");
  const addressError = document.querySelector(".address-error");
  address.addEventListener("input", function () {
    if (address.value.length == 0) {
      addressError.textContent = "";
      return;
    }
    try {
      new addressBookData().address = address.value;
      addressError.textContent = "";
    } catch (e) {
      addressError.textContent = e;
    }
  });
  const email = document.querySelector('#email');
  const emailError = document.querySelector('.email-error');
  email.addEventListener('input', function() {
    // let email = document.querySelector('#email').value;
    if (address.value.length == 0) {
      addressError.textContent = "";
      return;
    }
    try{
      (new addressBookData()).email = email.value;
      emailError.textContent = "";
    }catch(e){
      emailError.textContent = e;
    }

  });
  checkForUpdate();
});

const save = (event) => {
  event.preventDefault();
  event.stopPropagation();
  let contactData = createContact();
  createAndUpdateStorage(contactData);
}

const createContact = () => {
  let contactList = JSON.parse(localStorage.getItem("ContactList"));
  let max = 0;
  if(contactList){
      for(const contactData of contactList){
          if(max<contactData._id)
          max = contactData._id;
      }
    }
  let contactData = new addressBookData();
  contactData.id = parseInt(max) + 1;
  contactData.name = getInputValueById('#name');
  contactData.address = getInputValueById('#address');
  contactData.city = getInputValueById('#city');
  contactData.state = getInputValueById('#state');
  contactData.zip = getInputValueById('#zip');
  contactData.phone = getInputValueById('#phonenumber');
  contactData.email = getInputValueById('#email');
  alert(contactData.toString());
  return contactData;
}

function createAndUpdateStorage(contactData){
  let contactList = JSON.parse(localStorage.getItem("ContactList"));

  if(contactList != undefined){
      contactList.push(contactData);
  }
  else{
      contactList = [contactData];
  }
  alert(contactList.toString());
  localStorage.setItem("ContactList",JSON.stringify(contactList));
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}

const resetForm = () => {
  setValue('#name','');
  setValue('#address','');
  setSelectedIndex('#city',0);
  setSelectedIndex('#state',0);
  setValue('#zip','');
  setValue('#phonenumber','');
  setValue('#email','');
}

const setValue = (id,value) => {
const element = document.querySelector(id);
element.value = value;
}

const setSelectedIndex = (id,index) => {
const element = document.querySelector(id);
element.selectedIndex = index;
}

const checkForUpdate = () => {
  const contactJson = localStorage.getItem('editContact');
  isUpdate = contactJson ? true : false;
  if(!isUpdate) return;
  contactObj = JSON.parse(contactJson);
  setForm();
}

const setForm = () => {
  setValue('#name', contactObj._name);
  setValue('#address',contactObj._address);
  setValue('#city',contactObj._city);
  setValue('#state',contactObj._state);
  setValue('#zip',contactObj._zip);
  setValue('#phonenumber',contactObj._phone);
  setValue('#email',contactObj._email);
}