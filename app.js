'use strict';

Doners.all = [];
function Doners(name, amount, age) {
    this.name = name;
    this.amount = amount;
    this.age = age;
    Doners.all.push(this);
}


let donersTable = document.getElementById('donersTable');
let trHead = document.createElement('tr');
let thName = document.createElement('th');
let thAmount = document.createElement('th');
let thAge = document.createElement('th');
donersTable.appendChild(trHead);
trHead.appendChild(thName);
trHead.appendChild(thAmount);
trHead.appendChild(thAge);
thName.textContent = 'Donator Name';
thAmount.textContent = 'Donation Amount';
thAge.textContent = 'Donator Age';





console.log(Doners.all);


Doners.prototype.render = function () {
    let SubmitForm = document.getElementById('SubmitForm');
SubmitForm.addEventListener("submit", formValues);
let newname;
let amount;
let age;
function formValues(event) {
    event.preventDefault();
newname = event.target[0].value;
amount = event.target[1].value;
age= Math.floor(Math.random() * (60 - 20) ) + 20;

let newDoner = new Doners(newname,amount,age)

}

    for (let i = 0; i < Doners.all.length; i++) {
        
    
        
        
    
   let trBody = document.createElement('tr') ;
   donersTable.appendChild(trBody)
  let tdName = document.createElement('td');
  let tdAmount = document.createElement('td');
  let tdAge = document.createElement('td');
  trBody.appendChild(tdName);
  trBody.appendChild(tdAmount);
  trBody.appendChild(tdAge);
  console.log(Doners.all[i]);
  tdName.textContent= this.name;
   tdAmount.textContent=this.amount;
   tdAge.textContent=this.age;
    }

}

Doners.prototype.render();


