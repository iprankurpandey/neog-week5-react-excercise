// CRUD
// Create Data

const button = document.getElementById("button");
const data = document.getElementById("data");
const tablecontainer = document.getElementById("tablecontainer");
// 1-Read data
function readdata() {
  const fullname = document.getElementById("fullname").value;
  const empcode = document.getElementById("empcode").value;
  const salary = document.getElementById("salary").value;
  const city = document.getElementById("city").value;
}

// 2- insert data
function inserData() {
  let table = document
    .getElementById("tabledata")
    .getElementsByTagName("tbody")[0];

  let newRow = table.insertRow();
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = fullname.value;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = empcode.value;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = salary.value;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = city.value;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = ` <a onClick='editdata()'> edit</a> / <a onClick='deleteData()'> delete</a>`;
}
// 2-Print display data on DOM
// 3-Edit data  and save it on DOM
function editData() {}
// 4-Delete data and clear DOM

function deleteData() {
  let gettable = doc;
}

function resetForm() {
  fullname.value = "";
  empcode.value = "";
  city.value = "";
  salary.value = "";
}
// Submit data
function submit() {
  readdata();
  inserData();
  resetForm();
  deleteData();
}

button.addEventListener("click", submit);
