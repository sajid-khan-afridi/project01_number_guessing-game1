import inquirer from "inquirer";
var lives = 3;
(async function getData() {
    let question = [
        {
            name: "num",
            type: "number",
            message: "Please enter a number between 1 to 5",
        },
    ];
    let answer = await inquirer.prompt(question);
    console.log(answer);
    let computer = Math.floor(Math.random() * 5) + 1;
    let user = answer.num;
    if (computer === user) {
        console.log("Your Guess is correct");
    }
    else {
        console.log("Your Guess is wrong", "Lives left", lives);
        --lives;
        if (lives > 0)
            getData();
    }
})();
