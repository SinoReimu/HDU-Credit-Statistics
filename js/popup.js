$(function(){
  var bg = chrome.extension.getBackgroundPage();
  if(bg.isStarting) {
    $("#start").attr("disabled",true);
    $("#start").text("��ѯ��");
  } else {
    $("#start").attr("disabled",false);
    $("#start").text("��ʼ");
  }
  $("#start").click(function(){
      var cl = $(this);
      cl.attr("disabled",true);
      bg.isStarting = true;
      cl.text("��ѯ��");
      (function(cl){
        chrome.tabs.getSelected(null, function(tab) {
          chrome.tabs.sendRequest(tab.id, {}, function handler(response) {
            console.log(cl);
            bg.isStarting = false;
            cl.attr("disabled",false);
            cl.text("��ʼ");
          });
        });
      })(cl);
  });
});
