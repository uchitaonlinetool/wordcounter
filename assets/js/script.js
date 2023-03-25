function wordCount() {
  let text = document.getElementById("txtarea").value;
  var count = 0;
  var split = text.split(" ");
  const spacesCount = text.split(" ").length - 1;
  for (var i = 0; i < split.length; i++) {
    if (split[i] != "") {
      count++;
    }
  }
  var metatag = 150 - text.length;
  var facebookcount = 250 - text.length;
  var googleCount = 300 - text.length;
  var twitterCount = 280 - text.length;
  var smsCount = 160 - text.length;
  var characterWithoutSpace = text.replace(/ /g, "");

  document.getElementById("showCount").innerHTML = "<b>" + count + "</b>";
  document.getElementById("charaCount").innerHTML =
    "<b>" + text.length + "</b>";
  document.getElementById("spacesCount").innerHTML =
    "<b>" + spacesCount + "</b>";
  document.getElementById("characterWithoutSpace").innerHTML =
    "<b>" + characterWithoutSpace.length + "</b>";

  if (metatag > 0) {
    document.getElementById("metatag").innerHTML =
      "<b>" + metatag + "/150" + "</b>";
  } else {
    document.getElementById("metatag").innerHTML =
      "<b style = color:red>" + metatag + "/150" + "</b>";
  }
  if (facebookcount > 0) {
    document.getElementById("facebookcount").innerHTML =
      "<b>" + facebookcount + "/250" + "</b>";
  } else {
    document.getElementById("facebookcount").innerHTML =
      "<b style = color:red>" + facebookcount + "/250" + "</b>";
  }
  if (googleCount > 0) {
    document.getElementById("googleCount").innerHTML =
      "<b>" + googleCount + "/300" + "</b>";
  } else {
    document.getElementById("googleCount").innerHTML =
      "<b style = color:red>" + googleCount + "/300" + "</b>";
  }
  if (twitterCount > 0) {
    document.getElementById("twitterCount").innerHTML =
      "<b>" + twitterCount + "/280" + "</b>";
  } else {
    document.getElementById("twitterCount").innerHTML =
      "<b style = color:red>" + twitterCount + "/250" + "</b>";
  }
  if (smsCount > 0) {
    document.getElementById("smsCount").innerHTML =
      "<b>" + smsCount + "/160" + "</b>";
  } else {
    document.getElementById("smsCount").innerHTML =
      "<b style = color:red>" + smsCount + "/160" + "</b>";
  }

  drawChart(
    count,
    text.length,
    spacesCount,
    facebookcount,
    googleCount,
    twitterCount,
    metatag,
    smsCount
  );
  if (text.length > 0) {
    var result = "";
    Object.entries(countWordOccurrences(text)).forEach(([key, value]) => {
      if (key != " " && key != "") {
        result =
          result +
          "<b>" +
          key +
          "</b>" +
          " " +
          "<b style = color:red; >" +
          " " +
          value +
          "</b>" +
          "<br>";
      }
    });
    document.getElementById("result").innerHTML = result;
  }
}

function countWordOccurrences(input) {
  const result = {};
  const arr = input.split(" ");
  for (let word of arr) {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  return result;
}
