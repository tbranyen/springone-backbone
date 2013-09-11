### Routers and History

``` javascript
var ApplicationRouter = Backbone.Router.extend({
  routes: {
    // Store routes here.
  },

  // Route methods here.
});

// Initialize the Router.
var applicationRouter = new ApplicationRouter();

// Tell Backbone to start monitoring the changes in browser history.
Backbone.history.start();
```

* Multiple routers can be used so long as the route paths are unique.
* HTML5 History API (commonly known as `pushState`) can be enabled with:

``` javascript
Backbone.history.start({ pushState: true });
```

<style scoped>
  @host {
    background: #FFF;
  }

  ul {
    font-size: 20px;
  }
</style>
