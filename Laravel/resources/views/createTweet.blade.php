<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Create tweet</title>
</head>
<body>
    <h1>Welcome to hell!</h1>
    <form action="{{ route('createTweet.post') }}" method="POST" style="display: flex; flex-direction:column; gap: 10px;">
        @csrf
        <label for="tweetName">Name</label>
        <input type="text" id="tweetName" name="tweetName">

        <label for="tweetText">Tweet Text</label>
        <textarea name="tweetText" id="tweetText" cols="30" rows="10"></textarea>

        <button type="submit">Create</button>
    </form>
    <div style="height: 10px"></div>
    <a href="index" style="background-color: rgb(239, 239, 239); text-decoration: none; color: black; padding:3px; border:1px solid black; border-radius:2px;">Back</a>
</body>
</html>