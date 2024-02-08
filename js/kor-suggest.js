document.querySelector('form.custom-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    var containers = document.querySelectorAll('.row.justify-content-center .col-lg-4.col-12.mb-4.mb-lg-0');
    containers.forEach(function(container) {
        container.remove();
    }); // 기존의 container 삭제

    var nameInput = document.querySelector('#korName').value.split(' ').join(''); // 입력 받은 이름
    var result = splitAll(nameInput);
    console.log(nameInput);

    fetch(`http://127.0.0.1:8080/translate?text=${encodeURIComponent(nameInput)}`)
        .then(response => response.text())
        .then(translatedText => {
            console.log(translatedText); // 번역된 텍스트 출력
        });

    document.querySelectorAll('.copy-button').forEach(function(button) {
        button.addEventListener('click', async function(event) {
            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
            await navigator.clipboard.writeText(textToCopy);
            alert('복사되었습니다');
        });
    });
});

function splitString(s, parts = 1) {
    const length = s.length;
    if(parts === 1) {
        return [[s]];
    } else if(length === parts) {
        return [s.split('')];
    } else {
        let result = [];
        for(let i = 1; i < length - parts + 2; i++) {
            let left = s.substring(0, i);
            let right = s.substring(i);
            for(let rest of splitString(right, parts - 1)) {
                result.push([left].concat(rest));
            }
        }
        return result;
    }
}
function splitAll(s) {
    const length = s.length;
    let result = [];
    for(let parts = 1; parts <= length; parts++) {
        result = result.concat(splitString(s, parts));
    }
    return result;
}