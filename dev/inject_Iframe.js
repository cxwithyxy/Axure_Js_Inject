var basejq=thiswidget.elementAxQuery();
var html_Code = basejq.text();
basejq.text("");
var innerbox = basejq.$().find("*:first");
var my_Iframe = $(document.createElement("iframe"));
my_Iframe.attr({
    "id": innerbox.attr("id"),
    "frameborder": "0"
});
basejq.$().html(my_Iframe);
my_Iframe[0].contentDocument.write(html_Code);
my_Iframe[0].contentDocument.close();
