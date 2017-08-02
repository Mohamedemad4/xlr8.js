function _remove(id) {
    element=document.getElementById(id);
    if (element==null){console.log('remove element doesn`t exsit');return null}
    element.parentNode.removeChild(element);
    element.destroy;
}
function _setEvent(id,event){
    elements=document.querySelectorAll('[href$="'+id+'"]');
    for(element in elements){
    element=elements[element];
    if (element===null){console.log('Set event element doesn`t exsit');continue;}
    element.href='#';
    element.onclick=event;
    }
}

function Change_View(html,title,url){
    _remove('View');
    var View = document.createElement('div');
    View.id = 'View';
    document.getElementById('app').appendChild(View);
    View.innerHTML =html;
    _refresh();
    history.pushState({url:title},title, url);
}

function new_page(link_id,event){
    pages[link_id].push(event);
}

function _refresh(){
    keys=Object.keys(pages);
    for(keynum in keys){
    _setEvent(keys[keynum],pages[keys[keynum]]);
    }
}

function http(settings, callbackfunc) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) {callbackfunc(this);}};
  xhttp.open(settings['method'],settings['url'], true);
  xhttp.send();
}

window.onload=function(){_refresh();}
