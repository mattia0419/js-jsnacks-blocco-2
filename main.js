const names = ["Mattia", "Marco", "Francesca", "Dalia", "Marcello"];
const lastNames = ["Pirone", "Cacciapuoti", "Rossi", "De Masi", "Pisani"];
const sendButton = document.getElementById("send-button");
const fakeNamesList = document.getElementById("fake-names");

sendButton.addEventListener("click", function(){
    let listEL = document.createElement("li")
    fakeNamesList.append(listEL);
    listEL.classList.add("list-group-item");

    let i = Math.round(Math.random()*4);
    console.log(i);

    let nameSelected = names[i];

    let j = Math.round(Math.random()*4);
    console.log(j);

    let lastNameSelected = lastNames[j];

    listEL.innerHTML = nameSelected + " " + lastNameSelected;

})