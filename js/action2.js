function F1() {
    $.ajax({
        url : 'http://localhost:3000/form-data',
        method : 'GET',
        datatype : 'json',
        headers : {
            'Content-Type' : 'application/json',
        },
        success : function(rs) {
            $("#D1").append(`<span class="s">${rs.name}</span>`);
            $("#D2").append(`<span class="s">${rs.email}</span>`);
            $("#D3").append(`<span class="s">${rs.phone}</span>`);
            $("#D4").append(`<span class="s">${rs.address}</span>`);
            $("#D5").append(`<span class="s">${rs.profession}</span>`);
        },
    });
}

$(document).ready(function() {
    F1();
})