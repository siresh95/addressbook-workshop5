window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
  });

  const createInnerHtml = () => {
    const headerHtml = ` 
      <th>Name</th>
      <th>Phone Number</th>
      <th>Email</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      
    `;
    let contactList = createContactJSON();
    if(contactList.length == 0) return;
    document.querySelector(".person-count").textContent = contactList.length;
    let innerHtml = `${headerHtml}`;
    for(const contactData of contactList)
    {
    innerHtml = `${innerHtml}
    <tr>
        <td>${contactData._name}</td>
        <td>${contactData._phone}</td>
        <td>${contactData._email}</td>
        <td>${contactData._address}</td>
        <td>${contactData._city}</td>
        <td>${contactData._state}</td>
        <td>${contactData._zip}</td>     
        <td>
        <img name="${contactData._id}" onclick="remove(this)" alt="delete" 
                src="../assets/icons/delete-black-18dp.svg">
        <img name="${contactData._id}" alt="edit" onclick="update(this)"
                src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    }
  document.querySelector('#table-display').innerHTML = innerHtml;
  }

  const createContactJSON = () => {
    let contactListLocal = [
    {
        _name: "Resh Singh",
        _address: "Lane No 102",
        _city: "Bawal",
        _email: "xyz@gmail.com",
        _phone: "9149947504",
        _state: "Haryana",
        _zip: "123501",
    },
    {
        _name: "NareshSharma",
        _address: "Connaught Place",
        _city: "New Delhi",
        _email: "bfbc b@hotmail.com",
        _phone: "9413300163",
        _state: "Delhi",
        _zip: "110059",
    }
    ];
    return contactListLocal;
  }