        var dropped = false;
        
        var latlngs = [
        {lat: 41.335133, lng: -73.089191},
        {lat: 41.302161, lng: -72.936202},
        {lat: 41.304544, lng: -72.935795}
        ];

        var icons = ['http://www.googlemapsmarkers.com/v1/A/682133/FFFFFF/682133/', 
                    'http://www.googlemapsmarkers.com/v1/B/682133/FFFFFF/682133/', 
                    'http://www.googlemapsmarkers.com/v1/C/682133/FFFFFF/682133/'];

        var info_array = ['<strong>Griffin Hospital</strong><br>\
                    130 Division Street<br> Derby, CT 06418<br>\
                    <a href="https://goo.gl/maps/D9zr5sVF57D2">Get Directions</a>',
                    '<strong>Yale Physician\'s Building</strong><br>\
                    800 Howard Avenue<br> New Haven, CT, 06519<br>\
                    <a href="https://goo.gl/maps/jCZZnP8V9912">Get Directions</a>',
                    '<strong>Yale New Haven Hospital</strong><br>\
                    20 York Street<br> New Haven, CT, 06510<br>\
                    <a href="https://goo.gl/maps/52SYagWNAqy">Get Directions</a>'];

        var map;
        var markers = [];

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 41.317458, lng: -73.022714},
                zoom: 12
            });
            map.setOptions({'scrollwheel': false});
        
        }
        var info_windows = [];
        var i;

        
        
                

        
        function drop() {
            
            add_info_windows();
            for (var i = 0; i < latlngs.length; i++) {
              addMarkerWithTimeout(latlngs[i], i * 200, icons[i], i);
            }
            
        }

        function addMarkerWithTimeout(position, timeout, icon, number) {
            window.setTimeout(function() {

                var marker_new = new google.maps.Marker({
                    
                    position: position,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    icon: icon

                })
                markers.push(marker_new);
                marker_new.addListener('click', function() {
                    info_windows[number].open(map, marker_new);
                    console.log("clicked");
                    
                });
            }, timeout);
            
        }

        function add_info_windows() {
            var k;
            for(k = 0; k < latlngs.length; k++) {
                info_windows[k] = new google.maps.InfoWindow({
                    content: info_array[k]
                });

            }
            
            
          
        }

        
        function detectBrowser() {
            var useragent = navigator.userAgent;
            var mapdiv = document.getElementById("map");

            if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
                mapdiv.style.width = '100%';
                mapdiv.style.height = '100%';
            } 
            else {
                mapdiv.style.width = '600px';
                mapdiv.style.height = '800px';
            }
        }
