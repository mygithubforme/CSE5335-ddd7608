$(document).ready(function() {
  $("#button_tag1").click(function(event){
    
    $.getJSON("welcome/demo_json.json", function(result){
          
          var content = "<table>";
          var i;
          content += "<tr><td><strong>" + " Name " + "</strong></td><td><strong>" + " Job " + "</strong></td></tr>";
              for (i = 8; i < result.length; i++)
              {
                  content += "<tr><td>" + result[i].name1 + "</td><td>" + result[i].job + "</td></tr>";
            }      
              content += "</table>";

            $("#p1").append(content);
            var LatLng=" Arlington- Latitude: "+result[0].name1+" "+"Longitude: "+result[0].job;
            LatLng += "<br/>"+"Dallas- Latitude: "+result[1].name1+" "+"Longitude: "+result[1].job;
            LatLng += "<br/>"+"Grand Paririe- Latitude: "+result[2].name1+" "+"Longitude: "+result[2].job

            $("#p2").append(LatLng);

            //var myCenter=new google.maps.LatLng(result[0].name1,result[0].job);

            initialize(result);
            //drawChart();
        });
  });
});



function initialize(result)
{
  //alert(result[0].name1);
var bounds = new google.maps.LatLngBounds();
var mapProp = {
  center: new google.maps.LatLng(result[0].name1,result[0].job),
  zoom:10,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
var marker;
var map=new google.maps.Map(document.getElementById("map1"),mapProp);
var i,pos;
for(i=0;i<3;i++)
{ 
 // alert(result[0].name1);
  pos = new google.maps.LatLng(result[i].name1,result[i].job);
  bounds.extend(pos);
  marker=new google.maps.Marker({
  position: pos,
  animate: bounce,
  map: map
  });
 // map.setCenter(marker.getPosition());  
}

}