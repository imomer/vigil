// jQuery
jQuery(function(){

    // Tabs
    var tab = jQuery('.tabWrap ul li a');

    tab.click(function(e){

        e.preventDefault();

        var tabID = jQuery(this).attr('href');

        jQuery(this).parents('.tabWrap').find('li').removeClass('activeTab');
        jQuery(this).parent('li').addClass('activeTab');

        jQuery(this).parents('.tabWrap').find('.tab').hide();

        jQuery(tabID).show();

    });
    
//    Catalogue description accordian
jQuery('.productTab li').click(function () {
            
      jQuery(this).parent().find('.productContent').slideToggle(150);
          
                        jQuery(this).toggleClass('activePro');

  
          return false;




   
 });

});