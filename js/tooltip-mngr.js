/*

Tooltip Manager Jquery Plugin
Date : 16/12/2014
Created By : Ahmad Emran

*/		$(document).ready(function() {
			Tooltip_Manager.INIT();
			$('input').hover(function(){
				Tooltip_Manager.ShowToolTip(this);
				Tooltip_Manager.Required();
			});
		});
			$('.tooltip').hide();
				var Tooltip_Manager = {
			INIT:function(){
				/*
					Init the Tooltip CSS
				*/
				$('head').append('<style>.tooltip{position:absolute;border:1px solid #333;background-color:#161616;border-radius:5px;padding:10px;color:#fff;font-size:12px}.closetool{width:11px;height:16px;float:right;color:#fff;cursor:pointer;margin-left:10px; background-color:red;line-height:13px;border-radius:5px;padding-left:5px;}</style>');
			},
		    ShowToolTip: function(elem, title) {
		    	/*
					Build Tooltip 
					Add Events 
					Add Close Button
		    	*/
		        var title = $(elem).attr('data-ara');
		        $(elem).attr('data-tiptext', title);
		        if($('.tooltip').length == 0){
		        		 $('<p class="tooltip"></p>')
		            .text(title)
		            .append('<span class="closetool">x</span>')
		            .appendTo('body')
		            .fadeIn('slow');

		        }else{
		        	$('.tooltip')
		        	.text(title)
		            .append('<span class="closetool">x</span>')
		            .appendTo('body')
		            .fadeIn('slow');
		        }
		       
		        $(elem).mousemove(function(e) {
				        var mousex = e.pageX + 20; //Get X coordinates
				        var mousey = e.pageY + 10; //Get Y coordinates
				        $('.tooltip')
				            .css({
				                top: mousey,
				                left: mousex
				            })
				    });
				    $(document).on('click','.closetool',function(){
						Tooltip_Manager.HideTooltips($(this).parent());
					});
		    },
		    HideTooltips: function(elem) {
	    		/*
					Hide Tooltip
	    		*/
		        $('.tooltip').remove();
		    },
		    Required: function(){

		    	$('input[class="required"]').focus(function (){
   				 $(this).attr("required", "true");
		    	});
		    }
		};