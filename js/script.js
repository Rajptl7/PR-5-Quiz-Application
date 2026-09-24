let questions = [
    {
        id: 1,
        que: "Which keyword is used to declare a constant?",
        option: ["var", "let", "const", "static"],
        ans: "const"
    },
    {
        id: 2,
        que: "Which method adds an element to the end of an array?",
        option: ["pop()", "push()", "shift()", "unshift()"],
        ans: "push()"
    },
    {
        id: 3,
        que: "Which method removes the last element from an array?",
        option: ["pop()", "push()", "shift()", "slice()"],
        ans: "pop()"
    },
    {
        id: 4,
        que: "What is the output of typeof 'Hello'?",
        option: ["text", "String", "string", "char"],
        ans: "string"
    },
    {
        id: 5,
        que: "Which operator is used for strict equality?",
        option: ["==", "=", "===", "!="],
        ans: "==="
    },
    {
        id: 6,
        que: "Which method finds the index of an element in an array?",
        option: ["find()", "indexOf()", "search()", "getIndex()"],
        ans: "indexOf()"
    },
    {
        id: 7,
        que: "Which loop is commonly used to iterate through an array?",
        option: ["for", "if", "switch", "try"],
        ans: "for"
    },
    {
        id: 8,
        que: "What is the output of 2 + '2'?",
        option: ["4", "22", "NaN", "Error"],
        ans: "22"
    },
    {
        id: 9,
        que: "Which method converts a JSON string into a JavaScript object?",
        option: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
        ans: "JSON.parse()"
    },
    {
        id: 10,
        que: "Which method converts a JavaScript object into a JSON string?",
        option: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
        ans: "JSON.stringify()"
    },
    {
        id: 11,
        que: "Which symbol is used for a single-line comment?",
        option: ["//", "/*", "#", "<!--"],
        ans: "//"
    },
    {
        id: 12,
        que: "Which function executes code after a specified delay?",
        option: ["setInterval()", "setTimeout()", "delay()", "wait()"],
        ans: "setTimeout()"
    },
    {
        id: 13,
        que: "Which method removes the first element from an array?",
        option: ["pop()", "push()", "shift()", "unshift()"],
        ans: "shift()"
    },
    {
        id: 14,
        que: "Which keyword is used to define a function?",
        option: ["function", "func", "def", "method"],
        ans: "function"
    },
    {
        id: 15,
        que: "Which value represents a variable that has been declared but not assigned?",
        option: ["null", "undefined", "empty", "false"],
        ans: "undefined"
    }
];


const displayQuestion = document.querySelector('#question');
const displayOption = document.querySelector('#option');
const displayQueNum = document.querySelector('#queNum');
const timer = document.querySelector('#timer');


let currentQuestion = -1;

let selectedAnswers = [];


nextQue = ()=>{

    displayOption.innerHTML = '';

    if(currentQuestion >= questions.length - 1){
        alert("All Question Completed !");
        return;
    }else{
        currentQuestion++;
    }

    displayQueNum.innerHTML = ` Q${questions[currentQuestion].id}.`;
    displayQuestion.innerHTML = questions[currentQuestion].que;

    questions[currentQuestion].option.forEach((value) =>{

        const li = document.createElement('li');

        li.innerHTML = `
            <input type="radio" name="quiz-option" class="me-2">
            <span>${value}</span>
        `;

        let radio = li.querySelector('input');

        if(selectedAnswers[currentQuestion] === value){
            radio.checked = true;
        }

        radio.addEventListener('change', () =>{
            selectedAnswers[currentQuestion] = value;

            // []
            console.log(selectedAnswers[currentQuestion]);
        });

        displayOption.append(li);
    })
}


nextQue();

prevQue = ()=>{

    displayOption.innerHTML = '';

    if(currentQuestion > 0){
        currentQuestion--;
    }else{
        currentQuestion = questions.length - 1;
    }

    displayQuestion.innerHTML = questions[currentQuestion].que;
    displayQueNum.innerHTML = ` Q${questions[currentQuestion].id}. `;

    questions[currentQuestion].option.forEach((value)=>{

        const li = document.createElement('li');

        li.innerHTML = `
            <input type="radio" name="quiz-option" class="me-2">
            <span>${value}</span>
        `;

        let radio = li.querySelector('input');

        if(selectedAnswers[currentQuestion] === value){
            radio.checked = true;
        }

        radio.addEventListener('change', ()=>{
            selectedAnswers[currentQuestion] = value;

            console.log(selectedAnswers[currentQuestion]);
        });

        displayOption.append(li);
    })
}


let time = 30 * 60;

let quizTimer = setInterval(() => {

    let minutes = (time / 60) | 0;
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timer.innerHTML = `${minutes}:${seconds}`;

    if (time <= 0) {
        clearInterval(quizTimer);
        alert("Time's Up!");
        return;
    }

    time--;

}, 1);