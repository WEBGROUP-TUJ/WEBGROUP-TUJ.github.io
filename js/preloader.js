document.body.onload = function(){
    setTimeout( function() {
        var preloader = document.getElementById('page-preloader');
        if(preloader.classList.contains('done')){
            
        }
        else{
            preloader.classList.add('done');
        }
    }, 3000);
        
 };