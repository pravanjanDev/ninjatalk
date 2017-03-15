/** The Files will have all data information which we would be collecting from view and sending to sending to servver
 * 
 */
var _remoteCall = new RemoteProcedure();

var PlayModel = function (){
	
	this.admin = {};
	this.admin.adminId = "ccb35cd2-6b53-4e30-96a2-c6dc4abb9ffe_admin";
	this._playList = [];	
	this.user 	  =null;
	this.currentWish = null;
	this.playListEvent = new ObserverEvent(this);
	this.userEvent	   = new ObserverEvent(this);
	this.wishsaveEvent = new ObserverEvent(this);
	
	var hit ="10";
}

PlayModel.prototype = {
		 
		_getPlaylist : function (_songType , _userId){
			var getSongsUrl = DomainHelper.wishServer+"wish/play/getSongList/"+_songType+"/"+_userId;
			 console.log("the getsong url is ",getSongsUrl);
			
			_remoteCall.call(getSongsUrl,"GET",null,this._getPlaylistResult ,null, this);
			
			
		},
      _getPlaylistResult : function (result , currentScope){
    	  console.log("The result ",result);
    	  if(result && result.status){
    		  currentScope._playList = result.songList;
    		  currentScope.playListEvent.notify();
    	  }
      },
      _registerNow : function (email,name){
    	  
    	  var registerUrl = DomainHelper.wishServer+"wish/user/registerNow/"+email+"/"+name;
    	  console.log("the getsong url is ",registerUrl);
			
	    _remoteCall.call(registerUrl,"GET",null,this._getUserResult ,null, this);
			
      },
      _login : function (email){
    	  
    	  var loginUrl = DomainHelper.wishServer+"wish/user/getUser/"+email;
    	  console.log("the getsong url is ",loginUrl);
    	  _remoteCall.call(loginUrl,"GET",null,this._getUserResult ,null, this);
			
      },
      _getUserResult : function(result,currentScope){
    	  console.log(result);
    	  if(result && result.status){
    		  currentScope.user = result.user;
    		  currentScope.userEvent.notify();
    		  
    	  }
    	  
    	  
      },
      _getPlayById : function (playId){
    	var playList =  this.playList;
    	var currentPlay = {}
    	for (index =0 ; index < playList.length; index ++){
    		if(playList[index].songId == playId){
    			currentPlay =playList[index];
    			break;
    		}
    	}
    	return currentPlay;
    	  
      },
      _saveWishDetail : function(wish){
    	  
    	  var saveWish = DomainHelper.wishServer+"wish/wishnow/savewish/"+wish.userId+"/"+wish.playId+"/";
    	  console.log("the getsong url is ",saveWish);
			
	    _remoteCall.call(saveWish,"POST",JSON.stringify(wish),this._wishSaveds ,null, this);
      },
      _wishSaveds : function(result, currentScope){
    	console.log(result	)  
    	if(result.status){
    		currentScope.currentWish = result.wishLink;
    		currentScope.wishsaveEvent.notify();

    	}
      }
      
	
}