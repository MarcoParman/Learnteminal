import inquirer from 'inquirer';
inquirer
.prompt([
 {type:'imput',name:'name',message:'What is your name?'},   
 {type:'imput',name:'age',message:'How old are you?'},
 {type:'imput',name:'birthday',message:'When is your birthday?'},
 {type:'imput',name:'gender',message:'What is your gender?'},
 {type:'imput',name:'color',message:'What is your favorite color?'},
 {type:'imput',name:'eat',message:'What do you like to eat?'},
])
.then((answers)=> {
    console.log('My name is  ' + answers.name);
    console.log('I am  ' + answers.age + '  years old');
    console.log('My Birthday is on the ' + answers.birthday);
    console.log('I am a  ' + answers.gender);
    console.log('My favorite color is  ' + answers.color);
    console.log('I like to eat  ' + answers.eat);
    

})
