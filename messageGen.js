
let getRandom= num =>{
    return Math.round(Math.random()*num);
}

let arrayCollections ={
    lesson1: ["The best use of life is LOVE.", 
            "The best expression of love is TIME.",
            "The best time to love is NOW."  ],

    lesson2: ["Every temptation is an opportunity to do good.",
              "It is easier to stay out of temptation than getting out of it.",
              "The quicket way to neutralise temptation allure is to turn your attention to something else."],
     
    lesson3:["Observe your spiritual gift.",
              "Listen to your heart.",
              "Use your ability."]
}

let messageGen =[];

for(let lesson in arrayCollections) {
    let selectedOption = getRandom(arrayCollections[lesson].length);
    
    switch (lesson){
        case 'lesson1':
         messageGen.push(arrayCollections[lesson][selectedOption])
         break;
     
        case 'lesson2':
         messageGen.push(arrayCollections[lesson][selectedOption])
         break;
     
        case 'lesson3':
         messageGen.push(arrayCollections[lesson][selectedOption])
         break;
     
        default:
         messageGen.push( "There is a purpose behind every situation( problem and fortune)");
         
       }

  };
console.log("THE RANDOM MESSAGE")
console.log("-----------------------------------")
console.log("")

const formatMessage =(messages)=>{
    let format = messages.join("\n");
    console.log(format);
}

formatMessage(messageGen);

