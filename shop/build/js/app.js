$('#menu_search input').attr('placeholder','Szukaj....');
$("#projector_button_observe").prepend("<i class='icon-plus'></i>");
$("span.benefits__item.--return").html("Darmowe zwroty <b>do 14 dni</b>");
// $(".benefits__block.--stocks").append("<span>Darmowa dostawa <b>od 300,00 zł</b></span>");
$("div.benefits__block.--delivery").clone().appendTo("#projector_benefits");
$("a.product__see ").addClass("btn --large --outline");


// tymczasowe rozwiązanie
$('#projector_sizes_cont a.select_button').on('click', function(){
    $('#projector_shipping_info > label').html("Możemy wysłać już dzisiaj!");
    var flag = $("#projector_price_maxprice").next().hasClass("desc_on");
    if(!flag){
        $("#projector_price_maxprice").after("<span class='desc_on'> (-5% Promocja ograniczona )</span>");
    }
});
////////


