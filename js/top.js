(function () {
    var oTop=document.getElementById('top');
    var oDiv=document.getElementById('right_back');
    window.onscroll=computedDisplay;
    function computedDisplay(){
        if(utils.win('scrollTop')>0){
            oDiv.style.display='block';
            if (utils.win('scrollTop')>utils.win('clientHeight')){
                oTop.style.display='block';
            }else{
                oTop.style.display='none';
            }
        }else{
            oDiv.style.display='none';
        }
    }
    oDiv.onclick=function(){
        this.style.display='none';
        window.onscroll =null;
        //根据已知条件 求step
        var target=utils.win('scrollTop');
        var duration=10;
        var interval=10;
        var step=target/duration*interval;
        var timer=setInterval(function(){
            var curTop=utils.win('scrollTop');
            if(curTop<=0){
                clearInterval(timer);
                window.onscroll =computedDisplay;
                return;
            }
            curTop-=step;
            utils.win('scrollTop',curTop);
        },interval);
    }
})();