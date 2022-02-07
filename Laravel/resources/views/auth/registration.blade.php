<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form style="display: flex; flex-direction: column;" action="{{ route('register.post') }}" method="POST">
        @csrf
        <div style="margin-left: auto; margin-right: auto;">
            <h1>Register</h1>
        </div>

        <label for="name">name</label>
        <input type="text" name="name">

        <label for="email">e-mail</label>
        <input type="email" name="email">

        <label for="password">password</label>
        <input type="new_password" name="password">

        <button type="submit">Register</button>
    </form>
</body>
</html>