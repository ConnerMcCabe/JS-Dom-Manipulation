//state


let sum = 0

//cached elems
let displayEl = document.getElementById('total');
let input = document.getElementById('stat');
let addButton = document.getElementById('add');
let subButton = document.getElementById('sub');


// event listeners
addButton.addEventListener('click', function() {
        sum += parseInt(input.value);
    render();
});



subButton.addEventListener('click', function() {
        sum -= parseInt(input.value);   

   render();

});
  
// functions


function init() {
    displayEl.innerHTML = 0
    input.value = 1
    render();

}


function render() {
    //change the sum here
    // if (input === NaN) {
    //     return
    // } else {
    displayEl.innerHTML = sum;
// }

}
init();