var now = "12:01:00 AM";
function toJSDate(Time) {
  var Time = Time.split(" ");
  var time = Time[0].split(":");
  var meridiem = Time[1];
  return [time[0], time[1], time[2], meridiem];
}

var jsDate = toJSDate(now);


jsDate[2] = parseInt(jsDate[2]);
jsDate[1] = parseInt(jsDate[1]);
jsDate[0] = parseInt(jsDate[0]);

jsDate[2] += 45; // adding 45 to seconds

if(jsDate[2]>=60){
    jsDate[1] = jsDate[1]+45+1; 
    jsDate[2] -= 60;
}
else{ jsDate[1] += 45;} //adding 45 to mins

if(jsDate[1]>=60){ 
    jsDate[0] = jsDate[0]+1;
    jsDate[1] -= 60
}


if(jsDate[3] == 'AM'){
    console.log(jsDate[0]+":"+jsDate[1]+":"+jsDate[2]);
}

else if(jsDate[3] == 'PM'){
    console.log(jsDate[0]+12+":"+jsDate[1]+":"+jsDate[2]);
}

else{
    console.log("invalid input [format should be 'hh:mm:ss meridiem]'");
}