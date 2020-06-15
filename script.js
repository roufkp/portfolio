
     
        $(document).ready(function () {

            $("#m").click(function(){
                       $("#fm").slideToggle("slow")
       
                   });
       
           $("#i-main").click(function(){
               $("#bxs").fadeToggle("slow")
               $("#bxs").css({
                   "display":"flex",
                   "justify-content":"space-between"
               })
               


           });

       
       /*education*/
           $("#edb").mouseover(function(){
               $("#ed").css({
                   "z-index":2,
                   "opacity":1,
                    "color":"black",
                    "font-family":"cursive",
                    "background-color":"gold",  
                    "height":"250px"              
               })
               $("#sbxs").css({"height":"250px"})
           });
           $("#edb").mouseleave(function(){
               $("#ed").css({            
                   "z-index":-1,
                   "opacity":0,
                   "height":"0px" 
               })
               $("#sbxs").css({"height":"0px"})
           });
       
           /*skills*/
           $("#skb").mouseover(function(){
               $("#sk").css({
                   "z-index":2,
                   "opacity":1,
                   "color":"white",
                    "font-family":"monospace",
                   "background-color":"black",
                   "height":"250px"                    
               })
                $("#sbxs").css({"height":"250px"})
           });
           $("#skb").mouseleave(function(){
               $("#sk").css({            
                   "z-index":-1,
                   "opacity":0,
                   "height":"0px" 
               })
            $("#sbxs").css({"height":"0px"})
           });
       
           /*hobbies*/
           $("#hob").mouseover(function(){
               $("#ho").css({
                   "z-index":2,
                   "opacity":1,
                   "height":"250px" ,
                   "color":"black",
                   "font-family":"cursive",
                   "background-color":"white",                   
               })
               $("#sbxs").css({"height":"250px"})
           });
           $("#hob").mouseleave(function(){
               $("#ho").css({            
                   "z-index":-1,
                   "opacity":0,
                   "height":"0px" 
               })
               $("#sbxs").css({"height":"0px"})
           });

           $("#wh").click(function(){
               alert(" HOILAA!!!You can Message me to this no: +919061713244");
               
           });
           
       });
       