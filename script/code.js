const display = document.getElementById('days');

const btnCalc = document.getElementById('btn');
btnCalc.addEventListener('click', (dob) => {
    dob = new Date(document.getElementById('age').value);
    
    let days = (new Date() - new Date(dob)) / (1000 * 60 * 60 * 24);
    display.value = Math.round(days) + ' days from birth';
})

// const btnClear = document.getElementById('clear');
// btnClear.addEventListener('click', () => {
//     document.getElementById('DOB').value = '';
//     display.innerHTML = '';
//     document.getElementById('DOB').focus()
// })

 