$(function(){
  var bg = chrome.extension.getBackgroundPage();
  if(bg.isStarting) {
    $("#start").attr("disabled",true);
    $("#start").text("查询中");
  } else {
    $("#start").attr("disabled",false);
    $("#start").text("开始");
  }
  $("#start").click(function(){
      var cl = $(this);
      cl.attr("disabled",true);
      bg.isStarting = true;
      cl.text("查询中");
      (function(cl){
        chrome.tabs.getSelected(null, function(tab) {
          chrome.tabs.sendRequest(tab.id, {}, function handler(response) {
            console.log(cl);
            bg.isStarting = false;
            cl.attr("disabled",false);
            cl.text("开始");
          });
        });
      })(cl);
  });
});
