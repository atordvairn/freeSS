document.querySelector("#button").addEventListener("click", function(){
try{
   
 window.location.replace("https://throw-me-to.vercel.app/api/create/abc=xyz");

}catch(e){alert(e)}
})
