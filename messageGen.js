console.log ("LIST OF MESSAGES")
console.log("-----------------------------------")
let array =["The best use of life is LOVE", 
            "The best expression of love is TIME",
            "The best time to love is NOW",
            "There is a purpose behind every situation( problem and fortune)."  ];

for(let i=0; i < array.length; i++)
  console.log(array[i]);

console.log("")
console.log("THE RANDOM MESSAGE")
console.log("-----------------------------------")
const messageGen= () => {
   let random = Math.round(Math.random()*3);
   switch (random){
    case 0:
     return "The best use of life is LOVE";
     break;

    case 1:
     return "The best expression of love is TIME";
     break;

    case 2:
     return"The best time to love is NOW";
     break;

    case 3:
     return "There is a purpose behind every situation( problem and fortune)";
     break;
    
  }
};

console.log(messageGen());