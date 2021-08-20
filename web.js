function lw() {
  var i=document.getElementById("input").value 
  var xhr = new XMLHttpRequest()
  
  xhr.open("GET","http://192.168.1.6/cgi-bin/app.py?x="+i,true);
  xhr.send();
  xhr.onload = function(){
       var output = xhr.responseText;
       document.getElementById("d1").innerHTML=output;
  }
}


        function openNav() {
          document.getElementById("mySidenav").style.width = "220px";
        }
        
        function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
        }


        function myFunction() {
          var element = document.body;
          element.classList.toggle("dark-mode");
       }