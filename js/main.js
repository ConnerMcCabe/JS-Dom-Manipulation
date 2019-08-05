//state


let sum = 0

//cached elems
let displayEl = document.getElementById('total');
let input = document.getElementById('stat');
let addButton = document.getElementById('add');
let subButton = document.getElementById('sub');
// console.log(input)

// event listeners
addButton.addEventListener('click', function() {
        sum += parseInt(input.value);
        // displayEl.innerText = sum
    render();
});



subButton.addEventListener('click', function() {
        sum -= parseInt(input.value);   
    
        // console.log(sum)
        // console.log(input.value)
  
   render();

});
    //add button adds
    //subtract button subs
    //span displays total
    //hover over inupts reverses color

// functions


function init() {
    displayEl.innerHTML = 0
    input.value = 1
    render();

}


function render() {
    //change the sum here
    displayEl.innerHTML = sum;


}
init();