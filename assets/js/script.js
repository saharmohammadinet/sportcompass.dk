//------------filter
$(function() {
    var $container = $('#container'),
        $checkboxes = $('#filters input');

    $container.isotope({
        itemSelector: '.item'
    });
    $checkboxes.change(function() {
        var filters = [];
        // get checked checkboxes values
        $checkboxes.filter(':checked').each(function() {
            filters.push(this.value);
        });
        // ['.red', '.blue'] -> '.red, .blue'
        filters = filters.join(', ');
        $container.isotope({
            filter: filters
        });
    });
    $('#shuffle').click(function() {
        $container.isotope('shuffle');
    });
    var $items = $container.children();
});
//------------------------submenu cart
if( $('.dropdown-menu li').length == 0 ) {
    $(".dropdown-menu").html("<li class='empty'>Empty cart</li>")
}
//------------------------ Proccess add to cart
$(document).ready(function(){
    //--- add or minus quantity box
    $(".plus-btn").on("click",function(){
            var quantity=$(this).next(".quantity").val();
            var price=$(this).parent().next().children().children(".orginal_price").val();
            quantity ++;
            $(this).next(".quantity").val(quantity);
            total_price= price * quantity;
            $(this).parent().next().children().children("span").html(total_price);
    });
    $(".minus-btn").on("click",function(){
        var quantity=$(this).prev(".quantity").val();
        var price=$(this).parent().next().children().children(".orginal_price").val();
        if(quantity>1) {
            quantity--;
            $(this).prev(".quantity").val(quantity);
            var price2=$(this).parent().next().children().children("span").html();
            total_price=price2 - price;
            $(this).parent().next().children().children("span").html(total_price);
        }
    });
    //--- press add btn
    $(".add-cart-btn a").on("click",function(){
        var product_name = $(this).parent().prev().prev().prev("h2").html();
        var final_quantity = $(this).parent().prev().children().children(".quantity").val();
        var baj=$(".cart-header .baj").html();
        if(baj == ""){
            baj=0;
        }
        var final_baj =parseInt(baj)+parseInt(final_quantity);
        var price = $(this).parent().prev().children(".pull-right").children(".price").children("span").html();
        $(".cart-header ul li.empty").remove();
        $(".cart-header ul").append("<li><span class='delete-row-cart'></span><strong>Product name :</strong> "+product_name+" / <strong>Quantity : </strong><span class='cart-pro-row'>"+ final_quantity +"</span>/ <strong>Price : </strong>"+price+"</li>");
         $(".cart-header .baj").html(final_baj);

        $(".cart-header .delete-row-cart").on("click",function(){
            var delete_row_cart =$(this).next().next().next(".cart-pro-row").html();
            final_baj= parseInt(final_baj) - parseInt(delete_row_cart);
            $(this).parent().remove();
            if( $('.dropdown-menu li').length == 0 ) {
                $(".dropdown-menu").html("<li class='empty'>Empty cart</li>")
            }
            $(".cart-header .baj").html(final_baj);
        });

    });
});
//-----------------------btn add to cart
$(function() {
    $( "#button" ).click(function() {
        $( "#button" ).addClass( "onclic", 250, validate);
    });

    function validate() {
        setTimeout(function() {
            $( "#button" ).removeClass( "onclic" );
            $( "#button" ).addClass( "validate", 450, callback );
        }, 2250 );
    }
    function callback() {
        setTimeout(function() {
            $( "#button" ).removeClass( "validate" );
        }, 1250 );
    }
});

//-------- sticky side bar
$( '.sidebar' ).fixedsticky();