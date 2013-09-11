### Initial page markup ###

``` markup
<!doctype html>
<html lang="en" manifest="cache.manifest">
<head>
  <!-- Meta tags... -->

  <title>WeatherProof</title>

  <!-- Explicity define where icons exist on the server. -->
</head>
<body>
  <div class="background"><img src="images/background.jpg"></div>

  <h1>Weather<span class="proof">prooF</span></h1>

  <form class="pure-form">
    <img class="detect" src="images/geolocation.png">
    <input type="text" class="pure-input-rounded" placeholder="Find location.">
  </form>

  <div class="weather"></div>

  <footer>Powered by: <a href="http://openweathermap.org/">OpenWeatherMap</a></footer>
</body>
</html>
```

<style scoped>
  @host {
    background: #FFF;
  }
</style>
