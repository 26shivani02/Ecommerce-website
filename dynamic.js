var imgarray=["g-1","g-2","g-3","g-4","g-5","g-6"];
var dynamic =document.querySelector('.container');
for(var i=0;i<imgarray.length;i++){
    var fetch =document.querySelector('.container').innerHTML
    dynamic.innerHTML=<div id="cards${i}"class="boxes">
        <div class="box-content">
            <h2>${imgarray[i]}}</h2>
            </div>
            </div>+fetch;
            var img= document.getElementById('card${i}');
            img=({$imgarray[i]}.jpg);

}