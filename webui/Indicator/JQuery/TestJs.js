$(function() {
$('#clickme').click(function(){
  $('#robot').hide('slow', function() {
    $('#result').html("текст<br>"+
     "Тоже текст");
  });
});
$('div#helloid')
        .html('Документ доступен для выполнения скриптов')
        .css('color','green')
		.css('background', 'yellow')
		$('div.asd')
		.css('background','blue')
		.css('color','white');
	
});
