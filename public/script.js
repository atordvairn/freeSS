document.querySelector("#button").addEventListener("click", function(){
try{
   
$.getJSON("https://throw-me-to.vercel.app/api/create/"+document.querySelector('#name').value+"="+document.querySelector('#url').value, function(json_data){
   alert(JSON.stringify(json_data));
});

}catch(e){alert(e)}
})
