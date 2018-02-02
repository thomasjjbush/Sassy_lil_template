<!doctype html>

<html lang="en">

    <head>

        <!-- meta -->
        <meta http-equiv="X-UA-Compatible"  content="IE=edge">
        <meta charset="utf-8">
        <meta name="description"            content="Thomas Bush - Front End Web Developer - London">
        <meta name="keywords"               content="Thomas,Bush,Front,End,Developer,London">
        <meta name="author"                 content="Thomas Bush">
        <meta name="viewport"               content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        
        <!-- favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>

      	<title>Thomas Bush</title>

      	<!-- STYLESHEET **************************************************************************** -->
    	<link rel="stylesheet" type="text/css" href="css/main.css">

        <!-- JQUERY LIBRARY ************************************************************************ -->
        <script type="text/javascript" src="js/jquery.js"></script>

    </head>

    <body class="body noScrolling">
        
        <?php include('partials/nav.php'); ?><!-- navigation -->

        <main class="main">

            <?php include('sections/header.php'); ?><!-- header -->

            <?php include('sections/about.php'); ?><!-- about -->

            <?php include('sections/skills.php'); ?><!-- skills -->

            <?php include('sections/work.php'); ?><!-- work -->

            <?php include('sections/contact.php'); ?><!-- contact -->

            <?php include('partials/footer.php'); ?><!-- footer -->

        </main>

        <?php include('partials/hamburger.php'); ?><!-- hamburger -->

        <div class="preloader">

            <p>Loading...</p>
        
        </div>

        <!-- MY SCRIPTS **************************************************************************** -->
        <script type="text/javascript" src="js/preload.js"></script>
        <script type="text/javascript" src="js/script.js"></script>

    </body>

</html>