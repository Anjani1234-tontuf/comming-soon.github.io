$(document).ready(function () {
	var $mousedown=false
	var $symbol="."
	$('td').mousedown(function(e){
	   //alert(e );
	   console.log(e);
	   e.target.innerHTML=$symbol
	   $mousedown=true
	});
	$('td').mousemove(function(e){
	   //alert(e );
	   console.log(e);
	   if ($mousedown==true){
		 e.target.innerHTML=$symbol
	   }

	});

	$('body').mouseup(function(e){
	  //alert(e );
	  $mousedown=false
	  console.log(e);
	});

	$('#pencil-form').submit(function (event) {
		event.preventDefault();

		var inputValue = $('input[name="symbol"]').val();
		$symbol = inputValue;
	});
});
