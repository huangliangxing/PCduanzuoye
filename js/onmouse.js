(function (e) {
    var oShopping = document.getElementById("shopping");
    var aMark = document.getElementById("mark");

    var oCustomer = document.getElementById("customer");
    var aCustomer_1 = document.getElementById("customer_1");

    var oShop = document.getElementById("shop");
    var aShop_1 = document.getElementById("shop_1");


    oShopping.onmouseenter = function (e) {
        aMark.style.display = 'block';
    };
    oShopping.onmouseleave = function (e) {
        aMark.style.display = 'none';
    };
    oCustomer.onmouseenter = function (e) {
        aCustomer_1.style.display = 'block';
    };
    oCustomer.onmouseleave = function (e) {
        aCustomer_1.style.display = 'none';
    };

    oShop.onmouseenter = function (e) {
        aShop_1.style.display = 'block';
    };
    oShop.onmouseleave = function (e) {
        aShop_1.style.display = 'none';
    };

    var aOne = document.getElementsByClassName("one");
    var aBranch = document.getElementsByClassName("branch");


    for (var i = 0; i < aOne.length; i++) {
        var cur=aOne[i];
        for(var j=0;j<aBranch.length;j++){
            var brn=aBranch[j];
            cur.onmouseenter = function (e) {
                brn.style.display = 'block';
            };
            cur.onmouseleave = function (e) {
                brn.style.display = 'none';
            };
        }
    }


    //var aTwo = document.getElementsByClassName("two")[0];
    //var aBranch = document.getElementsByClassName("branch");
    //aTwo.onmouseenter = function (e) {
    //    brn.style.display = 'block';
    //};
    //aTwo.onmouseleave = function (e) {
    //    brn.style.display = 'none';
    //};


    var oSearch_a=document.getElementById("search_a");
    var aDown=document.getElementById("down");
    oSearch_a.onmouseenter = function (e) {
        aDown.style.display = 'block';
    };
    oSearch_a.onmouseleave = function (e) {
        aDown.style.display = 'none';
    };




})();






