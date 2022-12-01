import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";

var lives = 3;

(async function getData() {
  let question = [
    {
      name: "num",
      type: "number",
      message: "Please enter a number between 1 to 5:",
    },
  ];
  let answer = await inquirer.prompt(question);
  //console.log(answer);

  let computer = Math.floor(Math.random() * 5) + 1;
  let user = answer.num;

  function winner() {
    console.clear();
    const msg = `
          Congrats
    Your Guess is correct`;

    figlet(msg, (err, data) => {
      console.log(gradient.pastel.multiline(data));
    });
  }
  if (computer === user) {
    // console.log(chalk.bgGreen("Your Guess is correct"));
    winner();
  } else {
    --lives;
    console.log(chalk.red.bold("Your Guess is wrong"));
    console.log(chalk.redBright("Lives left", lives));
    if (lives > 0) getData();
  }
})();
