export default function ToAppearPicture(){
    let xMark = document.querySelector('.xMark');
    var Layer = document.querySelector('#Layer');
    const items = document.querySelectorAll('.myImage');
    for(let i=0;i<items.length;i++){
        items[i].addEventListener("click" , function(e){
            Layer.classList.remove('d-none');
            Layer.classList.add('d-block');
            var mySrc = e.currentTarget.querySelector('img').getAttribute('src');
             document.querySelector('.box').style.backgroundImage = `url(${mySrc})`;   
             
        })
    } ;
    xMark?.addEventListener('click' , function(){
        Layer.classList.remove("d-block")
        Layer.classList.add("d-none")
    }) ;
     
}


  