// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var instituto_ = $.args;

var doacao = Alloy.createModel('doacao', {
	descricao:"",
	img:"/placeholder/caixadoacoes.jpg",
	latitude:0,
	longitude:0,
	instituto:instituto_.get('alloy_id')
});

var file = null;
var image = null;

function add() {
	
	if(OS_ANDROID){
		if(!Ti.Geolocation.hasLocationPermissions()){
			Ti.Geolocation.requestLocationPermissions(function(e){
				if(e.success){
					capture();
					return;
				}else{
					alert("É preciso dar permissão !!");
					return;
				}
			});
		}
	}
	
	Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH; 
	Ti.Geolocation.getCurrentPosition(function(e){
		doacao.set('latitude', e.coords.latitude);
		doacao.set('longitude',e.coords.longitude);
		if(file != null) {
			file.write(image);
		}
		doacao.save();
		$.doar.close();		
	});
}


function addimg(){
	
	Ti.Media.openPhotoGallery({
		mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO],
		error:function(e){
			alert(e.message);
		},
		success:savePhoto
	});
	
}

function savePhoto(e){
	image = e.media;
	file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,
	doacao.get('alloy_id')+'.jpg');
	$.imgImageView.image = image;
	doacao.set('img',file.getNativePath());
}
