const btn = document.querySelector('#joke-btn');
const joke = document.querySelector('#joke');



function onButtonClick(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200){
            const response = JSON.parse(xhr.responseText);
            joke.innerText = response.value;
        }else{
            joke.innerText = 'Loading...';
        }
    }
    xhr.send();
}

btn.addEventListener('click', onButtonClick);
document.addEventListener('DOMContentLoaded', onButtonClick);