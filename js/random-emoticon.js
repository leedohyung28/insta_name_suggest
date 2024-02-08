function emoticonGenerator() {
    var dropdownArea = document.querySelector('.featured-section .container .row');
    dropdownArea.innerHTML = '';  // dropdownArea의 내용 초기화


    // var additionalInputArea = document.createElement('div')
    // additionalInputArea.id = 'additionalInput'; // 고유한 id값 설정
    // additionalInputArea.innerHTML = `
    // <form method="get" class="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
    //         <div class="input-group input-group-lg">
    //         <span class="input-group-text bi-search" id="basic-addon1">
    //         </span>
    //         <input name="additionalName" type="eng_search" class="form-control" id="additionalName" placeholder="추가할 이름 혹은 별명" aria-label="추천">
    //         <button id="add" type="button" class="form-control">추가</button>
    //         <button type="reset" class="form-control" style="background-color:black;">Reset</button>
    //     </div>
    // </form>
    // `;

    var emotionLists = [
        ['owo', '기대'],
        ['0w0', '기대'],
        ['.w.', '기대'],
        ['o3o', '뽀뽀'],
        ['uwu', '부끄'],
        ['qq', '눈물'],
        ['q_q', '눈물'],
        ['q.q', '슬픔'],
        ['v.v', '슬픔'],
        ['y.y', '슬픔'],
        ['tnt', '슬픔'],
        ['._.', '민망'],
        ['x_x', '기절'],
        ['x.x', '기절'],
        ['t.t', '어질'],
        ['o_o', '놀람'],
        ['0_0', '놀람'],
        ['0_o', '놀람'],
        ['o_0', '놀람'],
        ['o7', '충성'],
        ['d._.b', '헤드폰'],
        ['orz', '기도'],
        ['._.zzz', '수면'],
    ]
    var emotionsGroupedByDescription = {};
    emotionLists.forEach(function(emotion) {
        if (!emotionsGroupedByDescription[emotion[1]]) {
            emotionsGroupedByDescription[emotion[1]] = [];
        }
        emotionsGroupedByDescription[emotion[1]].push(emotion[0]);
    });

    for (var description in emotionsGroupedByDescription) {
        var emotionContainer = document.createElement('div');
        emotionContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
        emotionContainer.id = 'emotionContainer';

        var html = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <div class="d-flex justify-content-start align-items-start">
                        <h5 class="mb-2">※ ${description}</h5>
                    </div>
        `;
        emotionsGroupedByDescription[description].forEach(function(emotion) {
            html += `
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${emotion}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-share"></i>
                            Copy
                        </button>
                    </div>
            `;
        });
        html += `
                </div>
            </div>
        </div>
        `;
        emotionContainer.innerHTML = html;
        document.querySelector('.row.justify-content-center').appendChild(emotionContainer);
    }
    
    document.querySelectorAll('.copy-button').forEach(function(button) {
        button.addEventListener('click', async function(event) {
            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
            await navigator.clipboard.writeText(textToCopy);
            alert('복사되었습니다');
        });
    });
}