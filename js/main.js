/*
function validateContactData(name, email, msg) {
    var reEmail = /^[\w]+@[\w]+(\.com$|\.hu$)$/;
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
*/


(function( app ) {
    app.validateContactData = function(name, email, msg) {
        var reEmail = /^[\w]+@[\w]+(\.com$|\.hu$)$/;
    var checkName = /^[a-zA-Z.]{2,30}$/
    var checkMsg = /^.{20,500}$/
    return checkName.test(name);
    };

    app.sendMessage = function() {
         if (!validateContactData(name, email, msg)) {
        alert("Your name, email or message is not correct!");
    } else {
        alert("Your message was sent!");
    }
    };
})(window.myApp = window.myApp || {});
