var SlideItem = Backbone.Component.extend({
  // Custom slide-item element.
  tagName: "slide-item",

  // Remote assets that are necessary to create a cohesive bundle.
  template: "components/slide-item/template.html",
  style: "components/slide-item/style.css",

  // This will compare the hash location to the current element's ID and if it
  // matches, will automatically clear the console and display the relevant
  // speaker notes.
  showSpeakerNotes: function() {
    var notes = this.$("script[type='speaker-notes']").html();

    // Determine if this is the correct slide. 
    if (location.hash.slice(1) === this.$el.attr("id")) {
      // Empty the console.
      console.clear();

      // Display the speaker notes for this slide.
      console.log($.trim(notes));
    }
  },

  // Remove the global hashchange event listener if this slide is destroyed.
  cleanup: function() {
    window.removeEventListener("hashchange", this.boundShowSpeakerNotes);
  },

  initialize: function() {
    var view = this;
    var index = Number(this.$el.attr("id"));
    var perc = (index/$("slide-item").length) * 50;

    var colors = [
      "hsl(78, 61%, " + Math.abs(perc - 100) + "%)",
      "hsl(100, 48%, " + Math.abs(perc - 100) + "%)",
      "hsl(17, 90%, " + Math.abs(perc - 100) + "%)",
    ];

    var color = colors[0];

    // Create a bound event listener that can be unbound later.
    this.boundShowSpeakerNotes = this.showSpeakerNotes.bind(this);

    // Want to show speaker notes here.
    window.addEventListener("hashchange", this.boundShowSpeakerNotes);

    // Show the current slide that is active on load.
    this.showSpeakerNotes();

    if (index > 7) {
      color = colors[1];
    }

    if (index > 14) {
      color = colors[2];
    }

    this.$el.css({ "background-color": color });

    //console.log("hsl(17, 90%, " + Math.abs(perc - 100) + "%)");
  }
});

Backbone.Component.register(SlideItem);
