
function login(){
        var value = $(".form-login").serializeArray();
        var result = {}
        value.forEach(element=> {
        result[element.name] = element.value
        console.log(result)
    })
        $.ajax({
            url: 'https://cvdhd-serverdb.herokuapp.com/login',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(result),
            success: function(sender){
                setCookie('token', sender.token , 1),
                window.location.replace("http://localhost/Admin/Admin.UI/View/Admin.html")
            },
            error: function() {
                console.log("Lỗi đăng nhập");
            }
        });
}
function setCookie(cname,cvalue,exdays){
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }
