const firstList = ["elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento"];
let secondList = ["elemento", "elemento", "elemento", "elemento", "elemento"];
const secondUl = document.getElementById("second");
const firstUl = document.getElementById("first");

const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", function(){
    if(firstList.length > secondList.length){
        for(let i = 0; i < firstList.length - secondList.length; i++){
            let itemAdded = document.createElement("li");
            secondUl.append(itemAdded);
            itemAdded.classList.add("list-group-item");
            itemAdded.innerHTML = "elemento";
    }

    }
    else if(firstList.length < secondList.length){
        for(let i = 0; i < secondList.length - firstList.length; i++){
            let itemAdded = document.createElement("li");
            firstUl.append(itemAdded);
            itemAdded.classList.add("list-group-item");
            itemAdded.innerHTML = "elemento";
        }
    }
    
    
    
})