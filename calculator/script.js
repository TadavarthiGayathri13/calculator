let result = document.querySelector('input');
let button = document.querySelectorAll('.button');

let string = "";

Array.from(button).forEach((a)=>{
    a.addEventListener('click', (e)=>{

        if(e.target.innerHTML == '=') {
            string = eval(string);
            result.value = string;
        } else if (e.target.innerHTML == 'C') {
            string = " ";
            result.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0,-1);
            result.value = string;
        }
         else {
        string = string + e.target.innerHTML;
        result.value = string;
    }
    })
})