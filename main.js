const input = require("prompt-sync")();

function generateRandomBoxes() {
   
   const gifts = [
      {
         "type": "Luck",
         "present": "1x Bitcoin"
      },
      {
         "type": "Bad luck",
         "present": "You die"
      }
   ];
   
   let boxes = [];
   
   for (let i = 0; i < gifts.length; i++) {
      let randomIndex = Math.floor(Math.random() * gifts.length);
      boxes.push(gifts[randomIndex]);
   }
   
   return boxes;
   
}

while (true) {
   
   console.clear();
   
   let gifts = generateRandomBoxes();
   
   console.log(`CHOOSE ONE OF THE ${gifts.length} BOXES IN`);
   let i = 1;
   gifts.forEach(function(gift) {
      console.log(`[${i}]`);
      i++;
   });
   
   console.log("");
   
   let choice = Number(input("[?] CHOICE: "));
   
   if (choice < 1 || choice > gifts.length) {
      console.log("[x] YOUR CHOICE IS INVALID.");
   } else {
      
      let userChoice = gifts[choice - 1];
      
      if (userChoice.type === "Luck") {
         console.log("YOU ARE LUCKY!!!");
         console.log(`YOU GET : ${gifts[choice - 1].present}`);
      } else {
         console.log("YOU ARE NOT LUCK :(");
         console.log(`YOU GET : ${gifts[choice - 1].present}`);
      }
      
   }
   
   console.log("");
   
   let playAgain = input("[?] PLAY AGAIN? Y/N: ");
   
   if (playAgain.toUpperCase() !== "Y") {
      break;
   }
   
}