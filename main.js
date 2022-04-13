const form = document.getElementById('form');

form.addEventListener('submit', addData);

function addData(e){
    e.preventDefault();

    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('tel').value
    const checkbox = document.getElementById('checkbox').value


    console.log('First Name: ' + firstName)
    console.log('Last Name: ' + lastName)
    console.log('Email: ' + email)
    console.log('Phone: ' + phone)
    console.log('I am not a robot: ' + checkbox)

}