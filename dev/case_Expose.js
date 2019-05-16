var a = (function (tq){
    return function ()
    {
        tq.show();
        tq.click();
        tq.hide();
    };
})(thiswidget.elementQuery);