document.querySelector("#button").addEventListener("click", function(){

var name = $("#name").val;
var url = $("#url").val;

$.ajax({
  type: "GET",
  url: "https://throw-me-to.vercel.app/api/create/"+ name +"="+ url,
  cache: false,

  success: function(request, status){
   alert("Success!");
  }
  error: function (request, status, error) {
        alert(error);
    }
});

})
