<html>
<head>
 
</head>


	<head>
		<title>Wish you</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="/assets/css/main.css" />
	
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
					<audio id="audio" preload="auto" autoplay="autoplay" controls type="audio/mpeg">
				
					</audio>
					</nav> -->
						
						
					</header>
					
			  

				<!-- Footer -->
					<footer id="footer">
						<span class="copyright"></span>
					</footer>

			</div>
			
			
		</div>
		
		 
		<script>
			window.onload = function() { document.body.className = ''; }
			window.ontouchmove = function() { return false; }
			window.onorientationchange = function() { document.body.scrollTop = 0; }
	
		</script>
				
			<%-- <script type="text/javascript" src="/assets/js/jquery-3.1.1.js"></script>
			<script type="text/javascript" src="/assets/js/util.js"></script>
			<script type="text/javascript" src="/assets/js/EventObserver.js"></script>
			
			<script type="text/javascript" src="/assets/js/wishModel.js"></script>
			<script type="text/javascript" src="/assets/js/wishView.js"></script>
			
			
			<script type="text/javascript">
				  var currentUser = '<%= session.getAttribute("currentUser")%>';
				  var youwish = <%= request.getAttribute("wishDetails")%>;
				  var wishView = new WishView (document);
				  wishView._setWishDetails(youwish.wish);
				  

  
 			</script> --%>
			
			
			
		
	</body>
</html>
