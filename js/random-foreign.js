function foreignWordChoice() {
    var dropdownArea = document.querySelector('.featured-section .container .row');
    dropdownArea.innerHTML = '';  // dropdownArea의 내용 초기화

    var title = document.createElement('h6');
    title.innerText = '언어를 선택해주세요';
    title.style.color = 'white';
    title.style.textAlign = 'center';
    dropdownArea.appendChild(title);

    var languageSelectArea = document.createElement('div')
    languageSelectArea.innerHTML = `
    <form method="get" class="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
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
    document.querySelector('.row.justify-content-center').appendChild(languageSelectArea);

    var beautyFrench = [
        ['champignon', 'champignon: 버섯'],
        ['diamant', 'diamant: 다이아몬드'],
        ['baguette', 'baguette: 바게트'],
        ['cerise', 'cerise: 체리'],
        ['garcon', 'garcon: 소년'],
        ['calin', 'calin: 포옹'],
        ['aube', 'aube: 새벽'],
        ['adieu', 'adieu: 안녕'],
        ['chapeau', 'chapeau: 모자']
        ['chouchou', 'chouchou: 귀염둥이'],
        ['copain', 'copain: 친구'],
        ['enfant', 'enfant: 어린이'],
        ['ballon', 'ballon: 공'],
        ['amitie', 'amitie: 우정'],
        ['abeille','abeille: 꿀벌'],
        ['belle', 'belle: 미인'],
        ['bebe', 'bebe: 아기'],
        ['etoile', 'etoile: 별'],
        ['amour', 'amour: 사랑'],
        ['chiot', 'chiot: 강아지'],
        ['croissant', 'croissant: 초승달'],
        ['fee', 'fee: 요정'],
        ['ange', 'ange: 천사'],
        ['clair', 'clair: 밝은'],
        ['celine', 'celine: 하늘'],
        ['blanche', 'blanche: 하얀색'],
        ['avenir', 'avenir: 미래']
    ]
    var beautyItalian = [
        ['amante', 'amante: 연인'],
        ['arancia', 'arancia: 오렌지'],
        ['aroma', 'aroma: 향기'],
        ['albero', 'albero: 나무'],
        ['amore', 'amore: 사랑'],
        ['anima', 'anima: 영혼'],
        ['angelo', 'angelo: 천사'],
        ['bianco', 'bianco: 하얀색'],
        ['bambola', 'bambola: 인형'],
        ['bellezza', 'bellezza: 아름다움'],
        ['bacio', 'bacio: 키스'],
        ['caffe', 'caffe: 커피'],
        ['cioccolato', 'cioccolato: 초콜렛'],
        ['carino', 'carino: 예쁜'],
        ['cielo', 'cielo: 하늘'],
        ['casa', 'casa: 집'],
        ['conto', 'conto: 영수증'],
        ['dolce', 'dolce: 달콤한'],
        ['dono', 'dono: 선물'],
        ['elfo', 'elfo: 요정'],
        ['fragola', 'fragoloa: 딸기'],
        ['fortuna', 'fortuna: 행운'],
        ['folletto', 'folletto: 요정'],
        ['fresca', 'fresca: 상큼한'],
        ['forza', 'forza: 힘'],
        ['grazia', 'grazia: 매력'],
        ['gioia', 'gioia: 기쁨'],
        ['gioiello', 'gioiello: 보석'],
        ['lieto', 'lieto: 행복한'],
        ['liberta', 'liberta: 자유'],
        ['luna', 'luna: 달'],
        ['luce', 'luce: 빛'],
        ['ora', 'ora: 시간'],
        ['onda', 'onda: 파도'],
        ['purita', 'purita: 순수'],
        ['piccolo', 'piccolo: 작은'],
        ['piovere', 'piovere: 비'],
        ['regalo', 'regalo: 선물'],
        ['rosso', 'rosso: 빨강'],
        ['sole', 'sole: 태양'],
        ['sogno', 'sogno: 꿈'],
    ]
    var beautySpanish = [
        ['amanecer', 'amanecer: 새벽'],
        ['amistad', 'amistad: 우정'],
        ['amor', 'amor: 사랑'],
        ['arbol', 'arbol: 나무'],
        ['boda', 'boda: 결혼'],
        ['bosque', 'bosque: 숲'],
        ['castillo', 'castillo: 성'],
        ['coche', 'coche: 자동차'],
        ['dios', 'dios: 신'],
        ['felicidad', 'felicidad: 행복함'],
        ['fragancia', 'fragancia: 향기'],
        ['gracia', 'gracia: 은총'],
        ['isla', 'isla: 섬'],
        ['joya', 'joya: 보석'],
        ['navidad', 'navidad: 크리스마스'],
        ['nino', 'nino: 소년'],
        ['nina', 'nina: 소녀'],
        ['ojo', 'ojo: 눈'],
        ['recuerdo', 'recuerdo: 기억'],
        ['salud', 'salud: 건강'],
        ['senorita', 'senorita: 아가씨'],
        ['sol', 'sol: 태양'],
        ['sueno', 'sueno: 꿈'],
        ['vela', 'vela: 돛'],
        ['verano', 'verano: 여름'],
    ]
    var beautyHebrian = [
        ['gath', 'gath: 복'],
        ['gadi', 'gadi: 행운'],
        ['carmel', 'carmel: 동산'],
        ['gloria', 'gloria: 영광'],
        ['gomer', 'gomer: 완성'],
        ['cyrus', 'cyrus: 태양'],
        ['nathan', 'nathan: 선물'],
        ['ner', 'ner: 등불'],
        ['noah', 'noah: 휴식'],
        ['raphu', 'raphui: 위로'],
        ['rhoda', 'rhoda: 장미'],
        ['lucifer', 'lucifer: 샛별'],
        ['reu', 'reu: 친구'],
        ['ruhamah', 'ruhamah: 귀염둥이'],
        ['manoah', 'manoah: 휴식'],
        ['melchi', 'melchi: 왕'],
        ['milcah', 'milcah: 여왕'],
        ['silla', 'silla: 생각'],
        ['aaron', 'aaron: 고상함'],
        ['augustus', 'augustus: 크다'],
        ['achim', 'achim: 지혜'],
        ['elohim', 'elohim: 능력있는 자'],
    ]

    var buttons = languageSelectArea.querySelectorAll('button');
    var beautyVoca, vocaDetails;
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // 페이지 새로고침 방지
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
            <form method="get" class="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
                    <div class="input-group input-group-lg">
                    <span class="input-group-text bi-search" id="basic-addon1">
                    </span>
                    <input name="additionalName" type="eng_search" class="form-control" id="additionalName" placeholder="추가할 이름 혹은 별명" aria-label="추천">
                    <button id="add" type="button" class="form-control">추가</button>
                    <button type="reset" class="form-control" style="background-color:black;">Reset</button>
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
                                <i class="bi bi-share"></i>
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            document.querySelector('.row.justify-content-center').appendChild(beautyVocaContainer);
            document.querySelector('.row.justify-content-center').appendChild(additionalInputArea);
            document.querySelectorAll('.copy-button').forEach(function(button) {
                button.addEventListener('click', async function(event) {
                    var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
                    await navigator.clipboard.writeText(textToCopy);
                    alert('복사되었습니다');
                });
            });


            var addButton = additionalInputArea.querySelector('button[id="add"]');
            addButton.addEventListener('click', function(event) {
                var name = additionalInputArea.querySelector('#additionalName').value.toLowerCase().split(' ').join('');
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
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName1}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName2}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName3}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName4}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName5}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                                    <p class="mb-0">@${withName6}</p>
                                    <button type="copy" class="copy-button">
                                        <i class="bi bi-share"></i>
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    document.querySelector('.row.justify-content-center').appendChild(vocaWithNameContainer);
                    document.querySelector('.row.justify-content-center').appendChild(additionalInputArea);
                    document.querySelectorAll('.copy-button').forEach(function(button) {
                        button.addEventListener('click', async function(event) {
                            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
                            await navigator.clipboard.writeText(textToCopy);
                            alert('복사되었습니다');
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
                var additionalNameInput = additionalInputArea.querySelector('#additionalName');
                additionalNameInput.value = '';
                document.querySelector('.row.justify-content-center').appendChild(beautyVocaContainer);
                document.querySelector('.row.justify-content-center').appendChild(additionalInputArea);
            })
        });
    });
}