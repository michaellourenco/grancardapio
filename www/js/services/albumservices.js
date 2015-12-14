(function(){
	function albumProvider(){

		this.getAlbums = function(){
			return albums;

		};
		this.getAlbumByName = function(name){
			for (var i=0; i<albums.length; i++){
				if(name.toLowerCase() == albums[i].name.toLowerCase())
					return albums[i];
			}
			throw new Error("not_found");
		};

		this.addAlbum = function(album_data){
			if(!album_data.name) throw new Error("mising_name");
			for(var i=0; i< albums.length; i++){
				if(album_data.name.toLowerCase() == albums[i].name.toLowerCase())
					throw new Error("duplicate_album_name");
			}
		albums.push(album_data);

		};
	}

	photoApp.service("albumProvider", albumProvider);

})();