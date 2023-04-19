<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <title inertia>{{ config('app.name', 'Serenity') }}</title>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="msapplication-TileColor" content="#00b4e2">
  <meta name="theme-color" content="#ffffff">
  <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('/storage/favicon/apple-touch-icon.png') }}">
  <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('/storage/favicon/favicon-32x32.png') }}">
  <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('/storage/favicon/favicon-16x16.png') }}">
  <link rel="manifest" href="{{ asset('/storage/favicon/site.webmanifest') }}">
  <link rel="mask-icon" href="{{ asset('/storage/favicon/safari-pinned-tab.svg') }}" color="#00b4e2">

  <link rel="preconnect" href="https://fonts.bunny.net">
  <link href="https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900|poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

  @vite(['resources/js/app.js'])
  @inertiaHead
</head>
<body class="font-sans antialiased bg-gray-100 dark:bg-gray-900">
  @inertia
</body>
</html>
