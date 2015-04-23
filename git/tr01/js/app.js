/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 var main = function (){
     "use strict";
     $(".comment-input button").on("click", function(){
         if((($(".comment-input input").val()) !== "")&&(($(".comment-input input").val()) !== " ")){
         var $new_comment = $("<p>").text($(".comment-input input").val());
         $(".comments").append($new_comment);
         }
     });
 };
 $(document).ready(main);
 
 //tomar el valor de entrada
 