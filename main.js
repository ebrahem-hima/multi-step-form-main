// Switch for sites 
let content = document.querySelector("#content")
let select = document.querySelector("#select")
let pick = document.querySelector("#pick")
let finish = document.querySelector("#finish")
let thank = document.querySelector("#thank")
let links = document.querySelectorAll("nav a")
let nav = document.querySelectorAll("nav")
let contentNext = document.querySelector(".content .next")
let nextTwo = document.querySelector(".nextTwo")
let nextThree = document.querySelector(".nextThree")
let nextFour = document.querySelector(".nextFour")

let timeOfArcade = document.querySelector(".timeofarcade")
let finishName = document.querySelector(".finish-name")

// Choose Price
// Step 2 select
let choosePrice = document.querySelectorAll(".choose-price")
let chooseName = document.querySelector(".choose-name")
let getChoosePrice = document.querySelector(".getchoose-price")
let getChooseName = document.querySelectorAll(".getchoose-name")
let checkBox = document.querySelector(".toggle-checkbox")
let toggleSwitch = document.querySelector(".toggle-switch")

// Choose Box
let choose = document.querySelectorAll(".choose");
let boxDiv = document.querySelector(".select-plan .plans .boxs")
let activeDiv = null
let free = document.querySelectorAll(".choose .free")
let pickName = document.querySelectorAll(".pick-name")
let pickPrice = document.querySelectorAll(".pick-price")
let pickChooseName = document.querySelector(".pickchoose-name")
let pickChoosePrice = document.querySelector(".pickchoose-price")

let boxAll = document.querySelectorAll(".pick-content .box");
let check = document.querySelectorAll(".check")
let step2 = document.querySelector(".step2")
let change = document.querySelector(".change")

let priceTotal = document.querySelector(".price-total")

// inputs
let inputName = document.querySelector(".input-text")
let inputEmail = document.querySelector(".input-email")
let inputNumber = document.querySelector(".input-number")

let requiredName = document.querySelector(".requiredname")
let requiredNumber = document.querySelector(".requirednumber")
let requiredEmail = document.querySelector(".requiredemail")

let clash = document.querySelectorAll(".clash")
let clashTwo = document.querySelectorAll(".clash2")

let help = document.querySelector(".help")
let helpNum = document.querySelector(".helpnum")
let helpChoose = document.querySelector(".helpchoose")

let span = document.querySelectorAll(".span")
let spanTwo = document.querySelectorAll(".span2")


let backOne = document.querySelector(".backone")
let backTwo = document.querySelector(".backtwo")
let backThree = document.querySelector(".backthree")

let boxTwo;
let mark;
let value;



let dataPro = []

choose.forEach((box) => {
    box.addEventListener("click", function() {
        helpChoose.style.cssText = 'display: none'
        const chooseName = this.querySelector(".choose-name");
        const choosePrice = box.querySelector(".choose-price")
        const price = choosePrice.textContent;
        value = price
        if (chooseName) {
            const name = chooseName.textContent;
            finishName.innerHTML = name;
    }
    getChoosePrice.innerHTML = `$` + value + mark
    if (activeDiv !== null) {
        activeDiv.style.border = "";
    }
    activeDiv = this;
    this.style.border = "2px solid hsla(243, 100%, 62%, 0.616)";
    // nextTwoClick()
    CountValue()
    });
});

mark = '/mo'
if (toggleSwitch) {
    toggleSwitch.onclick = function() {
        if (checkBox.checked === false) {
            finishName.innerHTML = ''
            mark = '/yr'
            // TimeArcade = Yearly
            timeOfArcade.innerHTML = 'Yearly';
            // to put 2 months free
            free.forEach((fr)=> {
                fr.style.cssText = 'display: block !important'
            })
            // choosePrice price
            choosePrice[0].textContent = 90;
            choosePrice[1].textContent = 120;
            choosePrice[2].textContent = 150;
            clash.forEach((cl)=> {
                cl.replaceChildren('/yr')
            })
            // Site 3 box
            // price of boxs (Site3)
            pickPrice[0].textContent = 10;
            pickPrice[1].textContent = 20;
            pickPrice[2].textContent = 20;
            clashTwo.forEach((cl2)=> {
                // to change clash for /yr
                cl2.replaceChildren('/yr')
            })
            // to remove border form box
            activeDiv.style.border = "";
        } else {
            finishName.innerHTML = ''
                mark = '/mo'
                timeOfArcade.innerHTML = 'Monthly';
                // to hide 2 months free
                free.forEach((fr)=> {
                    fr.style.cssText = 'display: none !important'
                })
                // choosePrice price
                choosePrice[0].textContent = 9;
                choosePrice[1].textContent = 12;
                choosePrice[2].textContent = 15;
                    clash.forEach((cl)=> {
                        cl.replaceChildren('/mo')
                    })
                pickPrice[0].textContent = 1;
                pickPrice[1].textContent = 2;
                pickPrice[2].textContent = 2;
                    clashTwo.forEach((cl2)=> {
                        // to change clash for /mo
                        cl2.replaceChildren('/mo')
                    })
                // End change value of box
                activeDiv.style.border = "";
            }
        }
    }

function validNumber() {
    let regexNum = /^(?!1\s+\d{3}\s+\d{3}\s+\d{4}$).*/
    let valueNum = inputNumber.value;
    if (!regexNum.test(valueNum) || inputNumber.value < 5) {
        helpNum.style.cssText = 'display: block;'
        helpNum.innerHTML = 'You Should to write at least 5 numbers'
        helpNum.style.color = 'red'
        return false
    } else {
        helpNum.style.cssText = 'display: block;'
        helpNum.innerHTML = 'Good'
    }
    if (valueNum.length > 11) {
        helpNum.style.cssText = 'display: block;'
        helpNum.innerHTML = 'The phone number should not have more than 11 digits'
        helpNum.style.color = 'red'
        return false;
    }
    return true
}

function valid() {
    // let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    let regex = /^[a-zA-Z0-9._%+-]+@(gmail|lorem).com$/
    let value = inputEmail.value;
    if (!regex.test(value)) {
        help.style.cssText = 'display: block;'
        help.innerHTML = 'You Should to write email like this: Name@(gmail Or lorem).com'
        help.style.color = 'red'
        return false
    } else {
        help.style.cssText = 'display: block;'
        help.innerHTML = 'Good'
        return true
    }
}

links.forEach((link) => {
    link.addEventListener('click', () => {
        links.forEach((link) => {
        link.classList.remove('active');
        });
    // link.classList.add('active');
    });
});

let stepOneContent = document.querySelector(".step-one")
let stepTwoSelect = document.querySelector(".steptwo-select")
let stepThreePick = document.querySelector(".stepthree-pick")
let stepFourFinish = document.querySelector(".stepfour-finish")

content.style.cssText = 'display: flex !important;'
select.style.cssText = 'display: none !important;'
pick.style.cssText = 'display: none !important;'
finish.style.cssText = 'display: none !important;'
thank.style.cssText = 'display: none !important;'

backOneClick()
backTwoClick()
backThreeClick()
nextTwoClick()
nextThreeClick()
nextFourClick()
changeBox()

function backOneClick() {
    backOne.onclick = function() {
        links.forEach((link) => {
            link.classList.remove('active');
        });
        content.style.cssText = 'display: flex !important;'
        stepOneContent.classList.add("active")
        select.style.cssText = 'display: none !important;'
        pick.style.cssText = 'display: none !important;'
        finish.style.cssText = 'display: none !important;'
    }
}

function backTwoClick() {
    backTwo.onclick = function() {
        finishName.innerHTML = ''
        links.forEach((link) => {
            link.classList.remove('active');
        });
    select.style.cssText = 'display: flex !important;'
    stepTwoSelect.classList.add("active")
    content.style.cssText = 'display: none !important;'
    pick.style.cssText = 'display: none !important;'
    finish.style.cssText = 'display: none !important;'
}
}

function changeBox() {
    change.onclick = function() {
    select.style.cssText = 'display: flex !important;'
    content.style.cssText = 'display: none !important;'
    pick.style.cssText = 'display: none !important;'
    finish.style.cssText = 'display: none !important;'
    links.forEach((link) => {
        link.classList.remove('active');
    });
    stepTwoSelect.classList.add("active")
    localStorage.clear();
    localStorage.removeItem("product"); 
    step2.innerHTML = ''
    finishName.innerHTML = ''
    boxAll.forEach((box) => {
        box.classList.remove('checkedDiv')
        box.querySelector(".check").checked = false
    });
    dataPro = []

}
}

function nextTwoClick() {
    nextTwo.onclick = function(e) {
        if (finishName.innerHTML !== '') {
        if (activeDiv.style.border = "") {
            e.preventDefault();
        }
        pick.style.cssText = 'display: flex !important;'
        content.style.cssText = 'display: none !important;'
        select.style.cssText = 'display: none !important;'
        finish.style.cssText = 'display: none !important;'
        links.forEach((link) => {
            link.classList.remove('active');
        });
        stepThreePick.classList.add("active")
        getChoosePrice.style.cssText = 'color: var(--button-background-color) !important'
    } else {
        helpChoose.style.cssText = 'display: block'
    }
}
}

function backThreeClick() {
    backThree.onclick = function() {
        pick.style.cssText = 'display: flex !important;'
        content.style.cssText = 'display: none !important;'
        select.style.cssText = 'display: none !important;'
        finish.style.cssText = 'display: none !important;'
        links.forEach((link) => {
            link.classList.remove('active');
        });
        stepThreePick.classList.add("active")
        localStorage.clear();
        localStorage.removeItem("product"); 
        step2.innerHTML = ''
        priceTotal.innerHTML = ''
        clickOn = 0
        boxAll.forEach((box) => {
            box.classList.remove('checkedDiv')
            box.querySelector(".check").checked = false
        });
        dataPro = []
    }
}

function nextThreeClick() {
    nextThree.onclick = function() {
    finish.style.cssText = 'display: flex !important;'
    content.style.cssText = 'display: none !important;'
    select.style.cssText = 'display: none !important;'
    pick.style.cssText = 'display: none !important;'
    links.forEach((link) => {
        link.classList.remove('active');
    });
    stepFourFinish.classList.add("active")
}
}

function nextFourClick() {
    nextFour.onclick = function() {
    thank.style.cssText = 'display: flex !important;'
    finish.style.cssText = 'display: none !important;'
    content.style.cssText = 'display: none !important;'
    select.style.cssText = 'display: none !important;'
    pick.style.cssText = 'display: none !important;'
    links.forEach((link) => {
        link.classList.remove('active');
    });
    stepFourFinish.classList.add("active")
}
}

// Js Of Step1 

if (contentNext) {
    contentNext.onclick = function(e) {
        // Start input.value
        // Check inputName
        e.preventDefault();
        if (inputName.value === "") {
            inputName.style.cssText += 'border: 1px solid red;';
            requiredName.style.cssText = 'display:block;';
            inputName.onkeyup = function() {
                if (inputName.value !== '') {                      
                    requiredName.style.cssText = 'display:none;';
                    inputName.style.cssText += 'border: 1px solid #ccc;outline: none;box-shadow: none;'
                }
            }
            return;
        } else {
            inputName.style.cssText = 'border: 1px solid #ccc;';
            requiredName.style.cssText = 'display:none;';
        }
    
        // Check inputEmail
        if (inputEmail.value === "") {
            inputEmail.style.cssText += 'border: 1px solid red;';
            requiredEmail.style.cssText = 'display:block;';
            inputEmail.onkeyup = function() {
                if (inputEmail.value !== '') {
                    requiredEmail.style.cssText = 'display:none;';
                    inputEmail.style.cssText += 'border: 1px solid #ccc;'
                    help.style.cssText = 'display: none;'
                } else {
                    help.style.cssText = 'display: block;'
                    help.innerHTML = 'Good'
                }
            }
            return;
        } else {
            inputEmail.style.cssText = 'border: 1px solid #ccc;';
            requiredEmail.style.cssText = 'display:none;';
        }
    
        // Check inputNumber
        if (inputNumber.value === "" && inputName.value.length === 11) {
            inputNumber.style.cssText += 'border: 1px solid red;';
            requiredNumber.style.cssText = 'display:block;';
            inputNumber.onkeyup = function() {
                if (inputNumber.value !== '') {
                    requiredNumber.style.cssText = 'display:none;';
                    inputNumber.style.cssText += 'border: 1px solid #ccc;'
                    helpNum.style.cssText = 'display: none;'
                }
            }
            return;
        } else {
            inputNumber.style.cssText = 'border: 1px solid #ccc;';
            requiredNumber.style.cssText = 'display:none;';
        }
        // End inputNumber
        // End input.value
    
        // End input.onkeyup
        if (!valid() || !validNumber()) {
            e.preventDefault();
            return;
        } 
        // clickNext()
        links.forEach((link) => {
            // link.addEventListener('click', () => {
                links.forEach((link) => {
                link.classList.remove('active');
                });
            // });
        });
        select.style.cssText = 'display: flex !important;'
        stepTwoSelect.classList.add("active")
        content.style.cssText = 'display: none !important;'
        pick.style.cssText = 'display: none !important;'
        finish.style.cssText = 'display: none !important;'
        // Go to step2.html
    }
}

boxAll.forEach((box) => {
    box.addEventListener("click", function() {
            boxTwo = box
            this.querySelector(".check").checked = !this.querySelector(".check").checked;
            this.classList.toggle("checkedDiv");
            if (this.querySelector(".check").checked) {
                let data = {
                title: boxTwo.children[1].children[0].textContent,
                pricePickBox: boxTwo.children[2].children[1].textContent,
                pricePickBoxTwo: `+` + boxTwo.children[2].textContent
            }
            dataPro.push(data)
            localStorage.setItem("product", JSON.stringify(dataPro))
        } else {
            const index = dataPro.findIndex(item => item.title === boxTwo.children[1].children[0].textContent);
            if (index !== -1) {
                dataPro.splice(index, 1);
                localStorage.setItem("product", JSON.stringify(dataPro));
            }
        }
        showData()
    });
});
// check.forEach((chek) => {
//     chck.addEventListener("click", function() {

//     })
// })

function showData() {
    let table = ""
    for (let i = 0; i < dataPro.length; i++) {
        table += `
        <div
        class="box d-flex align-items-center justify-content-between p-3 pb-1"
        >
        <div class="info-box">
            <p class="mb-0 pickchoose-name">${dataPro[i].title}</p>
        </div>
        <div class="price pickchoose-price">${dataPro[i].pricePickBoxTwo}</div>
    </div>`
    }
    step2.innerHTML = table
    CountValue()
}

function CountValue() {
    let totalAll;
    const total = dataPro.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.pricePickBox), 0);
    totalAll = +value + total
    priceTotal.innerHTML = `+` + `$` + totalAll + mark
}