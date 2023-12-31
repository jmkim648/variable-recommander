export { currentPage, $questionText, currentPurpose, $purposeEtcText, initSectionPage, $selectTitle1, $selectTitle2, $chatListInit };

//html 페이지 구현
const $sectionPageChange = document.querySelector(".section-page-change");
let currentPage = 2;
let currentPurpose = "데이터베이스 연결";

//Init
const textPage1Init = "함수/변수명을 추천합니다.<br>언어와 용도를 선택한 뒤 '추천해줘!' 버튼을 눌러주세요.<br>기타의 경우 '이미지 인식'과 같은 형태로 입력하는 것이 좋습니다.<br>시간이 조금 걸릴 수 있으며, 부정확한 답변이 나올 수 있습니다."
const textPage2Init = "임의의 코드를 선택한 언어의 컨벤션에 맞게 고쳐줍니다.<br>수정할 코드를 입력한 뒤 '추천해줘!' 버튼을 눌러주세요.<br>시간이 조금 걸릴 수 있으며, 부정확한 답변이 나올 수 있습니다.<br>특히 컨벤션의 경우 직접 다시 확인해보는 것을 권장합니다."


//페이지 전환용 버튼
const $selectTitle1 = document.querySelector(".title-variable");
const $selectTitle2 = document.querySelector(".title-convention");
const $chatListInit = document.querySelector(".chat-view ul");

//page 1-----------------------------
//용도에 따른 함수명, 변수명 추천
//create purpose selector
const $selectPurpose = document.createElement("div");
$selectPurpose.className = "select-purpose";
const $purposeTitleHolder = document.createElement("div");
$purposeTitleHolder.className = "title-holder";
const $purposeTitle = document.createElement("p");
$purposeTitle.className = "subject-title";
$purposeTitle.innerHTML = "용도 선택";
const $radioSelectPurpose = document.createElement("div");
$radioSelectPurpose.className = "radio-select-purpose";

const $radioPurpose0 = document.createElement("input");
$radioPurpose0.type = "radio";
$radioPurpose0.id = "데이터베이스 연결";
$radioPurpose0.name = "purpose";
$radioPurpose0.checked = true;
const $labelPurpose0 = document.createElement("label");
$labelPurpose0.htmlFor = "데이터베이스 연결";
$labelPurpose0.innerHTML = "데이터베이스 연결";
const $radioPurpose1 = document.createElement("input");
$radioPurpose1.type = "radio";
$radioPurpose1.id = "데이터 저장";
$radioPurpose1.name = "purpose";
const $labelPurpose1 = document.createElement("label");
$labelPurpose1.htmlFor = "데이터 저장";
$labelPurpose1.innerHTML = "데이터 저장";
const $radioPurpose2 = document.createElement("input");
$radioPurpose2.type = "radio";
$radioPurpose2.id = "파일 읽기";
$radioPurpose2.name = "purpose";
const $labelPurpose2 = document.createElement("label");
$labelPurpose2.htmlFor = "파일 읽기";
$labelPurpose2.innerHTML = "파일 읽기";
const $radioPurpose3 = document.createElement("input");
$radioPurpose3.type = "radio";
$radioPurpose3.id = "이미지 처리";
$radioPurpose3.name = "purpose";
const $labelPurpose3 = document.createElement("label");
$labelPurpose3.htmlFor = "이미지 처리";
$labelPurpose3.innerHTML = "이미지 처리";
const $radioPurpose4 = document.createElement("input");
$radioPurpose4.type = "radio";
$radioPurpose4.id = "문자열 조작";
$radioPurpose4.name = "purpose";
const $labelPurpose4 = document.createElement("label");
$labelPurpose4.htmlFor = "문자열 조작";
$labelPurpose4.innerHTML = "문자열 조작";
const $radioPurpose5 = document.createElement("input");
$radioPurpose5.type = "radio";
$radioPurpose5.id = "수학 연산";
$radioPurpose5.name = "purpose";
const $labelPurpose5 = document.createElement("label");
$labelPurpose5.htmlFor = "수학 연산";
$labelPurpose5.innerHTML = "수학 연산";
const $radioPurpose6 = document.createElement("input");
$radioPurpose6.type = "radio";
$radioPurpose6.id = "기타";
$radioPurpose6.name = "purpose";
const $labelPurpose6 = document.createElement("label");
$labelPurpose6.htmlFor = "기타";
$labelPurpose6.innerHTML = "기타(상단과 같이 입력)";

//create text input for select 6(etc)
const $purposeTextHolder = document.createElement("div");
$purposeTextHolder.className = "purpose-text-holder";
const $purposeEtcText = document.createElement("input");
$purposeEtcText.type = "text";
$purposeEtcText.disabled = true;

//setting
$purposeTitleHolder.appendChild($purposeTitle);
$selectPurpose.appendChild($purposeTitleHolder);
$radioSelectPurpose.appendChild($radioPurpose0);
$radioSelectPurpose.appendChild($labelPurpose0);
$radioSelectPurpose.appendChild($radioPurpose1);
$radioSelectPurpose.appendChild($labelPurpose1);
$radioSelectPurpose.appendChild($radioPurpose2);
$radioSelectPurpose.appendChild($labelPurpose2);
$radioSelectPurpose.appendChild($radioPurpose3);
$radioSelectPurpose.appendChild($labelPurpose3);
$radioSelectPurpose.appendChild($radioPurpose4);
$radioSelectPurpose.appendChild($labelPurpose4);
$radioSelectPurpose.appendChild($radioPurpose5);
$radioSelectPurpose.appendChild($labelPurpose5);
$radioSelectPurpose.appendChild($radioPurpose6);
$radioSelectPurpose.appendChild($labelPurpose6);
$selectPurpose.appendChild($radioSelectPurpose);
$purposeTextHolder.appendChild($purposeEtcText);
$selectPurpose.appendChild($purposeTextHolder);

//page 2---------------------------
//코드 입력 시 언어에 따른 컨벤션에 맞춰 수정 및 추천
const $chatInput = document.createElement("div");
$chatInput.className = "chat-input";
const $chatInputTitleHolder = document.createElement("div");
$chatInputTitleHolder.className = "title-holder";
const $chatInputTitle = document.createElement("p");
$chatInputTitle.className = "subject-title";
$chatInputTitle.innerHTML = "코드 입력";
const $questionTextHolder = document.createElement("div");
$questionTextHolder.className = "question-text-holder";
const $questionText = document.createElement("textarea");
$questionText.name = "question";
$questionText.id = "question";

$chatInputTitleHolder.appendChild($chatInputTitle);
$chatInput.appendChild($chatInputTitleHolder);
$questionTextHolder.appendChild($questionText);
$chatInput.appendChild($questionTextHolder);

//select purpose
$radioSelectPurpose.addEventListener("change", (e) => {
    $purposeEtcText.disabled = true;
    $purposeEtcText.value = "";
    if ($radioPurpose0.checked) {
        currentPurpose = $radioPurpose0.id;
    }
    else if ($radioPurpose1.checked) {
        currentPurpose = $radioPurpose1.id;
    }
    else if ($radioPurpose2.checked) {
        currentPurpose = $radioPurpose2.id;
    }
    else if ($radioPurpose3.checked) {
        currentPurpose = $radioPurpose3.id;
    }
    else if ($radioPurpose4.checked) {
        currentPurpose = $radioPurpose4.id;
    }
    else if ($radioPurpose5.checked) {
        currentPurpose = $radioPurpose5.id;
    }
    else if ($radioPurpose6.checked) {
        currentPurpose = "";
        $purposeEtcText.disabled = false;
        $purposeEtcText.focus();
    }
});

//when etc input event
$purposeEtcText.addEventListener("input", (e) => {
    currentPurpose = e.target.value;
});

//Init page
function initSectionPage() {
    currentPage = 1;
    $sectionPageChange.textContent = "";
    $sectionPageChange.appendChild($selectPurpose);
    $selectTitle1.classList.remove("title-selected");
    $selectTitle2.classList.remove("title-selected");
    $selectTitle1.classList.add("title-selected");
    $chatListInit.innerHTML = textPage1Init;
}

$selectTitle1.addEventListener("click", () => {
    currentPage = 1;
    $sectionPageChange.textContent = "";
    $sectionPageChange.appendChild($selectPurpose);
    $selectTitle1.classList.remove("title-selected");
    $selectTitle2.classList.remove("title-selected");
    $selectTitle1.classList.add("title-selected");

    //display Init
    $chatListInit.innerHTML = textPage1Init;
})
$selectTitle2.addEventListener("click", () => {
    currentPage = 2;
    $sectionPageChange.textContent = "";
    $sectionPageChange.appendChild($chatInput);
    $selectTitle1.classList.remove("title-selected");
    $selectTitle2.classList.remove("title-selected");
    $selectTitle2.classList.add("title-selected");
    $questionText.focus();
    
    // display init
    $chatListInit.innerHTML = textPage2Init;
})