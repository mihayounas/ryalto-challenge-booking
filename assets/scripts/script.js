const nextButtons = document.querySelectorAll('.next-button');
const previousButtons = document.querySelectorAll('.previous-button');
const formSteps = document.querySelectorAll('.form-step');
const progressItems = document.querySelectorAll('#progress li');

nextButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        formSteps[index].classList.remove('active');
        formSteps[index + 1].classList.add('active');
        progressItems[index].classList.remove('active');
        progressItems[index + 1].classList.add('active');
    });
});

previousButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        formSteps[index].classList.remove('active');
        formSteps[index - 1].classList.add('active');
        progressItems[index].classList.remove('active');
        progressItems[index - 1].classList.add('active');
    });
});