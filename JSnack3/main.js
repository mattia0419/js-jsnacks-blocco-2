const num = [45, 78, 33, 9, 4, 12, 34, 66, 70];
const result = document.getElementById("result");
let val = 0;

for(let i = 0; i < num.length; i++){
    if(i % 2 != 0){
        val += num[i];
        console.log(val);
    }
    
}

result.innerHTML = val;