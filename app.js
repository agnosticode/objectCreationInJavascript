//BIND AND THIS

//Simple object creation
let dog={
    sound:'woof',
    talk:function(){
        console.log(this.sound);
    }
};

dog.talk();//"woof"

let talkFunction=dog.talk;
let boundFuction=talkFunction.bind(dog);
talkFunction();//undefined
boundFuction();//"woof"