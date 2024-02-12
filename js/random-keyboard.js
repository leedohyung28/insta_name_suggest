var result = ''

function randKeyboard() {
    var dropdownArea = document.querySelector('.featured-section .container .row');
    dropdownArea.innerHTML = `
    <p class="warning">키보드를 자판을 눌러보세요</p>
    `;  // dropdownArea의 내용 초기화
    dropdownArea.style.justifyContent = 'center'; 

    var img = document.createElement('img');
    img.src = './images/keyboard.jpg';
    img.alt = 'Keyboard Image';
    img.className = 'keyboard';
    img.useMap = '#image-map'
    img.style.width = 'auto';
    dropdownArea.appendChild(img);

    var form = document.createElement('form');
    form.className = "custom-form mt-4 pt-2 mb-lg-0 mb-5";
    form.innerHTML = `
    <div class="input-group input-group-lg mt-2 d-flex flex-row flex-wrap" style="justify-content:center;">
    <div class="col-12 col-sm-6 col-md-4 mb-4">
        <div class="d-flex flex-row mb-4 align-items-center" style="justify-content:center;">
            <p class="randKeyboard" style="color:var(--white-color);">숫자 포함</p>
            <input type="checkbox" id="checkbox" style="width: 20px; height: 20px;">
            <button onclick="addDot()" id="dotUnderbar">. 추가</button>
            <button onclick="addUnderbar()" id="dotUnderbar">_ 추가</button>
        </div>
        <div class="d-flex flex-row align-items-center" style="justify-content:center;">
            <p class="randKeyboard" style="color:var(--white-color); text-wrap:nowrap;">글자 개수</p>
            <div class="word-nums d-flex flex-row align-items-center">
                <button onclick="decreaseValue()" id="decrease">-</button>
                <input type="number" class="form-control" id="number" value="1" min="1" max="20" readonly>
                <button onclick="increaseValue()" id="increase">+</button>
            </div>
        </div>
    </div>
    <div class="col-6 col-sm-3 col-md-2 d-flex flex-column align-items-center">
        <button type="button" class="h-100" id="copyButton" style="width: 90%;">
        <i class="bi bi-files"></i>
        Copy</button>
    </div>
    <div class="col-6 col-sm-3 col-md-2 d-flex flex-column align-items-center">
        <button type="button" class="h-100" id="resetButton" style="width: 90%;">
        <i class="bi bi-arrow-repeat"></i>
        Reset</button>
    </div>
    <div class="col-12 col-md-10 d-flex flex-column mt-2 align-items-center">
        <p class="mb-1" style="color:var(--white-color);">결과</p>
        <input type="text" class="form-control" id="result" style="width: 90%; text-align:center" readonly value="@${result}">
    </div>
</div>

    `;
    dropdownArea.appendChild(form);
    result = '@' + result;
    document.getElementById('result').value = result;

    document.getElementById('copyButton').addEventListener('click', function(){
        var copyText = document.getElementById("result");
        copyText.value = copyText.value.substring(1);
        copyText.select();
        document.execCommand("copy");   
        var copiedText = copyText.value;
        alert('"' + copiedText + '" ' + "가 복사되었습니다.");
        copyText.value = '@' + copyText.value;
    });

    document.getElementById('resetButton').addEventListener('click', function(){
        result = '@';
        document.getElementById('result').value = result;
    });
}

function addResult(alt) {
    event.preventDefault();

    var len = alt.length;
    var repeat = parseInt(document.getElementById('number').value);
    var includeNumbers = document.getElementById('checkbox').checked;
    for(var i=0; i<repeat; i++){
        var index = Math.floor(Math.random() * len);
        var char = alt.charAt(index);
        if (!includeNumbers && !isNaN(char)) {
            i--;
            continue;
        }
        result += char;
    }
    if (result.length > 21) { 
        alert('20자를 넘길 수 없습니다.');
        return;
    }
    document.getElementById('result').value = result;
}

function decreaseValue() {
    event.preventDefault();
    var number = document.getElementById('number');
    var value = parseInt(number.value, 10);
    value = isNaN(value) ? 0 : value;
    value < 2 ? value = 2 : '';
    value--;
    number.value = value;
}

function increaseValue() {
    event.preventDefault();
    var number = document.getElementById('number');
    var value = parseInt(number.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    if (value > 20) {
        alert('20자를 넘길 수 없습니다.');
        return; 
    }
    number.value = value;
}

function addDot() {
    event.preventDefault();
    result += '.';
    if (result.length > 21) {
        alert('20자를 넘길 수 없습니다.');
        return; 
    }
    document.getElementById('result').value = result;
}

function addUnderbar() {
    event.preventDefault();
    result += '_';
    if (result.length > 21) {
        alert('20자를 넘길 수 없습니다.');
        return; 
    }
    document.getElementById('result').value = result;
}