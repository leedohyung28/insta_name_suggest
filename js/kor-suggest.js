document.querySelector('form.custom-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    var containers = document.querySelectorAll('.row.justify-content-center .col-lg-4.col-12.mb-4.mb-lg-0');
    containers.forEach(function(container) {
        container.remove();
    }); // 기존의 container 삭제

    var nameInput = document.querySelector('#korName').value.split(' ').join(''); // 입력 받은 이름
    var result = splitAll(nameInput);
    console.log(result);

    // result.forEach(function(names) {
    //     console.log(names);
    //     var title = names.join('+');
    //     var translatedNames = [];
    
    //     names.forEach(function(name) {
    //         fetch(`https://port-0-insta-name-suggest-abq3c52alsd1wikh.sel5.cloudtype.app:8080/translate?text=${encodeURIComponent(name)}`)
    //             .then(response => response.text())
    //             .then(translatedText => {
    //                 translatedNames.push(translatedText);
                    
    //                 if(translatedNames.length == names.length) {
    //                     var names = translatedNames.join('_');
    
    //                     // 컨테이너 생성
    //                     var translatedContainer = document.createElement('div');
    //                     translatedContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    //                     translatedContainer.innerHTML = `
    //                         <div class="custom-block bg-white shadow-lg">
    //                             <div class="d-flex">
    //                                 <div>
    //                                     <h5 class="mb-2">${title}</h5>
    //                                     <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
    //                                         <p class="mb-0">@${names}</p>
    //                                         <button type="copy" class="copy-button">
    //                                             <i class="bi bi-share"></i>
    //                                             Copy
    //                                         </button>
    //                                     </div>               
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     `;
    //                 }
    //             });
    //     });
    // });
    
    fetch(`https://port-0-insta-name-suggest-abq3c52alsd1wikh.sel5.cloudtype.app:8080/translate?text=${encodeURIComponent(nameInput)}`)
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