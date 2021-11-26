document.querySelector("#button").addEventListener("click", function(){
try{

$.ajax({
type: "GET",
url: "https://throw-me-to.vercel.app/api/create/okokkakaka=naice",
cache: false,

success: function(html){
//$("#more").after(html);
alert("Success!");
}
});

}catch(e){alert(e)}
})
