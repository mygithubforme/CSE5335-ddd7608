$(document).ready(function() {
	$("#button_tag1").click(function(event){
		
		$.getJSON("welcome/demo_json.json", function(result){
		  		
		  		var content = "<table>";
		  		var i;
		  		content += "<tr><td><strong>" + " Name " + "</strong></td><td><strong>" + " Job " + "</strong></td></tr>";
          		for (i = 0; i < result.length; i++)
          		{
              		content += "<tr><td>" + result[i].name1 + "</td><td>" + result[i].job + "</td></tr>";
      			}      
           		content += "</table>";

      			$("#p1").append(content);
      	});
	});
});