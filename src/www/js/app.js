

var app;
var DayOfWeek = 0;

var namesWeek = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","ВЫХОДНОЙ НАХ"];


function init()
{
    selectDayOfWeek(getNowDate());
}


function getNowDate()
{
    var d = new Date();
    var n = d.getDay();
    return n-1;
}

function selectDayOfWeek(i)
{
    DayOfWeek = i;
    $("#btn1").text(namesWeek[i]);
}