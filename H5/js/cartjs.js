

    var that;
    $('.delete_box').on('click',function(){
            $(this).children('.delete_up').css(
                {
                    transition :'all 1s',
                    'transformOrigin':"0 5px" ,
                    transform :'rotate(-30deg) translateY(2px)'
                }

            )
            $('.jd_win').show();
            that = $(this);
    })

    $('.cancle').on('click',function(){
        $('.jd_win').hide();
        $('.delete_up').css('transform','none')
    })
    $('.submit').on('click',function(){
        that.parent().parent().parent().parent().remove();
        $('.jd_win').hide();
    })


	   $('.delete').click(function(){
	      var t=$(this).parent('td').parent('tr');
	      var tt=$(this).parent('td').find('input[class*=text_box]');
	      tt.val(0);
	        
	
	      setTotal();
	      t.hide();
	    });
	
	 // 数量减 
	 $(".minus").click(function() { 
	 var t = $(this).parent().find('.am-num-text'); 
	 t.val(parseInt(t.val()) - 1); 
	 if (t.val() <= 1) { 
	  t.val(1); 
	 } 
	 TotalPrice(); 
	 }); 
	 // 数量加 
	 $(".plus").click(function() { 
	 var t = $(this).parent().find('.am-num-text'); 
	 t.val(parseInt(t.val()) + 1); 
	 if (t.val() <= 1) { 
	  t.val(1); 
	 } 
	 TotalPrice(); 
	 }); 

	 // background-size: 47px 100px;
    // background-position: 25px 0;
// 点击商品按钮 
 $(".GoodsCheck").click(function() { 
 var goods = $(this).closest(".one-shop").find(".GoodsCheck"); //获取本店铺的所有商品 
 var goodsC = $(this).closest(".one-shop").find(".GoodsCheck:checked"); //获取本店铺所有被选中的商品 
 var Shops = $(this).closest(".one-shop").find(".ShopCheck"); //获取本店铺的全选按钮 
 if (goods.length == goodsC.length) { //如果选中的商品等于所有商品 
  Shops.prop('checked', true); //店铺全选按钮被选中 
  if ($(".ShopCheck").length == $(".ShopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量 
  $("#AllCheck").prop('checked', true); //全选按钮被选中 
  TotalPrice(); 
  } else { 
  $("#AllCheck").prop('checked', false); //else全选按钮不被选中 
  TotalPrice(); 
  } 
 } else { //如果选中的商品不等于所有商品 
  Shops.prop('checked', false); //店铺全选按钮不被选中 
  $("#AllCheck").prop('checked', false); //全选按钮也不被选中 
  // 计算 
  TotalPrice(); 
  // 计算 
 } 
 }); 
 // 点击店铺按钮 
 $(".ShopCheck").change(function() { 
 if ($(this).prop("checked") == true) { //如果店铺按钮被选中 
  $(this).parents(".one-shop").find(".goods-check").prop('checked', true); //店铺内的所有商品按钮也被选中 
  if ($(".ShopCheck").length == $(".ShopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量 
  $("#AllCheck").prop('checked', true); //全选按钮被选中 
  TotalPrice(); 
  } else { 
  $("#AllCheck").prop('checked', false); //else全选按钮不被选中 
  TotalPrice(); 
  } 
 } else { //如果店铺按钮不被选中 
  $(this).parents(".one-shop").find(".goods-check").prop('checked', false); //店铺内的所有商品也不被全选 
  $("#AllCheck").prop('checked', false); //全选按钮也不被选中 
  TotalPrice(); 
 } 
 }); 
 // 点击全选按钮 
 $("#AllCheck").click(function() { 
 if ($(this).prop("checked") == true) { //如果全选按钮被选中 
  $(".goods-check").prop('checked', true); //所有按钮都被选中 
  TotalPrice(); 
 } else { 
  $(".goods-check").prop('checked', false); //else所有按钮不全选 
  TotalPrice(); 
 } 
 $(".ShopCheck").change(); //执行店铺全选的操作 
 }); 
  
 function TotalPrice() { 
 var allprice = 0; //总价 
 $(".one-shop").each(function() { //循环每个店铺 
  var oprice = 0; //店铺总价 
  $(this).find(".GoodsCheck").each(function() { //循环店铺里面的商品 
  if ($(this).is(":checked")) { //如果该商品被选中 
   var num = parseInt($(this).parents(".one-goods").find(".am-num-text").val()); //得到商品的数量 
   var price = parseFloat($(this).parents(".one-goods").find(".GoodsPrice").text()); //得到商品的单价 
   var total = price * num; //计算单个商品的总价 
   oprice += total; //计算该店铺的总价 
  } 
  $(this).closest(".one-shop").find(".ShopTotal").text(oprice.toFixed(2)); //显示被选中商品的店铺总价 
  }); 
  var oneprice = parseFloat($(this).find(".ShopTotal").text()); //得到每个店铺的总价 
  allprice += oneprice; //计算所有店铺的总价 
 }); 
 $("#AllTotal").text(allprice.toFixed(2)); //输出全部总价 
 } 

	 var allprice = 0; //总价 
	 $(".one-shop").each(function() { //循环每个店铺 
	  var oprice = 0; //店铺总价 
	  $(this).find(".img_box").each(function() { //循环店铺里面的商品 
	  if ($(this).is(":checked")) { //如果该商品被选中 
	   var num = parseInt($(this).parents(".one-goods").find(".am-num-text").val()); //得到商品的数量 
	   var price = parseFloat($(this).parents(".one-goods").find(".GoodsPrice").text()); //得到商品的单价 
	   var total = price * num; //计算单个商品的总价 
	   oprice += total; //计算该店铺的总价 
	  } 
	  $(this).closest(".one-shop").find(".ShopTotal").text(oprice.toFixed(2)); //显示被选中商品的店铺总价 
	  }); 
	  var oneprice = parseFloat($(this).find(".ShopTotal").text()); //得到每个店铺的总价 
	  allprice += oneprice; //计算所有店铺的总价 
	 }); 
	 $("#AllTotal").text(allprice.toFixed(2)); //输出全部总价 
	
	