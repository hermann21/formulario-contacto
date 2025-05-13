document.getElementById('contactForm').addEventListener('submit',function(event) {

    //Validación básica
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if(name && email && phone && subject && message){
        //Simnulación de envio de formulario
        document.getElementById('successMessage').style.display = 'block';

        // Resetar el formulario
        document.getElementById('contactForm').reset();

    } else {
        alert('Por favor, completa todos los campos obligatorios')
    }
});

