var ironDale = '<h1>Irondale Furnace Park</h1><a href=#ironpark>Click</a>'

var caRiver = '<h1>Cahaba River Walk</h1><a href=#cariv>Click</a>'

var civiPark = '<h1>Civitan Park</h1><a href=#civipark>Click</a>'

var pLakeTrail = '<h1>Perry Lake Park Trails</h1><a href=#plakepark>Click</a>'

var hvBridge = '<h1>Hoover Bridge</h1><a href=#hovbridge>Click</a>'



$('#trails').live('pageshow',function()  {

               
                

                $('#map_trail').gmap({ 'center': '33.507013465226,-86.7271900177'});
                
               

                $('#map_trail').gmap().bind('init', function() { 
	                $('#map_trail').gmap('addMarker', { 'position':  '33.507013465226,-86.7271900177', 'bounds': true }).click(function() {
                $('#map_trail').gmap('openInfoWindow', { 'content': ironDale }, this);
              
                });      
                                                                                                                                                                                                                                          
                });
                
                 $('#map_trail').gmap().bind('init', function() { 
	                $('#map_trail').gmap('addMarker', { 'position':  '33.511607062621,-86.652866005898', 'bounds': true }).click(function() {
                $('#map_trail').gmap('openInfoWindow', { 'content': caRiver }, this);
              
                });      
                                                                                                                                                                                                                                          
                });
                
                 $('#map_trail').gmap().bind('init', function() { 
	                $('#map_trail').gmap('addMarker', { 'position':  '33.630727159442,-86.602263450623', 'bounds': true }).click(function() {
                $('#map_trail').gmap('openInfoWindow', { 'content': civiPark }, this);
              
                });      
                                                                                                                                                                                                                                          
                });
                
                 $('#map_trail').gmap().bind('init', function() { 
	                $('#map_trail').gmap('addMarker', { 'position':  '32.695028498837,-87.246336936951', 'bounds': true }).click(function() {
                $('#map_trail').gmap('openInfoWindow', { 'content': pLakeTrail }, this);
              
                });      
                                                                                                                                                                                                                                          
                });
                
                 $('#map_trail').gmap().bind('init', function() { 
	                $('#map_trail').gmap('addMarker', { 'position':  '33.401889084976,-86.759698390961', 'bounds': true }).click(function() {
                $('#map_trail').gmap('openInfoWindow', { 'content': hvBridge }, this);
              
                });      
                                                                                                                                                                                                                                          
                });

                
             
                
           });
                