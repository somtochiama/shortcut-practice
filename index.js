var main = document.getElementById("main")

const CMD = "Meta"
const CTRL = "Control"
const SHIFT = "Shift"
const ALT = "Alt"


var command = [
    [CMD],
    [CTRL],
    [ALT],
    [SHIFT],
    [CMD, SHIFT],
    [CTRL, SHIFT],
    [ALT, SHIFT],
    [CTRL, "s"],
    [CTRL, "z"],
    [CTRL, "r"],
    [CTRL, "c"],
    [CMD, "/"],
    [CMD, "F"],
    [CTRL, SHIFT, "t"],
    [CMD, "r"],
]

var i = 0;

fillMain()

main.addEventListener("keydown", (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e.key, e.keyCode)
    var current = document.getElementById("focus")
    if (current.innerText == e.key) {
        console.log("found!");
        current.removeAttribute("id")
        current.setAttribute("class", "correct")
        var next = current.nextElementSibling
        console.log(next)
        if (next != null) {
            next.setAttribute("id", "focus")
        } else {
            console.log("filling main")
            fillMain()
        }
    } else {
        current.setAttribute("class", "incorrect")
    }

})


function fillMain() {
    main.innerHTML = ""
    var idx = i % command.length
    console.log(idx, command[idx], command.length)
    var shortcut = command[idx]
    for (j in shortcut) {
        const chaaracterSpan = document.createElement('span')
        if (j == 0) {
            chaaracterSpan.setAttribute("id", "focus")
        }
        chaaracterSpan.innerText = shortcut[j]
        main.appendChild(chaaracterSpan)
    }
    i = i + 1
    console.log("after adding", i)
}

function reset() {
    i = 0;
    fillMain();
}