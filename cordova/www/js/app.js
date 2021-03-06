
var DayOfWeek = 0;
var nowGroup = localStorage.getItem("nowGroup") || "pive31";
var isOnline;
var currentBuild = 2;

var isAnglDate = false;
var groupsJSON;


var dayRasp;


var namesWeek = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","ВЫХОДНОЙ НАХ"];


function init()
{

    checkIsOnline(function(){
        setAutomDayOfWeek();
        getGroups(function(){
            loadAndSetRaspisane(nowGroup,function(){
                getNews();
            });

        });
    });
}



function showSplashScreen()
{
    $("#splashscreen").show();
    $("#content").hide();
}
function hideSplashScreen()
{
    $("#splashscreen").hide();
    $("#content").show()    ;
}
function getNews()
{
    if(isOnline)
    {
        $("#news").load("https://dl.dropboxusercontent.com/u/61847240/raspisanie/news_"+nowGroup+".txt", function(response, status, xhr) {
            // error handling
            if(status == "error") {
                $("#content").html("An error occured: " + xhr.status + " " + xhr.statusText);
            }else
            {
                localStorage.setItem("news_json",response);
            }
        });
    }
    else
    {
        $("#news").append(localStorage.getItem("news_json"));

    }
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
function loadAndSetRaspisane(_groupName, callback)
{
    if(isOnline){
        $.get("https://github.com/Arkuda/Raspisanie/blob/master/"+_groupName+".json",function(data)
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

            daysRasp = lol;
        callback();
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
        daysRasp = lol;
        callback();
    }
//callback();
}
function checkIsOnline(callback)
{
    $.get("http://raw.githubusercontent.com/Arkuda/Raspisanie/master/avalible.json",function(data)
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
                if(nowGroup == null)
                {
                    nowGroup = _group.groups.split(',')[i];
                }
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