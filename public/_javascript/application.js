jQuery(function($){
  if($.browser.msie == true){
    window.location.replace("https://docs.google.com/document/pub?id=1o6jimb5sxTywY_zS1TUwV8JhguE54pB8eXVbHtr7g2c");
  }
  $("#twitter").tweet({
    // avatar_size: 32,
    count: 3,
    username: "outinoffice",
    loading_text: "laden ..."
  }).bind("loaded",function(){$(this).find("a").attr("target","_blank");});
});
