Items = new Mongo.Collection("items")

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Session.set('timer', 1);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    items: function() {
      return Items.find({});
    },
    timer: function() {
      return Session.get('timer');
    }
  });

  Template.item.helpers({
    isYoutube: function() {
      return this.type == "youtube";
    },
    isCrossout: function() {
      return this.crossout == true;
    }

  });

  Template.item.events({
    "click": function() {
        console.log("This works!");
        Items.update(this._id, {$set: {crossout: !this.crossout} } )
    }
  })

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Meteor.setInterval( function () {
        Session.set("timer", Session.get('timer')+1 );
    }, 1 );

}