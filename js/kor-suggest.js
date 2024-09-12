import {
  convertKoreanKeyboard,
  convertKeyboard,
  convertEnglishKeyboard,
} from "https://cdn.jsdelivr.net/npm/keyboard-korean-converter";

document
  .querySelector("form.custom-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    var containers = document.querySelectorAll(
      ".row.justify-content-center .col-lg-4.col-12.mb-4.mb-lg-0"
    );
    containers.forEach(function (container) {
      container.remove();
    }); // 기존의 container 삭제

    var nameInput = document
      .querySelector("#korName")
      .value.split(" ")
      .join(""); // 입력 받은 이름

    var isKorean = /^[가-힣\s]*$/.test(nameInput);
    var isValidLength = nameInput.length <= 5;

    if (!isKorean || !isValidLength) {
      alert("이름은 한글 5자 이내로 입력해주세요.");
      return;
    }

    var result = splitAll(nameInput);
    var roman = nameInput.romanize();

    console.log("Before : ", nameInput);

    var engStr = convertKoreanKeyboard(nameInput);

    console.log("After :", engStr);
    console.log("english keyboard : ", convertEnglishKeyboard(nameInput));
    console.log("keyboard : ", convertKeyboard(nameInput));

    // var engStr = korToEng(nameInput);

    var errorOccurred = false;

    for (let i = result.length - 1; i >= 0; i--) {
      let names = result[i];
      var title = names.join("+");
      var translatedNames = [];
      var customNames = [];
      if (errorOccurred) break;

      for (let j = 0; j < names.length; j++) {
        let name = names[j];
        try {
          let response = await fetch(
            `https://port-0-insta-name-suggest-abq3c52alsd1wikh.sel5.cloudtype.app/translate?name=${encodeURIComponent(
              name
            )}`
          );
          let translatedText = await response.text();
          let processedText = translatedText
            .toLowerCase()
            .replace(/a /g, "")
            .replace(/the /g, "")
            .replace(/an /g, "");
          processedText = processedText
            .replace(/\s/g, "")
            .replace(/-/g, "")
            .replace(/,/g, "")
            .replace(/'/g, "");
          processedText = processedText.replace(/\(.*?\)/g, "");
          translatedNames.push(processedText);
          if (name in replaceWords) {
            processedText = replaceWords[name];
          }
          customNames.push(processedText);
        } catch (error) {
          errorOccurred = true;
          alert(
            "서버 점검중으로 DeepL 번역이 제공되지 않습니다.\n문의 : dhleee0123@gmail.com"
          );
          break;
        }
      }
      if (errorOccurred) break;
      else {
        var exisitingPowered = document.querySelector(".powered");
        if (!exisitingPowered) {
          var powered = document.createElement("div");
          powered.style.display = "flex";
          powered.style.alignItems = "center";
          powered.style.marginBottom = "2.5vh";
          powered.className = "powered";
          powered.innerHTML = `
                <p style="color:var(--white-color); margin-bottom:0px; margin-right:1.5vw;">Powered By</p>
                <img src="https://static.deepl.com/img/logo/deepl-logo-text-blue.svg" style="height: 3.5vh; width: auto;">
                `;
          document
            .querySelector(".row.justify-content-center")
            .appendChild(powered);
        }
      }
      if (i === 0) {
        var namesCombine = translatedNames.join("");
        var customCombine = customNames.join("");
        var translatedContainer = document.createElement("div");
        translatedContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        if (customCombine === namesCombine) {
          translatedContainer.innerHTML = `
                    <div class="custom-block bg-white shadow-lg">
                        <div class="d-flex">
                            <div>
                                <h5 class="mb-2">${title}</h5>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${namesCombine}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>        
                            </div>
                        </div>
                    </div>
                `;
        } else {
          translatedContainer.innerHTML = `
                    <div class="custom-block bg-white shadow-lg">
                        <div class="d-flex">
                            <div>
                                <h5 class="mb-2">${title}</h5>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${namesCombine}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>   
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${customCombine}</p>
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
          .appendChild(translatedContainer);
        if (roman !== namesCombine) {
          var romanizedContainer = document.createElement("div");
          romanizedContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
          romanizedContainer.innerHTML = `
                    <div class="custom-block bg-white shadow-lg">
                        <div class="d-flex">
                            <div>
                                <h5 class="mb-2">${title} (로마식표기)</h5>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${roman}</p>
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
            .appendChild(romanizedContainer);
        }
      } else {
        var namesCombine1 = translatedNames.join("");
        var namesCombine2 = translatedNames.join("_");
        var namesCombine3 = translatedNames.join(".");
        var customCombine1 = customNames.join("");
        var translatedContainer = document.createElement("div");
        translatedContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        if (namesCombine1 === customCombine1) {
          translatedContainer.innerHTML = `
                    <div class="custom-block bg-white shadow-lg">
                        <div class="d-flex">
                            <div>
                                <h5 class="mb-2">${title}</h5>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${namesCombine1}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${namesCombine2}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${namesCombine3}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>            
                            </div>
                        </div>
                    </div>
                `;
        } else {
          var customCombine2 = customNames.join("_");
          var customCombine3 = customNames.join(".");
          translatedContainer.innerHTML = `
                    <div class="custom-block bg-white shadow-lg">
                        <div class="d-flex">
                            <div>
                                <h5 class="mb-2">${title}</h5>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${namesCombine1}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${namesCombine2}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${namesCombine3}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${customCombine1}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div>         
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${customCombine2}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-files"></i>
                                        Copy
                                    </button>
                                </div> 
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${customCombine3}</p>
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
          .appendChild(translatedContainer);
      }
    }
    var korToEngContainer = document.createElement("div");
    korToEngContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    korToEngContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">${nameInput} (키보드 변환)</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${engStr}</p>
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
      .appendChild(korToEngContainer);

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

function splitString(s, parts = 1) {
  const length = s.length;
  if (parts === 1) {
    return [[s]];
  } else if (length === parts) {
    return [s.split("")];
  } else {
    let result = [];
    for (let i = 1; i < length - parts + 2; i++) {
      let left = s.substring(0, i);
      let right = s.substring(i);
      for (let rest of splitString(right, parts - 1)) {
        result.push([left].concat(rest));
      }
    }
    return result;
  }
}
function splitAll(s) {
  const length = s.length;
  let result = [];
  for (let parts = 1; parts <= length; parts++) {
    result = result.concat(splitString(s, parts));
  }
  return result;
}
function korToEng(str) {
  let result = "";
  var korStr = Hangul.disassemble(str);
  for (let i = 0; i < korStr.length; i++) {
    let char = korStr[i];
    if (keyboardMapKorToEng[char]) {
      result += keyboardMapKorToEng[char];
    }
  }
  return result;
}
