import * as jsonObject from '../data/data.js'

const $body = document.getElementById("body");

//chatGPT API
const $form = document.querySelector("form");
const $input = document.querySelector(".chat-form textarea");
const $chatList = document.querySelector(".chat-view ul");


//chatGPT API-------------------------
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
let question;

//data파일에서 내용 불러오기
let data = [];
jsonObject.python.forEach((item, idx) => {
    data.push({
        role: item.role,
        content: item.content
    });
})
let questionList = [];

// input에 입력된 질문 받아오는 함수
$input.addEventListener("input", (e) => {
    question = e.target.value;
});

// 사용자의 질문을 객체로 만들어서 push
const sendQuestion = (question) => {
    if (question) {
        data.push({
            role: "user",
            content: question,
        });
        questionList.push({
            role: "user",
            content: question,
        });
    }
};

// display question
const printQuestion = async () => {
    if (question) {
        let li = document.createElement("li");
        li.classList.add("question");
        questionList.map((el) => {
            li.innerText = el.content;
        });
        console.log(li);
        $chatList.appendChild(li);
        questionList = [];
        question = false;
    }
};

// display answer
const printAnswer = (answer) => {
    let li = document.createElement("li");
    li.classList.add("answer");
    li.innerText = answer;
    $chatList.appendChild(li);
};

// api 요청보내는 함수
const apiPost = async () => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            printAnswer(res.choices[0].message.content);
        })
        .catch((err) => {
            console.log(err);
        });
};

// submit
$form.addEventListener("submit", (e) => {
    e.preventDefault();
    $input.value = null;
    sendQuestion(question);
    apiPost();
    printQuestion();
});

//dark mode
function toggleLightDark() {
    let currentClass = $body.className;
    $body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}