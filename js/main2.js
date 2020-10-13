function filter(){
    var activeCTG = ""
    var selectCTG = function(ctg){
        if(ctg!=activeCTG){
            $("#Ramka .item .image").removeClass("active").addClass("inactive")
            $("#Ramka .item .image"+ctg).addClass("active").removeClass("inactive")
            $("#Main .item").removeClass("active").addClass("inactive")
            $("#Main .item"+ctg).addClass("active").removeClass("inactive")
            $("#Main .itemEnd").removeClass("active").addClass("inactive")
            $("#Main .itemEnd"+ctg).addClass("active").removeClass("inactive")
            activeCTG = ctg
        }else{
            $("#Ramka .item .image").removeClass("active").removeClass("inactive")
            $("#Main .item").removeClass("active").removeClass("inactive")
            $("#Main .itemEnd").removeClass("active").removeClass("inactive")
            activeCTG = ""
        }
       
        
    }
    var reset = function(){
        
    }
    $("#Ramka .rasy .item .prot").click(function(){
        selectCTG(".prot")
    })
    $("#Ramka .rasy .item .terr").click(function(){
        selectCTG(".terr")
    })
    $("#Ramka .rasy .item .zerg").click(function(){
        selectCTG(".zerg")
    })
    
    
}

$(document).ready(filter)