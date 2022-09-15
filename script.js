function send(){
    var params = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value

    }
    emailjs.send("service_8ep4jfp","template_lf3gztl",params).then(function (res){
        alert("Thank you for contacting to Us. Will reply back soon");

    })
}