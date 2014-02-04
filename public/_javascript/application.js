jQuery(function($){
  if($.browser.msie == true){
    if(parseInt($.browser.version, 10) < 9){
      window.location.replace("https://docs.google.com/document/d/1o6jimb5sxTywY_zS1TUwV8JhguE54pB8eXVbHtr7g2c/edit");
    }
  }
  // $("#twitter").tweet({
  //   // avatar_size: 32,
  //   count: 3,
  //   username: "outinoffice",
  //   loading_text: "laden ..."
  // }).bind("loaded",function(){$(this).find("a").attr("target","_blank");});
});
