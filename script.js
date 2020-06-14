
     
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
       
                   "background-color":"yellowgreen"
               })
           });
           $("#edb").mouseleave(function(){
               $("#ed").css({            
                   "z-index":-1,
                   "opacity":0,
               })
           });
       
           /*skills*/
           $("#skb").mouseover(function(){
               $("#sk").css({
                   "z-index":2,
                   "opacity":1,
                   "background-color":"blueviolet"
               })
           });
           $("#skb").mouseleave(function(){
               $("#sk").css({            
                   "z-index":-1,
                   "opacity":0,
               })
           });
       
           /*hobbies*/
           $("#hob").mouseover(function(){
               $("#ho").css({
                   "z-index":2,
                   "opacity":1,
                   "background-color":"crimson"
               })
           });
           $("#hob").mouseleave(function(){
               $("#ho").css({            
                   "z-index":-1,
                   "opacity":0,
               })
           });
           
       });
       