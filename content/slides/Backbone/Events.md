Designed around events - Almost all class types emit events about their state. 

Events are a powerful way to reduce coupling.

``` javascript
// Is a mixin.
var myObj = _.extend({}, Backbone.Events);

// Wait for the event `something` to be triggered.
myObj.on("something", function(data) {
  console.log(data);
});

// Trigger the event from anywhere, passing a String.
myObj.trigger("something", "with some data!");
```

<style scoped>
  @host {
    background: #FFF;
  }

  ul {
    font-size: 20px;
  }
</style>
