$(document).ready(function(){
	$("#piclist").kxbdSuperMarquee({
		distance:40,
		navId:"#list1",
		direction:"up",
		duration:15
	})
	$("#nav_list li").hover(function(){
		$(this).find("img").stop().animate({"width":"160px","height":"170px","left":"0"},300);
		$(this).find("h2").stop().animate({"top":"140px"},300);
		$(this).find(".box1").show();
		$(this).find(".box2").animate({"left":"160px"},300);
		$(this).find(".box2").show();

	},function(){
		$(this).find("img").stop().animate({"width":"0","height":"0","left":"80px"},300);
		$(this).find("h2").stop().animate({"top":"30px"},300);
		$(this).find(".box1").hide();
		$(this).find(".box2").hide();
	})
	$("#right").click(function(){        /*960-195*/
		$("#bannerpic").stop().animate({"left":"-960px"},300);
		var first=$("#bannerpic li:first");
		first.remove();
		$("#bannerpic").append(first);
	})

	$("#left").click(function(){
		var last=$("#bannerpic li:last");
		last.remove();
		$("#bannerpic").prepend(last);
		$("#bannerpic").css("left","-1530px");
		$("#bannerpic").stop().animate({"left":"-960px"},300);
	})

	$(".main_inner .one").hover(function(){
		$(this).find("p").css("color","white");
	},function(){
		$(this).find("p").css("color","#808080")
	})

	$(".main_inner .two .sm").hover(function(){
		$(this).children().css("width","300px","height","300px");
		$(this).siblings("p").hide();
		$(this).siblings("font").hide();		
	},function(){
		$(this).children().css("width","130px","height","130px");
		$(this).siblings("p").show();
		$(this).siblings("font").show();
	})

	$(".main_inner .scroll .wfgd").kxbdSuperMarquee({
		direction:"right",
		duration:20,
		isMarquee:true,
		isEqual:false,
		scrollDelay:20,
	})

})