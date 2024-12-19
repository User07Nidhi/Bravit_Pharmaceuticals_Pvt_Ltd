<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewpoint" content="width=device-width, initial-scale=1.0">
        <title>About Us</title>
        <link rel="stylesheet" href="assets/style.css">
    </head>
    <body>
        <div id="root"></div>
        <script scr="assests/app.js" defer></script>
        <script>
            ReactDOM.render(
                React.createElement(AboutPage),
                document.getElementById('root')
            );
        </script>
    </body>
</html>