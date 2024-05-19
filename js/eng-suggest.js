document
  .querySelector("form.custom-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 페이지 새로고침 방지

    var containers = document.querySelectorAll(
      ".row.justify-content-center .col-lg-4.col-12.mb-4.mb-lg-0"
    );
    containers.forEach(function (container) {
      container.remove();
    }); // 기존의 container 삭제

    var firstName = document.querySelector("#firstname").value.toLowerCase(); // 입력 받은 이름
    var lastName = document
      .querySelector("#lastname")
      .value.toLowerCase()
      .split(" ")
      .join("");

    var isAlphanumeric =
      /^[a-z0-9\s]*$/i.test(firstName) && /^[a-z0-9\s]*$/i.test(lastName);
    var isValidLength = firstName.length <= 20 && lastName.length <= 10;

    if (!isAlphanumeric || !isValidLength) {
      alert(
        "이름과 성은 영어 각각 20자, 10자 이내의 알파벳(혹은 숫자)로 이루어진 문자열이어야 합니다."
      );
      return;
    }

    var nameList = firstName.split(" ");
    var firstNameUnion = nameList.join("");
    var reverseName = firstNameUnion.split("").reverse().join(""); // 이름 거꾸로

    var reverseContainer = document.createElement("div");
    reverseContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    reverseContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">이름을 거꾸로 해보시는건 어때요?</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${reverseName}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>               
                </div>
            </div>
        </div>
    `;

    var withNumName = firstNameUnion
      .replace(/i/g, "1")
      .replace(/o/g, "0")
      .replace(/z/g, "2")
      .replace(/e/g, "3")
      .replace(/s/g, "5")
      .replace(/b/g, "8")
      .replace(/g/g, "6"); // 글자를 숫자로
    var strtonumContainer = document.createElement("div");
    strtonumContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    strtonumContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">글자를 숫자로 바꿔보시는건 어때요?</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${withNumName}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                </div>
            </div>
        </div>
    `;

    var withxName = firstNameUnion
      .replace(/a/g, "x")
      .replace(/e/g, "x")
      .replace(/i/g, "x")
      .replace(/o/g, "x")
      .replace(/u/g, "x"); // 글자를 숫자로
    var voweltoxContainer = document.createElement("div");
    voweltoxContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    voweltoxContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">모음을 x로 바꿔보시는건 어때요?</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${withxName}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                </div>
            </div>
        </div>
    `;

    var replaceFunctions = [
      {
        func: function (input) {
          return input.replace(/n/g, "nn");
        },
        letter: "n",
      },
      {
        func: function (input) {
          return input.replace(/y/g, "yy");
        },
        letter: "y",
      },
      {
        func: function (input) {
          return input.replace(/u/g, "uu");
        },
        letter: "u",
      },
      {
        func: function (input) {
          return input.replace(/h/g, "hh");
        },
        letter: "h",
      },
      {
        func: function (input) {
          return input.replace(/o/g, "oo");
        },
        letter: "o",
      },
      {
        func: function (input) {
          return input.replace(/a/g, "aa");
        },
        letter: "a",
      },
      {
        func: function (input) {
          return input.replace(/i/g, "ii");
        },
        letter: "i",
      },
    ];
    var multipleName;
    var randomReplace;
    var attempts = 0;
    var boost = true;
    do {
      randomReplace =
        replaceFunctions[Math.floor(Math.random() * replaceFunctions.length)];
      if (firstNameUnion.indexOf(randomReplace.letter) >= 0) {
        multipleName = randomReplace.func(firstNameUnion); // 특정 알파벳 증가
        break;
      }

      attempts++;
    } while (attempts < 5);
    if (!multipleName) {
      boost = false;
      multipleName = firstNameUnion;
    }
    if (boost === true) {
      var multiplewordContainer = document.createElement("div");
      multiplewordContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
      multiplewordContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">특정 알파벳(${randomReplace.letter})을 늘려보시는건 어때요?</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${multipleName}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                </div>
            </div>
        </div>
    `;
    }

    document
      .querySelector(".row.justify-content-center")
      .appendChild(reverseContainer);
    document
      .querySelector(".row.justify-content-center")
      .appendChild(strtonumContainer);
    document
      .querySelector(".row.justify-content-center")
      .appendChild(voweltoxContainer);
    if (boost === true) {
      document
        .querySelector(".row.justify-content-center")
        .appendChild(multiplewordContainer);
    }
    if (lastName) {
      var randomIndex = Math.floor(Math.random() * wordList.length); // 랜덤 인덱스 생성
      var voca = wordList[randomIndex][0];
      var meaning = wordList[randomIndex][1];
      var vocaCombine1 = voca + "_" + lastName;
      var vocaCombine2 = voca + "." + lastName;
      var vocaCombine3 = voca + lastName;
      var vocaContainer = document.createElement("div");
      vocaContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
      vocaContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">예쁜 단어와 성을 합쳐보는건 어때요?</h5>
                    <h6 style="font-size:12px;">※ ${meaning}</h6>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${vocaCombine1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div> 
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${vocaCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div> 
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${vocaCombine3}</p>
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
        .querySelector(".row.justify-content-center")
        .appendChild(vocaContainer);
    }

    if (nameList.length > 1) {
      var capFirst1 = nameList.join(".");
      var capFirst2 = nameList.join("_");
      var capFirstNameContainer = document.createElement("div");
      capFirstNameContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
      capFirstNameContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">이름을 기호로 합쳐보는건 어때요?</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${capFirst1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${capFirst2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                </div>
            </div>
        </div>
    `;

      var firstNameCombine1 = nameList
        .map(function (name, index) {
          return index === 0 ? name[0] : name;
        })
        .join("_");
      var firstNameCombine3 = nameList
        .map(function (name, index) {
          return index === nameList.length - 1 ? name[0] : name;
        })
        .join("_");
      var firstNameCombine2 = nameList
        .map(function (name, index) {
          return index === 0 ? name[0] : name;
        })
        .join(".");
      var firstNameCombine4 = nameList
        .map(function (name, index) {
          return index === nameList.length - 1 ? name[0] : name;
        })
        .join(".");
      var firstNameCombinationContainer = document.createElement("div");
      firstNameCombinationContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
      firstNameCombinationContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">이름 중 한 글자를 줄여보는건 어때요?</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${firstNameCombine1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${firstNameCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${firstNameCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${firstNameCombine4}</p>
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
        .querySelector(".row.justify-content-center")
        .appendChild(capFirstNameContainer);
      document
        .querySelector(".row.justify-content-center")
        .appendChild(firstNameCombinationContainer);
    }

    if (lastName) {
      var newFirstName1 = firstNameUnion;
      var newFirstName2 = firstNameUnion;
      if (nameList.length > 1) {
        newFirstName1 = nameList
          .map(function (name) {
            return name[0];
          })
          .join("");
        newFirstName2 = nameList
          .map(function (name) {
            return name[0];
          })
          .join("_");
      }
      var capLastName1 = newFirstName2 + "_" + lastName;
      var capLastName2 = lastName + "_" + newFirstName2;
      var capLastName3 = newFirstName1 + "." + lastName;
      var capLastName4 = lastName + "." + newFirstName1;

      var capPlusLastNameContainer = document.createElement("div");
      capPlusLastNameContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
      capPlusLastNameContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">이름의 첫글자와 성을 합쳐보는건 어때요?</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${capLastName1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${capLastName2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${capLastName3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${capLastName4}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                </div>
            </div>
        </div>
    `;

      var newLastName = lastName;

      for (var key in replaceLastName) {
        if (lastName === key) {
          newLastName = replaceLastName[key];
          break;
        }
      }

      var newLastCombined1 = newLastName + firstNameUnion;
      var newLastCombined2 = firstNameUnion + newLastName;
      var newLastCombined3 = newLastName + "_" + newFirstName1;
      var newLastCombined4 = newFirstName1 + "." + newLastName;
      var newLastCombinedContainer = document.createElement("div");
      newLastCombinedContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
      newLastCombinedContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">성을 바꿔서 이름과 합쳐보는건 어때요?</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${newLastCombined1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${newLastCombined2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${newLastCombined3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${newLastCombined4}</p>
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
        .querySelector(".row.justify-content-center")
        .appendChild(capPlusLastNameContainer);
      document
        .querySelector(".row.justify-content-center")
        .appendChild(newLastCombinedContainer);
    }

    document.querySelectorAll(".copy-button").forEach(function (button) {
      button.addEventListener("click", async function (event) {
        var textToCopy = event.target.parentElement
          .querySelector(".mb-0")
          .innerText.slice(1);
        await navigator.clipboard.writeText(textToCopy);
        alert('"' + textToCopy + '" ' + "가 복사되었습니다.");
      });
    });
  });
