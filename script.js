// darkmode

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);



function messageSent() {
    const message = 'Hello your message has been sent, I will get back to you as soon as possible'
    alert(message);
  }

