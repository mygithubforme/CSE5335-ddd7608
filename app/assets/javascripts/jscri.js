
$(document).ready(function() {
	$("#button_tag1").click(function(event){
		
		$.getJSON("welcome/demo_json.json", function(result){
		  		
		  		var content = "<table>";
		  		var i;
		  		content += "<tr><td><strong>" + " Name " + "</strong></td><td><strong>" + " Job " + "</strong></td></tr>";
          		for (i = 1; i < result.length; i++)
          		{
              		content += "<tr><td>" + result[i].name1 + "</td><td>" + result[i].job + "</td></tr>";
      			}      
           		content += "</table>";

      			$("#p1").append(content);
      			var LatLng="Latitude: "+result[0].name1+" "+"Longitude: "+result[0].job
      			$("#p2").append(LatLng);

      			var myCenter=new google.maps.LatLng(result[0].name1,result[0].job);

      			initialize(myCenter);
      	});
	});
});


function initialize(myCenter)
{
var mapProp = {
  center:myCenter,
  zoom:12,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("map1"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}