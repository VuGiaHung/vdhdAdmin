$(document).ready(function () {
    var user = new User()
})


class User{
	constructor() {
		this.getUser()
		this.getFarm()
    };

 	getUser(){
        $.ajax({
            url: 'https://cvdhd-serverdb.herokuapp.com/getTyper/'+ 'token',
            type: 'GET',
            dataType: 'JSON',
            success: function(result){
            	console.log(result)
                $.each(result, function(index, value) {
                    var htmlMain = '<tr>\
                        <td class="text-left">' + value.username + '</td>\
                        <td class="text-left">' + value.name +'</td>\
                        <td class="text-left">' + value.type + '</td>\
                                    </tr>'
                $('.table-hover').append(htmlMain);
                });
            },
            error: function(){
                alert(1)
            }
        });
    };

    getFarm(){
		$.ajax({
            url: 'https://cvdhd-serverdb.herokuapp.com/allFarm',
            type: 'GET',
            dataType: 'JSON',
            success: function(result){
            	console.log(result)
                $.each(result, function(index, value) {
                    var htmlMain = '<tr>\
					<td class="text-left"> ' + value._name + ' </td>\
					<td class="text-left">' + value._address + '</td>\
					<td class="text-left">' + value._ownerName + '</td>\
									</tr>'
                $('.table-hover-status').append(htmlMain);
                });
            },
            error: function(){
                alert(2)
            }
        });
    };

    getCookie(name) {
    const nameLenPlus = (name.length + 1);
    return document.cookie
        .split(';')
        .map(c => c.trim())
        .filter(cookie => {
            return cookie.substring(0, nameLenPlus) === `${name}=`;
        })
        .map(cookie => {
            return decodeURIComponent(cookie.susbstring(nameLenPlus));
        })[0] || null;
}
}

    