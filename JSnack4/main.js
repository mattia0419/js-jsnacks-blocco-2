const firstList = ["elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento"];
let secondList = ["elemento", "elemento", "elemento", "elemento", "elemento"];
const secondUl = document.getElementById("second")
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", function(){
    for(let i = 0; i < firstList.length - secondList.length; i++){
        let itemAdded = document.createElement("li");
        secondUl.append(itemAdded);
        itemAdded.classList.add("list-group-item");
        itemAdded.innerHTML = "elemento";
    }
    
    
})