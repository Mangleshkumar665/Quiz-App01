var data = {
    questions: [
        {
            _quesId: "0",
            ques: "which of the following is  the capital city of India ?",
            quesOptions: ["Ahemdabad", "New Delhi", "Gorakhpur", "Chennai"],
            Answer: ["1","New Delhi"]
        },
        {
            _quesId: "1",
            ques: "who was winner of Dutch Grand Prix ?",
            quesOptions: ["Max Verstappen", "Charles Leclerc", "Sergio Perez", "Nicholas Latiffi"],
            Answer: ["0","Max Verstappen"]
        },
        {
            _quesId: "2",
            ques: "what is the result of 250 + 350  ?",
            quesOptions: ["650", "700", "560", "600"],
            Answer: ["3","600"]
        },
        {
            _quesId: "3",
            ques: "what is the result of 100 + 100  ?",
            quesOptions: ["200", "700", "560", "600"],
            Answer: ["0","200"]
        },
        {
            _quesId: "4",
            ques: "what is the result of 150 + 100  ?",
            quesOptions: ["200", "250", "560", "600"],
            Answer: ["1","250"]
        },


    ],
    userData: [
        {
            Name: "default",
            Age: "default",
            PhoneNo: "10000"
        }
    ]
}



// initialization-----------------------------------------

var submitBtn = document.querySelector(".submitBtn");

var userDetails = document.querySelector(".registration-sub")


// init confermation window--------------------------

var confirmWindow = document.querySelector(".confirmation");
// console.log(confirmWindow)

// init start button ----------------------------------
var startBtn = document.querySelector("#quizBtn");
// console.log(startBtn)



// main layer init 


let mainLayer = document.querySelector(".mainLayer");
let mainLayerHead =document.querySelector(".mainlayer-head");
 


let questionLayer = document.querySelector(".questions");




// console.log(questions)

let quizStartBtn = document.querySelector(".quizStartBtn");

let submitResult = document.querySelector(".submitResult");




var registrationWindow = document.querySelector(".registration")






let nameBtn = document.querySelector("#nameBtn")
let ageBtn = document.querySelector("#ageBtn")
let phoneBtn = document.querySelector("#phoneBtn")
let EmailBtn = document.querySelector("#EmailBtn")




let body = document.querySelector("body");

body.addEventListener("mouseover",()=>{
    if(nameBtn.value === ""){
        nameBtn.value="Full Name"
    }
    if(ageBtn.value === ""){
        ageBtn.value="Age"
    }

    if(phoneBtn.value === ""){
        phoneBtn.value="Phone Number"
    }

    if(EmailBtn.value === ""){
        EmailBtn.value="E Mail"
    }

})


nameBtn.addEventListener("click",()=>{
    nameBtn.value=""


    

})


ageBtn.addEventListener("click",()=>{
    ageBtn.value=""
})


phoneBtn.addEventListener("click",()=>{
    phoneBtn.value=""
})



EmailBtn.addEventListener("click",()=>{
    EmailBtn.value=""
})









submitBtn.addEventListener("click", () => {

    var temp = {}
    // console.log(userDetails.childNodes)
    
    temp.Name =userDetails.childNodes[1].childNodes[1].value;
    temp.Age = userDetails.childNodes[3].childNodes[1].value;

    temp.PhoneNo = userDetails.childNodes[5].childNodes[1].value;


    data.userData.push(temp);

    // setting the user data given by the user to the userData array in data object
    // console.log(data.userData)

    // setting the confirmation window ------------------------

    confirmWindow.style.display="grid";
    confirmWindow.innerHTML = `
    <div class="ConfirmationText one">
                <span id="displayName" class="displayDetails col1" >
                    Student Name : ${temp.Name}
                </span>
                <span id="displayAge" class="displayDetails col1" >
                    Age : ${temp.Age}
                </span>
                <span id="displayPhone" class="displayDetails col1">
                    Phone No : ${temp.PhoneNo}
                </span> 
    </div>

    <div class="displayDetails displayText">
    Greetings <strong id="confirmWindowName">  ${temp.Name} </strong> you have successfully registered for the quiz  
    </div>
    `;

    registrationWindow.style.display="None";
    quizStartBtn.style.display="flex";
    body.style.backgroundColor="white"

})








// functions of start button -- ----------------------

function randomPatternGenerator() {
    var pattern = []
    // console.log

    while (pattern.length < 5) {
        var r = Math.random() * 10 + 1;
        r = Math.floor(r)
        // console.log(r)

        if (pattern.indexOf(Math.floor(r / 2)) === -1 && Math.floor(r / 2) < 5) {
            pattern.push(Math.floor(r / 2));
            // console.log("pass")
        }
        // console.log("ho")

    }
    // console.log(pattern)
    return pattern;


}






// start button ----------------------------------------------------
startBtn.addEventListener("click", () => {

    // operations - 1 - starting timer 2 - displaying questions 


    mainLayer.style.display="Block";
    var pattern = []
    pattern = randomPatternGenerator();
    // console.log("debug",pattern)
    questionNumber = "1"
    questionStatement = "what is the color of the sky?"
    optionArray = ["Blue", "Red", "Green", "Yellow"]

    var c= 0;
    pattern.forEach(element => {
        let quesDiv =  document.createElement("div")

        quesId = "ques"+element.toString();

        c=c+1;
        quesDiv.setAttribute("id", quesId);
        
        
        quesDiv.innerHTML = `
        <div class="questionBox">
        <div class="statement">
                    Qn -${c.toString()} ${data.questions[element].ques}
                </div>
                <div class="options">
                    <ol>
                        <li id="option1"> <input type="radio" id="option-1">${data.questions[element].quesOptions[0]} </li>
                        <li id="option2"> <input type="radio" id="option-2"> ${data.questions[element].quesOptions[1]}</li>
                        <li id="option3"> <input type="radio" id="option-3"> ${data.questions[element].quesOptions[2]}</li>
                        <li id="option4"> <input type="radio" id="option-4"> ${data.questions[element].quesOptions[3]}</li>
                    </ol>
                </div>
                </div>

            `
            questionLayer.append(quesDiv);
        });
        quizStartBtn.style.display="None";


// timer section -----------------------------------------------------

        




})







// working on questons 

// console.log("chers",data.questions[0].quesOptions)
// let radioBtn = document.querySelector("")


let questionList = document.querySelector(".questions")


// console.log(questionList)



quizStartBtn.addEventListener("click",()=>{
    // console.log("working under quizStart Btn -------------------------------------- ")
    submitResult.style.display="flex";


    


});



let submitResultBtn = document.querySelector("#finalSubmitBtn");
// console.log(submitResultBtn);



let resultsWindow = document.querySelector(".results");







submitResultBtn.addEventListener("click",()=>{

    // resultsWindow.style.display=""

    let questionChecker = document.querySelector(".questions");
    
    let correctAns = 0;
    let totalQns = 0;
    questionChecker.childNodes.forEach(element => {
        ("--------------------------------------------------------------")
        if(element.id != undefined){
            // console.log(element.childNodes,element,element.id[4])
            
            let ans = data.questions[element.id[4]].Answer[0]
            // console.log(ans,"ans")
            
            let finalAns = parseInt(ans) +parseInt(ans) +1 
            // console.log("final abs ",finalAns)
            // console.log("final chk",element.childNodes[1].childNodes[3].childNodes[1].childNodes[finalAns].childNodes[1].checked)

            // console.log("final chk",element)


            if(element.childNodes[1].childNodes[3].childNodes[1].childNodes[finalAns].childNodes[1].checked){
                correctAns += 1
            }

            totalQns+=1
        }
    });

    // console.log(correctAns,"correct answers ");

    // questionChecker.style.display="None";

    // questionLayer.style.display="None";

    mainLayer.style.display="None";

// result system ---------------------------------------------------




    let resultScreen = document.querySelector(".results");

    resultScreen.style.display="grid";
    
    // results.innerHTML=`<strong> ${correctAns} /5</strong>`
    
    
    console.log(resultScreen.childNodes)

    resultScreen.childNodes[3].innerText=`Percentage ${(correctAns/totalQns)*100} %`;
    
    resultScreen.childNodes[5].innerText=`Total Qns ${totalQns}`;


    resultScreen.childNodes[7].innerText=`Correct ${correctAns}`;
    
    resultScreen.childNodes[9].innerText=`Wrong ${totalQns - correctAns}`;

    
    let displayAge = document.querySelector("#displayAge");
    let displayPhone = document.querySelector("#displayPhone");

    displayAge.style.display="None";
    displayPhone.style.display="None";

    let displayDetails = document.querySelector(".displayText");
    displayDetails.style.display="None";







})















