pages={
    'p1':function(){
        http({'url':'/ajax/p1','method':'GET'},function(xhttp){
            return Change_View(xhttp.responseText,'page 1','/p1');
        })
    },
    'p2':function(){
        http({'url':'/ajax/p2','method':'GET'},function(xhttp){
            return Change_View(xhttp.responseText,'Page 2','/p2');
        })
    },
    'index':function(){
        http({'url':'/ajax/index','method':'GET'},function(xhttp){
            return Change_View(xhttp.responseText,'Index Page','/');
        })
    }
}

