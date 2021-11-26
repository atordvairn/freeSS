document.querySelector("#button").addEventListener("click", function(){
try{
   
 window.location.replace("https://throw-me-to.vercel.app/api/create/"+document.querySelector('#name').value+"="+document.querySelector('#url').value);

}catch(e){alert(e)}
})
