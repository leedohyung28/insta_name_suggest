function famousWords() {
  var dropdownArea = document.querySelector(
    ".featured-section .container .row"
  );
  dropdownArea.innerHTML = ""; // dropdownArea의 내용 초기화
  dropdownArea.style.justifyContent = "";

  var title = document.createElement("h6");
  title.innerText = "종류를 선택하세요";
  title.style.color = "white";
  title.style.textAlign = "center";
  dropdownArea.appendChild(title);

  var wordsSelectArea = document.createElement("div");
  wordsSelectArea.innerHTML = `
    <form method="get" class="custom-form mt-4 pt-2 mb-lg-0 mb-1" role="search">
        <div class="input-group input-group-lg">
            <button id="wordButton" type="button" class="form-control" style="font-size: 1.3vmax;")>영화</button>
            <button id="wordButton" type="button" class="form-control" style="font-size: 1.3vmax;")>명언</button>
            <button id="wordButton" type="button" class="form-control" style="font-size: 1.3vmax;")>노래</button>
            <button id="wordButton" type="button" class="form-control" style="font-size: 1.3vmax;")>Slang</button>
        </div>
    </form>
    `;
  document
    .querySelector(".row.justify-content-left")
    .appendChild(wordsSelectArea);

  var buttons = wordsSelectArea.querySelectorAll("button");
  var wordOrigin,
    wordsDetail1,
    wordsDetail2,
    wordShow1,
    wordShow2,
    wordShow3,
    wordShow4;
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
            <p class="description" style="margin-top:0;margin-bottom:0;">주제를 클릭할 때마다 랜덤으로 다르게 나옵니다.</p>
            <p class="description-select" style="margin-bottom:2.5vh;">Copy를 누르면 해당 닉네임을 복사할 수 있습니다.</p>
            `;
      document.querySelector(".row.justify-content-left").appendChild(descrip);

      var descrip_bottom = document.createElement("div");
      descrip_bottom.className = "description-bottom";
      descrip_bottom.innerHTML = `
            <p class="warning" style="margin-top:2rem;margin-bottom:0;">이름은 20자 이하의 영어(혹은 숫자)로 입력하세요.</p>
            <p class="description">이름을 입력하고 '추가'를 선택 시 새 아이디를 추천합니다</p>
            `;

      for (let i = 1; i <= 4; i++) {
        var existingWordWithName = document.getElementById("wordWithName" + i);
        if (existingWordWithName) {
          existingWordWithName.remove();
        }
      }
      var existingContainer = document.getElementById("famousWC");
      if (existingContainer) {
        existingContainer.remove();
      }
      var existingAdditionalInputArea =
        document.getElementById("additionalInput");
      if (existingAdditionalInputArea) {
        existingAdditionalInputArea.remove();
      }

      var randomIndex;
      if (button === buttons[0]) {
        randomIndex = Math.floor(Math.random() * movieLinesLists.length);
        wordOrigin = movieLinesLists[randomIndex][0];
        wordsDetail1 = movieLinesLists[randomIndex][1];
        wordsDetail2 = movieLinesLists[randomIndex][2];
      } else if (button === buttons[1]) {
        randomIndex = Math.floor(Math.random() * quotesLists.length);
        wordOrigin = quotesLists[randomIndex][0];
        wordsDetail1 = quotesLists[randomIndex][1];
        wordsDetail2 = quotesLists[randomIndex][2];
      } else if (button === buttons[2]) {
        randomIndex = Math.floor(Math.random() * songLists.length);
        wordOrigin = songLists[randomIndex][0];
        wordsDetail1 = songLists[randomIndex][1];
        wordsDetail2 = songLists[randomIndex][2];
      } else if (button === buttons[3]) {
        randomIndex = Math.floor(Math.random() * engSlangLists.length);
        wordOrigin = engSlangLists[randomIndex][0];
        wordsDetail1 = engSlangLists[randomIndex][1];
        wordsDetail2 = engSlangLists[randomIndex][2];
      } else if (button === buttons[4]) {
        randomIndex = Math.floor(Math.random() * korSlangLists.length);
        wordOrigin = korSlangLists[randomIndex][0];
        wordsDetail1 = korSlangLists[randomIndex][1];
        wordsDetail2 = korSlangLists[randomIndex][2];
      }
      wordShow1 = wordOrigin.split(" ").join("");
      wordShow2 = wordOrigin.split(" ").join(".");
      wordShow3 = wordOrigin.split(" ").join("_");
      wordShow4 = wordOrigin
        .split(" ")
        .map(function (name) {
          return name[0];
        })
        .join("");

      var famousWordContainer = document.createElement("div");
      famousWordContainer.className = "col-lg-4 col-12 mb-lg-0";
      famousWordContainer.id = "famousWC";
      if (button === buttons[3]) {
        famousWordContainer.innerHTML = `
            <div class="new-custom-block bg-white shadow-lg">
                <div class="d-flex">
                    <div>
                        <div class="d-flex justify-content-start align-items-start">
                            <h5 class="mb-2" style="color:red;">${wordsDetail1}</h5>
                        </div>
                        <div class="d-flex justify-content-start align-items-start">
                            <h5 class="mb-1" style="color:blue;">${wordsDetail2}</h5>
                        </div>
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${wordShow1}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-share"></i>
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
      } else {
        famousWordContainer.innerHTML = `
            <div class="new-custom-block bg-white shadow-lg">
                <div class="d-flex">
                    <div>
                        <div class="d-flex justify-content-start align-items-start">
                            <h5 class="mb-2" style="color:red;">${wordsDetail1}</h5>
                        </div>
                        <div class="d-flex justify-content-start align-items-start">
                            <h5 class="mb-1" style="color:blue;">${wordsDetail2}</h5>
                        </div>
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${wordShow1}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-share"></i>
                                Copy
                            </button>
                        </div>
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${wordShow2}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-share"></i>
                                Copy
                            </button>
                        </div>
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${wordShow3}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-share"></i>
                                Copy
                            </button>
                        </div>
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${wordShow4}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-share"></i>
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
      }
      var additionalInputArea = document.createElement("div");
      additionalInputArea.id = "additionalInput"; // 고유한 id값 설정
      additionalInputArea.innerHTML = `
            <form method="get" class="custom-form pt-2 mb-lg-0 mb-5" role="search">
                    <div class="input-group input-group-lg">
                    <span class="input-group-text bi-search" id="basic-addon1">
                    </span>
                    <input name="additionalName" type="eng_search" class="form-control" id="additionalName" placeholder="영어 이름(별명)" aria-label="추천">
                    <button id="add" type="button" class="form-control" style="background-color:var(--custom-btn-bg-color); color:var(--white-color);")>추가</button>
                    <button type="reset" class="form-control" style="background-color:var(--dark-color); color:var(--white-color);">Reset</button>
                </div>
            </form>
            `;
      document
        .querySelector(".row.justify-content-left")
        .appendChild(famousWordContainer);
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
          var existingContainer = document.getElementById("famousWC");
          if (existingContainer) {
            existingContainer.remove();
          }
          for (let i = 1; i <= 4; i++) {
            var existingWordWithName = document.getElementById(
              "wordWithName" + i
            );
            if (existingWordWithName) {
              existingWordWithName.remove();
            }
          }
          if (existingAdditionalInputArea) {
            existingAdditionalInputArea.remove();
          }
          var existingDescript = document.getElementById("description-bottom");
          if (existingDescript) {
            existingDescript.remove();
          }
          var withName1_1 = wordShow1 + name;
          var withName2_1 = wordShow1 + "." + name;
          var withName3_1 = wordShow1 + "_" + name;
          var withName4_1 = name + wordShow1;
          var withName5_1 = name + "." + wordShow1;
          var withName6_1 = name + "_" + wordShow1;
          var withName1_2 = wordShow2 + name;
          var withName2_2 = wordShow2 + "." + name;
          var withName3_2 = wordShow2 + "_" + name;
          var withName4_2 = name + wordShow2;
          var withName5_2 = name + "." + wordShow2;
          var withName6_2 = name + "_" + wordShow2;
          var withName1_3 = wordShow3 + name;
          var withName2_3 = wordShow3 + "." + name;
          var withName3_3 = wordShow3 + "_" + name;
          var withName4_3 = name + wordShow3;
          var withName5_3 = name + "." + wordShow3;
          var withName6_3 = name + "_" + wordShow3;
          var withName1_4 = wordShow4 + name;
          var withName2_4 = wordShow4 + "." + name;
          var withName3_4 = wordShow4 + "_" + name;
          var withName4_4 = name + wordShow4;
          var withName5_4 = name + "." + wordShow4;
          var withName6_4 = name + "_" + wordShow4;
          var wordWithNameContainer1 = document.createElement("div");
          wordWithNameContainer1.className = "col-lg-4 col-12 mb-4 mb-lg-0";
          wordWithNameContainer1.id = "wordWithName1";
          wordWithNameContainer1.innerHTML = `
                    <div class="new-custom-block bg-white shadow-lg">
                        <div class="d-flex">
                            <div>
                                <h5 class="mb-2" style="width:310px; height:0px;"></h5>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName1_1}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName2_1}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName3_1}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName4_1}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName5_1}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName6_1}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
          var wordWithNameContainer2 = document.createElement("div");
          wordWithNameContainer2.className = "col-lg-4 col-12 mb-4 mb-lg-0";
          wordWithNameContainer2.id = "wordWithName2";
          wordWithNameContainer2.innerHTML = `
                    <div class="new-custom-block bg-white shadow-lg">
                        <div class="d-flex">
                            <div>
                                <h5 class="mb-2" style="width:310px; height:0px;"></h5>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName1_2}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName2_2}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName3_2}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName4_2}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName5_2}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName6_2}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
          var wordWithNameContainer3 = document.createElement("div");
          wordWithNameContainer3.className = "col-lg-4 col-12 mb-4 mb-lg-0";
          wordWithNameContainer3.id = "wordWithName3";
          wordWithNameContainer3.innerHTML = `
                    <div class="new-custom-block bg-white shadow-lg">
                        <div class="d-flex">
                            <div>
                                <h5 class="mb-2" style="width:310px; height:0px;"></h5>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName1_3}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName2_3}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName3_3}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName4_3}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName5_3}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName6_3}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
          var wordWithNameContainer4 = document.createElement("div");
          wordWithNameContainer4.className = "col-lg-4 col-12 mb-4 mb-lg-0";
          wordWithNameContainer4.id = "wordWithName4";
          wordWithNameContainer4.innerHTML = `
                    <div class="new-custom-block bg-white shadow-lg">
                        <div class="d-flex">
                            <div>
                                <h5 class="mb-2" style="width:310px; height:0px;"></h5>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName1_4}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName2_4}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName3_4}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName4_4}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName5_4}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withName6_4}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
          descrip_bottom.innerHTML = `
                    <p class="description" style="margin-top:2rem;">'Reset'을 선택하면 원래대로 돌아옵니다.</p>
                    `;

          document
            .querySelector(".row.justify-content-left")
            .appendChild(famousWordContainer);
          document
            .querySelector(".row.justify-content-left")
            .appendChild(descrip_bottom);
          document
            .querySelector(".row.justify-content-left")
            .appendChild(additionalInputArea);
          if (button === buttons[3]) {
            document
              .querySelector(".row.justify-content-left")
              .appendChild(wordWithNameContainer3);
          } else {
            document
              .querySelector(".row.justify-content-left")
              .appendChild(wordWithNameContainer1);
            document
              .querySelector(".row.justify-content-left")
              .appendChild(wordWithNameContainer2);
            document
              .querySelector(".row.justify-content-left")
              .appendChild(wordWithNameContainer3);
            document
              .querySelector(".row.justify-content-left")
              .appendChild(wordWithNameContainer4);
          }
          var rowElements = document.querySelectorAll(
            ".row.justify-content-left"
          );
          rowElements.forEach(function (rowElement) {
            rowElement.style.display = "flow-root";
          });
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
        var rowElements = document.querySelectorAll(
          ".row.justify-content-left"
        );
        rowElements.forEach(function (rowElement) {
          rowElement.style.display = "flex";
        });
        for (let i = 1; i <= 4; i++) {
          var existingWordWithName = document.getElementById(
            "wordWithName" + i
          );
          if (existingWordWithName) {
            existingWordWithName.remove();
          }
        }
        var existingFamousWords = document.getElementById("famousWC");
        if (existingFamousWords) {
          existingFamousWords.remove();
        }
        if (existingAdditionalInputArea) {
          existingAdditionalInputArea.remove();
        }
        var existingDescript = document.getElementById("description-bottom");
        if (existingDescript) {
          existingDescript.remove();
        }
        descrip_bottom.innerHTML = `
                <p class="warning" style="margin-top:2rem;margin-bottom:0;">이름은 20자 이하의 영어(혹은 숫자)로 입력하세요.</p>
                <p class="description">이름을 입력하고 '추가'를 선택 시 새 아이디를 추천합니다</p>
                `;
        var additionalNameInput =
          additionalInputArea.querySelector("#additionalName");
        additionalNameInput.value = "";
        document
          .querySelector(".row.justify-content-left")
          .appendChild(famousWordContainer);
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
