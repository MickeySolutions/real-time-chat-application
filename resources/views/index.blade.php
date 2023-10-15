<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Laravel Chat</title>
</head>
<body>
    <div class="app">
        <header>
            <h1>Let's Talk</h1>
            <input type="text" id="username" name="username" placeholder="Please enter a username..."/>
        </header>
        <div id="messages"></div>
        <form id="message-form">
            <input type="text" name="message" id="message_input" placeholder="Write a message..."/>
            <button type="submit" id="message_send">Send Message</button>
        </form>
    </div>
</body>
</html>
