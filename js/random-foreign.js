function foreignWordChoice() {
  var dropdownArea = document.querySelector(
    ".featured-section .container .row"
  );
  dropdownArea.innerHTML = `
    `; // dropdownArea의 내용 초기화
  dropdownArea.style.justifyContent = "";

  var title = document.createElement("h6");
  title.innerText = "언어를 선택해주세요";
  title.style.color = "white";
  title.style.textAlign = "center";
  dropdownArea.appendChild(title);

  var languageSelectArea = document.createElement("div");
  languageSelectArea.innerHTML = `
    <form method="get" class="custom-form mt-4 pt-2 mb-lg-0 mb-1" role="search">
        <div class="input-group input-group-lg">
            <span class="input-group-text" id="basic-addon1">&#127759
            </span>
            <button id="frenchButton" type="submit" class="form-control" style="background: linear-gradient(45deg, var(--france-blue-color), var(--white-color), var(--france-red-color)); color:var(--dark-color); font-size:1.2vmax; white-space: nowrap;")>프랑스어</button>
            <button type="submit" class="form-control" style="background: linear-gradient(45deg, var(--italia-green-color), var(--white-color), var(--italia-red-color)); color:var(--dark-color); font-size:1.2vmax; white-space: nowrap;">이탈리아어</button>
            <button type="submit" class="form-control" style="background: linear-gradient(45deg, var(--spain-red-color), var(--spain-yellow-color), var(--spain-red-color)); color:var(--dark-color); font-size:1.2vmax; white-space: nowrap;">스페인어</button>
            <button type="submit" class="form-control" style="background: linear-gradient(45deg, var(--white-color), var(--israel-blue-color), var(--white-color)); color:var(--dark-color); font-size:1.2vmax; white-space: nowrap;">히브리어</button>
        </div>
    </form>
    `;
  document
    .querySelector(".row.justify-content-left")
    .appendChild(languageSelectArea);

  var buttons = languageSelectArea.querySelectorAll("button");
  var beautyVoca, vocaDetails;
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // 페이지 새로고침 방지

      var oldDescrip = document.querySelector(".description-container");
      var oldDescrip_bot = document.querySelector(".description-bottom");
      if (oldDescrip) {
        oldDescrip.remove();
      }
      if (oldDescrip_bot) {
        oldDescrip_bot.remove();
      }
      var descrip = document.createElement("div");
      descrip.className = "description-container";
      descrip.innerHTML = `
            <p class="description" style="margin-top:0;margin-bottom:0;">언어를 클릭할 때마다 랜덤으로 다르게 나옵니다.</p>
            <p class="description-select" style="margin-bottom:2.5vh;">Copy를 누르면 해당 닉네임을 복사할 수 있습니다.</p>
            `;
      document.querySelector(".row.justify-content-left").appendChild(descrip);

      var descrip_bottom = document.createElement("div");
      descrip_bottom.className = "description-bottom";
      descrip_bottom.innerHTML = `
            <p class="warning" style="margin-top:0;margin-bottom:0;">이름은 20자 이하의 영어(혹은 숫자)로 입력하세요.</p>
            <p class="description">이름을 입력하고 '추가'를 선택 시 새 아이디를 추천합니다</p>
            `;
      var exisitingVocaWithName = document.getElementById("vocaWithName");
      if (exisitingVocaWithName) {
        exisitingVocaWithName.remove();
      }
      var existingAdditionalInputArea =
        document.getElementById("additionalInput");
      if (existingAdditionalInputArea) {
        existingAdditionalInputArea.remove();
      }
      var exisitingBeautyVoca = document.getElementById("beautyVoca");
      if (exisitingBeautyVoca) {
        exisitingBeautyVoca.remove();
      }
      var additionalInputArea = document.createElement("div");
      additionalInputArea.id = "additionalInput"; // 고유한 id값 설정
      additionalInputArea.innerHTML = `
            <form method="get" class="custom-form pt-2 mb-lg-0 mb-5" role="search">
                    <div class="input-group input-group-lg">
                    <span class="input-group-text bi-search" id="basic-addon1">
                    </span>
                    <input name="additionalName" type="eng_search" class="form-control" id="additionalName" placeholder="영어 이름(별명)" aria-label="추천">
                    <button id="add" type="button" class="form-control" style="background-color:var(--custom-btn-bg-color); color:var(--white-color);">추가</button>
                    <button type="reset" class="form-control" style="background-color:var(--dark-color); color:var(--white-color);">Reset</button>
                </div>
            </form>
            `;

      var randomIndex;

      if (button === buttons[0]) {
        randomIndex = Math.floor(Math.random() * beautyFrench.length);
        beautyVoca = beautyFrench[randomIndex][0];
        vocaDetails = beautyFrench[randomIndex][1];
      } else if (button === buttons[1]) {
        randomIndex = Math.floor(Math.random() * beautyItalian.length);
        beautyVoca = beautyItalian[randomIndex][0];
        vocaDetails = beautyItalian[randomIndex][1];
      } else if (button === buttons[2]) {
        randomIndex = Math.floor(Math.random() * beautySpanish.length);
        beautyVoca = beautySpanish[randomIndex][0];
        vocaDetails = beautySpanish[randomIndex][1];
      } else if (button === buttons[3]) {
        randomIndex = Math.floor(Math.random() * beautyHebrian.length);
        beautyVoca = beautyHebrian[randomIndex][0];
        vocaDetails = beautyHebrian[randomIndex][1];
      }

      var beautyVocaContainer = document.createElement("div");
      beautyVocaContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
      beautyVocaContainer.id = "beautyVoca";
      beautyVocaContainer.innerHTML = `
            <div class="new-custom-block bg-white shadow-lg">
                <div class="d-flex">
                    <div>
                        <div class="d-flex justify-content-start align-items-start">
                            <h5 class="mb-2">※ ${vocaDetails}</h5>
                        </div>
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                            <p class="mb-0">@${beautyVoca}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
      document
        .querySelector(".row.justify-content-left")
        .appendChild(beautyVocaContainer);
      document
        .querySelector(".row.justify-content-left")
        .appendChild(descrip_bottom);
      document
        .querySelector(".row.justify-content-left")
        .appendChild(additionalInputArea);
      document.querySelectorAll(".copy-button").forEach(function (button) {
        button.addEventListener("click", async function (event) {
          var textToCopy = event.target.parentElement
            .querySelector(".mb-0")
            .innerText.slice(1);
          await navigator.clipboard.writeText(textToCopy);
          alert('"' + textToCopy + '" ' + "가 복사되었습니다.");
        });
      });

      var addButton = additionalInputArea.querySelector('button[id="add"]');
      addButton.addEventListener("click", function (event) {
        var name = additionalInputArea
          .querySelector("#additionalName")
          .value.toLowerCase()
          .split(" ")
          .join("");
        var isAlphanumeric = /^[a-z0-9\s]*$/i.test(name);
        var isValidLength = name.length <= 20;
        if (!isAlphanumeric || !isValidLength) {
          alert(
            "20자 이내의 알파벳(혹은 숫자)로 이루어진 문자열이어야 합니다."
          );
          return;
        }
        if (name) {
          var exisitingVocaWithName = document.getElementById("vocaWithName");
          if (exisitingVocaWithName) {
            exisitingVocaWithName.remove();
          }
          var exisitingBeautyVoca = document.getElementById("beautyVoca");
          if (exisitingBeautyVoca) {
            exisitingBeautyVoca.remove();
          }
          if (existingAdditionalInputArea) {
            existingAdditionalInputArea.remove();
          }
          var existingDescript = document.getElementById("description-bottom");
          if (existingDescript) {
            existingDescript.remove();
          }
          var withName1 = beautyVoca + name;
          var withName2 = beautyVoca + "." + name;
          var withName3 = beautyVoca + "_" + name;
          var withName4 = name + beautyVoca;
          var withName5 = name + "." + beautyVoca;
          var withName6 = name + "_" + beautyVoca;
          var vocaWithNameContainer = document.createElement("div");
          vocaWithNameContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
          vocaWithNameContainer.id = "vocaWithName";
          vocaWithNameContainer.innerHTML = `
                    <div class="new-custom-block bg-white shadow-lg">
                        <div class="d-flex">
                            <div>
                                <div class="d-flex justify-content-start align-items-start">
                                    <h5 class="mb-2">※ ${vocaDetails}</h5>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${beautyVoca}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName1}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName2}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName3}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName4}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName5}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName6}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
          descrip_bottom.innerHTML = `
                    <p class="description">'Reset'을 선택하면 원래대로 돌아옵니다.</p>
                    `;
          document
            .querySelector(".row.justify-content-left")
            .appendChild(vocaWithNameContainer);
          document
            .querySelector(".row.justify-content-left")
            .appendChild(descrip_bottom);
          document
            .querySelector(".row.justify-content-left")
            .appendChild(additionalInputArea);
          document.querySelectorAll(".copy-button").forEach(function (button) {
            button.addEventListener("click", async function (event) {
              var textToCopy = event.target.parentElement
                .querySelector(".mb-0")
                .innerText.slice(1);
              await navigator.clipboard.writeText(textToCopy);
              alert('"' + textToCopy + '" ' + "가 복사되었습니다.");
            });
          });
        }
      });

      var resetButton = additionalInputArea.querySelector(
        'button[type="reset"]'
      );
      resetButton.addEventListener("click", function (event) {
        event.preventDefault();
        var exisitingVocaWithName = document.getElementById("vocaWithName");
        if (exisitingVocaWithName) {
          exisitingVocaWithName.remove();
        }
        if (existingAdditionalInputArea) {
          existingAdditionalInputArea.remove();
        }
        var existingDescript = document.getElementById("description-bottom");
        if (existingDescript) {
          existingDescript.remove();
        }
        descrip_bottom.innerHTML = `
                <p class="warning" style="margin-top:0;margin-bottom:0;">이름은 20자 이하의 영어(혹은 숫자)로 입력하세요.</p>
                <p class="description">이름을 입력하고 '추가'를 선택 시 새 아이디를 추천합니다</p>
                `;
        var additionalNameInput =
          additionalInputArea.querySelector("#additionalName");
        additionalNameInput.value = "";
        document
          .querySelector(".row.justify-content-left")
          .appendChild(beautyVocaContainer);
        document
          .querySelector(".row.justify-content-left")
          .appendChild(descrip_bottom);
        document
          .querySelector(".row.justify-content-left")
          .appendChild(additionalInputArea);
      });
    });
  });
}
