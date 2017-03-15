/**
 * This file will collect html elment and consider create view pass the view to model. 
 */
 
var PlayView = function (_document){
	this.playModel = new PlayModel();
	this._audio = _document.getElementById("audio");
	this._wishbutton = _document.querySelector(".wishbutton");
	this._wishpopUp = _document.querySelector(".browser_allow_popup");
	this._notification = _document.querySelector(".alert")
	this._currentPlayId = null;
	

	this.d = _document;
	
	var _this = this;
	this.playModel.playListEvent.bind(function(){
	  _this._renderPlayList(_this.playModel._playList);
	  
	});
	this.playModel.wishsaveEvent.bind(function(){
		_this.wishCreatedSuccessfully(_this.playModel.currentWish);
	});
	this._audio.addEventListener("play",function(event){
		_this._currentPlayId = this.getAttribute("playId");
		console.log("current play detail ",_this._currentPlayId);

		
	});
	
	this._wishbutton.addEventListener("click",function (event){
		_this._showWishpopUp();
	});
	this.playModel.userEvent.bind(function(){
		_this._renderWishInfoList(_this.playModel.user);
	})
	this._wishpopUp.querySelector(".close_brow_allow").addEventListener("click",function(){
		this.parentNode.style.display= "none";
	});
	this._wishpopUp.querySelector("#submitbutton").addEventListener("click",function(){
		if(this.value ==="Register!"){
			 _this._wishpopUp.querySelector("#email-form").style.display ="block";
			 _this._wishpopUp.querySelector("#name-form").style.display ="block";
			 _this._wishpopUp.querySelector("#login").style.display ="none";
			 _this._registerNow(_this._wishpopUp.querySelector("#email").value,_this._wishpopUp.querySelector("#name").value);
			
		}
		else if(this.value ==="Login"){
			 _this._login(_this._wishpopUp.querySelector("#email").value);

		}
		else {
			_this._saveWishDetails();
	
		}
	});
	
	this._wishpopUp.querySelector("#login").addEventListener("click",function(){
		 _this._wishpopUp.querySelector("#email-form").style.display ="block";
		 _this._wishpopUp.querySelector("#name-form").style.display ="none";
		 _this._wishpopUp.querySelector("#submitbutton").style.display ="block";
		 
		 _this._wishpopUp.querySelector("#submitbutton").value ="Login";
		 _this._wishpopUp.querySelector("#login").style.display ="none";


		 


	});
	
	
	
}

PlayView.prototype  = {
		_getPlayList : function (songType){
			if(songType == null || songType == undefined){
				var songType = "fdc2178b-1f85-42b2-af4b-e530fddcc3d8_oriya_album";
				var userId = this.playModel.admin.adminId;
				this.playModel._getPlaylist(songType,userId);
				
			}
			
		},
		_renderPlayList : function(playList){
			if(playList && playList.length > 0){
				
				for(var index = 0 ; index < playList.length; index ++){
					var _source = this.d.createElement("source");
					_source.type = "audio/mp3";
					_source.src = playList[index].songLink;
					this._audio.append(_source);
					}
				
				this._audio.src = playList[0].songLink;
				this._audio.setAttribute("playId",playList[0].songId);
				this._audio.play();
				
				
				}
	     },
	     _showWishpopUp(){
	    	 console.log("current user",this.playModel.user);
	    	 var currentUser = this.playModel.user;
	    	 if(currentUser !=null  && currentUser !="null"){
		    	 this._wishpopUp.style.display ="block";
	    		 this._wishpopUp.querySelector("#name-form").style.display ="none";
	    		 this._wishpopUp.querySelector("#email-form").style.display ="none";
	    		 this._wishpopUp.querySelector("#message-form").style.display ="block";
	    		 this._wishpopUp.querySelector("#select-form").style.display ="block";
	    		 this._wishpopUp.querySelector("#submitbutton").value ="Create Wish!";
	    		 this._wishpopUp.querySelector("#submitbutton").style.display ="block";
				 this._wishpopUp.querySelector("#login").style.display ="none";

	    		 


	    		 
	    	 }
	    	 else{
		    	 this._wishpopUp.style.display ="block";
	    		 this._wishpopUp.querySelector("#name-form").style.display ="none";
	    		 this._wishpopUp.querySelector("#email-form").style.display ="none";
	    		 this._wishpopUp.querySelector("#submitbutton").style.display ="block";
		    	 this._wishpopUp.querySelector("#submitbutton").value ="Register!";
		    }
	    	 
	    	 
	    	 
	     },
	     _registerNow : function (email,name){
	    	 this.playModel._registerNow(email,name);
	    	 
	    	 
	     },
	     _login : function (email){
	    	 this.playModel._login(email);
	    	 
	    	 
	     },
	     _renderWishInfoList :function (user){
	    	console.log("user is _renderWishInfoList ",user);
	    	this._showWishpopUp();
	    	 
	    	 
	    	 
	    	 
	     },
	     _saveWishDetails : function(){
	    	 var wishObject = {};
	    	 wishObject.name =  this._wishpopUp.querySelector("#name").value;
	    	 wishObject.wishMessage = this._wishpopUp.querySelector("#message").value;
	    	 wishObject.userId 	= this.playModel.user.userId;
	    	 wishObject.playId = this._currentPlayId;
	    	 wishObject.wishType = this._wishpopUp.querySelector("#wishtype").value;
	    	 console.log(wishObject);
	    	 this.playModel._saveWishDetail(wishObject);
	    	
	    	 
	     },
	     wishCreatedSuccessfully : function(wishLink){
	    	 
	    	 this._wishpopUp.style.display ="none";
	    	 console.log("the wish link ",wishLink);
	    	 var span = document.createElement("span");
	    	
	    	 
	    	 _remoteCall._notification.showNotification("successfully created link : <a href="+wishLink+" target='_black'> view it</a>");
	     }
		
		
		
}