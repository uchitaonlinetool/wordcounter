function wordCount() {
    let text = document.getElementById("txtarea").value;
    var count = 0;
    var split = text.split(' ');
    const spacesCount = text.split(' ').length - 1; 
    for (var i = 0; i < split.length; i++) {
     if (split[i] != "") {
      count ++;
     }
    }
    var metatag = 150 - text.length;
    var facebookcount  = 250 - text.length;
    var googleCount =  300 - text.length;
    var twitterCount =  280 - text.length;

    document.getElementById("showCount").innerHTML =  "<b>"+count+"</b>";
    document.getElementById("charaCount").innerHTML =  "<b>"+text.length+"</b>";
    document.getElementById("spacesCount").innerHTML = "<b>"+spacesCount+"</b>";
    if(metatag>0){
    document.getElementById("metatag").innerHTML = metatag+"/150";
    }else{
        document.getElementById("metatag").innerHTML = "<b style = color:red>"+metatag+"/150"+"</b>";
    }
    if(facebookcount>0){
        document.getElementById("facebookcount").innerHTML = facebookcount+"/250";
        }else{
            document.getElementById("facebookcount").innerHTML = "<b style = color:red>"+facebookcount+"/250"+"</b>";
    }
    if(googleCount>0){
        document.getElementById("googleCount").innerHTML = googleCount+"/300";
        }else{
            document.getElementById("googleCount").innerHTML = "<b style = color:red>"+googleCount+"/300"+"</b>";
    }
    if(twitterCount>0){
        document.getElementById("twitterCount").innerHTML = twitterCount+"/280";
        }else{
            document.getElementById("twitterCount").innerHTML = "<b style = color:red>"+twitterCount+"/250"+"</b>";
    }
    
    drawChart(count, text.length, spacesCount, facebookcount, googleCount, twitterCount, metatag)
    
}