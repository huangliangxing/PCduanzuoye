(function () {
    var oTop=document.getElementById('top');
    window.onscroll=Display;
    function Display(){
        if(utils.win('scrollTop')>utils.win('clientHeight')){
            oTop.style.display='block';
        }else{
            oTop.style.display='none';
        }
    }
})();