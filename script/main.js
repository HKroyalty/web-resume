
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
		navigationTooltips: ["Home","Introduction","Skills","Course","Production"],
		verticalCentered: true,
		afterRender: function(){
			$("#home").css({"display":"block"}).addClass("home_zoom");
			$("header").before("<div id='header' style='opacity:0'></div>");	
			$("#home_head").css({"margin-top":"100px"});
			$("header").animate({opacity:"1"},1000,function(){
				$("#header").css({"opacity":"0.3"});
				$("#home_info1").fadeIn(700,function(){
					$(this).next().animate({width:"800px"},700,function(){
						$("#home_info2").fadeIn(450,function(){
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
		afterLoad: function(anchorLink,index){
			if(index==1){
				$("aside li").eq(0).addClass("active").siblings().removeClass("active");
			}
			if(index==2){
				$("aside li").eq(1).addClass("active").siblings().removeClass("active");
				$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				$("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
					$("#about_info p").eq(0).animate({bottom:"0"},700,function(){
						$("#about_info p").eq(1).animate({bottom:"0"},700,function(){
							$("#about_info p").eq(2).animate({bottom:"0"},700,function(){
								$("#about_info p").eq(3).animate({bottom:"0"},700);
							});
						});
					});
				});	
			}
			if(index==3){
				$("aside li").eq(2).addClass("active").siblings().removeClass("active");
				$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				$(".skill_list_content").addClass("skill_scale");
			}
			if(index==4){
				$("aside li").eq(3).addClass("active").siblings().removeClass("active");
				$("#exp_content h1").after("<div class='title_en'><h2>· Experience ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$(".exp_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
                });
				$("#exp_list_to").fadeIn(800).delay(500).fadeTo(300,0.3);
			}
			if(index==5){
				$("aside li").eq(4).addClass("active").siblings().removeClass("active");
				$("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$(".demo_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
				})
			}
		},
		//翻页效果
		onLeave: function(i, o, e) {
            for (var a = $(".section"), t = 0; t < a.length; ++t)
				t + 1 !== o ? $(a[t]).addClass("leaving") : $(a[t]).removeClass("leaving")
        }
	});
	$(".initing").removeClass("initing"),

	// 技能切换
	$(".skills_img").click(function(){
		$(".skills_int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skills_flag_scale");
			}
		});
		if($(this).siblings(".skills_int").is(":hidden")){
			$(this).siblings(".skills_int").slideDown(400);
			$(this).siblings(".skills_flag").addClass("skills_flag_scale");
		}else{
			$(this).siblings(".skills_int").slideUp(200);
			$(this).siblings(".skills_flag").removeClass("skills_flag_scale");
		}
	});
});


