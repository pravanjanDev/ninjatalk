/**
 * 
 */

var ObserverEvent = function(sender){

  this._sender = sender;
	this._listener = [];
	
	}
  ObserverEvent.prototype = {
    bind: function(listener){
    this._listener.push(listener);
  },
  notify : function(senderArgs){
	  for(var index in this._listener){
		  this._listener[index](this._sender,senderArgs);
		  
	  }
	  
  	}
  
  };