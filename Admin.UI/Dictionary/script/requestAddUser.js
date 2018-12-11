function getCookie(name) {
    const nameLenPlus = (name.length + 1);
    return document.cookie
        .split(';')
        .map(c => c.trim())
        .filter(cookie => {
            return cookie.substring(0, nameLenPlus) === `${name}=`;
        })
        .map(cookie => {
            return decodeURIComponent(cookie.substring(nameLenPlus));
        })[0] || null;
} 

function postUser(){
        var value = $("#user-infomation").serializeArray();
        var result = {}
        value.forEach(element=> {
            result[element.name] = element.value
        });
        result.adminToken = getCookie('token')
        console.log(result)
        $.ajax({
            url: 'https://cvdhd-serverdb.herokuapp.com/addTyper',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(result),
            success: function(sender){
                alert("Thêm thành công")
            },
            error: function() {
                console.log("Error 404");
            }
    });
}


$(document).ready(function () {
    var validate = new Validate();
    $('#submit-user').click(function(event) {
        validate.checkEmpry()
    });
})

class Validate{
    constructor() {
    };

    checkEmpry(){
      if($('.input--style-2').text().trim = '') {
        this.focus()
        alert("error")
      }
    };
}