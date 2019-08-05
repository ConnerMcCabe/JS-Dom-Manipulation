//state

let sum;


//cached elems
let displayEl = document.querySelector('span');
let input = document.getElementById('stat');

// event listeners
document.querySelector('button')
    addEventListener('click', function() {
       
        displayEl += parseFloat(input.value) + parseFloat(displayEl.value);
        
 render();
});
document.querySelector('button', id="sub")
    addEventListener('click', function() {

        sum -= parseFloat(input.value) - parseFloat(displayEl.value);

   render();
});
    //add button adds
    //subtract button subs
    //span displays total
    //hover over inupts reverses color

// functions

function init() {
    sum = 0;
    displayEl = 0;
    input = 1;
    render();

}


function render() {
    displayEl = sum;


}
init();