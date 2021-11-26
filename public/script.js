document.querySelector("#button").addEventListener("click", function(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         document.querySelector("#url").value = xhttp.responseText;
      }
  };
  xhttp.open("GET", `/create/${document.querySelector("#name").value}=${document.querySelector("#url").value}`, true);
  xhttp.send();
})
