function addDropdownButtons() {
    var dropdownArea = document.querySelector('.featured-section .container .row');
    dropdownArea.innerHTML = '';  // dropdownArea의 내용 초기화

    var title = document.createElement('h6');
    title.innerText = '조합할 단어를 선택해주세요';
    title.style.color = 'white';
    title.style.textAlign = 'center';
    dropdownArea.appendChild(title);

    var buttonDiv = document.createElement('div');
    buttonDiv.className = 'd-flex justify-content-evenly flex-wrap';

    var dropdownDiv = document.createElement('div');
    dropdownDiv.className = 'dropdown';

    var dropdownButton1 = document.createElement('button');
    dropdownButton1.className = 'btn btn-secondary dropdown-toggle';
    dropdownButton1.type = 'button';
    dropdownButton1.dataset.bsToggle = 'dropdown';
    dropdownButton1.setAttribute('aria-expanded', 'false');
    dropdownButton1.innerText = '감정(긍정적)';

    var dropdownMenu1 = document.createElement('ul');
    dropdownMenu1.className = 'dropdown-menu';

    var item0 = createDropdownItem('감정(긍정적)', dropdownButton1, 1, false);
    var item1 = createDropdownItem('감정(센치한)', dropdownButton1, 2, false);
    var item2 = createDropdownItem('성격', dropdownButton1, 3, false);
    var item3 = createDropdownItem('자연 현상', dropdownButton1, 4, false);
    var item4 = createDropdownItem('동물', dropdownButton1, 5, false);
    var item5 = createDropdownItem('꽃', dropdownButton1, 6, false);
    var item6 = createDropdownItem('음식', dropdownButton1, 7, false);
    var item7 = createDropdownItem('색깔', dropdownButton1, 8, false);
    var item8 = createDropdownItem('캐릭터', dropdownButton1, 9, false);

    dropdownMenu1.appendChild(item0);
    dropdownMenu1.appendChild(item1);
    dropdownMenu1.appendChild(item2);
    dropdownMenu1.appendChild(item3);
    dropdownMenu1.appendChild(item4);
    dropdownMenu1.appendChild(item5);
    dropdownMenu1.appendChild(item6);
    dropdownMenu1.appendChild(item7);
    dropdownMenu1.appendChild(item8);

    var dropdownButton2 = document.createElement('button');
    dropdownButton2.className = 'btn btn-secondary dropdown-toggle';
    dropdownButton2.type = 'button';
    dropdownButton2.dataset.bsToggle = 'dropdown';
    dropdownButton2.setAttribute('aria-expanded', 'false');
    dropdownButton2.innerText = '감정(긍정적)';

    var dropdownMenu2 = document.createElement('ul');
    dropdownMenu2.className = 'dropdown-menu';

    var item0_2 = createDropdownItem('감정(긍정적)', dropdownButton2, 1, true);
    var item1_2 = createDropdownItem('감정(센치한)', dropdownButton2, 2, true);
    var item2_2 = createDropdownItem('성격', dropdownButton2, 3, true);
    var item3_2 = createDropdownItem('자연 현상', dropdownButton2, 4, true);
    var item4_2 = createDropdownItem('동물', dropdownButton2, 5, true);
    var item5_2 = createDropdownItem('꽃', dropdownButton2, 6, true);
    var item6_2 = createDropdownItem('음식', dropdownButton2, 7, true);
    var item7_2 = createDropdownItem('색깔', dropdownButton2, 8, true);
    var item8_2 = createDropdownItem('캐릭터', dropdownButton2, 9, true);

    dropdownMenu2.appendChild(item0_2);
    dropdownMenu2.appendChild(item1_2);
    dropdownMenu2.appendChild(item2_2);
    dropdownMenu2.appendChild(item3_2);
    dropdownMenu2.appendChild(item4_2);
    dropdownMenu2.appendChild(item5_2);
    dropdownMenu2.appendChild(item6_2);
    dropdownMenu2.appendChild(item7_2);
    dropdownMenu2.appendChild(item8_2);

    var plusText = document.createElement('span');
    plusText.innerText = '+';
    plusText.style.margin = '0 10px';

    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Generate';
    submitButton.className = 'btn btn-primary';

    dropdownDiv.appendChild(dropdownButton1);
    dropdownDiv.appendChild(dropdownMenu1);
    dropdownDiv.appendChild(plusText);
    dropdownDiv.appendChild(dropdownButton2);
    dropdownDiv.appendChild(dropdownMenu2);
    dropdownDiv.appendChild(submitButton);

    buttonDiv.appendChild(dropdownDiv);

    dropdownArea.appendChild(buttonDiv);

    var positiveWords = [
        ['aromatic', 'aromatic: 향이 좋은'],
        ['auspicious', 'auspicious: 길조의'],
        ['cherish', 'cherish: 소중히 여기다'],
        ['eudemonic', 'eudemonic: 행복을 주는'],
        ['eunoia', 'eunoia: 아름다운 생각'],
        ['euphoria', 'euphoria: 가슴벅참'],
        ['felicity', 'felicity: 큰 행복'],
        ['halcyon', 'halcyon: 평온한'],
        ['heimish', 'heimish: 아늑한'],
        ['radiant', 'radiant: 빛나는'],
        ['serendipity', 'serendipity: 우연'],
        ['sonorous', 'sonorous: 듣기 좋은'],
        ['xabadu', 'xabadu: 이상향의 공간'],
        ['zest', 'zest: 열정'],
        ['bliss', 'bliss: 행복'],
        ['joy', 'joy: 기쁨'],
        ['pleasure', 'pleasure: 즐거움'],
        ['harmony', 'harmony: 조화'],
        ['serenity', 'serenity: 평온함'],
        ['wonder', 'wonder: 경이로움'],
        ['yummy', 'yummy: 맛있는'],
        ['abundance', 'abundance: 풍요'],
        ['accomplishment', 'accomplishment: 성취'],
        ['freedom', 'freedom: 자유'],
    ];
    var sentimentalWords = [
        ['aeonian', 'aeonian: 영원한'],
        ['allure', 'allure: 유혹, 매력'],
        ['cooing', 'cooing: 달콤하게 속삭이다'],
        ['duclet', 'duclet: 감미로운'],
        ['evanescent', 'evanescent: 덧없는'],
        ['fluffy', 'fluffy: 보송보송한'],
        ['idyllic', 'idyllic: 그림같은'],
        ['ineffable', 'ineffable: 형언할 수 없는'],
        ['luminous', 'luminous: 어둠속에서 빛나는'],
        ['lyrical', 'lyrical: 서정적인'],
        ['mellifluous', 'mellifluous: 감미로운'],
        ['reminiscent', 'reminiscent: 추억에 잠긴 듯한'],
        ['serenity', 'serenity: 고요함'],
        ['fate', 'fate: 운명'],
        ['dreamy', 'dreamy: 꿈꾸는 듯한'],
        ['exquisite', 'exquisite: 정교한'],
        ['ideal', 'ideal: 이상적인'],
        ['magnificent', 'magnificent: 정교한'],
        ['sassy', 'sassy: 당당한'],
        ['unforgettable', 'unforgettable: 잊지 못할'],
        ['ambition', 'ambition: 야망'],
        ['perseverance', 'perseverance: 인내']
    ];
    var personality = [
        ['adorable', 'adorable: 사랑스러운'],
        ['alturistic', 'alturistic: 이타적인'],
        ['bijou', 'bijou: 아담한'],
        ['brilliant', 'brilliant: 똑똑한'],
        ['cheery', 'cheery: 쾌활한'],
        ['cuddly', 'cuddly: 꼭 껴안고 싶은'],
        ['elfin', 'elfin: 요정같은'],
        ['erudite', 'erudite: 박식한'],
        ['ethereal', 'ethereal: 여린'],
        ['exquisite', 'exquisite: 매우 아름다운'],
        ['fabulous', 'fabulous: 멋진'],
        ['glisten', 'glisten: 반짝이다'],
        ['luculent', 'luculent: 밝은'],
        ['lovesome', 'lovesome: 사랑스러운'],
        ['lucid', 'lucid: 맑은'],
        ['sapient', 'sapient: 지적인'],
        ['seraphic', 'seraphic: 천사같은'],
        ['whimsical', 'whimsical: 엉뚱한'],
        ['winsome', 'winsome: 매력적인'],
        ['witty', 'witty: 발랄한'],
        ['charming', 'charming: 매력저인'],
        ['beautiful', 'beautiful: 예쁜'],
    ];
    var naturalWords = [
        ['afterglow', 'afterglow: 잔광, 여운'],
        ['azure', 'azure: 하늘빛의'],
        ['crescent', 'crescent: 초승달'],
        ['droplet', 'droplet: 물방울'],
        ['galaxy', 'galaxy: 은하계'],
        ['haze', 'haze: 아지랑이'],
        ['iridescent', 'iridescent: 무지개빛의'],
        ['lucy: 빛'],
        ['milkyway', 'milkyway: 은하수'],
        ['moonlight', 'moonlight: 달빛'],
        ['starlike', 'starlike: 별 같은'],
        ['stella', 'stella: 별'],
        ['supernova', 'supernova: 초신성'],
        ['twilight', 'twilight: 황혼']
    ];
    var animals = [
        ['bunny', 'bunny : 토끼'],
        ['boar', 'boar : 야생돼지'],
        ['fox', 'fox : 여우'],
        ['lion', 'lion : 사자'],
        ['tiger', 'tiger : 호랑이'],
        ['kangaroo', 'kangaroo : 캥거루'],
        ['panda', 'panda : 팬더'],
        ['kitty', 'kitty : 아기고양이'],
        ['racoon', 'racoon : 라쿤'],
        ['squirrel', 'squirrel : 다람쥐'],
        ['vixen', 'vixen : 암여우'],
        ['goat', 'goat : 염소'],
        ['badger', 'badger : 오소리'],
        ['jaguar', 'jaguar : 재규어'],
        ['mouse', 'mouse : 쥐'],
        ['peacock', 'peacock : 수컷 공작'],
        ['peahen', 'peahen : 암컷 공작'],
        ['parrot', 'parrot : 앵무새'],
        ['owl', 'owl : 올빼미'],
        ['flamingo','flamingo : 홍학'],
        ['beaver', 'beaver : 비버'],
        ['otter', 'otter : 수달'],
        ['penguin', 'penguin : 펭귄'],
        ['terrapin', 'terrapin : 자라'],
    ];
    var flowers = [
        ['forsythia', 'forsythia : 개나리'],
        ['peony', 'peony : 모란꽃'],
        ['yulan', 'yulan : 백목련'],
        ['daffodil', 'daffodil : 수선화'],
        ['azalea', 'azalea : 연산홍'],
        ['tulip', 'tulip : 튤립'],
        ['cherryblossom', 'cherryblossom : 벚꽃'],
        ['lily', 'lily : 백합'],
        ['marigold', 'marigold : 천수국'],
        ['rose', 'rose : 장미'],
        ['carnation', 'carnation : 카네이션'],
        ['camellia', 'camellia : 동백꽃'],
        ['cyclamen', 'cyclamen : 시클라멘'],
        ['freesia', 'freesia : 프리지아'],
        ['lotus', 'lotus : 연꽃'],
        ['hyacinth', 'hyacinth : 하이신스'],
        ['sunflower', 'sunflower : 해바라기'],
        ['violet', 'violet : 제비꽃'],
        ['jasmine', 'jasmine : 자스민'],
        ['daisy', 'daisy : 데이지'],
        ['anemone', 'anemone : 아네모네'],
        ['lavender', 'lavender : 라벤더'],
        ['clover', 'clover : 클로버'],
        ['poppy', 'poppy : 양귀비'],
        ['iris', 'iris : 붓꽃'],
        ['peony', 'peony : 모란'],
    ];
    var foods = [
        ['apple', 'apple : 사과'],
        ['banana', 'banana : 바나나'],
        ['blueberry', 'blueberry : 블루베리'],
        ['cherry', 'cherry : 체리'],
        ['coconut', 'coconut : 코코넛'],
        ['fig', 'fig : 무화과'],
        ['grape', 'grape : 포도'],
        ['lemon', 'lemon : 레몬'],
        ['mango', 'mango : 망고']
        ['peach', 'peach : 복숭아'],
        ['orange', 'orange : 오렌지'],
        ['pineapple', 'pineapple : 파인애플'],
        ['strawberry', 'strawberry : 딸기'],
        ['bacon', 'bacon : 베이컨'],
        ['sausages', 'sausages : 소시지'],
        ['salmon', 'salmon : 연어'],
        ['tuna', 'tuna : 참치'],
        ['avocado', 'avocado : 아보카도'],
        ['ginger', 'ginger : 생강'],
        ['garlic', 'garlic : 마늘'],
        ['tomato', 'tomato : 토마토'],
        ['soup', 'soup : 수프'],
        ['chips', 'chips : 감자튀김'],
        ['icecream', 'icecream : 아이스크림'],
        ['butter', 'butter : 버터'],
        ['cream', 'cream : 크림'],
        ['cheese', 'cheese : 치즈'],
        ['milk', 'milk : 우유'],
        ['yoghurt', 'yoghurt : 요거트'],
        ['cake', 'cake : 케이크'],
        ['sugar', 'sugar : 설탕'],
        ['pastry', 'pastry : 페스츄리'],
        ['honey', 'honey : 꿀'],
        ['jam', 'jam : 잼'],
        ['pasta', 'pasta : 파스타'],
        ['rice', 'rice : 밥'],
        ['spaghetti', 'spaghetti : 스파게티'],
        ['ketchup', 'ketchup : 케첩'],
        ['mayo', 'mayo : 마요네즈'],
        ['mustard', 'mustard : 머스타드'],
        ['pepper', 'pepper : 후추'],
        ['salt', 'salt : 소금'],
        ['vinegar', 'vinegar : 식초'],
        ['biscuits', 'biscuits : 비스킷'],
        ['chocolate', 'chocolate : 초콜렛'],
        ['crisps', 'crisps : 감자칩'],
        ['kimchi', 'kimchi : 김치'],
        ['bibimbap', 'bibimbap : 비빔밥'],
        ['bulgogi', 'bulgogi : 불고기'],
    ];
    var colors = [
        ['red', 'red : 빨강'],
        ['orange', 'orange : 주황'],
        ['yellow', 'yellow : 노랑'],
        ['green', 'green : 초록'],
        ['blue', 'blue : 파랑'],
        ['purple', 'purple : 보라'],
        ['black', 'black : 검정'],
        ['beige', 'beige : 베이지'],
        ['coral', 'coral : 적황'],
        ['gold', 'gold : 금색'],
        ['pink', 'pink : 분홍'],
        ['indigo','indigo : 남색'],
        ['navy', 'navy : 남색'],
        ['silver', 'silver : 은색'],
        ['violet', 'violet : 보랏빛'],
    ];
    var character = [
        ['nick', 'nick : 닉 (주토피아)'],
        ['rapunzel', 'rapunzel : 라푼젤'],
        ['elsa', 'elsa : 엘사 (겨울왕국)'],
        ['anna', 'anna : 안나 (겨울왕국)'],
        ['micky', 'micky : 미키마우스'],
        ['minnie', 'minnie : 미니마우스'],
        ['mario', 'mario : 마리오'],
        ['miffy', 'miffy : 미피'],
        ['stitch', 'stitch : 스티치 (릴로와 스티치)'],
        ['pooh', 'pooh : 곰돌이 푸'],
        ['thanos', 'thanos : 타노스 (MCU)'],
        ['ironman', 'ironman : 아이언맨 (MCU)'],
        ['spiderman', 'spiderman : 스파이더맨 (MCU)'],
        ['superman', 'superman : 슈퍼맨 (DC)'],
        ['batman', 'batman : 배트맨 (DC)'],
        ['cinderella', 'cinderella : 신데렐라'],
        ['ariel', 'ariel : 인어공주'],
        ['jasmine', 'jasmine : 자스민 (알라딘)'],
        ['pocahontas', 'pocahontas : 포카혼타스'],
        ['buzz', 'buzz : 버즈 (토이스토리)'],
        ['piglet', 'piglet : 피글렛 (곰돌이 푸)'],
        ['woody', 'woody : 우디 (토이스토리)'],
        ['tweety', 'tweety : 트위티'],
        ['aladdin', 'aladdin : 알라딘'],
        ['groot', 'groot : 그루트 (MCU)'],
        ['neo', 'neo : 네오 (매트릭스)'],
        ['harrypotter', 'harrypotter : 해리포터'],
        ['wolverine', 'wolverine : 울버린 (X맨)'],
        ['et', 'et : 이티'],
        ['yoda', 'yoda : 요다 (스타워즈)'],
        ['gandalf', 'gandalf: 간달프 (반지의 제왕)'],
        ['loki', 'loki : 로키 (MCU)'],
        ['darthvader', 'darthvader : 다스베이더 (스타워즈)'],
        ['joker', 'joker : 조커 (DC)'],
        ['sherlock', 'sherlock : 셜록'],
        ['simpson', 'simpson : 심슨'],
        ['garfield', 'garfield : 가필드'],
        ['pikachu', 'pikacuh : 피카츄'],
    ]
    var lists = [positiveWords, sentimentalWords, personality, naturalWords,animals, flowers, foods, colors, character];
    
    var isCheckbox1Checked = false;
    var isCheckbox2Checked = false;
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // 페이지 새로고침 방지
        var containers = document.querySelectorAll('.row.justify-content-center .col-lg-4.col-12.mb-4.mb-lg-0');
        containers.forEach(function(container) {
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

        var wordsCombine1 = firstItem + '_' + secondItem;
        var wordsCombine2 = firstItem + '.' + secondItem;
        var wordsCombine3 = firstItem + secondItem;
        var wordsCombineContainer = document.createElement('div');
        wordsCombineContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        wordsCombineContainer.innerHTML = `
        <div class="new-custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <div class="d-flex justify-content-start align-items-start">
                    <h6 style="font-size:1vmax; color:red;">단어 고정</h6>
                    <input type="checkbox" id="checkbox1" style="margin-right:10px; margin-left:2px;" ${isCheckbox1Checked ? 'checked' : ''}>
                        <h5 class="mb-2" style="color:red;">※ ${firstDetail}</h5>
                    </div>
                    <div class="d-flex justify-content-start align-items-start">
                    <h6 style="font-size:1vmax; color:blue;">단어 고정</h6>
                    <input type="checkbox" id="checkbox2" style="margin-right:10px; margin-left:2px;" ${isCheckbox2Checked ? 'checked' : ''}>
                        <h5 class="mb-2" style="color:blue;">※ ${secondDetail}</h5>
                    </div>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${wordsCombine1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-share"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${wordsCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-share"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${wordsCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-share"></i>
                            Copy
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    `;
    document.querySelector('.row.justify-content-center').appendChild(wordsCombineContainer);
    document.querySelectorAll('.copy-button').forEach(function(button) {
        button.addEventListener('click', async function(event) {
            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
            await navigator.clipboard.writeText(textToCopy);
            alert('복사되었습니다');
        });
    });

    document.getElementById('checkbox1').addEventListener('change', function() {
        isCheckbox1Checked = this.checked;
        if (!this.checked) {
            randomIndex1 = Math.floor(Math.random() * selectedList1.length);
        }
    });
    document.getElementById('checkbox2').addEventListener('change', function() {
        isCheckbox2Checked = this.checked;
        if (!this.checked) {
            randomIndex2 = Math.floor(Math.random() * selectedList2.length);
        }
    });
    });
}

function createDropdownItem(text, dropdownButton, index, isSecondDropdown) {
    var li = document.createElement('li');
    var button = document.createElement('button');
    button.className = 'dropdown-item';
    button.type = 'button';
    button.innerText = text;
    button.addEventListener('click', function() {
        dropdownButton.innerText = text;
        dropdownButton.dataset.bsToggle = 'dropdown'; 
        if (isSecondDropdown) {
            window.secondChoice = index;
        } else {
            window.firstChoice = index;
        }
    });
    li.appendChild(button);
    return li;
}