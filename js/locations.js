

var coleChange = '<h1>Camp Coleman</h1><br><a href=#campcoleman>Click</a>'

var civPark = '<h1>Civitan Park</h1><a href=#civpark>Click</a>'

var cRoad = '<h1>County Road 10</h1><a href=#croad>Click</a>'

var h78 = '<h1>Highway 78</h1><a href=#hseven>Click</a>' 

var gMill = '<h1>Grants Mill Road</h1><a href=#gmill>Click</a>' 

var oRoad = '<h1>Overton Road</h1><a href=#oroad>Click</a>' 

var t80 = '<h1>Highway 280 Dam</h1><a href=#twoeighty>Click</a>' 

var rDrive = '<h1>Riverford Drive</h1><a href=#rdrive>Click</a>' 

var bBridge = '<h1>Bains Bridge</h1><a href=#bbridge>Click</a>' 

var hFifty = '<h1>Highway 52</h1><a href=#hfifty>Click</a>' 

var bCreek = '<h1>Bucks Creek Park</h1><a href=#buckcreek>Click</a>' 

var bFord = '<h1>Booths Ford</h1><a href=#bford>Click</a>'

var presOne = '<h1>Presbytery 1</h1><a href=#presbyone>Click</a>'

var mSlab = '<h1>Marvel Slab</h1><a href=#marvel>Click</a>'

var tTake = '<h1>Tates Take Out</h1><a href=#tate>Click</a>'

var cWild = '<h1>Cahaba River National Wildlife Refuge</h1><a href=#cahaba>Click</a>' 

var lilyTrip = '<h1>Lily Trip Beach</h1><a href=#lily>Click</a>'

var cCreek = '<h1>Caffee Creek</h1><a href=#caffee>Click</a>'

var pFerry = '<h1>Pratts Ferry Bridge</h1><a href=#pratt>Click</a>'

var cHist = '<h1>Cahaba Historical Park</h1><a href=#histpark>Click</a>'

var hBridge = '<h1>Harrisburg Bridge</h1><a href=#harris>Click</a>' 

var heBridge = '<h1>Heiburger Bridge</h1><a href=#heibridge>Click</a>'

var pLake = '<h1>Perry Lake Park</h1><a href=#perry>Click</a>'

var sBridge = '<h1>Sprott Bridge</h1><a href=#sprott>Click</a>'

var rAccess = '<h1>Radford Access</h1><a href=#radford>Click</a>'

var suttle = '<h1>Suttle</h1><a href=#suttle>Click</a>' 

var h80 = '<h1>Highway 80 Marion Junction</h1><a href=#marion>Click</a>'

var h22 = '<h1>Highway 22</h1><a href=#hwy22>Click</a>'

var takeOut = '<h1>Alabama River Take Out</h1><a href=#takeout>Click</a>'





 

       
        

$('#river').live('pageshow',function()  {

               
                

                $('#map_canvas').gmap({ 'center': '33.62258872997,-86.599988937378'});
                
               

                

                
                
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.62258872997,-86.599988937378', 'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': coleChange }, this);
              
                });      
                                                                                                                                                                                                                                          
                });
                
                
                              
               
                
                 $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.621230761301,-86.567373275757', 'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': civPark }, this);
                });                                                                                                                                                                                                                               
                });
                
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.605237283535,-86.548898220062', 'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': cRoad }, this);
                });                                                                                                                                                                                                                               
                });
                
                
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.546366469076,-86.613292694092', 'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': h78 }, this);
                });                                                                                                                                                                                                                               
                });
                
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.514635035823,-86.663246154785', 'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': gMill }, this);
                });                                                                                                                                                                                                                               
                });
                
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.485030599532,-86.702020168304', 'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': oRoad }, this);
                });                                                                                                                                                                                                                               
                });

 $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.431763668305,-86.713886260986', 'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': t80 }, this);
                });                                                                                                                                                                                                                               
                });
                
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.387104709722,-86.778066158295', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': rDrive }, this);
                });                                                                                                                                                                                                                               
                });
                
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.363344,-86.813822', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': bBridge }, this);
                });                                                                                                                                                                                                                               
                });
                
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.310329790262,-86.870672106743', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': hFifty }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.297244,-86.843658', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': bCreek }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.185139500547,-87.001166939735', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': bFord }, this);
                });                                                                                                                                                                                                                               
                });
                
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.169707677776,-87.017211914062', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': presOne }, this);
                });                                                                                                                                                                                                                               
                });
 
                
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.165553,-87.029444', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': mSlab }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.159892,-87.025933', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': tTake }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.094993107768,-87.057638168335', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': cWild }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.080236,-87.066994', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': lilyTrip }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.077236,-87.072814', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': cCreek }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '33.018681,-87.078219', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': pFerry }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '32.944942,-87.139044', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': cHist }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '32.855652799757,-87.19792842865', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': hBridge }, this);
                });                                                                                                                                                                                                                               
                });
 
 				$('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '32.774700327269,-87.272965908051', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': heBridge }, this);
                });                                                                                                                                                                                                                               
                });
            
               $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '32.694539,-87.243008', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': pLake }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '32.668226600493,-87.24228143692', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': sBridge }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '32.591623528431,-87.217326164246', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': rAccess }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '32.528578828718,-87.203464508057', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': suttle }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '32.44445036694,-87.180236577988', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': h80 }, this);
                });                                                                                                                                                                                                                               
                });
 
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '32.35945,-87.133056', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': h22 }, this);
                });                                                                                                                                                                                                                               
                });
                
                $('#map_canvas').gmap().bind('init', function() { 
	                $('#map_canvas').gmap('addMarker', { 'position':  '32.315653178625,-87.09743142128', 						'bounds': true }).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': takeOut }, this);
                });                                                                                                                                                                                                                               
                });
                });
 
 
                
                

              

               
               



               

     

               

                

               

                
                

                

                

                

                

                

                

                

                

                

                

        


        
        


function addToCC(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Camp Coleman</li>');
	$("#addtolist").listview('refresh');
}

function addToCP(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Civitan Park</li>');
	$("#addtolist").listview('refresh');
}

function addToCR(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>County Road 10</li>');
	$("#addtolist").listview('refresh');
}

function addToH7(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Highway 78</li>');
	$("#addtolist").listview('refresh');
}

function addToGM(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Grants Mill Road</li>');
	$("#addtolist").listview('refresh');
}

function addToOR(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Overton Road</li>');
	$("#addtolist").listview('refresh');
}
 
function addToT8(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Highway 280 Dam</li>');
	$("#addtolist").listview('refresh');
}

function addToRD(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Riverford Drive</li>');
	$("#addtolist").listview('refresh');
}

function addToBB(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Bains Bridge</li>');
	$("#addtolist").listview('refresh');
}
 
function addToH52(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Highway 52</li>');
	$("#addtolist").listview('refresh');
}
 
function addToBC(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Buck Creek Park</li>');
	$("#addtolist").listview('refresh');
}
 
function addToBF(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Booths Ford</li>');
	$("#addtolist").listview('refresh');
}

function addToPO(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Presbytery 1</li>');
	$("#addtolist").listview('refresh');
}

function addToMS(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Marvel Slab</li>');
	$("#addtolist").listview('refresh');
}

function addToTT(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Tates Take Out</li>');
	$("#addtolist").listview('refresh');
}


function addToCW(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Cahaba River National Wildlife Refuge</li>');
	$("#addtolist").listview('refresh');
}

function addToLB(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Lily Trip Beach</li>');
	$("#addtolist").listview('refresh');
}

function addToCF(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Caffee Creek</li>');
	$("#addtolist").listview('refresh');
}

function addToPB(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Pratts Ferry Bridge</li>');
	$("#addtolist").listview('refresh');
}


function addToHP(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Cahaba Historical Park</li>');
	$("#addtolist").listview('refresh');
}


function addToHB(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Harrisburg Bridge</li>');
	$("#addtolist").listview('refresh');
}


function addToHIB(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Heiburger Bridge</li>');
	$("#addtolist").listview('refresh');
}

function addToPL(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Perry Lake Park</li>');
	$("#addtolist").listview('refresh');
}

function addToSB(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Sprott Bridge</li>');
	$("#addtolist").listview('refresh');
}


function addToRA(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Radford Access</li>');
	$("#addtolist").listview('refresh');
}


function addToSU(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Suttle</li>');
	$("#addtolist").listview('refresh');
}


function addToMJ(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Highway 80 Marion Junction</li>');
	$("#addtolist").listview('refresh');
}

function addToH2(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Highway 22</li>');
	$("#addtolist").listview('refresh');
}

function addToTO(){
	$.mobile.changePage($("#tlist"));
	$("#addtolist").append('<li>Alabama River Take Out</li>');
	$("#addtolist").listview('refresh');
}






 

 
 
 
 
        





