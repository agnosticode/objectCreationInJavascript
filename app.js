//BIND AND THIS AND EXAMPLES

// function talk(sound){
//     console.log(sound); 
// };


//simple funciton
function talk(){
    console.log(this.sound); 
};

//object
let boromir={
    sound:'One does not simply walk into mordor'
};

// //bind object to this keyword in function
let talkBoundToBoromir=talk.bind(boromir);

//call function
// talkBoundToBoromir();
// talk();//undefined


//PLACE REFERENCE TO THE FUNCTION AS A PROPERTY TO THE OBJECT
let boromir={
    speak:talk,
    sound:'One does not simply walk into mordor'
};

// //call method in object
// boromir.speak();//'One does not simply walk into mordor'


let boromir={
    blabber:talk,
    sound:'One does not simply walk into mordor'
};

let gollum={
    jabber:boromir.blabber,
    sound:'My precioussss....'
};

gollum.jabber();//'My precioussss....'