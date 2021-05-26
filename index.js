// Import stylesheets
import './style.css';

// Write Javascript code!


document.getElementById("bad").onclick = function(){
  document.getElementById("id").src = `https://cdn.vox-cdn.com/thumbor/rnmeN-viwzdK3Vlggs-O65XjURk=/0x0:3000x2386/1200x800/filters:focal(1260x953:1740x1433)/cdn.vox-cdn.com/uploads/chorus_image/image/59456387/AP_740424045.0.jpg`;
  $("iframe").show(2000,function(){
    $("#hello").html("<h1>No, You have brought DESTRUCTION</h1>")
  }).animate({"height":"300px","width":"5000px"})
}


