var user = {} //Global Object

function logIn(event){
    event.preventDefault();
    var model = document.getElementById("model")
    var form = document.forms.login;
    console.log(user)
    model.style.display="flex"
    user.firstname = form.elements.firstname.value;
    user.lastname = form.elements.lastname.value;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value
}

function closeModel(){
    var model = document.getElementById("model");
    model.style.display="none"
}
