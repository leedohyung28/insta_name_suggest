function emoticonGenerator() {
    var dropdownArea = document.querySelector('.featured-section .container .row');
    dropdownArea.innerHTML = '';  // dropdownArea의 내용 초기화
    dropdownArea.style.justifyContent = '';

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
                            <i class="bi bi-files"></i>
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
        document.querySelector('.row.justify-content-left').appendChild(emotionContainer);
    }
    
    document.querySelectorAll('.copy-button').forEach(function(button) {
        button.addEventListener('click', async function(event) {
            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
            await navigator.clipboard.writeText(textToCopy);
            alert('"' + textToCopy + '" ' + "가 복사되었습니다.");
        });
    });
}