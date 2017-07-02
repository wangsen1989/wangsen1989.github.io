$(function () {

	$('#search_button').button({
		icons : {
			primary : 'ui-icon-search',
		}
	});
	
	$('#question_button').button({
		icons : {
			primary : 'ui-icon-lightbulb',
		},
	}).click(function () {
		alert("提问")
	});
	
	$('#error').dialog({
		autoOpen : false,
		modal : true,
		closeOnEscape : false,
		resizable : false,
		draggable : false,
		width : 180,
		height : 50,
	}).parent().find('.ui-widget-header').hide();
	
	
	$('#loading').dialog({
		autoOpen : false,
		modal : true,
		closeOnEscape : false,
		resizable : false,
		draggable : false,
		width : 180,
		height : 50,
	}).parent().find('.ui-widget-header').hide();
	
	
	$('#tabs').tabs();
	
	$('#accordion').accordion({
		header : 'h3',
	});
	$.ajax({
		url:'./data/artical.json',
		type:'GET',
		success:function(res){
			console.log(res)
		}
	})

});


























