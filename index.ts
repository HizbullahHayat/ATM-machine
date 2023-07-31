#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


let turnoff= ()=>{
    return new Promise((res)=>
    setTimeout(res, 3000))
}
async function welcome() {
    let karaoke=chalkAnimation.karaoke(`Welcome to our world Class ATM machine`);
    await turnoff();
    karaoke.stop();
    console.log(`
    
██▄   ▄███▄      ▄   ▄███▄   █    ████▄ █ ▄▄  ▄███▄   ██▄       ███ ▀▄    ▄ 
█  █  █▀   ▀      █  █▀   ▀  █    █   █ █   █ █▀   ▀  █  █      █  █  █  █  
█   █ ██▄▄   █     █ ██▄▄    █    █   █ █▀▀▀  ██▄▄    █   █     █ ▀ ▄  ▀█   
█  █  █▄   ▄▀ █    █ █▄   ▄▀ ███▄ ▀████ █     █▄   ▄▀ █  █      █  ▄▀  █    
███▀  ▀███▀    █  █  ▀███▀       ▀       █    ▀███▀   ███▀      ███  ▄▀     
                █▐                        ▀                                 
                ▐                                                           
         ▄  █ ▄█  ▄▄▄▄▄▄   ███     ▄   █    █    ██    ▄  █                 
        █   █ ██ ▀   ▄▄▀   █  █     █  █    █    █ █  █   █                 
        ██▀▀█ ██  ▄▀▀   ▄▀ █ ▀ ▄ █   █ █    █    █▄▄█ ██▀▀█                 
        █   █ ▐█  ▀▀▀▀▀▀   █  ▄▀ █   █ ███▄ ███▄ █  █ █   █                 
           █   ▐           ███   █▄ ▄█     ▀    ▀   █    █                  
          ▀                       ▀▀▀              █    ▀                   
                                                  ▀                         

    `);
}
await welcome();

var balanceAmount= 500000;
async function userInputs() {
    let input = await inquirer.prompt([
        {
            type:"input",
            name: "id",
            message:"Please enter your User id: ",
            filter:(xxs: string)=>{
                let t = xxs.trim();
                return t.toUpperCase();                
            },
            validate:function(xdd: string|number):string|number|boolean{
                if(!xdd){return `Invalid input`}else{
                    return true;
                }
            }
        },
        {
            type:"password",
            name:"pin",
            message:"Enter your four digit (4) user pin: ",
            mask:"*",
            validate:function validatePass(inp: string){
                let minpas=4;
                let maxpas=4;
                let trimpass = inp.trim();
                if(trimpass.length < minpas || trimpass.length > maxpas){
                    return `Invalid Password. Password must contain only four characters. Try again ...`
                }
                return true;
            }   
        },
        {
            type:"rawlist",
            name:"list",
            message:"Select your operation which you want to perform......",
            choices:["Cash Withdrawl", "Balance Inquiry", "Order new Card"],
        }
    ])
    if(input.list == "Cash Withdrawl"){
        async function cashWithdrawl() {
        let operation=await inquirer.prompt([{
            type:"rawlist",
            name:"raw",
            message:"Select the action you want to perform from below: ",
            choices:["Fast Cash", "Custom Amount"]
    }])
            if(operation.raw == "Fast Cash"){
                let rem=await inquirer.prompt({
                    type:"list",
                    name:"amt",
                    message:"Select the amount you want to withdraw: ",
                    choices:['1000','5000','10000','20000','50000','100000']
                })
                console.log(`Thanks for your transection, your remaining balance is: ${balanceAmount - rem.amt}`);
            }else if(operation.raw == "Custom Amount"){
                let pssd=await inquirer.prompt({
                    type:"number",
                    name:"xpc",
                    message:"Enter the amount you want to withdraw: ",
                    validate:function(inp:number){
                        if(inp > 500000){
                            return `Sorry Insufficient balance in your account... Try different amount or contact your account officer...`   
                        }
                        else{
                            return true;                    
                        }
                    }
                })
            }

        }
        await cashWithdrawl();
    }
    else if(input.list == "Balance Inquiry"){
        console.log(`Your Current Account Balance is ${balanceAmount}`); 
    }else if(input.list == "Order new Card"){
        async function newCard() {
            let ncr= await inquirer.prompt({
                type:"list",
                name:"ncard",
                message:"Select the card you want to update on: ",
                choices:["Silver Card", "Gold Card", "Diamond Card"]
            })
            if(ncr.ncard == "Silver Card"){
                let sec=await inquirer.prompt({
                    type:"confirm",
                    name:"cnf",
                    message:"Do you confirm to subscribe our Silver card service?"
                })
                if(sec.cnf == true){
                console.log(`Congrats.... Your A/c limit has increased upto 200000 per day under our silver card financial policy.
InsHallah you would reciece your card in next three working days. For more information you can contact us 
myatm22@gmail.com
xyz@hotmail.com
0012-22525-8988988
5589-6698-22515421
5585-9968-33652544`)}else{console.log(`You have't Subscribe to our Silver card service. For more information you 
can contact us.... 
myatm22@gmail.com
xyz@hotmail.com
0012-22525-8988988
5589-6698-22515421
5585-9968-33652544`)}
            }else if(ncr.ncard == "Gold Card"){
                let nrr=await inquirer.prompt({
                    type:"confirm",
                    name:"gtf",
                    message:"Do you confirm to subscribe our Gold card service?"
                })
                if(nrr.gtf == true){
                    console.log(`Congrats.... Your A/c limit has increased upto 400000 per day under our Gold card financial policy.
InsHallah you would reciece your card in next three working days. For more information you can contact us 
myatm22@gmail.com
xyz@hotmail.com
0012-22525-8988988
5589-6698-22515421
5585-9968-33652544`); }else{console.log(`You have't Subscribe to our Gold card service. For more information you 
can contact us.... 
myatm22@gmail.com
xyz@hotmail.com
0012-22525-8988988
5589-6698-22515421
5585-9968-33652544`)}
            
            }else if(ncr.ncard == "Diamond Card"){
                let dam=await inquirer.prompt({
                    type:"confirm",
                    name:"frp",
                    message:"Do you confirm to subscribe our Diamond card service?"
                })
                if(dam.frp == true){
                    console.log(`Congrats.... Your A/c limit has increased upto 1000000 per day under our Silver card financial policy.
InsHallah you would reciece your card in next three working days. For more information you can contact us 
myatm22@gmail.com
xyz@hotmail.com
0012-22525-8988988
5589-6698-22515421
5585-9968-33652544`) }else{console.log(`You have't Subscribe to our Diamond card service. For more information you 
can contact us.... 
myatm22@gmail.com
xyz@hotmail.com
0012-22525-8988988
5589-6698-22515421
5585-9968-33652544`); }
        }
        }
        await newCard();
    }

    function end() {
        console.log(chalk.greenBright.bold(`THANKS FOR USING OUR ATM SERVICE...FELL FREE TO DROP YOUR SUGESTIONS, SO WE CAN IMPROVE OUR SERVICES`));
    }
    end();
}

userInputs();

