function emoticonGenerator() {
    var dropdownArea = document.querySelector('.featured-section .container .row');
    dropdownArea.innerHTML = '';  // dropdownArea의 내용 초기화
    dropdownArea.style.justifyContent = '';

    var emotionLists = [
        ['owo', 'Expectation'],
        ['0w0', 'Expectation'],
        ['.w.', 'Expectation'],
        ['o3o', 'Kiss'],
        ['uwu', 'Shy'],
        ['qq', 'Cry'],
        ['q_q', 'Cry'],
        ['q.q', 'Sadness'],
        ['v.v', 'Sadness'],
        ['y.y', 'Sadness'],
        ['tnt', 'Sadness'],
        ['._.', 'Embarrassment'],
        ['x_x', 'Stunned'],
        ['x.x', 'Stunned'],
        ['t.t', 'Dizzy'],
        ['o_o', 'Surprised'],
        ['0_0', 'Surprised'],
        ['0_o', 'Surprised'],
        ['o_0', 'Surprised'],
        ['o7', 'Yes Sir'],
        ['d._.b', 'Headphone'],
        ['orz', 'Pray'],
        ['._.zzz', 'Sleep'],
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
            alert('"' + textToCopy + '" ' + "is copied");
        });
    });
}