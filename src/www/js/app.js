
var DayOfWeek = 0;
var nowGroup = localStorage.getItem("nowGroup");
var groupsJSON;
var isOnline;
var currentBuild = 1;

var isAnglDate = false;

var namesWeek = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","ВЫХОДНОЙ НАХ"];


function init()
{
    checkIsOnline(function(){
        setAutomDayOfWeek();
        getGroups(function(){
            loadAndSetRaspisane(nowGroup);
        });
    });
}



function checkUpdate(actualBuild, urlToDownload)
{
    console.log(">checkUpdate:" + " curr-" + currentBuild +";actual-" +actualBuild);
    if(actualBuild > currentBuild)
    {
        $("#modalUpd").modal();
        $("#downldUpd").attr("href",urlToDownload).attr("onclick","window.open("+urlToDownload+",'_system')");

    }
}


function loadAndSetRaspisane(_groupName)
{
    if(isOnline){
        $.get("http://dl.dropboxusercontent.com/u/61847240/raspisanie/"+_groupName+".json",function(data)
        {
            localStorage.setItem("raspisanie-"+_groupName+"-json",data);
            var  raspisane = JSON.parse(data);
            switch (DayOfWeek)
                {
                    case 0:
                        var lol = raspisane.pon;
                        break;
                    case 1:
                        var lol = raspisane.vtorn;
                        break;
                    case 2:
                        var lol = raspisane.sreda;
                        break;
                    case 3:
                        var lol = raspisane.chetv;
                        break;
                    case 4:
                        var lol = raspisane.pyat;
                        break;
                    case 5:
                        var lol = raspisane.sub;
                        break;
                }
            if(lol == null){
                var lol = raspisane.pon;
            }
            for(var i =0; i < lol.length; i++){
                $("#rasp"+i+"p").text(lol[i].split(';')[0]);
                $("#rasp"+i+"c").text(lol[i].split(';')[1]);
            }
        }).fail(function(ex) {
                console.error("error of loading "+_groupName+".json");
            });
    }
    else
    {
        var  raspisane = JSON.parse(localStorage.getItem("raspisanie-"+_groupName+"-json"));
        switch (DayOfWeek)
        {
            case 0:
                var lol = raspisane.pon;
                break;
            case 1:
                var lol = raspisane.vtorn;
                break;
            case 2:
                var lol = raspisane.sreda;
                break;
            case 3:
                var lol = raspisane.chetv;
                break;
            case 4:
                var lol = raspisane.pyat;
                break;
            case 5:
                var lol = raspisane.sub;
                break;
        }
        for(var i =0; i < lol.length; i++){
            $("#rasp"+i+"p").text(lol[i].split(';')[0]);
            $("#rasp"+i+"c").text(lol[i].split(';')[1]);
        }
    }
}
function checkIsOnline(callback)
{
    $.get("http://dl.dropboxusercontent.com/u/61847240/raspisanie/avalible.json",function(data)
    {
        var xml = JSON.parse(data);
        console.log("ISONLINE = TRUE;");
        isOnline = true;
        checkUpdate(xml.buldversion,xml.url2download);
        callback();
    }).fail(function(ex) {
            console.log("ISONLINE = FALSE;");
            isOnline = false;
            callback();
        });

}
function getGroups(callback)
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
            callback();
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
        callback();
    }
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
    loadAndSetRaspisane(nowGroup);

}
function setAutomDayOfWeek()
{
    var d = new Date();
    var n = d.getDay();
   if(isAnglDate){
        if(!(n ==6) || !(n ==0) ) selectDayOfWeek(n-1);
        else selectDayOfWeek(0);
    }else
   {
       if(!(n ==5) || !(n == 6) ) selectDayOfWeek(n-1);
       else selectDayOfWeek(0);
   }


}
function selectDayOfWeek(i)
{
    DayOfWeek = i;
    $("#btn1").text(namesWeek[i]);
    loadAndSetRaspisane(nowGroup);
}