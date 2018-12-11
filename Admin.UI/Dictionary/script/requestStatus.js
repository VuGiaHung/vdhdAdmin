$(document).ready(function () {
    var status = new Status();
})

class Status{
	constructor() {
		this.getStatus()
    };

 	getStatus(){
        $.ajax({
            url: 'https://cvdhd-serverdb.herokuapp.com/getLog/' + 'token',
            type: 'GET',
            dataType: 'JSON',
            success: function(result){
            	console.log(result)
                $.each(result, function(index, value) {
                    var htmlMain = '<tr>\
						<td class="text-left">'+ value.content +'</td>\
                        <td class="text-left">'+ value.transaction_hash +'</td>\
                        <td class="text-left">'+ value.time +'</td>\
                                    </tr>'
                $('.table-hover').append(htmlMain);
                });
            },
            error: function(){
                alert("Error 404")
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
            return decodeURIComponent(cookie.substring(nameLenPlus));
        })[0] || null;
}
}