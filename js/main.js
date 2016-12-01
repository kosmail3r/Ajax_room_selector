$(document).ready(function(){
	$('#myform input, select').styler();
	$('#month, #count').on('change', function(){
	$('.variant').show();
	var eco, std, lux, house , count, resEco, resStd, resLux, resHouse, monthId, monthName; 
	monthName = $( "#month option:selected" ).text();	
    monthId = $( "#month option:selected" ).val();
    if (monthId == 1) {
    	eco = 100;
		std = 200;
		lux = 300;
		house = 400;
    } else if (monthId == 2) {
    	eco = 110;
		std = 210;
		lux = 310;
		house = 410;
    } else if (monthId == 3) {
    	eco = 120;
		std = 220;
		lux = 320;
		house = 420;
    } else if (monthId == 4) {
    	eco = 130;
		std = 230;
		lux = 330;
		house = 430;
    } else if (monthId == 5) {
    	eco = 140;
		std = 240;
		lux = 340;
		house = 440;
    } 
   
		count = $('#count').val();
		resEco = eco * count;
		resStd = std * count;
		resLux = lux * count;
		resHouse = house * count;
		$('#resEco').html(resEco);
		$('#resStd').html(resStd);
		$('#resLux').html(resLux);
		$('#resHouse').html(resHouse);
		$('#num').html(count);
		$('#mnth').html(monthName);
		});
	//Checking for personal kitshen in the room
	$('#kitchen').on('change', function() {
	    if( $(this).is(':checked')) {
	        $(".eco").hide();
	        $(".std").hide();
	        $(".lux").hide();
	    } else {
	        $(".eco").show();
	        $(".std").show();
	        $(".lux").show();
	    }
    }); 
    //Checking for personal WC in the room
	$('#toilet').on('change', function() {
	    if( $(this).is(':checked')) {
	        $(".eco").hide();
	        $(".std").hide();
	    } else {
	        $(".eco").show();
	        $(".std").show();
	    }
    }); 
    //Checking for tv in the room
	$('#tv').on('change', function() {
	    if( $(this).is(':checked')) {
	        $(".eco").hide();
	    } else {
	        $(".eco").show();
	    }
    }); 
    //Checking for hot water in the room
    $('#hotwater').on('change', function() {
	    if( $(this).is(':checked')) {
	        $(".eco").hide();
	    } else {
	        $(".eco").show();
	    }
    }); 
    
});
