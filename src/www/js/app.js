

var app;
var DayOfWeek = 0;
var nowGroup = localStorage.getItem("nowGroup");
var groupsJSON;
var isOnline;


var namesWeek = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","ВЫХОДНОЙ НАХ"];


function init()
{
    checkIsOnline(function(){
    setAutomDayOfWeek();
    getGroups();
    selectDayOfWeek(getNowDate());
    });
}




function checkIsOnline(callback)
{
    $.get("http://dl.dropboxusercontent.com/u/61847240/raspisanie/avalible.json",function(data)
    {
        console.log("ISONLINE = TRUE;");
        isOnline = true;
        callback();
    }).fail(function(ex) {
            console.log("ISONLINE = FALSE;");
            isOnline = false;
            callback();
        });

}
function getGroups()
{
    if(isOnline){
        $.get("http://dl.dropboxusercontent.com/u/61847240/raspisanie/avalible.json",function(data)
        {
            groupsJSON = data;
            localStorage.setItem("groups-json",data);
            var _group = JSON.parse(data);
            for(var i = 0; i <= _group.size-1; i++)
            {
                addGroup(_group.groups.split(',')[i]);
            }

        }).fail(function(ex) {
                console.error("error of loading avalible.json");
            });
    }
    else
    {
        var _group = JSON.parse(localStorage.getItem("groups-json"));
        for(var i = 0; i <= _group.size-1; i++)
        {
            addGroup(_group.groups.split(',')[i]);
        }
    }
}
function getNowDate()
{
    var d = new Date();
    var n = d.getDay();
    return n-1;
}
function addGroup(_groupName)
{
    console.log(_groupName);
    var ah = $("<a></a>").attr("onclick","setNowGroup(\"" +_groupName + "\")").text(_groupName);
    var _group = $("<li></li>").append(ah);
    $("#groupsselct").append(_group);
    console.log(_group);
}
function setNowGroup(groupName)
{
    localStorage.setItem("nowGroup",groupName);
    nowGroup = groupName;
}
function setAutomDayOfWeek()
{
    var d = new Date();
    var n = d.getDay();

    if(n !=6 && n !=0 )selectDayOfWeek(n-1);
    else selectDayOfWeek(0);

}
function selectDayOfWeek(i)
{
    DayOfWeek = i;
    $("#btn1").text(namesWeek[i]);
}