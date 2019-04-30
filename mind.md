```
javascript:
a = document.createElement("script");
a.innerHTML = `[[This.text]]`.replace(new RegExp("神奇的斜杠", "g"), "\/").replace(new RegExp("神奇的换行符", "g"), "\\r").replace(new RegExp("神奇的回车符", "g"), "\\n");
document.querySelectorAll("head")[0].appendChild(a);
```
