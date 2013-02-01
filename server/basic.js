var server = require('webserver').create();
var service = server.listen(9650, function(request, response) {
	    response.statusCode = 200;
	        response.write(resp);
		    response.close();
});



var resp = '<!DOCTYPE html>' + 
'<html>'+
'<head>'+
'</head>'+
'<body>'+
	'<script>'+
	'</script>'+
'</body>'+
'</html>';

