Backbone has inheritance that works, but it leaves much to be desired.

``` javascript
var ModelDefinition = Backbone.Model.extend({
  // Instance properties go here, shared on all instances.
}, {
  // Class properties go here, only available on `ModelDefinition`.
});

// Create an instance of the ModelDefinition.
var modelInstance = new ModelDefinition();
```

For instance, there is no clean way to create a custom construct.

``` javascript
function CustomConstruct() {
  // Initialization code here.
}

// Instance properties
_.extend(CustomConstruct.prototype, {
  someMethod: function() {}
});

// This sort of works.
CustomConstruct.extend = Backbone.Model.extend;
```

<style scoped>
  @host {
    background: #FFF;
  }

  ul {
    font-size: 20px;
  }
</style>


<script type="speaker-notes">
- All Backbone constructs are extended and initialized the same way.
- TitleCase the constructs.
- camelCase the instances.
</script>
