<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title inertia>{{ config('app.name', 'Serenity') }}</title>

  <link rel="preconnect" href="https://fonts.bunny.net">
  <link href="https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900|poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

  @vite(['resources/js/app.js'])
  @inertiaHead
</head>
<body class="font-sans antialiased bg-gray-100 dark:bg-gray-900">
  @inertia
</body>
</html>
