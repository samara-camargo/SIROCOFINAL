
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();


    var email = document.getElementById('formEmail').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var termsAccepted = document.getElementById('exampleCheck1').checked;

    if (email === "" || password === "") {
        alert("Por favor completa todos los campos.");
        return; 
    }

    if (!termsAccepted) {
        alert("Debes aceptar los términos y condiciones.");
        return;
    }

    window.location.href = "home.html";
});