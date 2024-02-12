function famousWords() {
    var dropdownArea = document.querySelector('.featured-section .container .row');
    dropdownArea.innerHTML = '';  // dropdownArea의 내용 초기화
    dropdownArea.style.justifyContent = '';

    var title = document.createElement('h6');
    title.innerText = '종류를 선택하세요';
    title.style.color = 'white';
    title.style.textAlign = 'center';
    dropdownArea.appendChild(title);

    var wordsSelectArea = document.createElement('div')
    wordsSelectArea.innerHTML = `
    <form method="get" class="custom-form mt-4 pt-2 mb-lg-0 mb-1" role="search">
        <div class="input-group input-group-lg">
            <button id="wordButton" type="button" class="form-control" style="font-size: 1.5vmax;")>영화 대사</button>
            <button id="wordButton" type="button" class="form-control" style="font-size: 1.5vmax;")>속담, 명언, 문구</button>
            <button id="wordButton" type="button" class="form-control" style="font-size: 1.5vmax;")>노래 제목, 가사</button>
            <button id="wordButton" type="button" class="form-control" style="font-size: 1.5vmax;")>영어 줄임말</button>
            <button id="wordButton" type="button" class="form-control" style="font-size: 1.5vmax;")>신조어</button>
        </div>
    </form>
    `;
    document.querySelector('.row.justify-content-left').appendChild(wordsSelectArea);

    var movieLinesLists = [
        ['may the force be with you', '포스(힘)가 항상 함께하길', '영화 <스타워즈>'],
        ['Hasta la vista baby', '나중에 보자', '영화 <터미네이터2: 심판의 날>'],
        ['you talkin to me', '너 나한테 말하는 거야?', '영화 <택시 드라이버>'],
        ['show me the money', '나에게 돈을 보여줘', '영화<제리 맥과이어>'],
        ['i will be back', '나는 돌아올것이다', '영화 <터미네이터>'],
        ['heres jonny', '조니가 여기있네', '영화 <샤이닝>'],
        ['my precious', '내 보물', '영화 <반지의 제왕>'],
        ['i feel the need for speed', '속도를 올려야 해', '영화 <탑건>'],
        ['im the king of the world', '나는 세상의 왕이다', '영화 <타이타닉>'],
        ['i am your father', '내가 니 아비다', '영화 <스타워즈:제국의 역습>'],
        ['to infinity and beyond', '무한한 공간 저 너머로', '영화 <토이스토리>'],
        ['i love you 3000', '3000만큼 사랑해', '영화 <어벤져스:엔드게임>'],
        ['i can do this all day', '하루 종일 할 수도 있어', '영화 <캡틴 아메리카:시빌 워>'],
        ['i am iron man', '제가 아이언맨 입니다', '영화 <아이언맨>'],
        ['avengers assemble', '어벤져스 어셈블', '영화 <어벤져스:엔드게임>'],
        ['why so serious', '왜 그렇게 심각해?', '영화 <다크나이트>'],
        ['you shall not pass', '넌 지나갈 수 없다', '영화 <반지의 제왕:반지원정대>'],
        ['jessica only child illinois chicago', '제시카 외동 딸 일리노이 시카고', '영화 <기생충>'],
    ]
    var quotesLists = [
        ['you will never walk alone', '당신은 결코 혼자 걸어가지 않을 것이다', '뮤지컬 <카루셀>의 곡, 여러 축구 클럽의 표어'],
        ['character is power', '성격은 힘입니다', 'Booker T. Washington의 명언'],
        ['turn your wounds into wisdom', '상처를 지혜로 바꾸어 보세요', 'Oprah Winfrey의 명언'],
        ['carpe diem', '현재를 잡아라', 'Horace의 시 구절'],
        ['less is more', '저은 것이 풍부한 것이다', 'Robert Browning의 시 <Andrea del Sarto>'],
        ['just do it', '그냥 해봐', 'Nike 광고 문구'],
        ['think different', '다르게 생각해보세요', 'Apple 광고 문구'],
        ['semper fidelis', '항상 충성해라', '미 해병의 모토'],
        ['impossible is nothing', '불가능한 일은 없다', 'Adidas 광고 문구'],
        ['lux et veritas', '빛, 진리, 그늘', '예일대학교의 모토'],
        ['veritas lux mea', '진리는 나의 빛', '서울대학교의 모토'],
        ['well begun is half done', '시작이 반이다', ''],
        ['early bird catches the worm', '일찍 일어나는 새가 벌레를 잡는다', ''],
        ['seize the day', '오늘을 즐겨라', ''],
        ['believe in yourself', '자기 자신을 믿어라', ''],
        ['you only live once', '인생은 한번 뿐이다', ''],
        ['past is just past', '과거는 과거일 뿐이다', ''],
        ['life is a journey', '인생은 여정이다', ''],
        ['no sweat no sweet', '땀 없이는 달콤함도 없다', ''],
        ['no pain no gain', '고통 없인 얻는 것도 없다', ''],
        ['this is how life is', '이런게 인생이다', ''],
        ['hang in there', '힘내세요', ''],
        ['if not now then when', '지금 아니면 언제 할 건가요?', ''],
        ['time is gold', '시간은 금이다', ''],
        ['love what you do', '사랑하는 것을 하세요', ''],
        ['time waits for no one', '시간은 아무도 기다려 주지 않아요', ''],
        ['life is all about timing', '인생은 타이밍이다', ''],
    ]
    var songLists = [
        ['all you need is love', '', '밴드 The Beatles의 노래 제목'],
        ['dont stop believin', '', '밴드 Journey의 노래 제목'],
        ['under the sea', '', '<인어공주> OST'],
        ['every second every day', '', 'Mina Okabe의 <Every Second> 가사'],
        ['young and beautiful', '', 'Lana Del Rey의 노래 제목'],
        ['rewrite the stars', '', '<위대한 쇼맨> OST'],
        ['i wonder how i wonder why', '', 'Fools Garden의 <Lemon Tree> 가사'],
        ['let it be', '', '밴드 The Beatles의 노래 제목'],
        ['dont stop me now', '', '밴드 Queen의 노래'],
        ['dont look back in anger', '', '밴드 Oasis의 노래'],
        ['sugar yes please', '', '밴드 Marron5의 <Sugar> 가사'],
        ['cant take my eyes off you', '', 'Frankie Valli의 노래 제목'],
        ['i will always love you', '', 'Whitney Houston의 노래 제목'],
        ['never ending story', '', '밴드 부활의 노래 제목'],
        ['all for you', '', '쿨의 노래 제목'],
        ['love yourself', '', 'Justin Bieber의 노래 제목'],
        ['because of you', '', 'Kelly Clarkson의 노래 제목'],
        ['yes or yes', '', '트와이스의 노래 제목'],
        ['how you like that', '', '블랙핑크의 노래 제목'],
        ['lovesick girls', '', '블랙핑크의 노래 제목'],
        ['pink venom', '', '블랙핑크의 노래 제목'],
        ['permission to dance', '', '방탄소년단의 노래 제목'],
        ['savage love', '', '방탄소년단의 노래 제목'],
        ['life goes on', '', '방탄소년단의 노래 제목'],
        ['fantastic baby', '', '빅뱅의 노래 제목'],
        ['electric shock', '', 'f(x)의 노래 제목'],
        ['roly poly', '', '티아라의 노래 제목'],
        ['run to you', '', 'DJ DOC의 노래 제목'],
        ['touch my body', '', '씨스타의 노래 제목'],
        ['love me right', '', '엑소의 노래 제목'],
        ['come back home', '', '서태지와 아이들의 노래 제목'],
        ['hot issue', '', '포미닛의 노래 제목'],
        ['dance the night away', '', '트와이스의 노래 제목'],
        ['love lee', '', '악동뮤지션의 노래 제목'],
        ['super shy', '', '뉴진스의 노래 제목'],
        ['get a guitar', '', '라이즈의 노래 제목'],
        ['rainy day', '', '파테코의 노래 제목'],
        ['and july', '', '헤이즈의 노래 제목'],
        ['aqua man', '', '빈지노의 노래 제목'],
        ['always awake', '', '빈지노의 노래 제목'],
        ['dali van picasso', '', '빈지노의 노래 제목'],
        ['if i die tomorrow', '', '빈지노의 노래 제목'],
        ['rain shower', '', '레이블 Just Music의 노래 제목'],
        ['officially missing you', '', '긱스의 노래 제목'],
        ['ohayo my night', '', '디핵, 파테코의 노래 제목'],
        ['counting stars', '', '비오의 노래 제목'],
        ['we like 2 party', '', '빅뱅의 노래 제목'],
        ['last dance', '', '빅뱅의 노래 제목'],
        ['one of a kind', '', '지드래곤의 노래 제목'],
        ['bang bang bang', '', '빅뱅의 노래 제목'],
        ['hype boy', '', '뉴진스의 노래 제목'],
    ]
    var engSlangLists = [
        ['msg', 'message의 속어', ''],
        ['hbd', 'Happy Birth Day의 줄임말', ''],
        ['fyi', 'for your information의 줄임말', ''],
        ['thx', 'thank you의 줄임말', ''],
        ['lol', 'ㅋㅋㅋ를 나타내는 말', ''],
        ['ltns', 'long time no see의 줄임말', ''],
        ['asap', 'as soon as possible의 줄임말', ''],
        ['wtf', 'what the fuxx의 줄임말', ''],
        ['sup', "what's up의 속어", ''],
        ['idc', "I don't care의 줄임말", ''],
        ['ttyl', 'talk to you later의 줄임말', ''],
        ['xoxo', '포옹과 뽀뽀', ''],
        ['btw', 'by the way의 줄임말', ''],
        ['gtg', 'got to go의 줄임말', ''],
        ['b4', 'before의 속어', ''],
        ['biz', 'business의 속어', ''],
        ['bff', 'best friend forever의 줄임말', ''],
        ['tgif', "Thanks God It's Friday의 줄임말", ''],
        ['cu', 'see you의 속어', ''],
        ['idk', "I don't know의 줄임말", ''],
        ['l8r', 'later의 속어', ''],
        ['selfie', '셀카를 나타내는 말', ''],
        ['oic', 'Oh I see의 속어', ''],
        ['pm', '비밀 대화를 나타내는 말', ''],
        ['diy', 'Do It Yourself의 줄임말', ''],
        ['omg', 'Oh My God의 줄임말', ''],
    ]
    var korSlangLists = [
        ['pom michutda', '폼 미쳤다', ''],
        ['jjong kkeok ma', '중꺾마', ''],
        ['jjong kkeok geu ma', '중꺾그마', ''],
        ['new normal', '뉴노멀 (New + Normal)', ''],
        ['new tro', '뉴트로 (New + Retro)', ''],
        ['are you t', '너 T야?', ''],
        ['eo jjeol tv', '어쩔티비', ''],
        ['jon mat tteng', '존맛탱', ''],
        ['c mon', '씨몬', ''],
        ['ki jul', '기절', ''],
        ['nonghyup bank', '농협은행(너무 예쁘다)', ''],
    ]

    var buttons = wordsSelectArea.querySelectorAll('button');
    var wordOrigin, wordsDetail1, wordsDetail2, wordShow1, wordShow2, wordShow3, wordShow4;
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
            <p class="description" style="margin-top:0;margin-bottom:0;">주제를 클릭할 때마다 랜덤으로 다르게 나옵니다.</p>
            <p class="description-select" style="margin-bottom:2.5vh;">Copy를 누르면 해당 닉네임을 복사할 수 있습니다.</p>
            `;
            document.querySelector('.row.justify-content-left').appendChild(descrip);

            var descrip_bottom = document.createElement('div')
            descrip_bottom.className = 'description-bottom';
            descrip_bottom.innerHTML = `
            <p class="warning" style="margin-top:2rem;margin-bottom:0;">이름은 20자 이하의 영어(혹은 숫자)로 입력하세요.</p>
            <p class="description">이름을 입력하고 '추가'를 선택 시 새 아이디를 추천합니다</p>
            `;

            for (let i = 1; i <= 4; i++) {
                var existingWordWithName = document.getElementById('wordWithName' + i);
                if (existingWordWithName) {
                    existingWordWithName.remove();
                }
            }
            var existingContainer = document.getElementById('famousWC');
            if (existingContainer) {
                existingContainer.remove();
            }
            var existingAdditionalInputArea = document.getElementById('additionalInput');
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
            wordShow1 = wordOrigin.split(' ').join('');
            wordShow2 = wordOrigin.split(' ').join('.');
            wordShow3 = wordOrigin.split(' ').join('_');
            wordShow4 = wordOrigin.split(' ').map(function(name) {return name[0];}).join('');

            var famousWordContainer = document.createElement('div');
            famousWordContainer.className = "col-lg-4 col-12 mb-lg-0";
            famousWordContainer.id = 'famousWC';
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
            }
            else {
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
            `; }
            var additionalInputArea = document.createElement('div')
            additionalInputArea.id = 'additionalInput'; // 고유한 id값 설정
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
            document.querySelector('.row.justify-content-left').appendChild(famousWordContainer);
            document.querySelector('.row.justify-content-left').appendChild(descrip_bottom);
            document.querySelector('.row.justify-content-left').appendChild(additionalInputArea);

            document.querySelectorAll('.copy-button').forEach(function(button) {
                button.addEventListener('click', async function(event) {
                    var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
                    await navigator.clipboard.writeText(textToCopy);
                    alert('"' + textToCopy + '" ' + "가 복사되었습니다.");
                });
            });


            var addButton = additionalInputArea.querySelector('button[id="add"]');
            addButton.addEventListener('click', function(event) {
                var name = additionalInputArea.querySelector('#additionalName').value.toLowerCase().split(' ').join('');
                var isAlphanumeric = /^[a-z0-9\s]*$/i.test(name);
                var isValidLength = name.length <= 20;
                if (!isAlphanumeric || !isValidLength) {
                    alert("20자 이내의 알파벳(혹은 숫자)로 이루어진 문자열이어야 합니다.");
                    return;
                }
                if (name) {
                    var existingContainer = document.getElementById('famousWC');
                    if (existingContainer) {
                        existingContainer.remove();
                    }
                    for (let i = 1; i <= 4; i++) {
                        var existingWordWithName = document.getElementById('wordWithName' + i);
                        if (existingWordWithName) {
                            existingWordWithName.remove();
                        }
                    }
                    if (existingAdditionalInputArea) {
                        existingAdditionalInputArea.remove();
                    }
                    var existingDescript = document.getElementById('description-bottom');
                    if (existingDescript) {
                        existingDescript.remove();
                    }
                    var withName1_1 = wordShow1 + name;
                    var withName2_1 = wordShow1 + '.' + name;
                    var withName3_1 = wordShow1 + '_' + name;
                    var withName4_1 = name + wordShow1;
                    var withName5_1 = name + '.' + wordShow1;
                    var withName6_1 = name + '_' + wordShow1;
                    var withName1_2 = wordShow2 + name;
                    var withName2_2 = wordShow2 + '.' + name;
                    var withName3_2 = wordShow2 + '_' + name;
                    var withName4_2 = name + wordShow2;
                    var withName5_2 = name + '.' + wordShow2;
                    var withName6_2 = name + '_' + wordShow2;
                    var withName1_3 = wordShow3 + name;
                    var withName2_3 = wordShow3 + '.' + name;
                    var withName3_3 = wordShow3 + '_' + name;
                    var withName4_3 = name + wordShow3;
                    var withName5_3 = name + '.' + wordShow3;
                    var withName6_3 = name + '_' + wordShow3;
                    var withName1_4 = wordShow4 + name;
                    var withName2_4 = wordShow4 + '.' + name;
                    var withName3_4 = wordShow4 + '_' + name;
                    var withName4_4 = name + wordShow4;
                    var withName5_4 = name + '.' + wordShow4;
                    var withName6_4 = name + '_' + wordShow4;
                    var wordWithNameContainer1 = document.createElement('div');
                    wordWithNameContainer1.className = "col-lg-4 col-12 mb-4 mb-lg-0";
                    wordWithNameContainer1.id = 'wordWithName1';
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
                    var wordWithNameContainer2 = document.createElement('div');
                    wordWithNameContainer2.className = "col-lg-4 col-12 mb-4 mb-lg-0";
                    wordWithNameContainer2.id = 'wordWithName2';
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
                    var wordWithNameContainer3 = document.createElement('div');
                    wordWithNameContainer3.className = "col-lg-4 col-12 mb-4 mb-lg-0";
                    wordWithNameContainer3.id = 'wordWithName3';
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
                    var wordWithNameContainer4 = document.createElement('div');
                    wordWithNameContainer4.className = "col-lg-4 col-12 mb-4 mb-lg-0";
                    wordWithNameContainer4.id = 'wordWithName4';
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

                    document.querySelector('.row.justify-content-left').appendChild(famousWordContainer);
                    document.querySelector('.row.justify-content-left').appendChild(descrip_bottom);
                    document.querySelector('.row.justify-content-left').appendChild(additionalInputArea);
                    if (button === buttons[3]) {
                        document.querySelector('.row.justify-content-left').appendChild(wordWithNameContainer3);
                    } else {
                        document.querySelector('.row.justify-content-left').appendChild(wordWithNameContainer1);
                        document.querySelector('.row.justify-content-left').appendChild(wordWithNameContainer2);
                        document.querySelector('.row.justify-content-left').appendChild(wordWithNameContainer3);
                        document.querySelector('.row.justify-content-left').appendChild(wordWithNameContainer4);
                    }
                    var rowElements = document.querySelectorAll('.row.justify-content-left');
                    rowElements.forEach(function(rowElement) {
                        rowElement.style.display = 'flow-root';
                    });
                    document.querySelectorAll('.copy-button').forEach(function(button) {
                        button.addEventListener('click', async function(event) {
                            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
                            await navigator.clipboard.writeText(textToCopy);
                            alert('"' + textToCopy + '" ' + "가 복사되었습니다.");
                        });
                    });
                    };
            });
            
            var resetButton = additionalInputArea.querySelector('button[type="reset"]');
            resetButton.addEventListener('click', function(event) {
                event.preventDefault();
                var rowElements = document.querySelectorAll('.row.justify-content-left');
                    rowElements.forEach(function(rowElement) {
                        rowElement.style.display = 'flex';
                    });
                for (let i = 1; i <= 4; i++) {
                    var existingWordWithName = document.getElementById('wordWithName' + i);
                    if (existingWordWithName) {
                        existingWordWithName.remove();
                    }
                }
                var existingFamousWords = document.getElementById('famousWC');
                if (existingFamousWords) {
                    existingFamousWords.remove();
                }
                if (existingAdditionalInputArea) {
                    existingAdditionalInputArea.remove();
                }
                var existingDescript = document.getElementById('description-bottom');
                if (existingDescript) {
                    existingDescript.remove();
                }
                descrip_bottom.innerHTML = `
                <p class="warning" style="margin-top:2rem;margin-bottom:0;">이름은 20자 이하의 영어(혹은 숫자)로 입력하세요.</p>
                <p class="description">이름을 입력하고 '추가'를 선택 시 새 아이디를 추천합니다</p>
                `;
                var additionalNameInput = additionalInputArea.querySelector('#additionalName');
                additionalNameInput.value = '';
                document.querySelector('.row.justify-content-left').appendChild(famousWordContainer);
                document.querySelector('.row.justify-content-left').appendChild(descrip_bottom);
                document.querySelector('.row.justify-content-left').appendChild(additionalInputArea);
            })

        });
    });
}