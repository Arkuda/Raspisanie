DayOfWeek = 0
nowGroup = localStorage.getItem "nowGroup"
isOnline
currentBuild = 1

isAnglDate = false
groupsJSON

dropboxUrl = "https://dl.dropboxusercontent.com/u/61847240/raspisanie/"

init()->
  checkIsOnline ()->
    setAutomDayOfWeek
    getGroups ()->
      loadAndSetRaspisane nowGroup, ()->
        getNews




getNews ->
  if isOnline
    $ "#news".load(dropboxUrl +"/news_"+nowGroup+".txt", (response, status, xhr)->
      if status == "error"
        $ "#content".html "An error occured: " + xhr.status + " " + xhr.statusText
      else
        localStorage.setItem "news_json",response
    )
  else
    $ "#news".append localStorage.getItem "news_json"


checkUpdate (actualBuild,urlToDowload)->
  if actualBuild > currentBuil
    $ "#modalUpd".modal
    $ "#downldUpd".attr "href",urlToDowload

loadAndSetRaspisane (_groupName,callback)->
  if isOnline
    $.get dropboxUrl + _groupName + ".json", (data)->
      localStorage.setItem "raspisanie-" + _groupName + "-json",data
      raspisanie = JSON.parse data
      lol = raspisanie[DayOfWeek]
      if lol is null
        lol = raspisanie.pon
      ##for(var i =0; i < lol.length; i++){
      ##  $("#rasp"+i+"p").text(lol[i].split(';')[0]);
      ##  $("#rasp"+i+"c").text(lol[i].split(';')[1]);
      ##  }
      callback
   else
    raspisanie = JSON.parse localStorage.getItem "raspisanie-"+_groupName+"-json"
    lol = raspisanie[DayOfWeek]
    if lol is null
      lol = raspisanie.pon
    ##for(var i =0; i < lol.length; i++){
    ##  $("#rasp"+i+"p").text(lol[i].split(';')[0]);
    ##  $("#rasp"+i+"c").text(lol[i].split(';')[1]);
    ##  }
    callback

checkIsOnline (callback)->
  $.get dropboxUrl + "avalible.json",(data)->
    xml = JSON.parse data
    console.log "is online = true"
    isOnline = true
    checkIsOnline xml.buildversion,xml,url2download
    callback
  .fail (ex)->
      console.log "in online = false"
      isOnline = false
      callback