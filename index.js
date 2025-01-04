// ! querySelector and addEventListener
// document.querySelector("button").addEventListener("mouseover",handleClick); // We don't add the parantheses here while calling the function, because if we did, then the function will be called as soon as we refresh the page, i.e., it doesn't wait for the event to occur.
// function handleClick()
// {
//     alert("I got Clicked !!!");
// }
// We can also write the above code as in the form of an anonymous function
// document.querySelector("button").addEventListener("mouseover",function(){
//     alert("I got Clicked!!!"); 
// }); // It works exactly the same.

// * For all the buttons:
// var n = document.querySelectorAll("button").length;
// for(var i=0;i<n;i++)
// {
//     console.log(document.querySelectorAll("button")[i]);
//     document.querySelectorAll("button")[i].addEventListener("mouseover",function(){
//         alert("I got Clicked!!! "+i);   
//     });
// }

// ! Functions as an argument:
// function add(num1,num2)
// {
//     return num1+num2;
// }
// function multiply(num1,num2)
// {
//     return num1*num2;
// }
// function div(num1,num2)
// {
//     return num1/num2;
// }
// function sub(num1,num2)
// {
//     return num1-num2;
// }
// function calculator(num1,num2,operator)
// {
//     return operator(num1,num2);
// }
// console.log(calculator(5,3,add));
// console.log(calculator(5,3,multiply));
// console.log(calculator(5,3,sub));
// console.log(calculator(5,3,div));

// ! Adding music to the buttons
var n = document.querySelectorAll("button").length;
for (var i = 0; i < n; i++) {
    var a = document.querySelectorAll("button")[i];
    a.addEventListener("mouseover", function () {
        if (this.textContent === 'w') // "this" is used here to select each button in each iteration. Using variable a.textContent does not work.
        {
            this.style.color = 'white';
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            animate(this.textContent);
        }
        else if (this.textContent === 'a') {
            this.style.color = 'white';
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            animate(this.textContent);
        }
        else if (this.textContent === 's') {
            this.style.color = 'white';
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            animate(this.textContent);
        }
        else if (this.textContent === 'd') {
            this.style.color = 'white';
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            animate(this.textContent);
        }
        else if (this.textContent === 'j') {
            this.style.color = 'white';
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            animate(this.textContent);
        }
        else if (this.textContent === 'k') {
            this.style.color = 'white';
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            animate(this.textContent);
        }
        else {
            this.style.color = 'white';
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            animate(this.textContent);
        }
    });
}

// ! OBJECTS IN JAVASCRIPT : 
// var bellBoy = { // Objects with properties and their values.
//     name: "Timmy",
//     age: 19,
//     hasWorkPermit: true,
//     languages: ["French", "English"],
//     moveSuitcase:function(){
//         alert("May I take your suitcase please ?");
//     }
// };
// // bellBoy.moveSuitcase(); // The element of the object is a function itself.

// // The function written below is a constructor function. If we require multiple bell boys, then we can simply call the constructor function to set the properties.
// function BellBoy(name,age,hasWorkPermit,languages)
// {
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
//     this.giveKeys = function(){
//         alert("May I give you your keys ?");
//     }
// }

// var bellBoy1 = new BellBoy("Timothy",21,true,["French","Hindi"]); // Basically creates an object bellBoy1 with the constructor properties.


// ! Keyboard Event Listeners:
var keys = document.addEventListener("keydown",function(event){ 
    console.log(event.key);
    if (event.key === 'w') // We simply pass an argument in the function as event. This is an object which has a property called key which tells us which key is pressed. Checking that key in an if-else ladder will produce sounds as we require.
    {
        var cls = document.querySelector("."+event.key);
        cls.style.color = 'white';
        animate(event.key);
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    }
    else if (event.key==='a') {
        var cls = document.querySelector("."+event.key);
        cls.style.color = 'white';
        animate(event.key);
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
    }
    else if (event.key==='s') {
        var cls = document.querySelector("."+event.key);
        cls.style.color = 'white';
        animate(event.key);
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
    }
    else if (event.key==='d') {
        var cls = document.querySelector("."+event.key);
        cls.style.color = 'white';
        animate(event.key);
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
    }
    else if (event.key==='j') {
        var cls = document.querySelector("."+event.key);
        cls.style.color = 'white';
        animate(event.key);
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
    }
    else if (event.key==='k') {
        var cls = document.querySelector("."+event.key);
        cls.style.color = 'white';
        animate(event.key);
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
    }
    else {
        var cls = document.querySelector("."+event.key);
        cls.style.color = 'white';
        animate(event.key);
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
    }
});

// ! Adding Animation to each div.
function animate(currKey)
{
    var key_pressed = document.querySelector("."+currKey);
    key_pressed.classList.add("pressed");
    setTimeout(function(){
        key_pressed.classList.remove("pressed");
    },100);
}