<?php include('../inc/event-header.php'); ?>

  <!--- Jumbotron
  =================================================== -->

   <div class="jumbotron text-center">
      <h1>Events</h1>
   </div>
  <!--- Carousel
  =================================================== -->
  <div class="container">
  <div id="myCarousel" class="carousel slide">
      <div class="container">
        <ol class="carousel-indicators">
          <li class="active" data-target="#myCarousel" data-slide-to="0"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        
        <div class="carousel-inner">
          <div class="item active pic-1">
            <h1 class="text-1 bottom-border">Trinity is on the MOVE...</h1>
            <h1 class="lead text-center"><span class="light">Join us at our New Location.</span></h1>
            <p class="btn-group text-center">
              <a class="btn-group btn-success btn-lg" href="#">Download app &raquo</a>
            </p>
          </div>
          
          <div class="item text-center pic-2">
            <h1 class="event-head">Next Up..</h1>
            <h2 class="lead text-2"><strong>Women's Faith Support Group Meeting</strong></h2>
            <h3 class="lead text-2">Thursday, November 3  @6:30pm</h3>
            <a class="btn-group btn-primary btn-lg" href="Ministries.html">Ministry Details &raquo</a>
          </div>
        
          <div class="item text-center pic-3">
            <h1 class="text-center text-3">Bible Study</h1>
            <h3 class="lead text-3">Wednesday, November 2 @7:00pm</h3>
          </div>
          
        </div>
        
      </div>
      
        <!-- Left and Right controls -->
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="icon-prev" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="icon-next" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      
     </div>
      </div>
    </div>
  <div class="content-section"></div>
    <?php include("../inc/footer.php"); ?>
</body>
</html>