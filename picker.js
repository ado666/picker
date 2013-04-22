$(function(){

    $( document ).tooltip({
      items: "img",
      content: function() {
        var element = $( this );
        if ( element.is( "img" ) ) {
          var text = element.text();
          return '<img src="'+element.attr('tooltip_src')+'">';
        }
      }
    });

	var openPicker   = function(e){
		var mainWindow	= $('#ip-window');
		var content		= $('#ip-content');
		var tooltip		= $('#ip-tooltip');

		if (mainWindow.css('display') == 'none'){
			mainWindow.show();
		}else if (mainWindow.css('display') == 'block'){
			mainWindow.hide();
		};

		$('#ip-loader').show();

		var html	= getAlbumResponse();
		content.html(html);

		$('.ip-album').click(function(){
			var html	= getPhotoResponse();
			content.html(html);

			$('.ip-photo').mouseenter(function(){
                return;
				var elem	= $(this);
//				console.log(elem)
				tooltip.html('<img src="'+elem.attr('tooltip_src')+'">');
				tooltip.show();
			})
			$('.ip-photo').mouseout(function(){
                return;
//				var elem	= $(this);
////				console.log(elem)
//				tooltip.html('<img src="'+elem.attr('tooltip_src')+'">');
				tooltip.hide();
			})
		})

		$('#ip-loader').hide();

		setTimeout(function(){
			$('#ip-loader').hide();
		}, 5000)
	};

	var pickButton  = $('#ip-button');

	pickButton.click(openPicker);
})