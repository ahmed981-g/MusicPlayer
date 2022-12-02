
const searchBtn = document.getElementById('search');
var searchField = document.getElementById('search-field');

searchBtn.addEventListener('click', mainDisplay);
searchField.addEventListener('keypress', (e)=>{

    if (e.key == 'Enter') {
        mainDisplay();
    }
});



function mainDisplay(){
    let url = searchField.value;
}