document.querySelector('form.custom-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 페이지 새로고침 방지
    
    var containers = document.querySelectorAll('.row.justify-content-center .col-lg-4.col-12.mb-4.mb-lg-0');
    containers.forEach(function(container) {
        container.remove();
    }); // 기존의 container 삭제
    
    var dateInput = document.querySelector('#date').value;
    var date = new Date(dateInput);
    var year = date.getFullYear();
    var monthOrigin = date.getMonth()+1;
    var dayOrigin = date.getDate();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    var yearEnd = String(year).substring(2);
    var name = document.querySelector('#firstname').value.toLowerCase();
    var nameList = name.split(' ');
    var nameUnion = nameList.join('');

    var isAlphanumeric = /^[a-z0-9\s]*$/i.test(nameUnion);
    var isValidLength = nameUnion.length <= 20;

    if (!isAlphanumeric || !isValidLength) {
        alert("20자 이내의 알파벳(혹은 숫자)로 이루어진 문자열이어야 합니다.");
        return;
    }

    var birthdayCombine1 = yearEnd + '.' + month + '.' + day;
    var birthdayCombine2 = yearEnd + '_' + month + '_' + day;
    var birthdayCombine3 = year + '.' + month + '.' + day;
    var birthdayCombineContainer = document.createElement('div');
    birthdayCombineContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    birthdayCombineContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">생년월일을 조합해보시는건 어때요?</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${birthdayCombine1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${birthdayCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${birthdayCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>                 
                </div>
            </div>
        </div>
    `;
    document.querySelector('.row.justify-content-center').appendChild(birthdayCombineContainer);

    var replaceMonthEnglish = {
        '01' : 'jan',
        '02' : 'feb',
        '03' : 'mar',
        '04' : 'apr',
        '05' : 'may',
        '06' : 'jun',
        '07' : 'jul',
        '08' : 'aug',
        '09' : 'sep',
        '10' : 'oct',
        '11' : 'nov',
        '12' : 'dec',
    }
    var replaceMonthFrench = {
        '01' : 'janv',
        '02' : 'fev',
        '03' : 'mars',
        '04' : 'avril',
        '05' : 'mai',
        '06' : 'juin',
        '07' : 'juil',
        '08' : 'aout',
        '09' : 'sept',
        '10' : 'oct',
        '11' : 'nov',
        '12' : 'dec'
    }
    var replaceMonthEspanol = {
        '01' : 'enero',
        '02' : 'febrero',
        '03' : 'marzo',
        '04' : 'abril',
        '05' : 'mayo',
        '06' : 'junio',
        '07' : 'julio',
        '08' : 'agosto',
        '09' : 'septiembre',
        '10' : 'octubre',
        '11' : 'noviembre',
        '12' : 'diciembre',
        }
    var replaceBirthStone = {
        '01' : 'garnet',
        '02' : 'amethyst',
        '03' : 'aquamarine',
        '04' : 'diamond',
        '05' : 'emerald',
        '06' : 'pearl',
        '07' : 'ruby',
        '08' : 'onyx',
        '09' : 'sapphire',
        '10' : 'opal',
        '11' : 'topaz',
        '12' : 'turquoise',
    }
    var stoneDetails = {
        '01' : '1월 - 석류석(Garnet): 사랑, 진실',
        '02' : '2월 - 자수정(Amethyst): 성실, 평화',
        '03' : '3월 - 아쿠아마린(Aquamarine): 용감, 총명',
        '04' : '4월 - 다이아몬드(Diamond): 행복, 영원한 사랑',
        '05' : '5월 - 에메랄드(Emerald): 행복, 행운',
        '06' : '6월 - 진주(Pearl): 아름다움, 순결',
        '07' : '7월 - 루비(Ruby): 열정, 사랑',
        '08' : '8월 - 오닉스(Onyx): 지혜, 희망',
        '09' : '9월 - 사파이어(Sapphire): 성실, 진실',
        '10' : '10월 - 오팔(Opal): 사랑, 희망',
        '11' : '11월 - 황옥(Topaz): 인내, 건강',
        '12' : '12월 - 터키석(Turquoise): 성공, 승리'
    }
    var englishMonth = '';
    var frenchMonth = '';
    var espanolMonth = '';
    var stoneMonth = '';
    var detailsStone = ''
    for(var key in replaceMonthEnglish) {
        if (month === key) {
            englishMonth = replaceMonthEnglish[key];
            frenchMonth = replaceMonthFrench[key];
            espanolMonth = replaceMonthEspanol[key];
            stoneMonth = replaceBirthStone[key];
            detailsStone = stoneDetails[key];
            break;
        }
    }
    var englishBirthday = day + '.' + englishMonth;
    var frenchBirthday = frenchMonth + '_' + day;
    var espanolBirthday = espanolMonth + '.' + day;
    var monthdayContiner = document.createElement('div');
    monthdayContiner.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    monthdayContiner.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">월을 외국어로 바꿔보시는건 어때요?</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${englishBirthday}</p>
                        <p class="mb-1" style="font-size:smaller; width:64px;">(영어)</p>                 
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${frenchBirthday}</p>
                        <p class="mb-1" style="font-size:smaller; width:64px;">(프랑스어)</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${espanolBirthday}</p>
                        <p class="mb-1" style="font-size:smaller; width:64px;">(스페인어)</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>                 
                </div>
            </div>
        </div>
    `;
    document.querySelector('.row.justify-content-center').appendChild(monthdayContiner);

    document.querySelectorAll('.copy-button').forEach(function(button) {
        button.addEventListener('click', async function(event) {
            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
            // var textToCopy = event.target.previousElementSibling.innerText.slice(1);
            await navigator.clipboard.writeText(textToCopy);
            alert('"' + textToCopy + '" ' + "가 복사되었습니다.");
        });
    });

    var stoneCombine1 = year + '.' + stoneMonth;
    var stoneCombine2 = yearEnd + '_' + stoneMonth;
    var stoneCombine3 = stoneMonth + '_' + day;
    var stoneContainer = document.createElement('div');
    stoneContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    stoneContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">탄생석을 이용해보는건 어때요?</h5>
                    <h6 style="font-size:12px;">※ ${detailsStone}</h6>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${stoneCombine1}</p>                
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${stoneCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${stoneCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>                 
                </div>
            </div>
        </div>
    `;
    document.querySelector('.row.justify-content-center').appendChild(stoneContainer);

    if(name) {
        var newName1 = nameUnion[0];
        var newName2 = nameUnion[0];
        var birthNameCombine1 = nameUnion + '_' + month + day;
        if (nameList.length>1) {
            newName1 = nameList.map(function(name) {
                return name[0];
            }).join('_');
            newName2 = nameList.map(function(name) {
                return name[0];
            }).join('');
        }
        var birthNameCombine2 = month + day + '_' + newName1;
        var birthNameCombine3 = month + '.' + day + '_' + newName2;
        var birthNameContainer = document.createElement('div');
        birthNameContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        birthNameContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">생일과 이름을 조합해보는건 어때요??</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${birthNameCombine1}</p>                
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${birthNameCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${birthNameCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                </div>
            </div>
        </div>
        `;
        document.querySelector('.row.justify-content-center').appendChild(birthNameContainer);

        var currenYear = new Date().getFullYear();
        var age = currenYear - year;
        var ageNameCombine1 = nameUnion + '_' + age;
        var ageNameCombine2 = nameList.join('_') + '_' + age;
        var ageNameCombine3 = age + '.' + newName2;
        var ageNameContainer = document.createElement('div');
        ageNameContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        ageNameContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">나이와 이름을 조합해보는건 어때요??</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${ageNameCombine1}</p>                
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${ageNameCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${ageNameCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                </div>
            </div>
        </div>
        `;
        document.querySelector('.row.justify-content-center').appendChild(ageNameContainer);

        var nameBirthCombine1 = nameUnion + '_' + yearEnd + monthOrigin + dayOrigin;
        var nameBirthCombine2 = nameUnion + '_' + yearEnd;
        var nameBirthCombine3 = yearEnd + '_' + newName2 + '.' + monthOrigin + dayOrigin;
        var nameBirthContainer = document.createElement('div');
        nameBirthContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        nameBirthContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">생년월일과 이름을 조합해보는건 어때요??</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${nameBirthCombine1}</p>                
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${nameBirthCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${nameBirthCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                </div>
            </div>
        </div>
        `;
        document.querySelector('.row.justify-content-center').appendChild(nameBirthContainer);

    }

    document.querySelectorAll('.copy-button').forEach(function(button) {
        button.addEventListener('click', async function(event) {
            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
            await navigator.clipboard.writeText(textToCopy);
            alert('복사되었습니다');
        });
    });
});

