function combineCurrentTime() {
    var dropdownArea = document.querySelector('.featured-section .container .row');
    dropdownArea.innerHTML = `
    <p class="description">Current time is used to Add</p>
    `;  // dropdownArea의 내용 초기화
    dropdownArea.style.justifyContent = '';
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var hoursTwelve = hours;
    var ampm = 'am';
    if (hours>=12) {
        ampm = 'pm'
        if (hours>12) {
            hoursTwelve = hours - 12;
        }
    }
    else if (hours===0) {
        hoursTwelve = 12;
    }
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    hoursTwelve = String(hoursTwelve).padStart(2, '0');
    console.log(hours, minutes, ampm, hoursTwelve);

    var inputArea = document.createElement('div')
    inputArea.innerHTML = `
    <form method="get" class="custom-form mt-4 pt-2 mb-lg-0 mb-1" role="search">
                                <div class="input-group input-group-lg">
                                    <span class="input-group-text bi-search" id="basic-addon1">
                                    </span>
                                    <input name="additionalName" type="eng_search" class="form-control" id="additionalName" placeholder="Name (or Nickname)" aria-label="추천">
                                    <button type="submit" class="form-control" style="background-color:var(--custom-btn-bg-color); color:var(--white-color);">Add</button>
                                    <button type="reset" class="form-control" style="background-color:var(--dark-color); color:var(--white-color);">Reset</button>
                                </div>
                            </form>
    `;
    document.querySelector('.row.justify-content-left').appendChild(inputArea);

    var oldDescrip = document.querySelector('.description-bottom');
    if (oldDescrip) {
        oldDescrip.remove();
    }
    var descrip_bottom = document.createElement('div')
    descrip_bottom.className = 'description-bottom';
    descrip_bottom.innerHTML = `
    <p class="warning" style="margin-bottom:0;margin-top:0;">Character must be 15 characters or less.</p>
    <p class="description" style="margin-bottom:2.5rem;">We recommend more if you put your name and click 'Add'</p>
    `;
    document.querySelector('.row.justify-content-left').appendChild(descrip_bottom);

    var fullTimeCombine1 = hoursTwelve + minutes + ampm;
    var fullTimeCombine2 = hoursTwelve + '.' + minutes + '_' + ampm;
    var fullTimeCombine3 = hoursTwelve + ampm + minutes;
    var fullTimeCombine4 = hoursTwelve + ampm + '.' + minutes;
    var fullTime = document.createElement('div');
    fullTime.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    fullTime.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Using based on 12-hour!</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${fullTimeCombine1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${fullTimeCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${fullTimeCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>       
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${fullTimeCombine4}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>            
                </div>
            </div>
        </div>
    `;
    document.querySelector('.row.justify-content-left').appendChild(fullTime);

    var twofourTimeCombine1 = hours + minutes;
    var twofourTimeCombine2 = hours + '.' + minutes;
    var twofourTimeCombine3 = hours + '_' + minutes;
    var twofourContainer = document.createElement('div');
    twofourContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
    twofourContainer.innerHTML = `
        <div class="custom-block bg-white shadow-lg">
            <div class="d-flex">
                <div>
                    <h5 class="mb-2">Using based on 24-hour!</h5>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${twofourTimeCombine1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${twofourTimeCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${twofourTimeCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>          
                </div>
            </div>
        </div>
    `;
    document.querySelector('.row.justify-content-left').appendChild(twofourContainer);

    var rowElements = document.querySelectorAll('.row.justify-content-left');

            rowElements.forEach(function(rowElement) {
                rowElement.style.display = 'flex';
            });

    var addButton = inputArea.querySelector('button[type="submit"]');
    addButton.addEventListener('click', function(event) {
        event.preventDefault();
        var additionalName = inputArea.querySelector('#additionalName').value.toLowerCase().split(' ').join('');
        var isAlphanumeric = /^[a-z0-9\s]*$/i.test(additionalName);
        var isValidLength = additionalName.length <= 15;

        if (!isAlphanumeric || !isValidLength) {
            alert("Character must be 15 characters or less.");
            return;
        }
        if (additionalName) {
            var containers = document.querySelectorAll('.row.justify-content-left .col-lg-4.col-12.mb-4.mb-lg-0');
            containers.forEach(function(container) {
                container.remove();
            }); // 기존의 container 삭제

            var existingDescript = document.getElementById('description-bottom');
            if (existingDescript) {
                existingDescript.remove();
            }
            descrip_bottom.innerHTML = `
            <p class="description" style="margin-bottom:2.5rem;">You can reset by click 'Reset'</p>
            `;
            document.querySelector('.row.justify-content-left').appendChild(descrip_bottom);

            var withNameCombine1 = additionalName + '.' + hoursTwelve + minutes + ampm;
            var withNameCombine2 = hoursTwelve + '.' + minutes + ampm + '_' + additionalName;
            var withNameCombine3 = hoursTwelve + ampm + minutes + additionalName;
            var withNameCombine4 = additionalName + '.' + hoursTwelve + ampm + '.' + minutes;
            var withNameContainer = document.createElement('div');
            withNameContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
            withNameContainer.innerHTML = `
                <div class="new-custom-block bg-white shadow-lg">
                    <div class="d-flex">
                        <div>
                            <h5 class="mb-2" style="width:310px;">Using 12-hour with name!</h5>
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withNameCombine1}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withNameCombine2}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withNameCombine3}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>       
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withNameCombine4}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>            
                        </div>
                    </div>
                </div>
            `;
            document.querySelector('.row.justify-content-left').appendChild(withNameContainer);

            var withNameTwoFourCombine1 = additionalName + '_' + hours + minutes;
            var withNameTwoFourCombine2 = hours + minutes + '_' + additionalName;
            var withNameTwoFourCombine3 = hours + '.' + minutes + '.' + additionalName;
            var withNameTwoFourCombine4 = hours + '_' + minutes + '_' + additionalName;
            var withNameTwoFourContainer = document.createElement('div');
            withNameTwoFourContainer.className = "col-lg-4 col-12 mb-4 mb-lg-0";
            withNameTwoFourContainer.innerHTML = `
                <div class="new-custom-block bg-white shadow-lg">
                    <div class="d-flex">
                        <div>
                            <h5 class="mb-2" style="width:310px;">Using 24-hour with name!</h5>
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withNameTwoFourCombine1}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withNameTwoFourCombine2}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>   
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withNameTwoFourCombine3}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>        
                            <div class="d-flex justify-content-between align-items-center" style="width: 100%;margin-bottom:10px">
                        <p class="mb-0" style="font-size:14px;">@${withNameTwoFourCombine4}</p>
                                <button type="copy" class="copy-button">
                                    <i class="bi bi-files"></i>
                                    Copy
                                </button>
                            </div>     
                        </div>
                    </div>
                </div>
            `;
            document.querySelector('.row.justify-content-left').appendChild(withNameTwoFourContainer);

            var rowElements = document.querySelectorAll('.row.justify-content-left');

            rowElements.forEach(function(rowElement) {
                rowElement.style.display = 'flow-root';
            });
        }
    })

    var resetButton = inputArea.querySelector('button[type="reset"]');
    resetButton.addEventListener('click', function(event) {
        event.preventDefault();
        var additionalNameInput = inputArea.querySelector('#additionalName');
        additionalNameInput.value = '';
        var containers = document.querySelectorAll('.row.justify-content-left .col-lg-4.col-12.mb-4.mb-lg-0');
            containers.forEach(function(container) {
                container.remove();
        }); // 기존의 container 삭제
        rowElements.forEach(function(rowElement) {
            rowElement.style.display = 'flex';
        });
        var existingDescript = document.getElementById('description-bottom');
        if (existingDescript) {
            existingDescript.remove();
        }
        descrip_bottom.innerHTML = `
        <p class="warning" style="margin-bottom:0;margin-top:0;">Character must be 15 characters or less.</p>
        <p class="description" style="margin-bottom:2.5rem;">We recommend more if you put your name and click 'Add'</p>
        `;
        document.querySelector('.row.justify-content-left').appendChild(descrip_bottom);
        document.querySelector('.row.justify-content-left').appendChild(fullTime);
        document.querySelector('.row.justify-content-left').appendChild(twofourContainer);
    })


    document.querySelectorAll('.copy-button').forEach(function(button) {
        button.addEventListener('click', async function(event) {
            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
            await navigator.clipboard.writeText(textToCopy);
            alert('"' + textToCopy + '" ' + "is copied.");
        });
    });


}