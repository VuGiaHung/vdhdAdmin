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

function postFarm(){
        var value = $("#farm-information").serializeArray();
        var result = {}
        value.forEach(element=> {
            result[element.name] = element.value
        });
        result.adminToken = getCookie('token')
        console.log(result)
        $.ajax({
            url: 'https://cvdhd-serverdb.herokuapp.com/addFarm',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(result),
            success: function(sender){
                alert("Thêm thành công")
            },
            error: function() {
                console.log("Lỗi thêm thông tin trang trại");
            }
    });
}