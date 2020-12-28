
    $(document).ready(function(){

    var url=document.location.href;

    $.each($("#header .link"),function(){

    if(this.href===url){$(this).addClass('active');}

});

});



