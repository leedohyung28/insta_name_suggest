function addDropdownButtons() {
  var dropdownArea = document.querySelector(
    ".featured-section .container .row"
  );
  dropdownArea.innerHTML = `
    `; // dropdownArea의 내용 초기화
  dropdownArea.style.justifyContent = "";

  var title = document.createElement("h6");
  title.innerText = "조합할 단어를 선택해주세요";
  title.style.color = "white";
  title.style.textAlign = "center";
  dropdownArea.appendChild(title);

  var buttonDiv = document.createElement("div");
  buttonDiv.className = "d-flex justify-content-evenly flex-wrap";

  var dropdownDiv = document.createElement("div");
  dropdownDiv.className = "dropdown";

  var dropdownButton1 = document.createElement("button");
  dropdownButton1.className = "btn btn-secondary dropdown-toggle";
  dropdownButton1.type = "button";
  dropdownButton1.dataset.bsToggle = "dropdown";
  dropdownButton1.setAttribute("aria-expanded", "false");
  dropdownButton1.innerText = "감정(긍정적)";

  var dropdownMenu1 = document.createElement("ul");
  dropdownMenu1.className = "dropdown-menu";

  var item0 = createDropdownItem("감정(긍정적)", dropdownButton1, 1, false);
  var item1 = createDropdownItem("감정(센치한)", dropdownButton1, 2, false);
  var item2 = createDropdownItem("성격", dropdownButton1, 3, false);
  var item3 = createDropdownItem("자연 현상", dropdownButton1, 4, false);
  var item4 = createDropdownItem("동물", dropdownButton1, 5, false);
  var item5 = createDropdownItem("꽃", dropdownButton1, 6, false);
  var item6 = createDropdownItem("음식", dropdownButton1, 7, false);
  var item7 = createDropdownItem("색깔", dropdownButton1, 8, false);
  var item8 = createDropdownItem("캐릭터", dropdownButton1, 9, false);

  dropdownMenu1.appendChild(item0);
  dropdownMenu1.appendChild(item1);
  dropdownMenu1.appendChild(item2);
  dropdownMenu1.appendChild(item3);
  dropdownMenu1.appendChild(item4);
  dropdownMenu1.appendChild(item5);
  dropdownMenu1.appendChild(item6);
  dropdownMenu1.appendChild(item7);
  dropdownMenu1.appendChild(item8);

  var dropdownButton2 = document.createElement("button");
  dropdownButton2.className = "btn btn-secondary dropdown-toggle";
  dropdownButton2.type = "button";
  dropdownButton2.dataset.bsToggle = "dropdown";
  dropdownButton2.setAttribute("aria-expanded", "false");
  dropdownButton2.innerText = "감정(긍정적)";

  var dropdownMenu2 = document.createElement("ul");
  dropdownMenu2.className = "dropdown-menu";

  var item0_2 = createDropdownItem("감정(긍정적)", dropdownButton2, 1, true);
  var item1_2 = createDropdownItem("감정(센치한)", dropdownButton2, 2, true);
  var item2_2 = createDropdownItem("성격", dropdownButton2, 3, true);
  var item3_2 = createDropdownItem("자연 현상", dropdownButton2, 4, true);
  var item4_2 = createDropdownItem("동물", dropdownButton2, 5, true);
  var item5_2 = createDropdownItem("꽃", dropdownButton2, 6, true);
  var item6_2 = createDropdownItem("음식", dropdownButton2, 7, true);
  var item7_2 = createDropdownItem("색깔", dropdownButton2, 8, true);
  var item8_2 = createDropdownItem("캐릭터", dropdownButton2, 9, true);

  dropdownMenu2.appendChild(item0_2);
  dropdownMenu2.appendChild(item1_2);
  dropdownMenu2.appendChild(item2_2);
  dropdownMenu2.appendChild(item3_2);
  dropdownMenu2.appendChild(item4_2);
  dropdownMenu2.appendChild(item5_2);
  dropdownMenu2.appendChild(item6_2);
  dropdownMenu2.appendChild(item7_2);
  dropdownMenu2.appendChild(item8_2);

  var plusText = document.createElement("span");
  plusText.innerText = "+";
  plusText.style.color = "var(--white-color)";
  plusText.style.margin = "0 10px";

  var submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Generate";
  submitButton.className = "btn btn-primary";

  dropdownDiv.appendChild(dropdownButton1);
  dropdownDiv.appendChild(dropdownMenu1);
  dropdownDiv.appendChild(plusText);
  dropdownDiv.appendChild(dropdownButton2);
  dropdownDiv.appendChild(dropdownMenu2);
  dropdownDiv.appendChild(submitButton);

  buttonDiv.appendChild(dropdownDiv);

  dropdownArea.appendChild(buttonDiv);

  var lists = [
    positiveWords,
    sentimentalWords,
    personality,
    naturalWords,
    animals,
    flowers,
    foods,
    colors,
    character,
  ];

  var isCheckbox1Checked = false;
  var isCheckbox2Checked = false;

  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // 페이지 새로고침 방지

    var oldDescrip = document.querySelector(".description-container");
    if (oldDescrip) {
      oldDescrip.remove();
    }
    var descrip = document.createElement("div");
    descrip.className = "description-container";
    descrip.innerHTML = `
        <p class="description">원하는 단어의 주제를 선택하고 Generate를 눌러주세요.</p>
        <p class="description">Generate를 누를 때 마다 랜덤으로 새로운 조합이 나옵니다.</p>
        <p class="warning" style="margin-bottom:1vh;">단어 고정을 선택하면 해당 단어는 바뀌지 않습니다.</p>
        <p class="description-select" style="margin-bottom:2.5vh;">Copy를 누르면 해당 닉네임을 복사할 수 있습니다.</p>
        `;

    var containers = document.querySelectorAll(
      ".row.justify-content-left .col-lg-4.col-12.mb-4.mb-lg-0"
    );
    containers.forEach(function (container) {
      container.remove();
    }); // 기존의 container 삭제
    var firstChoice = window.firstChoice || 1;
    var secondChoice = window.secondChoice || 1;

    var selectedList1 = lists[firstChoice - 1];
    if (!isCheckbox1Checked) {
      randomIndex1 = Math.floor(Math.random() * selectedList1.length);
    }
    var selectedItem1 = selectedList1[randomIndex1];
    var firstItem = selectedItem1[0];
    var firstDetail = selectedItem1[1];

    var selectedList2 = lists[secondChoice - 1];
    if (!isCheckbox2Checked) {
      randomIndex2 = Math.floor(Math.random() * selectedList2.length);
    }
    var selectedItem2 = selectedList2[randomIndex2];
    var secondItem = selectedItem2[0];
    var secondDetail = selectedItem2[1];

    var wordsCombine1 = firstItem + "_" + secondItem;
    var wordsCombine2 = firstItem + "." + secondItem;
    var wordsCombine3 = firstItem + secondItem;
    var wordsCombineContainer = document.createElement("div");
    wordsCombineContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    wordsCombineContainer.innerHTML = `
        <div class="new-custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <div class="d-flex justify-content-start align-items-start">
                    <h6 class="voca-fix-red">단어 고정</h6>
                    <input type="checkbox" id="checkbox1" style="margin-right:10px; margin-left:2px;" ${
                      isCheckbox1Checked ? "checked" : ""
                    }>
                        <h5 class="mb-2" style="color:red;">※ ${firstDetail}</h5>
                    </div>
                    <div class="d-flex justify-content-start align-items-start">
                    <h6 class="voca-fix-blue">단어 고정</h6>
                    <input type="checkbox" id="checkbox2" style="margin-right:10px; margin-left:2px;" ${
                      isCheckbox2Checked ? "checked" : ""
                    }>
                        <h5 class="mb-2" style="color:blue;">※ ${secondDetail}</h5>
                    </div>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${wordsCombine1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${wordsCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${wordsCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    `;
    document.querySelector(".row.justify-content-left").appendChild(descrip);
    document
      .querySelector(".row.justify-content-left")
      .appendChild(wordsCombineContainer);
    document.querySelectorAll(".copy-button").forEach(function (button) {
      button.addEventListener("click", async function (event) {
        var textToCopy = event.target.parentElement
          .querySelector(".mb-0")
          .innerText.slice(1);
        await navigator.clipboard.writeText(textToCopy);
        alert('"' + textToCopy + '" ' + "가 복사되었습니다.");
      });
    });

    document
      .getElementById("checkbox1")
      .addEventListener("change", function () {
        isCheckbox1Checked = this.checked;
        if (!this.checked) {
          randomIndex1 = Math.floor(Math.random() * selectedList1.length);
        }
      });
    document
      .getElementById("checkbox2")
      .addEventListener("change", function () {
        isCheckbox2Checked = this.checked;
        if (!this.checked) {
          randomIndex2 = Math.floor(Math.random() * selectedList2.length);
        }
      });
  });
}

function createDropdownItem(text, dropdownButton, index, isSecondDropdown) {
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.className = "dropdown-item";
  button.type = "button";
  button.innerText = text;
  button.addEventListener("click", function () {
    dropdownButton.innerText = text;
    dropdownButton.dataset.bsToggle = "dropdown";
    if (isSecondDropdown) {
      window.secondChoice = index;
    } else {
      window.firstChoice = index;
    }
  });
  li.appendChild(button);
  return li;
}
