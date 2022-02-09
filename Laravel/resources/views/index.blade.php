<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        
        <nav class="bg-blue-500 w-full h-16 flex flex-row justify-between items-center px-12">
            @if (Route::has('login'))
                    @auth
                        <div class="bg-blue-600 h-full flex items-center">
                            <a href="{{ url('/home') }}">Home</a>
                        </div>
                    @else
                        <div></div>
                        <div class="bg-green-500 h-full px-10 flex flex-row items-center gap-10">
                            <div class="bg-red-400 py-2 px-3 rounded-sm">
                                <a href="{{ route('login') }}" >Log in</a>
                            </div>
                            @if (Route::has('register'))
                                <div class="bg-teal-300 py-2 px-3 rounded-sm">
                                    <a href="{{ route('register') }}">Register</a>
                                </div>
                            @endif
                        </div>
                    @endauth
            @endif
        </nav>
        
        <div id="root"></div>


        <script>
            let tweets = {!! json_encode($tweets) !!}
        </script>
        
        <script src={{ mix("js/app.js") }}></script>
    </body>
</html>