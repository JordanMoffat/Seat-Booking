var performance = {what:'RSNO - An American Festival',
                   when:'Friday 08 February 2013 19:30',
                   where:'User Hall - Main Auditorium'}
				   
$(document).ready(function(){
  $('#what').text("Event: "+performance.what);
  $(this).show()
});

$(document).ready(function(){
	$('#where').text("Event: "+performance.where);
	$(this).show()
});

$(document).ready(function(){
	$('#when').text("Event: "+performance.when);
	$(this).show()
});

$(document).ready(function(){
	$("td img").click(function() {
			$(this).attr('src', 'images/c.gif');		
			$(this).parent().addClass('selected');
			alert($(this).parent().attr("class"));
 	return false;
		});
	});


