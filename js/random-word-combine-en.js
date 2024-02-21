function addDropdownButtons() {
    var dropdownArea = document.querySelector('.featured-section .container .row');
    dropdownArea.innerHTML = `
    `; // dropdownArea의 내용 초기화
    dropdownArea.style.justifyContent = '';
    
    var title = document.createElement('h6');
    title.innerText = 'Choose topics of words';
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
    dropdownButton1.innerText = 'Positive';

    var dropdownMenu1 = document.createElement('ul');
    dropdownMenu1.className = 'dropdown-menu';

    var item0 = createDropdownItem('Positive', dropdownButton1, 1, false);
    var item1 = createDropdownItem('Sentimental', dropdownButton1, 2, false);
    var item2 = createDropdownItem('Personalities', dropdownButton1, 3, false);
    var item3 = createDropdownItem('Naturals', dropdownButton1, 4, false);
    var item4 = createDropdownItem('Animals', dropdownButton1, 5, false);
    var item5 = createDropdownItem('Flowers', dropdownButton1, 6, false);
    var item6 = createDropdownItem('Foods', dropdownButton1, 7, false);
    var item7 = createDropdownItem('Colors', dropdownButton1, 8, false);
    var item8 = createDropdownItem('Characters', dropdownButton1, 9, false);

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
    dropdownButton2.innerText = 'Positive';

    var dropdownMenu2 = document.createElement('ul');
    dropdownMenu2.className = 'dropdown-menu';

    var item0_2 = createDropdownItem('Positive', dropdownButton2, 1, true);
    var item1_2 = createDropdownItem('Sentimental', dropdownButton2, 2, true);
    var item2_2 = createDropdownItem('Personalities', dropdownButton2, 3, true);
    var item3_2 = createDropdownItem('Naturals', dropdownButton2, 4, true);
    var item4_2 = createDropdownItem('Animals', dropdownButton2, 5, true);
    var item5_2 = createDropdownItem('Flowers', dropdownButton2, 6, true);
    var item6_2 = createDropdownItem('Foods', dropdownButton2, 7, true);
    var item7_2 = createDropdownItem('Colors', dropdownButton2, 8, true);
    var item8_2 = createDropdownItem('Characters', dropdownButton2, 9, true);

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
    plusText.style.color = 'var(--white-color)';
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
        ['aromatic', 'aromatic'],
        ['auspicious', 'auspicious (suggesting a positive future)'],
        ['cherish', 'cherish'],
        ['eudaemonic', 'eudaemonic (conductive to happiness)'],
        ['eunoia', 'eunoia (a feeling of goodwill)'],
        ['euphoria', 'euphoria (extreme happiness)'],
        ['felicity', 'felicity (happiness, luck)'],
        ['halcyon', 'halcyon (a happy period in the past)'],
        ['radiant', 'radiant'],
        ['serendipity', 'serendipity'],
        ['sonorous', 'sonorous (having a pleasant sound)'],
        ['xanadu', 'xanadu: (a place that is perfect)'],
        ['zest', 'zest'],
        ['bliss', 'bliss'],
        ['joy', 'joy'],
        ['pleasure', 'pleasure'],
        ['harmony', 'harmony'],
        ['serenity', 'serenity'],
        ['wonder', 'wonder'],
        ['yummy', 'yummy'],
        ['abundance', 'abundance'],
        ['accomplishment', 'accomplishment'],
        ['freedom', 'freedom'],
    ];
    var sentimentalWords = [
        ['aeonian', 'aeonian (eternal)'],
        ['allure', 'allure'],
        ['cooing', 'cooing'],
        ['duclet', 'duclet (sweet)'],
        ['evanescent', 'evanescent (lasting for only a short time)'],
        ['fluffy', 'fluffy'],
        ['idyllic', 'idyllic'],
        ['ineffable', 'ineffable'],
        ['luminous', 'luminous (producing light in the dark)'],
        ['lyrical', 'lyrical'],
        ['mellifluous', 'mellifluous (having a pleasant sound)'],
        ['reminiscent', 'reminiscent'],
        ['serenity', 'serenity'],
        ['fate', 'fate'],
        ['dreamy', 'dreamy'],
        ['exquisite', 'exquisite'],
        ['ideal', 'ideal'],
        ['magnificent', 'magnificent'],
        ['sassy', 'sassy'],
        ['unforgettable', 'unforgettable'],
        ['ambition', 'ambition'],
        ['perseverance', 'perseverance']
    ];
    var personality = [
        ['adorable', 'adorable'],
        ['altruistic', 'altruistic'],
        ['bijou', 'bijou (small but attractive)'],
        ['brilliant', 'brilliant'],
        ['cheery', 'cheery'],
        ['cuddly', 'cuddly'],
        ['elfin', 'elfin'],
        ['erudite', 'erudite'],
        ['ethereal', 'ethereal'],
        ['exquisite', 'exquisite'],
        ['fabulous', 'fabulous'],
        ['glisten', 'glisten'],
        ['luculent', 'luculent'],
        ['lovesome', 'lovesome'],
        ['lucid', 'lucid'],
        ['sapient', 'sapient'],
        ['seraphic', 'seraphic'],
        ['whimsical', 'whimsical'],
        ['winsome', 'winsome'],
        ['witty', 'witty'],
        ['charming', 'charming'],
        ['beautiful', 'beautiful'],
    ];
    var naturalWords = [
        ['afterglow', 'afterglow'],
        ['azure', 'azure'],
        ['crescent', 'crescent'],
        ['droplet', 'droplet'],
        ['galaxy', 'galaxy'],
        ['haze', 'haze'],
        ['iridescent', 'iridescent'],
        ['lucy'],
        ['milkyway', 'milkyway'],
        ['moonlight', 'moonlight'],
        ['starlike', 'starlike'],
        ['stella', 'stella'],
        ['supernova', 'supernova'],
        ['twilight', 'twilight']
    ];
    var animals = [
        ['bunny', 'bunny'],
        ['boar', 'boar'],
        ['fox', 'fox'],
        ['lion', 'lion'],
        ['tiger', 'tiger'],
        ['kangaroo', 'kangaroo'],
        ['panda', 'panda'],
        ['kitty', 'kitty'],
        ['racoon', 'racoon'],
        ['squirrel', 'squirrel'],
        ['vixen', 'vixen'],
        ['goat', 'goa'],
        ['badger', 'badger'],
        ['jaguar', 'jaguar'],
        ['mouse', 'mouse'],
        ['peacock', 'peacock'],
        ['peahen', 'peahen'],
        ['parrot', 'parrot'],
        ['owl', 'owl'],
        ['flamingo','flamingo'],
        ['beaver', 'beaver'],
        ['otter', 'otter'],
        ['penguin', 'penguin'],
        ['terrapin', 'terrapin'],
    ];
    var flowers = [
        ['forsythia', 'forsythia'],
        ['peony', 'peony'],
        ['yulan', 'yulan'],
        ['daffodil', 'daffodil'],
        ['azalea', 'azalea'],
        ['tulip', 'tulip'],
        ['cherryblossom', 'cherryblossom'],
        ['lily', 'lily'],
        ['marigold', 'marigold'],
        ['rose', 'rose'],
        ['carnation', 'carnation'],
        ['camellia', 'camellia'],
        ['cyclamen', 'cyclamen'],
        ['freesia', 'freesia'],
        ['lotus', 'lotus'],
        ['hyacinth', 'hyacinth'],
        ['sunflower', 'sunflower'],
        ['violet', 'violet'],
        ['jasmine', 'jasmine'],
        ['daisy', 'daisy'],
        ['anemone', 'anemone'],
        ['lavender', 'lavender'],
        ['clover', 'clover'],
        ['poppy', 'poppy'],
        ['iris', 'iris'],
        ['peony', 'peony '],
    ];
    var foods = [
        ['apple', 'apple'],
        ['banana', 'banana'],
        ['blueberry', 'blueberry'],
        ['cherry', 'cherry'],
        ['coconut', 'coconut'],
        ['fig', 'fig'],
        ['grape', 'grape'],
        ['lemon', 'lemon'],
        ['mango', 'mango']
        ['peach', 'peach'],
        ['orange', 'orange'],
        ['pineapple', 'pineapple'],
        ['strawberry', 'strawberry'],
        ['bacon', 'bacon'],
        ['sausages', 'sausages'],
        ['salmon', 'salmon'],
        ['tuna', 'tuna'],
        ['avocado', 'avocado'],
        ['ginger', 'ginger'],
        ['garlic', 'garlic'],
        ['tomato', 'tomato'],
        ['soup', 'soup'],
        ['chips', 'chips'],
        ['icecream', 'icecream'],
        ['butter', 'butte'],
        ['cream', 'cream'],
        ['cheese', 'cheese'],
        ['milk', 'milk'],
        ['yoghurt', 'yoghurt'],
        ['cake', 'cake'],
        ['sugar', 'sugar'],
        ['pastry', 'pastry'],
        ['honey', 'honey'],
        ['jam', 'jam'],
        ['pasta', 'pasta'],
        ['rice', 'rice'],
        ['spaghetti', 'spaghetti'],
        ['ketchup', 'ketchup'],
        ['mayo', 'mayo'],
        ['mustard', 'mustard'],
        ['pepper', 'pepper'],
        ['salt', 'salt'],
        ['vinegar', 'vinegar'],
        ['biscuits', 'biscuits'],
        ['chocolate', 'chocolate'],
        ['crisps', 'crisps'],
        ['kimchi', 'kimchi'],
        ['bibimbap', 'bibimbap'],
        ['bulgogi', 'bulgogi'],
    ];
    var colors = [
        ['red', 'red'],
        ['orange', 'orange'],
        ['yellow', 'yellow'],
        ['green', 'green'],
        ['blue', 'blue'],
        ['purple', 'purple'],
        ['black', 'black'],
        ['beige', 'beige'],
        ['coral', 'coral'],
        ['gold', 'gold'],
        ['pink', 'pink'],
        ['indigo','indigo'],
        ['navy', 'navy'],
        ['silver', 'silver'],
        ['violet', 'violet'],
    ];
    var character = [
        ['nick', 'Nick - From "Zootopiz"'],
        ['rapunzel', 'Rapunzel - From "Tangled"'],
        ['elsa', 'Elsa - From "Frozen"'],
        ['anna', 'Anna - From "Frozen"'],
        ['mickey', 'Mickey Mouse'],
        ['minnie', 'Minnie Mouse'],
        ['mario', 'Mario - From "Super Mario"'],
        ['miffy', 'Miffy - From "Miffy and friends"'],
        ['stitch', 'Stitch - From "Lilo & Stitch"'],
        ['pooh', 'Winnie the Pooh'],
        ['thanos', 'Thanos - From Marvel Comics'],
        ['ironman', 'Ironman - From Marvel Comics'],
        ['spiderman', 'Spiderman - From Marvel Comics'],
        ['superman', 'Superman - From DC Comics'],
        ['batman', 'Batman - From DC Comics'],
        ['cinderella', 'Cinderella - From "Cinderella"'],
        ['ariel', 'Ariel - From "The Little Mermaid"'],
        ['jasmine', 'Jasmine  - From "Aladdin"'],
        ['pocahontas', 'Pocahontas - From "Pocahontas"'],
        ['buzz', 'Buzz - From "Toy Story"'],
        ['piglet', 'piglet - From "Winnie the Pooh"'],
        ['woody', 'Woody - From "Toy Story"'],
        ['tweety', 'Tweety - From "Looney Tunes"'],
        ['aladdin', 'Aladdin - From "Aladdin"'],
        ['groot', 'Groot - From Marvel Comics'],
        ['neo', 'Neo - From "The Matrix"'],
        ['harrypotter', 'harrypotter - From "Harry Potter"'],
        ['wolverine', 'Wolverine - From Marvel Comics'],
        ['et', 'E.T> - From "E.T."'],
        ['yoda', 'Yoda - From "Star Wars"'],
        ['gandalf', 'Gandalf - From "The Lord of the Rings"'],
        ['loki', 'Loki - From Marvel Comics'],
        ['darthvader', 'Darthvader - From "Star Wars"'],
        ['joker', 'Joker - From DC Comics'],
        ['sherlock', 'Sherlock Holmes'],
        ['simpson', 'Simpson - From "The Simpsons"'],
        ['garfield', 'Garfield'],
        ['pikachu', 'Pikacuh - From "Pokemon"'],
    ]
    var lists = [positiveWords, sentimentalWords, personality, naturalWords,animals, flowers, foods, colors, character];
    
    var isCheckbox1Checked = false;
    var isCheckbox2Checked = false;
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // 페이지 새로고침 방지

        var oldDescrip = document.querySelector('.description-container');
        if (oldDescrip) {
            oldDescrip.remove();
        }
        var descrip = document.createElement('div')
        descrip.className = 'description-container';
        descrip.innerHTML = `
        <p class="warning" style="margin-bottom:1vh;">You can fix the word you want</p>
        `;

        var containers = document.querySelectorAll('.row.justify-content-left .col-lg-4.col-12.mb-4.mb-lg-0');
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
                    <h6 class="voca-fix-red">Fix</h6>
                    <input type="checkbox" id="checkbox1" style="margin-right:10px; margin-left:2px;" ${isCheckbox1Checked ? 'checked' : ''}>
                        <h5 class="mb-2" style="color:red; text-wrap:nowrap;">※ ${firstDetail}</h5>
                    </div>
                    <div class="d-flex justify-content-start align-items-start">
                    <h6 class="voca-fix-blue">Fix</h6>
                    <input type="checkbox" id="checkbox2" style="margin-right:10px; margin-left:2px;" ${isCheckbox2Checked ? 'checked' : ''}>
                        <h5 class="mb-2" style="color:blue; text-wrap:nowrap;">※ ${secondDetail}</h5>
                    </div>
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${wordsCombine1}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${wordsCombine2}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div>   
                    <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                        <p class="mb-0">@${wordsCombine3}</p>
                        <button type="copy" class="copy-button">
                            <i class="bi bi-files"></i>
                            Copy
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    `;
    document.querySelector('.row.justify-content-left').appendChild(descrip);
    document.querySelector('.row.justify-content-left').appendChild(wordsCombineContainer);
    document.querySelectorAll('.copy-button').forEach(function(button) {
        button.addEventListener('click', async function(event) {
            var textToCopy = event.target.parentElement.querySelector('.mb-0').innerText.slice(1);
            await navigator.clipboard.writeText(textToCopy);    
            alert('"' + textToCopy + '" ' + "is copied");
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