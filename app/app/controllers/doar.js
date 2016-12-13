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
					alert("Agora já sabemos onde buscar sua doação ,por favor confirme novamente para doar !!");
					return;
				}else{
					alert("Por favor precisamos da sua permissão , para saber onde buscar a doação!!");
					return;
				}
			});
		}
	}
	
	Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH; 
	Ti.Geolocation.getCurrentPosition(function(e){
		
	   Ti.API.info(e.coords);
	   if (e.error) {
            alert("Não foi possivel utilizar o GPS , por favor inicie o aplicativo do Google Maps e tente novamente  !!");
       }else{
			Ti.API.info(e.coords);
			doacao.set('latitude', e.coords.latitude);
			doacao.set('longitude',e.coords.longitude);
			doacao.set('descricao',$.DescricaoTextField.value);
			if(file != null) {
				file.write(image);
				doacao.set('foto',file.getNativePath());
			}else{
				doacao.set('foto',"/placeholder/caixadoacoes.jpg");
			}
			doacao.save();
			alert("Obrigado por Help Us");
			Alloy.Collections.doacoes.fetch();
			$.viewDados.close();					
		}
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
}
