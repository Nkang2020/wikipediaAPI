$(document).ready(function(){
  $("#search").click(function(){
    var value = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+value+"&format=json&callback=?"
    $.getJSON(url, function(data){
      console.log(data);
      for(var i=0;i<data[1].length;i++){
     $("#output").prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>") 
      }
    });
  });
  $("#searchTerm").keypress(function(e){
    if(e.which==13){
      $("#search").click();
    }
  });
});