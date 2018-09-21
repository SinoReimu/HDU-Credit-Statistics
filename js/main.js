chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if(document.getElementById("dqwz").innerHTML=="学生选课情况查询") {
      query();
    } else {
      alert("请进入 \"信息查询-学生选课情况查询\" 界面再点击开始");
    }
    setTimeout(sendResponse, 15*4000);

    //sendResponse({counter: request.counter + 1 });
  }
);

var s = [];
var currentYear = 2019;

function query() {
  document.getElementById("dqwz").innerHTML
  console.log("start query");
  console.log(document.getElementById("iframeautoheight").contentWindow.document.getElementById("ddlXN").value);
  var ti=2;
  invoke('function next(){if(time<=10){'+
          'document.getElementById("iframeautoheight").contentWindow.document.getElementById("ddlXN").value=((currentYear-1)+"-"+currentYear);'+
          'document.getElementById("iframeautoheight").contentWindow.document.getElementById("ddlXQ").value=(set);'+
          'document.getElementById("iframeautoheight").contentWindow.document.getElementById("ddlXQ").onchange();time++;'+
          '}}'+
          'function dod(){var c=document.getElementById("iframeautoheight").contentWindow.document.getElementById("DBGrid").children[0].children;'+
          'for(var d=1;d<c.length;d++) console.log(c[d]);'+
          'if(set==2){set=1;currentYear-=1;}else{set=2;}next();}')
  invoke('var currentYear = '+currentYear+';var set = 1;var time=0;'+
          'document.getElementById("iframeautoheight").onload=dod');
  invoke('dod();');
  /*for(var i=currentYear; i>currentYear-5; i--) {

    setTimeout(set, ti*4000, i, 1)
    setTimeout(set, (ti+1)*4000, i, 2)
    ti+=2;


  }*/
}

function set(year, sec) {
  document.getElementById("iframeautoheight").contentWindow.document.getElementById("ddlXN").value=((year-1)+"-"+year);
  document.getElementById("iframeautoheight").contentWindow.document.getElementById("ddlXQ").value=(sec);
  invoke('document.getElementById("iframeautoheight").contentWindow.document.getElementById("ddlXQ").onchange()');
}

function invoke(na) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.innerHTML = na;
  document.body.appendChild(script);
}
