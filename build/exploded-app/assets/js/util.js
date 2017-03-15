/**
 * 
 */

var NotificationView = null;
var LoadingView = null;
var RemoteProcedure = null;
var ObjectHelper = null;
var AppMode = null;

var DomainHelper = null;

(function($){
	NotificationView = function(){
		this.notificationDiv = $('.alert');
		this.timeOutId = null;
	};
	
	NotificationView.prototype = {
			
		constructor: NotificationView,			
		showNotification: function(message, timeout){
			console.log('Showing notification.');
			var self = this;
							
			self.notificationDiv.show();
			self.notificationDiv.html(message);			
			if(timeout != null && timeout != undefined){
				self.hideNotification(timeout);
			}				
		},
		
		hideNotification: function(timeout){
			
			var self = this;
			
			if(timeout != null && timeout != undefined){				
				clearTimeout(this.timeOutId);			
				this.timeOutId = setTimeout("document.querySelector('.notification').style.display = 'none';", timeout);
			}else{				
				document.querySelector('.notification').style.display = 'none';
			}			
		}
	}
	
	// Remote Procedure
	
	RemoteProcedure = function(){
		this._notification = new NotificationView();
	};
	
	RemoteProcedure.prototype = {

		constructor: RemoteProcedure,

		call: function(url, httpMethod, param, callback, returnType,currentScope){
			var self = this;			
			if(!returnType){
				returnType = 'json';
			}
			
			$.ajax({
				type: httpMethod,
				url: url,
				dataType: returnType,
				data: param,
				success:function(result){					
					callback(result, currentScope);
				},
				error:function(xhr,status,error){
					console.log('error');
					var errormessage = self.errorHandler(xhr,status);
					self._notification.showNotification(errormessage, 3000);
					
					callback(null, true);
				}
			});
		},
		
		errorHandler: function(jqXHR,exception){
			console.log("Status :"+jqXHR.status)
			var message	=	"";
			 if (jqXHR.status === 0) {
				 message='Not connected.Verify Network.';
		     } else if (jqXHR.status == 404) {
		    	 message='Requested page not found. [404]';
		     }else if (jqXHR.status == 500) {
		    	 message='Internal Server Error [500].';
		     }else if (exception === 'parsererror') {
		    	 message='Requested JSON parse failed.';
		     }else if(exception === "error"){
				message = "Oops!! Error while processing request.";
		     }else if(exception === "timeout"){
				message = "Oops!! Request timed out."
		     }else if(exception === "abort"){
				message = "Oops!! Request aborted.";
		     }else{
				message = "Oops Error!! Please try again."
			}

			return message;
		}
	}

	FileUpload = function(){
		this._notification = new NotificationView();
	};

	FileUpload.prototype = {
		constructor: RemoteProcedure,
		call: function(url, httpMethod, param, callback, returnType, currentScope){
			var self = this;			
			if(!returnType){
				returnType = 'json';
			}
			$.ajax({
				type: httpMethod,
				url: url,
				contentType: false,
                processData: false,
				data: param,
				success:function(result){					
					callback(result, currentScope);
				},
				error:function(xhr,status,error){
					console.log('error');
					var errormessage = self.errorHandler(xhr,status);
					self._notification.showNotification(errormessage, 3000);
					callback(null, true);
				}
			});
		},
		
		errorHandler: function(jqXHR,exception){
			console.log("Status :"+jqXHR.status)
			var message	=	"";
			 if (jqXHR.status === 0) {
				 message='Not connected.Verify Network.';
		     } else if (jqXHR.status == 404) {
		    	 message='Requested page not found. [404]';
		     }else if (jqXHR.status == 500) {
		    	 message='Internal Server Error [500].';
		     }else if (exception === 'parsererror') {
		    	 message='Requested JSON parse failed.';
		     }else if(exception === "error"){
				message = "Oops!! Error while processing request.";
		     }else if(exception === "timeout"){
				message = "Oops!! Request timed out."
		     }else if(exception === "abort"){
				message = "Oops!! Request aborted.";
		     }else{
				message = "Oops Error!! Please try again."
			}

			return message;
		}
	}
	

	// Object Helper
	
	ObjectHelper = function(){
		
	}
	
	ObjectHelper.prototype = {
		constructor: ObjectHelper,
		clone: function(obj){
			var c = new Object();
			for (var i in obj) {
		        if (obj.hasOwnProperty(i)) {
		         c[i] = obj[i];
		        }
			}
			return c;
		},
		
		generateUUID: function(){
		    var d = new Date().getTime();
		    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		        var r = (d + Math.random()*16)%16 | 0;
		        d = Math.floor(d/16);
		        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
		    });
		    return uuid;
		}
	}
	
	
	
	AppMode = function(){
		this._appMode = "";	
		this._set();
	}
	
	AppMode.prototype = {
			constructor: AppMode,
			_set: function(){
				
				var hostName = location.hostname;
												
				if(hostName.toLowerCase().indexOf('local') != -1){
					this._appMode = 'local';
				}else if(hostName.toLowerCase().indexOf('staging') != -1){
					this._appMode = 'staging';
				}else if(hostName.toLowerCase().indexOf('live') != -1){
					this._appMode = 'live';
				}
			},
			
			get: function(){
				return this._appMode;
			}
	};
	
	DomainHelper = {
		wishServer : '1',
		live : '',
		_appMode : new AppMode(),		
		set: function(){
			if(this._appMode.get() == 'local' ){
				this.wishServer = 'http://localhost:8890/';
			}
			else{
				this.wishServer = 'http://youwishnow.appspot.com/';
			}
		}
	};
	DomainHelper.set();
	
	
})(jQuery);

