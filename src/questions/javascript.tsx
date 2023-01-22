import { GeneralCulture } from "../types";

export const javascript: GeneralCulture[] = [
  {
    id: 1,
    ask: "Inside which HTML element do we put the JavaScript?",
    optionA:{
      text:"<js>",
      replay: false
    },
    optionB:{
      text:"<script>",
      replay: true
    },
    optionC:{
      text:"<scripting>",
      replay: false
    },
    optionD:{
      text:"<javascript>",
      replay: false
    }
  },
  {
    id: 2,
    ask: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    optionA:{
      text:"<script src='xxx.js'>",
      replay: true
    },
    optionB:{
      text:"<script to='xxx.js'>",
      replay: false
    },
    optionC:{
      text:"<script name='xxx.js'>",
      replay: false
    },
    optionD:{
      text:"<script href='xxx.js'>",
      replay: false
    }
  },
  {
    id: 3,
    ask: "How do you write 'Hello World' in an alert box?",
    optionA:{
      text:"msgBox('Hello World')",
      replay: false
    },
    optionB:{
      text:"alert('Hello World')",
      replay: true
    },
    optionC:{
      text:"msg('Hello World')",
      replay: false
    },
    optionD:{
      text:"console.log('Hello World')",
      replay: false
    }
  },
  {
    id: 4,
    ask: "How do you create a function in JavaScript?",
    optionA:{
      text:"function myFunction()",
      replay: true
    },
    optionB:{
      text:"function  = myFunction()",
      replay: false
    },
    optionC:{
      text:"Function myFunction()",
      replay: false
    },
    optionD:{
      text:"function = myFunction() => ",
      replay: false
    }
  },
  {
    id: 5,
    ask: "How do you call a function named 'myFunction'?",
    optionA:{
      text:"myFunction()",
      replay: true
    },
    optionB:{
      text:"call myFunction()",
      replay: false
    },
    optionC:{
      text:"constructor myFunction()",
      replay: false
    },
    optionD:{
      text:"call function myFunction",
      replay: false
    }
  },
  {
    id: 6,
    ask: "How to write an IF statement in JavaScript?",
    optionA:{
      text:"if i = 5 then",
      replay: false
    },
    optionB:{
      text:"if (i = 5)",
      replay: false
    },
    optionC:{
      text:"if i == 5 then",
      replay: false
    },
    optionD:{
      text:"if (i == 5)",
      replay: true
    }
  },
  {
    id: 7,
    ask: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    optionA:{
      text:"if i <> 5",
      replay: false
    },
    optionB:{
      text:"if i =! 5",
      replay: false
    },
    optionC:{
      text:"if i != 5",
      replay: true
    },
    optionD:{
      text:"if i !== 5",
      replay: false
    }
  },
  {
    id: 8,
    ask: "How does a FOR loop start?",
    optionA:{
      text:"for (i = 0; i <= 5; i++)",
      replay: true
    },
    optionB:{
      text:"for (i = 0, i <= 5, i++)",
      replay: false
    },
    optionC:{
      text:"for (i = 0, i <= 5, i+)",
      replay: false
    },
    optionD:{
      text:"for (i = 0; i <= 5; i+)",
      replay: false
    }
  },
  {
    id: 9,
    ask: "How can you add a comment that has one line in a JavaScript?    ",
    optionA:{
      text:"<!--This is a comment-->",
      replay: false
    },
    optionB:{
      text:"*/This is a comment/*",
      replay: false
    },
    optionC:{
      text:"//This is a comment",
      replay: true
    },
    optionD:{
      text:"{* This is a comment *}",
      replay: false
    }
  },
  {
    id: 10,
    ask: "What is the correct way to write a JavaScript array?",
    optionA:{
      text:"const colors = [('red'), ('blue'), ('black')]",
      replay: false
    },
    optionB:{
      text:"const colors = ('red'), ('blue'), ('black')",
      replay: false
    },
    optionC:{
      text:"const colors = ['red', 'blue', 'black']",
      replay: true
    },
    optionD:{
      text:"const colors = [1:'red', 2:'blue', 3:'black']",
      replay: false
    }
  },
  {
    id: 11,
    ask: "How do you round the number 7.25, to the nearest integer?",
    optionA:{
      text:"Math.floor(7.25)",
      replay: false
    },
    optionB:{
      text:"Math.around(7.25)",
      replay: false
    },
    optionC:{
      text:"Math.round(7.25)",
      replay: true
    },
    optionD:{
      text:"Math.nearNumber(7.25)",
      replay: false
    }
  },
  {
    id: 12,
    ask: "How can you detect the client's browser name?",
    optionA:{
      text:"browser.name",
      replay: false
    },
    optionB:{
      text:"window.appName",
      replay: false
    },
    optionC:{
      text:"document.appName",
      replay: false
    },
    optionD:{
      text:"navigator.appName",
      replay: true
    }
  },
  {
    id: 13,
    ask: "Which event occurs when the user clicks on an HTML element?",
    optionA:{
      text:"onchange",
      replay: false
    },
    optionB:{
      text:"onclick",
      replay: true
    },
    optionC:{
      text:"click",
      replay: false
    },
    optionD:{
      text:"onmouseclick",
      replay: false
    }
  },
  {
    id: 14,
    ask: "Which operator is used to assign a value to a variable?",
    optionA:{
      text:"?",
      replay: false
    },
    optionB:{
      text:"=",
      replay: true
    },
    optionC:{
      text:"==",
      replay: false
    },
    optionD:{
      text:"===",
      replay: false
    }
  },
  {
    id: 15,
    ask: "Which operator is used to assign a value to a variable?",
    optionA:{
      text:"Ignores the statements",
      replay: true
    },
    optionB:{
      text:"Throws an error",
      replay: false
    },
    optionC:{
      text:"Prompts to complete the statement",
      replay: false
    },
    optionD:{
      text:"Shows a warning",
      replay: false
    }
  },
];