/**
 * 
 */
var _remoteCall = new RemoteProcedure();

var WishView = function (_documents){
	this._d = _documents;
	this._bg = this._d.getElementById("bg");
	this._audio = this._d.getElementById("audio");

	
	
}
WishView.prototype = {
		_setWishDetails :function (_wish){
			switch(_wish.wishType){
			case "New Year" :
				this._bg.style.backgroundImage="url('/assets/css/images/newyear.png')"
				break;
			case "Birth Day": 
				this._bg.style.backgroundImage="url('/assets/css/images/birthday.png')";
				break;
			case "best of luck" :
				this._bg.style.backgroundImage="url('/assets/css/images/bestofluck.png')";
				break;
			case "Other" :
				this._bg.style.backgroundImage="url('/assets/css/images/nature.png')";
				break;
			}
			
			// set message and other details.
			_remoteCall._notification.showNotification(_wish.wishMessage);
			this._playWishSong(youwish.play);
			},
			_playWishSong:function(_playDetails){
				this._audio.src = _playDetails.songLink;
				this._audio.setAttribute("playId",_playDetails.songId);
				this._audio.play();
				
			} 
		
	
}