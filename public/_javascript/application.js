jQuery(function($){
  $("#twitter").tweet({
    // avatar_size: 32,
    count: 3,
    username: "outinoffice",
    loading_text: "laden ..."
  }).bind("loaded",function(){$(this).find("a").attr("target","_blank");});
});
