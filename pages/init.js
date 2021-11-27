export default function init() {
    $("#button").on("click", function(){
  var name = $("#name").val;
  var url = $("#url").val;
  var url_ = `https://throw-me-to.vercel.app/api/create/${name}=${url}`;
  alert("ok till here");

  $.ajax({
    type: "GET",
    url: url_,
    cache: false,

    success: function(request, status){
      alert("Success!");
    }
    error: function (request, status, error) {
      alert(error);
      }
  });
})
}
