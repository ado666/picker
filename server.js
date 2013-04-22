function getAlbumResponse(){
	var data	= getAlbums().response;

	var html	= '';
	html		+= '<table>';
	for (var i = 0, l = data.length; i < l; i++){
		html		+= '<td class=ip-album id='+data[i].aid+'>';
		html		+= data[i].title;
		html		+= '</td>';
	};
	html		+= '</table>';

	return html;
};

function getPhotoResponse(){
	var data	= getPhotosByAlbum().response;

	var html	= '';
	html		+= '<table>';
	for (var i = 0, l = data.length; i < l; i++){
		html		+= '<td>';
		html		+= '<img class="ip-photo" src='+data[i].src_small+' tooltip_src='+data[i].src_big+' />';
		html		+= '</td>';
	};
	html		+= '</table>';

	return html;
}