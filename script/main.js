$(function() {
	$(".section").addClass("initing"),
	$('#fullpage').fullpage({
		scrollingSpeed: 500,
		css3: true,
		resize: true,
		loopTop: false,
		loopBottom: true,
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ["首页","自我介绍","技能","工作经历","项目作品"],
		verticalCentered: true,
		afterRender: function(){
			$("#home").css({"display":"block"}).addClass("home-zoom");
			$("header").before("<div id='header' style='opacity:0'></div>");	
			$("#home-head").css({"margin-top":"100px"});
			$("header").animate({opacity:"1"},1000,function(){
				$("#header").css({"opacity":"0.3"});
				$("#home-info1").fadeIn(700,function(){
					$(this).next().animate({width:"800px"},700,function(){
						$("#home-info2").fadeIn(450,function(){
							$(this).next().fadeIn(450,function(){
								$(this).next().fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$("aside").fadeIn(300);
									});
								});
							});
						});
					});
				});
			});	
			$("aside li").eq(0).addClass("active").siblings().removeClass("active");
		},
		// afterLoad: function(anchorLink,index){
		// 	if(index==1){
		// 		$("aside li").eq(0).addClass("active").siblings().removeClass("active");
		// 	}
		// 	if(index==2){
		// 		$("aside li").eq(1).addClass("active").siblings().removeClass("active");
		// 		$("#about-content h1").after("<div class='title-en'><h2>· About me ·</h2></div>");
		// 		$(".title-en").animate({width:"130px"},800,function(){
		// 			$(".title-en h2").slideDown(400);
		// 		});
		// 		$("#about-info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
		// 			$("#about-info p").eq(0).animate({bottom:"0"},700,function(){
		// 				$("#about-info p").eq(1).animate({bottom:"0"},700,function(){
		// 					$("#about-info p").eq(2).animate({bottom:"0"},700,function(){
		// 						$("#about-info p").eq(3).animate({bottom:"0"},700);
		// 					});
		// 				});
		// 			});
		// 		});	
		// 	}
		// 	if(index==3){
		// 		$("aside li").eq(2).addClass("active").siblings().removeClass("active");
		// 		$("#skill-content h1").after("<div class='title-en'><h2>· Skill ·</h2></div>");
		// 		$(".title-en").animate({width:"130px"},800,function(){
		// 			$(".title-en h2").slideDown(400);
		// 		});	
		// 		$(".skill-list-content").addClass("skill-scale");
		// 	}
		// 	if(index==4){
		// 		$("aside li").eq(3).addClass("active").siblings().removeClass("active");
		// 		$("#exp-content h1").after("<div class='title-en'><h2>· Experience ·</h2></div>");
		// 		$(".title-en").animate({width:"130px"},800,function(){
		// 			$(".title-en h2").slideDown(400);
		// 		});	
		// 		var i=-1;
		// 		$(".exp-scale").each(function() {
		// 			var $this=$(this);
		// 			if(!$this.hasClass("b-to-t")){
		// 				i++;
		// 				setTimeout(function(){
		// 			   $this.addClass("b-to-t");
		// 			   },200*i);
		// 			}
  //               });
		// 		$("#exp-list-to").fadeIn(800).delay(500).fadeTo(300,0.3);
		// 	}
		// 	if(index==5){
		// 		$("aside li").eq(4).addClass("active").siblings().removeClass("active");
		// 		$("#demo-content h1").after("<div class='title-en'><h2>· Demo ·</h2></div>");
		// 		$(".title-en").animate({width:"130px"},800,function(){
		// 			$(".title-en h2").slideDown(400);
		// 		});	
		// 		var i=-1;
		// 		$(".demo-scale").each(function() {
		// 			var $this=$(this);
		// 			if(!$this.hasClass("b-to-t")){
		// 				i++;
		// 				setTimeout(function(){
		// 			   $this.addClass("b-to-t");
		// 			   },200*i);
		// 			}
		// 		})
		// 	}
		// },
		//翻页效果
		onLeave: function(i, o, e) {
            for (var a = $(".section"), t = 0; t < a.length; ++t)
				t + 1 !== o ? $(a[t]).addClass("leaving") : $(a[t]).removeClass("leaving")
        }
	});
	$(".initing").removeClass("initing"),

	// 技能切换
	$(".skills-img").click(function(){
		$(".skills-int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skills-flag-scale");
			}
		});
		if($(this).siblings(".skills-int").is(":hidden")){
			$(this).siblings(".skills-int").slideDown(400);
			$(this).siblings(".skills-flag").addClass("skills-flag-scale");
		}else{
			$(this).siblings(".skills-int").slideUp(200);
			$(this).siblings(".skills-flag").removeClass("skills-flag-scale");
		}
	});
	// 循环轮播到上一个项目
    $(".glyphicon-chevron-left").click(function(){
        $("#home-banner").carousel('prev');
    });
    // 循环轮播到下一个项目
    $(".glyphicon-chevron-right").click(function(){
        $("#home-banner").carousel('next');
    });
    //头像切换
	$(".home-photo2").hover(function(){
		console.log("Hi");
		$(".home-photo2").fadeTo(600,1);
		},function(){
			$(".home-photo2").stop(true,false).fadeTo(600,0);
	});
});


