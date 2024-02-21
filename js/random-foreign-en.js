function foreignWordChoice() {
    var dropdownArea = document.querySelector('.featured-section .container .row');
    dropdownArea.innerHTML = `
    `;  // dropdownArea의 내용 초기화
    dropdownArea.style.justifyContent = '';

    var title = document.createElement('h6');
    title.innerText = 'Choose the language';
    title.style.color = 'white';
    title.style.textAlign = 'center';
    dropdownArea.appendChild(title);

    var languageSelectArea = document.createElement('div')
    languageSelectArea.innerHTML = `
    <form method="get" class="custom-form mt-4 pt-2 mb-lg-0 mb-1" role="search">
        <div class="input-group input-group-lg">
            <span class="input-group-text" id="basic-addon1">&#127759
            </span>
            <button id="frenchButton" type="submit" class="form-control" style="background: linear-gradient(45deg, var(--france-blue-color), var(--white-color), var(--france-red-color)); color:var(--dark-color); font-size:1.2vmax; white-space: nowrap;")>French</button>
            <button type="submit" class="form-control" style="background: linear-gradient(45deg, var(--italia-green-color), var(--white-color), var(--italia-red-color)); color:var(--dark-color); font-size:1.2vmax; white-space: nowrap;">Italian</button>
            <button type="submit" class="form-control" style="background: linear-gradient(45deg, var(--spain-red-color), var(--spain-yellow-color), var(--spain-red-color)); color:var(--dark-color); font-size:1.2vmax; white-space: nowrap;">Spanish</button>
            <button type="submit" class="form-control" style="background: linear-gradient(45deg, var(--white-color), var(--israel-blue-color), var(--white-color)); color:var(--dark-color); font-size:1.2vmax; white-space: nowrap;">Hebrew</button>
        </div>
    </form>
    `;
    document.querySelector('.row.justify-content-left').appendChild(languageSelectArea);

    var beautyFrench = [
        ['champignon', 'champignon: mushroom'],
        ['diamant', 'diamant: diamond'],
        ['baguette', 'baguette: Baguette'],
        ['cerise', 'cerise: cherry'],
        ['garcon', 'garcon: boy'],
        ['calin', 'calin: hug'],
        ['aube', 'aube: dawn'],
        ['adieu', 'adieu: farewell'],
        ['chapeau', 'chapeau: hat']
        ['chouchou', 'chouchou: darling'],
        ['copain', 'copain: friend'],
        ['enfant', 'enfant: child'],
        ['ballon', 'ballon: ball'],
        ['amitie', 'amitie: friendship'],
        ['abeille','abeille: bee'],
        ['belle', 'belle: beautiful'],
        ['bebe', 'bebe: baby'],
        ['etoile', 'etoile: star'],
        ['amour', 'amour: love'],
        ['chiot', 'chiot: puppy'],
        ['croissant', 'croissant: crescent'],
        ['fee', 'fee: fairy'],
        ['ange', 'ange: angel'],
        ['clair', 'clair: clear'],
        ['celine', 'celine: sky'],
        ['blanche', 'blanche: white'],
        ['avenir', 'avenir: future']
    ]
    var beautyItalian = [
        ['amante', 'amante: lover'],
        ['arancia', 'arancia: orange'],
        ['aroma', 'aroma: flavor'],
        ['albero', 'albero: tree'],
        ['amore', 'amore: love'],
        ['anima', 'anima: soul'],
        ['angelo', 'angelo: angel'],
        ['bianco', 'bianco: white'],
        ['bambola', 'bambola: doll'],
        ['bellezza', 'bellezza: beauty'],
        ['bacio', 'bacio: kiss'],
        ['caffe', 'caffe: coffee'],
        ['cioccolato', 'cioccolato: chocolate'],
        ['carino', 'carino: cute'],
        ['cielo', 'cielo: sky'],
        ['casa', 'casa: home'],
        ['conto', 'conto: account'],
        ['dolce', 'dolce: sweet'],
        ['dono', 'dono: gift'],
        ['elfo', 'elfo: fairy'],
        ['fragola', 'fragoloa: strawberry'],
        ['fortuna', 'fortuna: fortune'],
        ['folletto', 'folletto: elf'],
        ['fresca', 'fresca: fresh'],
        ['forza', 'forza: force'],
        ['grazia', 'grazia: grace'],
        ['gioia', 'gioia: joy'],
        ['gioiello', 'gioiello: jewel'],
        ['lieto', 'lieto: happy'],
        ['liberta', 'liberta: liberty'],
        ['luna', 'luna: moon'],
        ['luce', 'luce: light'],
        ['ora', 'ora: now'],
        ['onda', 'onda: wave'],
        ['purita', 'purita: purity'],
        ['piccolo', 'piccolo: small'],
        ['piovere', 'piovere: rain'],
        ['regalo', 'regalo: gift'],
        ['rosso', 'rosso: red'],
        ['sole', 'sole: sun'],
        ['sogno', 'sogno: dream'],
    ]
    var beautySpanish = [
        ['amanecer', 'amanecer: sunrise'],
        ['amistad', 'amistad: friendship'],
        ['amor', 'amor: love'],
        ['arbol', 'arbol: tree'],
        ['boda', 'boda: wedding'],
        ['bosque', 'bosque: forest'],
        ['castillo', 'castillo: castle'],
        ['coche', 'coche: car'],
        ['dios', 'dios: god'],
        ['felicidad', 'felicidad: happiness'],
        ['fragancia', 'fragancia: scent'],
        ['gracia', 'gracia: grace'],
        ['isla', 'isla: island'],
        ['joya', 'joya: jewel'],
        ['navidad', 'navidad: christmas'],
        ['nino', 'nino: girl'],
        ['nina', 'nina: boy'],
        ['ojo', 'ojo: eye'],
        ['recuerdo', 'recuerdo: recollection'],
        ['salud', 'salud: health'],
        ['senorita', 'senorita: Miss'],
        ['sol', 'sol: sun'],
        ['sueno', 'sueno: dream'],
        ['vela', 'vela: sail'],
        ['verano', 'verano: summer'],
    ]
    var beautyHebrian = [
        ['gath', 'gath: luck'],
        ['gadi', 'gadi: fortune'],
        ['carmel', 'carmel: movables'],
        ['gloria', 'gloria: glory'],
        ['gomer', 'gomer: finishing'],
        ['cyrus', 'cyrus: sun'],
        ['nathan', 'nathan: gift'],
        ['ner', 'ner: candle'],
        ['noah', 'noah: comfortable'],
        ['raphu', 'raphui: rapoi'],
        ['rhoda', 'rhoda: rose'],
        ['lucifer', 'lucifer'],
        ['reu', 'reu: friend'],
        ['ruhamah', 'ruhamah: cutie'],
        ['manoah', 'manoah: rest'],
        ['melchi', 'melchi: king'],
        ['milcah', 'milcah: queen'],
        ['silla', 'silla: think'],
        ['aaron', 'aaron: cabinet'],
        ['augustus', 'augustus: big'],
        ['achim', 'achim: wisedom'],
        ['elohim', 'elohim: god'],
    ]

    var buttons = languageSelectArea.querySelectorAll('button');
    var beautyVoca, vocaDetails;
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // 페이지 새로고침 방지

            var oldDescrip = document.querySelector('.description-container');
            var oldDescrip_bot = document.querySelector('.description-bottom');
            if (oldDescrip) {
                oldDescrip.remove();
            }
            if (oldDescrip_bot) {
                oldDescrip_bot.remove();
            }
            var descrip = document.createElement('div')
            descrip.className = 'description-container';
            descrip.innerHTML = `
            <p class="description" style="margin-top:0;margin-bottom:0;">Word changes when you click buttons</p>
            `;
            document.querySelector('.row.justify-content-left').appendChild(descrip);

            var descrip_bottom = document.createElement('div')
            descrip_bottom.className = 'description-bottom';
            descrip_bottom.innerHTML = `
            <p class="warning" style="margin-top:0;margin-bottom:0;">Character must be 15 characters or less.</p>
            <p class="description">We recommend more if you put your name and click 'Add'</p>
            `;
            var exisitingVocaWithName = document.getElementById('vocaWithName');
            if (exisitingVocaWithName) {
                exisitingVocaWithName.remove();
            }
            var existingAdditionalInputArea = document.getElementById('additionalInput');
            if (existingAdditionalInputArea) {
                existingAdditionalInputArea.remove();
            }
            var exisitingBeautyVoca = document.getElementById('beautyVoca');
            if (exisitingBeautyVoca) {
                exisitingBeautyVoca.remove();
            }
            var additionalInputArea = document.createElement('div')
            additionalInputArea.id = 'additionalInput'; // 고유한 id값 설정
            additionalInputArea.innerHTML = `
            <form method="get" class="custom-form pt-2 mb-lg-0 mb-5" role="search">
                    <div class="input-group input-group-lg">
                    <span class="input-group-text bi-search" id="basic-addon1">
                    </span>
                    <input name="additionalName" type="eng_search" class="form-control" id="additionalName" placeholder="Name (or Nickname)" aria-label="추천">
                    <button id="add" type="button" class="form-control" style="background-color:var(--custom-btn-bg-color); color:var(--white-color);">Add</button>
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

            var beautyVocaContainer = document.createElement('div');
            beautyVocaContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
            beautyVocaContainer.id = 'beautyVoca';
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
            document.querySelector('.row.justify-content-left').appendChild(beautyVocaContainer);
            document.querySelector('.row.justify-content-left').appendChild(descrip_bottom);
            document.querySelector('.row.justify-content-left').appendChild(additionalInputArea);
            document.querySelectorAll('.copy-button').forEach(function(button) {
                button.addEventListener('click', async function(event) {
                    var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
                    await navigator.clipboard.writeText(textToCopy);
                    alert('"' + textToCopy + '" ' + "is copied.");
                });
            });


            var addButton = additionalInputArea.querySelector('button[id="add"]');
            addButton.addEventListener('click', function(event) {
                var name = additionalInputArea.querySelector('#additionalName').value.toLowerCase().split(' ').join('');
                var isAlphanumeric = /^[a-z0-9\s]*$/i.test(name);
                var isValidLength = name.length <= 15;
                if (!isAlphanumeric || !isValidLength) {
                    alert("Character must be 15 characters or less.");
                    return;
                }
                if (name) {
                    var exisitingVocaWithName = document.getElementById('vocaWithName');
                    if (exisitingVocaWithName) {
                        exisitingVocaWithName.remove();
                    }
                    var exisitingBeautyVoca = document.getElementById('beautyVoca');
                    if (exisitingBeautyVoca) {
                        exisitingBeautyVoca.remove();
                    }
                    if (existingAdditionalInputArea) {
                        existingAdditionalInputArea.remove();
                    }
                    var existingDescript = document.getElementById('description-bottom');
                    if (existingDescript) {
                        existingDescript.remove();
                    }
                    var withName1 = beautyVoca + name;
                    var withName2 = beautyVoca + '.' + name;
                    var withName3 = beautyVoca + '_' + name;
                    var withName4 = name + beautyVoca;
                    var withName5 = name + '.' + beautyVoca;
                    var withName6 = name + '_' + beautyVoca;
                    var vocaWithNameContainer = document.createElement('div');
                    vocaWithNameContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
                    vocaWithNameContainer.id = 'vocaWithName';
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
                    <p class="description">You can reset when you click 'Reset'</p>
                    `;
                    document.querySelector('.row.justify-content-left').appendChild(vocaWithNameContainer);
                    document.querySelector('.row.justify-content-left').appendChild(descrip_bottom);
                    document.querySelector('.row.justify-content-left').appendChild(additionalInputArea);
                    document.querySelectorAll('.copy-button').forEach(function(button) {
                        button.addEventListener('click', async function(event) {
                            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
                            await navigator.clipboard.writeText(textToCopy);
                            alert('"' + textToCopy + '" ' + "is copied.");
                        });
                    });
                    };
            });
            
            var resetButton = additionalInputArea.querySelector('button[type="reset"]');
            resetButton.addEventListener('click', function(event) {
                event.preventDefault();
                var exisitingVocaWithName = document.getElementById('vocaWithName');
                if (exisitingVocaWithName) {
                    exisitingVocaWithName.remove();
                }
                if (existingAdditionalInputArea) {
                    existingAdditionalInputArea.remove();
                }
                var existingDescript = document.getElementById('description-bottom');
                if (existingDescript) {
                    existingDescript.remove();
                }
                descrip_bottom.innerHTML = `
                <p class="warning" style="margin-top:0;margin-bottom:0;">Character must be 15 characters or less.</p>
            <p class="description">We recommend more if you put your name and click 'Add'</p>
                `;
                var additionalNameInput = additionalInputArea.querySelector('#additionalName');
                additionalNameInput.value = '';
                document.querySelector('.row.justify-content-left').appendChild(beautyVocaContainer);
                document.querySelector('.row.justify-content-left').appendChild(descrip_bottom);
                document.querySelector('.row.justify-content-left').appendChild(additionalInputArea);
            })
        });
    });
}