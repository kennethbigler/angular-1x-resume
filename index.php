<!DOCTYPE html>
<html>
<head>
    <!-- Character Set -->
    <meta charset="UTF-8">
    <!-- Device Compatibility -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Keywords for SEO, feel free to ignore this, it's an Intranet -->
    <meta name="keywords" content="Kenneth">
    <!-- A short description of my website -->
    <meta name="description" content="The Homepage for Kenneth and Launch site to everything Kenneth.">
    <!-- I made this template, feel free to direct any questions about the template to kennethbigler@gmail.com-->
    <meta name="author" content="Kenneth Bigler">
    <!-- Adding a stylesheet to fix issues on this particular bootstrap window -->
    <link rel='stylesheet' media='screen and (min-width: 992px) and (max-width: 1199px)' href='css/tabletstyles.css' />
    <!-- Site Title -->
     <title>My BootStrap Site</title>
    <!-- Please note, CDNs are not supported in IE 8, we will have to download source code and host it -->
    <!-- Bootstrap Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <!-- Google Font -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <!-- Bootstrap Optional theme -->
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">-->
    <!-- Custom Style Sheet -->
    <link rel="stylesheet" href="css/mystyles.css">
</head>
<!---------------------------------------------------------------------------------------------------------------->

<body onLoad="getData(); checkDate();">

<div class="container-fluid">
	<!-- Navigation Section -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
        	<!-- Inactive Text About Me -->
        	<a class="navbar-brand" href="#">Kenneth Bigler</a>
            <!-- Bootstrap Colapsed Menu Look -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <!-- Menu Items -->
            <div id="navbar" class="collapse navbar-collapse col-sm-3">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <!-- XXXXX Tab -->
                    <li class="dropdown">
                    	<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Google <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
							<li><a href="http://www.google.com/">Google</a></li>
							<li><a href="http://www.google.com/">Google</a></li>
						</ul>
                    </li>
                </ul>
            <!--/Menu Items -->
            </div>
        <!-- /container -->
        </div>
    </nav>
	
    <!-- Header Area -->
    <div class="jumbotron">
        <h1>Kenneth Bigler</h1>
    </div>
    
<!---------------------------------------------------------------------------------------------------------------->
    <!-- Main Body of the Website -->
    <div class="row">
    
<!---------------------------------------------------------------------------------------------------------------->
    	<!-- Lefthand Column -->
        <div class="col-md-3 col-sm-4">
            <!-- Quicklinks -->
            <div class="leftContent">
            	<h3 class="leftHeader">Quicklinks</h3>
              	<ul>
                    <li><a href="http://www.google.com/">Google</a></li>
                    <li><a href="http://www.google.com/">Google</a></li>
                </ul>
            <!-- /Quicklinks -->
            </div>
            
            <!-- Code for Stock Quote -->
            <div class="leftContent">
                <h3 class="leftHeader"><a href="http://quote.yahoo.com/q?s=TSLA&amp;d=1d">Tesla Stock Quote</a></h3>
                <div class="minilink" align="center" id="result"></div>
                <div class="minilink" align="center"></div>
            <!-- /Stock Quote -->
            </div>
            
        <!-- /Lefthand Side -->
        </div>
        
<!---------------------------------------------------------------------------------------------------------------->
        <!-- Main Content, Righthand Side -->
        <div class="col-md-9 col-sm-8">
            <!-- Begin About Section -->
        	<div class="mainContent">
            	<h3 class="mainHeader">About Me</h3>
               	<p>Lorem Ipsum</p>
            <!-- / End News Module -->
            </div>
            <!-- Begin News Section -->
        	<div class="mainContent">
            	<h3 class="mainHeader"><a href="http://www.google.com/">Career</a></h3>
                <p>Lorem Ipsum</p>
            </div>
        <!-- /Righthand Side -->
    	</div>
	<!-- /row -->
    </div>
<!-- /container -->
</div>

<!---------------------------------------------------------------------------------------------------------------->
<footer class="footer">
    <div class="container-fluid">
        <p style="display:inline;" id="myDate"></p>
        <p style="float:right;"><a href="#feedback">Feedback</a></p>
    </div>
</footer>

<!---------------------------------------------------------------------------------------------------------------->
<!-- Please note, CDNs are not supported in IE 8, we will have to download source code and host it -->
<!-- $ code from Google CDN for Bootstrap -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<!-- Bootstrap Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<!-- My own custom Javascript Functions -->
<script src="js/myscripts.js"></script>

</body>
</html>