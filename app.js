//Rohit Roll no is 39
// Added the button feature;
// Rohit is a Good Boy
// Rohit is a Hard working and Discipline Guy.

// Rohit is not a Good boy
// Rohit is too Lazy and indiscipline

// shoba is finding a job

// Joker always laugh in front of his auidence but at back stage he is atually sad

let output = document.querySelectorAll(".box");
let i=1;
for(input of output)
{
    input.innerText = `The Unique value is ${i}`;
    i++;
}

let query = document.querySelector('div');

let values = query.getAttribute('value');
console.log(values);

let access = document.querySelector('p');
access.classList.add('content2');
console.log(access.outerHTML);

// function btn()
// {
//     console.log('rohit');
// }

let button = document.querySelector('#btn1');
let currmode = "light";
button.addEventListener('click',
    ()=>
    {
        if(currmode == "light") 
            {
                currmode = "black";
                document.querySelector('body').classList.add('change1');
                document.querySelector('body').classList.remove('change');
                
            }
            else
            {
                document.querySelector('body').classList.add('change');
                document.querySelector('body').classList.remove('change1');
                currmode = "light";
            }
            console.log(currmode);
        
    }
);
    







let div = document.querySelectorAll('.box');

    div.forEach((e)=>{  
        e.onmouseover = () =>
        {
            console.log("you are inside the div");
        };
        e.onmouseout = () =>
        {
            console.log("You are outside of the div");
        };
});
        
    
    


// div.onmouseout = () =>
// {
//     console.log("You are outside of the div");
// }


