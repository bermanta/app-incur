/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$( document ).ready(function(){
    function init(){
        $('.button-collapse').sideNav('show');
        $(".progress").hide();
            $('.button-collapse').sideNav({
            menuWidth: 290,
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
          }
        );
        $('.slider').slider({
            full_width: true,
            indicators: false
        });
        $("#home").click();
    }
    $("a").on("click",function (){
       if($(this).attr("data-rute")){
           $.ajax({
                url: $(this).attr("data-rute"),
                type: 'GET',
                contentType: 'text/html',
                beforeSend: function (xhr) {
                    $(".progress").show();
                },
                success: function (data, textStatus, jqXHR) {
                    $("#content-pages").html(data);
                    $(".progress").fadeOut("slow");        
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Recurso no encontrado");
                }
           });
       } 
    });
    init();
});

