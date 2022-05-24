var SL = 0;
var md1 = document.getElementById('lista1');

$('.SL').on('click', () => {
    ++SL;
    var el1 = document.createElement('div');
    var el2 = document.createElement('input');
    var el3 = document.createElement('button');
    el1.setAttribute('id', 'divSL' + SL);
    el2.setAttribute('id', 'htt' + SL)
    el2.setAttribute('class', 'htt');
    el2.setAttribute('placeholder', 'https:// ...');
    el3.setAttribute('id', 'RSL' + SL);
    el3.setAttribute('class', 'RSL');
    el3.setAttribute('value', SL);
    el3.setAttribute('onclick', 'F1(this.value)');
    el3.innerHTML = "Remove";
    el1.appendChild(el2);
    el1.appendChild(el3);
    md1.appendChild(el1);
});

function F1(el1){
    --SL;
    md1.removeChild(document.getElementById('divSL' + el1));
    var i;
    var j;
    var el2;
    for(i = el1, j = ++el1;i < ++SL;++i, ++j, --SL){
        el2 = document.getElementById('htt' + j);
        el2.id = 'htt' + i;
        el2 = document.getElementById('RSL' + j);
        el2.id = 'RSL' + i;
        el2.value = i;
        el2 = document.getElementById('divSL' + j);
        el2.id = 'divSL' + i;
    }
    --SL;
}

function forEachHtt(){
    for(i=0;i<SL && SL>0;)
    if(!($("#htt" + (++i)).val().startsWith('https://'))){
        $("#error2").show();
        return false;
    }
    $("#error2").hide();
    return true;
}

//                      Education

$('#b4').on('click', () => {
    $("#Educ").hide();
});

$('.E').on('click', () => {
    if(SL==0 || $('#htt' + SL).val().startsWith('https://'))
    $("#Educ").show();
});

var E = 0;
var md2 = document.getElementById('listaE');

$("#b3").on("click",()=> {
    if($("#ET").val().length>0 && $('.selE').val()!="Education type" && $('#data1').val()!="") {
        $("#error1").hide();
        ++E;
        var el1 = document.createElement('fieldset');
        var el2 = document.createElement('label');
        var el3 = document.createElement('label');
        var el4 = document.createElement('div');
        var el5 = document.createElement('button');
        el1.setAttribute('id', 'divE' + E);
        el1.setAttribute('class', 'divE');
        el2.setAttribute('id', 'edu' + E);
        el2.setAttribute('class', 'edu');
        el2.innerHTML = $("#ET").val();
        el3.setAttribute('id', 'dataE' + E);
        el3.setAttribute('class', 'dataE');
        el3.innerHTML = $('.selE').val() + " / " + $("#data1").val();
        el4.setAttribute('id', 'buttE' + E);
        el4.setAttribute('class', 'butt');
        el5.setAttribute('id', 'RE' + E);
        el5.setAttribute('class', 'RE');
        el5.setAttribute('value', E);
        el5.setAttribute('onclick', 'F2(this.value)');
        el5.innerHTML = "Remove";
        el1.appendChild(el2);
        el1.appendChild(el3);
        el4.appendChild(el5);
        md2.appendChild(el1);
        md2.appendChild(el4);
        md2.style.display = 'block';
    }
    else
    $("#error1").show();
})

function F2(el1){
    --E;
    md2.removeChild(document.getElementById('divE' + el1));
    md2.removeChild(document.getElementById('buttE' + el1));
    var i;
    var j;
    var el2;
    for(i = el1, j = ++el1;i < ++E;++i, ++j, --E){
        el2 = document.getElementById('divE' + j);
        el2.id = 'divE' + i;
        el2 = document.getElementById('edu' + j);
        el2.id = 'edu' + i;
        el2 = document.getElementById('dataE' + j);
        el2.id = 'dataE' + i;
        el2 = document.getElementById('buttE' + j);
        el2.id = 'buttE' + i;
        el2 = document.getElementById('RE' + j);
        el2.id = 'RE' + i;
        el2.value = i;
    }
    --E;
    if(E==0)
    md2.style.display = 'none';
}

//                      Education
//                      Job

$('#b6').on('click', () => {
    $("#Job").hide();
});

$('.J').on('click', () => {
    $("#Job").show();
});

$('#cb').on('click', () =>{
    if(document.getElementById('cb').checked)
    $("#divdate").hide();
    else
    $("#divdate").show();
})

var J = 0;
var md3 = document.getElementById('listaJ');

$('#b5').on('click', () => {
    if($("#selJN").val()!="Job name" && $('#selC').val()!="City" && $('#selCN').val()!="Company name" && $('#data2').val()!="" && (document.getElementById('cb').checked || $('#data3').val()!="")){
        $("#error3").hide();
        ++J;
        var el1 = document.createElement('fieldset');
        var el2 = document.createElement('label');
        var el3 = document.createElement('label');
        var el4 = document.createElement('div');
        var el5 = document.createElement('button');
        el1.setAttribute('id', 'divJ' + J);
        el1.setAttribute('class', 'divE');
        el2.setAttribute('id', 'job' + J);
        el2.setAttribute('class', 'edu');
        el2.innerHTML = $('#selJN').val() + ' at ' + $('#selCN').val() + ' in ' + $('#selC').val();
        el3.setAttribute('id', 'dataJ' + J);
        el3.setAttribute('class', 'dataE');
        if(document.getElementById('cb').checked == true)
        el3.innerHTML = 'From ' + $('#data2').val() + " to Present";
        else
        el3.innerHTML = 'From ' + $('#data2').val() + " to " + $('#data3').val();
        el4.setAttribute('id', 'buttJ' + J);
        el4.setAttribute('class', 'butt');
        el5.setAttribute('id', 'RJ' + J);
        el5.setAttribute('class', 'RE');
        el5.setAttribute('value', J);
        el5.setAttribute('onclick', 'F3(this.value)');
        el5.innerHTML = "Remove";
        el1.appendChild(el2);
        el1.appendChild(el3);
        el4.appendChild(el5);
        md3.appendChild(el1);
        md3.appendChild(el4);
        md3.style.display = 'block';
    }
    else
    $("#error3").show();
});

function F3(el1){
    --J;
    md3.removeChild(document.getElementById('divJ' + el1));
    md3.removeChild(document.getElementById('buttJ' + el1));
    var i;
    var j;
    var el2;
    for(i = el1, j = ++el1;i < ++J;++i, ++j, --J){
        el2 = document.getElementById('divJ' + j);
        el2.id = 'divJ' + i;
        el2 = document.getElementById('job' + j);
        el2.id = 'job' + i;
        el2 = document.getElementById('dataJ' + j);
        el2.id = 'dataJ' + i;
        el2 = document.getElementById('buttJ' + j);
        el2.id = 'buttJ' + i;
        el2 = document.getElementById('RJ' + j);
        el2.id = 'RJ' + i;
        el2.value = i;
    }
    --J;
    if(J==0)
    md3.style.display = 'none';
}

//                      Job
/// Get/Post data from server ///

function reP() {
    $.ajax({
        url : 'http://localhost:3000/professions/17',
        method : 'GET',
        datatype : 'json',
        headers : {
            'Content-Type' : 'application/json',
        },
        success : function(rs) {
            rs.forEach(function(get) {
                $("#i6").append(`<option value="${get.label}">${get.label}</option>`);
            });
        },
    });
}

function reE() {
    $.ajax({
        url : 'http://localhost:3000/education-type/17',
        method : 'GET',
        datatype : 'json',
        headers : {
            'Content-Type' : 'application/json',
        },
        success : function(rs) {
            rs.forEach(function(get) {
                $("#selE").append(`<option value="${get.education}">${get.education}</option>`);
            });
        },
    });
}

function reJ() {
    $.ajax({
        url : 'http://localhost:3000/job-name/17',
        method : 'GET',
        datatype : 'json',
        headers : {
            'Content-Type' : 'application/json',
        },
        success : function(rs) {
            rs.forEach(function(get) {
                $("#selJN").append(`<option value="${get.name}">${get.name}</option>`);
            });
        },
    });
}

$("#selC").on("change",() => {
    $.ajax({
        url : `http://localhost:3000/companies/17/city/${$("#selC").val()}`,
        method : 'GET',
        datatype : 'json',
        headers : {
            'Content-Type' : 'application/json',
        },
        success : function(rs) {
            $("#selCN").empty();
            $("#selCN").append(`<option value="Company name">Company name</option>`);
            rs.forEach(function(get) {
                $("#selCN").append(`<option value="${get.label}">${get.label}</option>`);
            });
        },
    });
})

$(document).ready(function() {
    $("#Educ").hide();
    $("#Job").hide();
    $("#error1").hide();
    $("#error2").hide();
    $("#error3").hide();
    $("#error4").hide();
    reP();
    reE();
    reJ();
})

// SUBMIT

var email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phone1 = /^0+([0-9])+$/;
var phone2 = /^\++([0-9])+$/;

function validI(){
    if($("#i1").val().length>0 && $("#i1").val().toLowerCase().indexOf(" ")===-1 && $("#i2").val().length>0 && $("#i2").val().toLowerCase().indexOf(" ")===-1 && email.test($("#i3").val()) && ((phone1.test($("#i4").val()) && $("#i4").val().length==9) || (phone2.test($("#i4").val()) && $("#i4").val().length<=12)) && $("#i5").val().length>0 && $("#i6").val()!="Profession"){
        $("#error4").hide();
        return true;
    }
    else{
        $("#error4").show();
        return false;
    }
}

function allIsValid(){
    if(validI() && forEachHtt()){
        console.log("wtf");
        return true;
    }
    else{
        console.log("kuku");
        return false;
    }
}

$('#b2').on('click', () => {
    if(allIsValid()){
        $.ajax({
            url: 'http://localhost:3000/form-data',
            method: 'POST',
            datatype: 'json',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                name: $('#i1').val() + " " + $('#i2').val(),
                email: $('#i3').val(),
                phone: $('#i4').val(),
                address: $('#i5').val(),
                profession: $('#i6').val(),
            }),
            success : function(){
                window.location.href = "index2.html";
            }
        });
    }
    // $.ajax({
    //     url: 'http://localhost:3000/form-data',
    //     method: 'GET',
    //     dataType: 'json',
    // });
});