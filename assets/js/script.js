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
    document.getElementById("showCount").innerHTML = count;
    document.getElementById("charaCount").innerHTML = text.length;
    document.getElementById("spacesCount").innerHTML = spacesCount;
   }