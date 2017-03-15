<!DOCTYPE HTML>


<html>
<head>
 <script type="text/javascript">
  var currentUser = '<%= session.getAttribute("currentUser")%>';
 </script>

</head>

<div class="browser_allow_popup" style="display:none">
	<div class="close_brow_allow">X</div>
	 <div id="form" style ="display: block" >

				<div  id="fish"></div>
						<div  id="fish2"></div>
						
						
						<div class="formgroup" id="name-form" style="display:none">
						    <label for="name">Your name*</label>
						    <input type="text" id="name" name="name" />
						</div>
						
						<div class="formgroup" id="email-form" style="display:none">
						    <label for="email">Your e-mail*</label>
						    <input type="email" id="email" name="email" />
						</div>
						
						<div class="formgroup" id="select-form" style="display:none">
						    <label for="select">Wish type *</label>
						    <select id ="wishtype">
						    <option>Other</option>
						    
						    <option> New Year</option>
						    <option> Birth Day</option>
						    <option> best of luck</option>
						    </select>
						</div>
						
						<div class="formgroup" id="message-form" style="display:none">
						    <label for="message">Your message</label>
						    <textarea id="message" name="message"></textarea>
						</div>
							<input id="login" type="submit" value="Login" />
						
							<input id="submitbutton" type="submit" value="Send your message!" />
				</div> 
	<div class="firefox_btn" onclick='downloadlink()'></div>
</div>
	<head>
		<title>Today playlist</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
	</head>
	<body class="loading">
		<div id="wrapper">
		
			<div id="bg"></div>
			
			<div id="overlay"></div>
			<div id="main">

				<!-- Header -->
					<header id="header">
					<div class="alert">
  					<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  				 	Indicates a dangerous or potentially negative action.
					</div>
					<!-- <nav  style="display:block">
					<audio id="audio"  autoplay="autoplay" controls type="audio/mpeg">
				
					</audio>
					</nav>
						
					<div> <button class="wishbutton"> wish this song</button></div>
						 -->
					</header>
					
			  

				<!-- Footer -->
					<footer id="footer">
						<span class="copyright"></span>
					</footer>

			</div>
			
			
		</div>
		
		 
		<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
		<script>
			window.onload = function() { document.body.className = ''; }
			window.ontouchmove = function() { return false; }
			window.onorientationchange = function() { document.body.scrollTop = 0; }
		</script>
		<!-- <script type="text/javascript" src="assets/js/jquery-3.1.1.js"></script>
		<script type="text/javascript" src="assets/js/util.js"></script>
		<script type="text/javascript" src="assets/js/EventObserver.js"></script>
		
		
		<script type="text/javascript" src="assets/js/view.js"></script>
		<script type="text/javascript" src="assets/js/model.js"></script>
		<script type="text/javascript" src="assets/js/action.js"></script> -->
		
		
		
	</body>
</html>
