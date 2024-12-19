<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div id="root"></div>
    <script src="assets/app.js" defer></script>
    <script>
        ReactDOM.render(
            React.createElement(HomePage),
            document.getElementById('root')
        );
    </script>
</body>
</html>
