//gets the input
var result = document.getElementById("result")

function getInput(){
    const input = document.getElementById("input")
    return input.value
}
function submit(){
    let input = getInput();
    input = parseFloat(input)
    if(isNaN(parseFloat(input))){
        alert("ENTER A NUMBER")
    } else {
        input = input + 400
        input = input / 600
        result.innerText = "Result: " + input + " Levels Intil Next Character"
    }
}