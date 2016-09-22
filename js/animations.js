
        var about_row_slide = false;
         $(document).ready(function() {


            $(".youtube").each(function() {
                // Set the BG image from the youtube ID
                $(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');
                // Click the video div
                $(document).delegate('#' + this.id, 'click', function() {
                  // Build embed URL
                  var iframe_url = "//www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
                  // Grab extra parameters set on div
                  if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
                  // Build iframe tag
                  var iframe = $('<iframe/>', {'allowfullscreen':'allowfullscreen', 'frameborder': '0', 'src': iframe_url})
                  // Replace the YouTube thumbnail with YouTube HTML5 Player
                  $(this).append(iframe);
                });// /click
            }); // /each video
            setTimeout(function(){
                document.getElementById("intro-caption-header").style.visibility = "visible";
                $("#intro-caption-header").addClass("animated fadeInLeftBig");
            },200);

             setTimeout(function(){
                document.getElementById("work-titles").style.visibility = "visible";
                $("#work-titles").addClass("animated fadeInLeftBig");
            },600);

          
                    
                
                
                
           
            $(window).scroll(function(){


                console.log('started');
        
                var bottom_of_map = $("#map").offset().top + $("#map").outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                var top_of_about_paragraph = $("#about-paragraph").offset().top;
                var top_of_map_label_container = $("#map-markers").offset().top;
                
                if(bottom_of_window + 50 > bottom_of_map && dropped == false) {
            
                
                    console.log('dropped');
                    dropped = true;
                    drop();
                }   
               
                if(bottom_of_window > top_of_about_paragraph){
                    setTimeout(function(){
                        $('#about-paragraph').addClass('animated fadeInLeftBig')
                        document.getElementById("about-paragraph").style.visibility = "visible";
                    },200);
                    /*setTimeout(function(){
                        document.getElementById("about-paragraph").style.borderRight = "#206BA4 solid 2px";

                    },1100);  */  
                    /*setTimeout(function(){
                       document.getElementById("divider").style.height = "200px";

                    },1100);   */      
                    setTimeout(function(){
                        $('#cv-btn').addClass('animated fadeInRightBig')
                        document.getElementById("cv-btn").style.visibility = "visible";
                    },200);
                }
                
        
            
           
            });
        });