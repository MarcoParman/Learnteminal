import inquirer from 'inquirer';
inquirer
.prompt([
{type:'imput',name:'age',message:'How old are you?'}
])
.then((answers)=> {
    console.log('I am' + answers.age + 'years old');

})