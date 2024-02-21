document.querySelector('form.custom-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 페이지 새로고침 방지
    
    var containers = document.querySelectorAll('.row.justify-content-center .col-lg-4.col-12.mb-4.mb-lg-0');
    containers.forEach(function(container) {
        container.remove();
    }); // 기존의 container 삭제

    var firstName = document.querySelector('#firstname').value.toLowerCase();
    var middleName = document.querySelector('#middlename').value.toLowerCase().split(' ').join('');
    var lastName = document.querySelector('#lastname').value.toLowerCase().split(' ').join('');

    var isAlphanumeric = /^[a-z0-9\s]*$/i.test(firstName) && /^[a-z0-9\s]*$/i.test(lastName);
    var isValidLength = firstName.length <= 15 && lastName.length <= 15 && middleName.length <= 15;

    if (!isAlphanumeric || !isValidLength) {
        alert("Each character must be 15 characters or less.");
        return;
    }

    var nameList = firstName.split(' ');
    var firstNameUnion = nameList.join('');
    var reverseName = firstNameUnion.split('').reverse().join('');


    var reverseContainer = document.createElement('div');
    reverseContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    reverseContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Write your first name backwards!</h5>
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

    var withNumName = firstNameUnion.replace(/i/g, '1').replace(/o/g, '0').replace(/z/g, '2').replace(/e/g, '3').replace(/s/g, '5').replace(/b/g, '8').replace(/g/g, '6'); // 글자를 숫자로
    var strtonumContainer = document.createElement('div');
    strtonumContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    strtonumContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Change your alphabet to NUMBER!</h5>
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

    var withxName = firstNameUnion.replace(/a/g, 'x').replace(/e/g, 'x').replace(/i/g, 'x').replace(/o/g, 'x').replace(/u/g, 'x') // 글자를 숫자로
    var voweltoxContainer = document.createElement('div');
    voweltoxContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    voweltoxContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Replace a vowel with 'x'!</h5>
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
        {func: function(input) { return input.replace(/n/g, 'nn'); }, letter: 'n'},
        {func: function(input) { return input.replace(/y/g, 'yy'); }, letter: 'y'},
        {func: function(input) { return input.replace(/u/g, 'uu'); }, letter: 'u'},
        {func: function(input) { return input.replace(/h/g, 'hh'); }, letter: 'h'},
        {func: function(input) { return input.replace(/o/g, 'oo'); }, letter: 'o'},
        {func: function(input) { return input.replace(/a/g, 'aa'); }, letter: 'a'},
        {func: function(input) { return input.replace(/i/g, 'ii'); }, letter: 'i'}
    ];
    var multipleName;
    var randomReplace;
    var attempts = 0;
    var boost = true;
    do {
        randomReplace = replaceFunctions[Math.floor(Math.random() * replaceFunctions.length)];
        if (firstNameUnion.indexOf(randomReplace.letter) >= 0) {
            multipleName = randomReplace.func(firstNameUnion);
            break;
        }

        attempts++;
    } while (attempts < 5);
    if (!multipleName) {
        boost = false;
        multipleName = firstNameUnion;
    }
    if (boost === true) {
    var multiplewordContainer = document.createElement('div');
    multiplewordContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    multiplewordContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Stretch a specific alphabet! (${randomReplace.letter})</h5>
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

    document.querySelector('.row.justify-content-center').appendChild(reverseContainer);
    document.querySelector('.row.justify-content-center').appendChild(strtonumContainer);
    document.querySelector('.row.justify-content-center').appendChild(voweltoxContainer);
    if (boost === true) {
        document.querySelector('.row.justify-content-center').appendChild(multiplewordContainer);
    }

    var wordList = [
        ['adorable'],
        ['aeonian'],
        ['allure'],
        ['altruistic'],
        ['bijou'],
        ['bliss']
        ['brilliant'],
        ['cheery'],
        ['charming']
        ['cherish'],
        ['claire'],
        ['cuddly'],
        ['dazzle'],
        ['dulcet'],
        ['elfin'],
        ['ethereal'],
        ['eudemonic'],
        ['euphoria'],
        ['fabulous'],
        ['felicity'],
        ['gleam'],
        ['halcyon'],
        ['hemish'],
        ['idyllic'],
        ['lucid'],
        ['luculent'],
        ['lyrical'],
        ['luminous'],
        ['mellifluous'],
        ['nectarous'],
        ['radiant'],
        ['seraphic'],
        ['stella'],
        ['starlike'],
        ['twilight'],
        ['winsome'],
        ['witty'],
        ['whimsical'],
        ['xabadu'],
        ['ciel', 'sky [French]'],
        ['mer', 'ocean [French]'],
        ['etoile', 'star [French]'],
        ['lune', 'moon [French]'],
        ['papillon', 'butterfly [French]'],
        ['printemps', 'sprint [French]'],
        ['reve', 'dream [French]'],
        ['amour', 'love [French]'],
        ['briller', 'brilliant [French]'],
        ['joli', 'pretty [French]'],
        ['mimi', 'cute [French]'],
        ['amore', 'love [Italian]'],
        ['amare', 'love [Italian]'],
        ['carino', 'cute [Italian]'],
        ['cielo', 'sky [Italian]'],
        ['dolce', 'sweet [Italian]'],
        ['dono', 'gift [Italian]'],
        ['amor', 'love [Spanish]'],
        ['belleza', 'beauty [Spanish]'],
        ['carino', 'dear [Spanish]'],
        ['conejo', 'rabbot [Spanish]'],
        ['flor', 'flower [Spanish]'],
        ['gracia', 'grace [Spanish]'],
        ['joya', 'jewel [Spanish]'],
        ['luna', 'moon [Spanish]'],
        ['sol', 'sun [Spanish]'],
        ['verano', 'summer [Spanish]'],
    ]

    var randomIndex = Math.floor(Math.random() * wordList.length); // 랜덤 인덱스 생성
    var voca = wordList[randomIndex][0];
    if (wordList[randomIndex][1]) {
        var meaning = '- ' + wordList[randomIndex][1];
    } else {
        var meaning = '';
    }
    var vocaFirstCombine1 = voca + '_' + firstName;
    var vocaFirstCombine2 = voca + '.' + firstName;
    var vocaFirstCombine3 = voca + firstName;
    var vocaFirstContainer = document.createElement('div');
    vocaFirstContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    vocaFirstContainer.innerHTML = `
    <div class="custom-block bg-white shadow-lg">
        <div class="d-flex">
            <div>
                <h5 class="mb-2">Combine your First name with pretty words!</h5>
                    <h6 style="font-size:12px;">${voca} ${meaning}</h6>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${vocaFirstCombine1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div> 
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${vocaFirstCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div> 
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:12px;">@${vocaFirstCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                </div>
            </div>
        </div>
    `;
    document.querySelector('.row.justify-content-center').appendChild(vocaFirstContainer);
    if (lastName) {
        var randomIndex = Math.floor(Math.random() * wordList.length); // 랜덤 인덱스 생성
        var voca = wordList[randomIndex][0];
        if (wordList[randomIndex][1]) {
            var meaning = '- ' + wordList[randomIndex][1];
        } else {
            var meaning = '';
        }
        var vocaCombine1 = voca + '_' + lastName;
        var vocaCombine2 = voca + '.' + lastName;
        var vocaCombine3 = voca + lastName;
        var vocaContainer = document.createElement('div');
        vocaContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        vocaContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Combine Last name with pretty words!</h5>
                    <h6 style="font-size:12px;">${voca} ${meaning}</h6>
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
        document.querySelector('.row.justify-content-center').appendChild(vocaContainer);

        var capLastName1 = firstName[0] + '_' + lastName;
        var capLastName2 = lastName + '_' + firstName[0];
        var capLastName3 = firstName[0] + '.' + lastName;
        var capLastName4 = lastName + '.' + firstName[0];

        var capPlusLastNameContainer = document.createElement('div');
        capPlusLastNameContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        capPlusLastNameContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Combine the shorten First name with Last name</h5>
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
        document.querySelector('.row.justify-content-center').appendChild(capPlusLastNameContainer);

        var halfName1 = firstName + lastName;
        var halfName2 = firstName + '.' + lastName;
        var halfName3 = firstName + '_' + lastName;
        var halfNameContainer = document.createElement('div');
        halfNameContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        halfNameContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Just write your Full name!</h5>
                    <h5 class="mb-2">(First name + Last name)</h5>
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:12px;">@${halfName1}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:12px;">@${halfName2}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>   
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:12px;">@${halfName3}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>   
                    </div>
                </div>
            </div>
        `;
        document.querySelector('.row.justify-content-center').appendChild(halfNameContainer);
    }

    if (middleName) {
        var randomIndex = Math.floor(Math.random() * wordList.length); // 랜덤 인덱스 생성
        var voca = wordList[randomIndex][0];
        if (wordList[randomIndex][1]) {
            var meaning = '- ' + wordList[randomIndex][1];
        } else {
            var meaning = '';
        }
        var vocaMidCombine1 = voca + '_' + middleName;
        var vocaMidCombine2 = voca + '.' + middleName;
        var vocaMidCombine3 = voca + middleName;
        var vocaMidContainer = document.createElement('div');
        vocaMidContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        vocaMidContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Combine Middle name with pretty words!</h5>
                        <h6 style="font-size:12px;">${voca} ${meaning}</h6>
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:12px;">@${vocaMidCombine1}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div> 
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:12px;">@${vocaMidCombine2}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div> 
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:12px;">@${vocaMidCombine3}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>   
                    </div>
                </div>
            </div>
        `;
        document.querySelector('.row.justify-content-center').appendChild(vocaMidContainer);

        var capMidName1 = middleName[0] + '_' + firstName;
        var capMidName2 = firstName + '_' + middleName[0];
        var capMidName3 = middleName[0] + '.' + firstName;
        var capMidName4 = firstName + '.' + middleName[0];

        var capMidContainer = document.createElement('div');
        capMidContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        capMidContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Combine the first letter of your Middle name with your First name</h5>
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:12px;">@${capMidName1}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>   
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:12px;">@${capMidName2}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>   
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:12px;">@${capMidName3}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>   
                        <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                            <p class="mb-0" style="font-size:12px;">@${capMidName4}</p>
                            <button type="copy" class="copy-button">
                                <i class="bi bi-files"></i>
                                Copy
                            </button>
                        </div>   
                    </div>
                </div>
            </div>
        `;
        document.querySelector('.row.justify-content-center').appendChild(capMidContainer);

        if (lastName) {
            var everyName1 = firstName[0] + middleName[0] + lastName[0];
            var everyName2 = firstName[0] + '.' + middleName[0] + '.' + lastName[0];
            var everyName3 = firstName[0] + '_' + middleName[0] + '_' + lastName[0];
            var everyContainer = document.createElement('div');
            everyContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
            everyContainer.innerHTML = `
            <div class="custom-block bg-white shadow-lg">
                <div class="d-flex">
                    <div>
                        <h5 class="mb-2">Combine the first letter of every names!</h5>
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${everyName1}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${everyName2}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${everyName3}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.querySelector('.row.justify-content-center').appendChild(everyContainer);

            var shortenMid1 = firstName + middleName[0] + lastName;
            var shortenMid2 = firstName + '.' + middleName[0] + '.' + lastName;
            var shortenMid3 = firstName + '_' + middleName[0] + '_' + lastName;
            var shortenMid4 = lastName + middleName[0]  + firstName;
            var shortenMid5 = lastName + '.' + middleName[0] + '.' + firstName;
            var shortenMid6 = lastName + '_' + middleName[0] + '_' + firstName;
            var shortenMidContainer = document.createElement('div');
            shortenMidContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
            shortenMidContainer.innerHTML = `
            <div class="custom-block bg-white shadow-lg">
                <div class="d-flex">
                    <div>
                        <h5 class="mb-2">Combine every names with shorten Middle name!</h5>
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${shortenMid1}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${shortenMid2}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${shortenMid3}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${shortenMid4}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${shortenMid5}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${shortenMid6}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.querySelector('.row.justify-content-center').appendChild(shortenMidContainer);

            var fullName1 = firstName + middleName + lastName;
            var fullName2 = firstName + '.' + middleName + '.' + lastName;
            var fullName3 = firstName + '_' + middleName + '_' + lastName;
            var fullNameContainer = document.createElement('div');
            fullNameContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
            fullNameContainer.innerHTML = `
            <div class="custom-block bg-white shadow-lg">
                <div class="d-flex">
                    <div>
                        <h5 class="mb-2">Just write your Full name!</h5>
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${fullName1}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${fullName2}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                                <p class="mb-0" style="font-size:12px;">@${fullName3}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                        </div>
                    </div>
                </div>
            `;
            document.querySelector('.row.justify-content-center').appendChild(fullNameContainer);
        }
    }

    document.querySelectorAll('.copy-button').forEach(function(button) {
        button.addEventListener('click', async function(event) {
            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
            await navigator.clipboard.writeText(textToCopy);
            alert('"' + textToCopy + '" ' + "was copied");
        });
    });
});

