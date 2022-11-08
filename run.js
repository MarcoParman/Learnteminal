function write(string){
    process.stdout.write(string);
}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello chalk'));


for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){        
        let color = (i*j).toString()    
        write(chalk.ansi256(color)(color.padEnd(4,' '))); 
    }
    write('\n');
}

write(boxen(chalk.blue.bgGreen('Hello chalk'), {
    padding: 1,
    margin:1
}));

write(boxen(chalk.red.bgBlue('Hello chalk'), {
    padding: 1,
    margin:2
}));

write(boxen(chalk.green.bgRed('Hello chalk'), {
    padding: 1,
    margin:3
}));

write(boxen(chalk.blueBright.bgGreenBright('Hello chalk'), {
    padding: 1,
    margin:1
}));

write(boxen(chalk.redBright.bgBlueBright('Hello chalk'), {
    padding: 1,
    margin:2
}));

write(boxen(chalk.greenBright.bgRedBright('Hello chalk'), {
    padding: 1,
    margin:3
}));

