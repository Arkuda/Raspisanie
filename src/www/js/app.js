

var app;
var DayOfWeek = 0;

var nowGroup;

var namesWeek = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","ВЫХОДНОЙ НАХ"];


function init()
{
    getGroups();
    selectDayOfWeek(getNowDate());
}



function getGroups()
{
    $.getJSON("https://dl.dropboxusercontent.com/u/61847240/raspisanie/avalible.txt",function(data)
    {
        var group = eval(data);
        console.log(group);
        for(var i = 0; i <= group.size; i++)
        {
            addGroup(group[i]);
        }

    }).fail(function(ex) {
            console.error("error of loading avalible.json");
        });
}


function getNowDate()
{
    var d = new Date();
    var n = d.getDay();
    return n-1;
}


function addGroup(groupName)
{
    $("#groupsselect").text($("#groupsselect").text() + "<li><a onclick='setNowGroup(" +groupName+ ")\"'>"+groupName+"</a></li>");
    console.log($("#groupsselect").text() + "<li><a onclick='setNowGroup(" +groupName+ ")\"'>"+groupName+"</a></li>");
}

function setNowGroup(groupName)
{
    nowGroup = groupName;
}

function selectDayOfWeek(i)
{
    DayOfWeek = i;
    $("#btn1").text(namesWeek[i]);
}