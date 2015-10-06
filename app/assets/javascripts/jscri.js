$(document).ready(function() {
  $("#button_tag1").click(function(event){
    
    $.getJSON("welcome/demo_json.json", function(result){
          
          var content = "<table>";
          var i;
          content += "<tr><td><strong>" + " Name " + "</strong></td><td><strong>" + " Job " + "</strong></td></tr>";
              for (i = 9; i < result.length; i++)
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

function drawChart(){
   $("#button_tag1").click(function(){
   // Create the data table.
   $.getJSON("welcome/demo_json.json", function(result){

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Activity');
      data.addColumn('number', 'Hours');
      data.addRows([
        [(result[3].name1).toString(), Number(result[3].job)],
        [(result[4].name1).toString(), Number(result[4].job)],
        [(result[5].name1).toString(), Number(result[5].job)],
        [(result[6].name1).toString(), Number(result[6].job)],
        [(result[7].name1).toString(), Number(result[7].job)],
        [(result[8].name1).toString(), Number(result[8].job)]
      ]);

      // Set chart options
      var options = {'title':'My whole day as a Pie Chart',
                     'width':400,
                     'height':300};

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart1'));
      chart.draw(data, options);
    });
 });
    }


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
  map: map
  });
 // map.setCenter(marker.getPosition());  
}

}