const button = document.querySelector('button');

function clickHandler() {
    console.log('Button clicked!');
}

if (button) {
    button.addEventListener('click', () => {
        console.log('Button clicked!');
    });
}
