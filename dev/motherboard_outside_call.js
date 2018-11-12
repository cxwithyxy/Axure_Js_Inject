var motherboard = $("#" + thiswidget.elementAxQuery().getParents(1,{indexOf:new Function ()})[0].pop());
var motherboard_Code = motherboard.data("label");
// console.log(motherboard_Code);

var this_Box_Code = thiswidget.elementAxQuery().text();
// console.log(this_Box_Code);

var this_Box_Function = new Function (this_Box_Code);

motherboard.MCfunction = eval("(function (){" + motherboard_Code + "})");

this_Box_Function.apply(motherboard);