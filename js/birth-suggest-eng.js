document.querySelector('form.custom-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 페이지 새로고침 방지
    
    var containers = document.querySelectorAll('.row.justify-content-center .col-lg-4.col-12.mb-4.mb-lg-0');
    containers.forEach(function(container) {
        container.remove();
    }); // 기존의 container 삭제
    
    var dateInput = document.querySelector('#date_english').value;
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
    var isValidLength = nameUnion.length <= 15;

    if (!isAlphanumeric || !isValidLength) {
        alert("Character must be 15 characters or less.");
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
                    <h5 class="mb-2">Combine your birthday!</h5>
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
        '01' : 'January - Garnet : Love, Truth',
        '02' : 'February - Amethyst : Sincerity, Peace',
        '03' : 'March - Aquamarine : Bravery, Intelligence',
        '04' : 'April - Diamond : Victory, Eternal love ',
        '05' : 'May - Emerald : Happy, Luck',
        '06' : 'June - Pearl : Beauty, Chastity',
        '07' : 'July - Ruby : Passion, Love',
        '08' : 'August - Onyx : Wise, Hope',
        '09' : 'September - Sapphire : Fidelity, Truth',
        '10' : 'October - Opal : Love, Hope',
        '11' : 'November - Topaz : Patience, Healthy',
        '12' : 'December - Turquoise: Success, Victory'
    }
    var numToAlphabet = {
        '0' : 'p',
        '1' : 'q',
        '2' : 'w',
        '3' : 'e',
        '4' : 'r',
        '5' : 't',
        '6' : 'y',
        '7' : 'u',
        '8' : 'i',
        '9' : 'o',
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
                    <h5 class="mb-2">Replace a month with languages!</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${englishBirthday}</p>
                        <p class="mb-1" style="font-size:smaller; width:64px;">(English)</p>                 
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${frenchBirthday}</p>
                        <p class="mb-1" style="font-size:smaller; width:64px;">(French)</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${espanolBirthday}</p>
                        <p class="mb-1" style="font-size:smaller; width:64px;">(Spanish)</p>
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

    var alphabetYear = String(year).split('').map(function(num){
        return numToAlphabet[num];
    }).join('');
    var alphabetMonth = String(month).split('').map(function(num){
        return numToAlphabet[num];
    }).join('');
    var alphabetDay = String(day).split('').map(function(num){
        return numToAlphabet[num];
    }).join('');

    var alphabetCombine1 = alphabetYear + alphabetMonth + alphabetDay;
    var alphabetCombine2 = alphabetYear + '.' + alphabetMonth + '.' + alphabetDay;
    var alphabetCombine3 = alphabetYear + '_' + alphabetMonth + '_' + alphabetDay;
    var alphabetCombine4 = alphabetMonth + '.' + alphabetDay;
    var alphabetCombine5 = alphabetMonth + '_' + alphabetDay;
    var alphabetContainer = document.createElement('div');
    alphabetContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    alphabetContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Make number of birthday to alphabet!</h5>
                    <img class="min-keyboard" src="./images/keyboard-min.jpg">
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${alphabetCombine1}</p>                
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${alphabetCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${alphabetCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>     
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${alphabetCombine4}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>    
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${alphabetCombine5}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>                
                </div>
            </div>
        </div>
    `;
    document.querySelector('.row.justify-content-center').appendChild(alphabetContainer);

    var stoneCombine1 = year + '.' + stoneMonth;
    var stoneCombine2 = yearEnd + '_' + stoneMonth;
    var stoneCombine3 = stoneMonth + '_' + day;
    var stoneContainer = document.createElement('div');
    stoneContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    stoneContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Use the birth stone!</h5>
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
                    <h5 class="mb-2">Combine birthday and name!</h5>
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
                    <h5 class="mb-2">Combine age and name!</h5>
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
                    <h5 class="mb-2">Combine birthday and name!</h5>
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

        var alphabetNameCombine1 = nameUnion + '.' + alphabetYear + alphabetMonth + alphabetDay;
        var alphabetNameCombine2 = nameUnion + '_' + alphabetYear + alphabetMonth + alphabetDay;
        var alphabetNameCombine3 = nameUnion + '.' + alphabetMonth + alphabetDay;
        var alphabetNameCombine4 = nameUnion + '_' + alphabetMonth + alphabetDay;
        var alphabetNameContainer = document.createElement('div');
        alphabetNameContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        alphabetNameContainer.innerHTML = `
            <div class="custom-block bg-white shadow-lg">
                <div class="d-flex">
                    <div>
                        <h5 class="mb-2">Make number of birthday to alphabet with name!</h5>
                        <img class="min-keyboard" src="./images/keyboard-min.jpg">
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:14px;">@${alphabetNameCombine1}</p>                
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>   
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:14px;">@${alphabetNameCombine2}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>   
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:14px;">@${alphabetNameCombine3}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>     
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:14px;">@${alphabetNameCombine4}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>              
                    </div>
                </div>
            </div>
        `;
        document.querySelector('.row.justify-content-center').appendChild(alphabetNameContainer);
    }

    document.querySelectorAll('.copy-button').forEach(function(button) {
        button.addEventListener('click', async function(event) {
            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
            // var textToCopy = event.target.previousElementSibling.innerText.slice(1);
            await navigator.clipboard.writeText(textToCopy);
            alert('"' + textToCopy + '" ' + "is copied.");
        });
    });
});

