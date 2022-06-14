<!DOCTYPE html>
<html>
<head>
<title>Supreme</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>

</style>
</head>
<body>

<script>
function myFunction(city) {
    var x = {};
    x.name = city;
    x.fun = function() {
        document.write("I live in " + x.name + "<br>");
    }
    return x;
}
var y = myFunction("New York");
y.name;
y.fun();
var z = myFunction("California");
z.name;
z.fun();
var m = myFunction("Los Angles");
m.name;
m.fun();
</script>

</body>
</html>
