function validateContactData(name, email, msg) {
    var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var checkName = /^[a-zA-Z.]{2,30}$/
    var checkMsg = /^.{20,500}$/
    return checkName.test(name);
}

function sendMessage(name, email, msg) {
    if (!validateContactData(name, email, msg)) {
        alert("Your name, email or message is not correct!");
    } else {
        alert("Your message was sent!");
    }

}