function _remove(e){if(element=document.getElementById(e),null==element)return console.log("remove element doesn`t exsit"),null;element.parentNode.removeChild(element),element.destroy}function _setEvent(e,n){elements=document.querySelectorAll("#"+e);for(element in elements)element=elements[element],null!==element?(element.href="#",element.onclick=n):console.log("Set event element doesn`t exsit")}function Change_View(e,n,t){_remove("View");var l=document.createElement("div");l.id="View",document.getElementById("app").appendChild(l),l.innerHTML=e,_refresh(),history.pushState({url:n},n,t)}function new_page(e,n){pages[e].push(n)}function _refresh(){keys=Object.keys(pages);for(keynum in keys)_setEvent(keys[keynum],pages[keys[keynum]])}function http(e,n){var t;(t=new XMLHttpRequest).onreadystatechange=function(){4==this.readyState&&200==this.status&&n(this)},t.open(e.method,e.url,!0),t.send()}window.onload=function(){_refresh()}