Meteor.startup(function () {

  if (Posts.find({}).count() === 0) {
    Posts.insert({
      title: Fake.sentence(),
      body: Fake.paragraph(),
      published: Fake.fromArray([true, false])
    });
  }
	
	
	// For Notification
	Triggers.upsert(
		{ trigger: "showDepositAcceptedPopup" },
		{ 
			trigger: "showDepositAcceptedPopup", 
			state: false 
		}
	);


});


Meteor.methods({
	"resetDepositAcceptedPopupVar": function() {
		console.log("HUSSAIN - In resetDepositAcceptedPopupVar()");
	
		Triggers.upsert(
			{ trigger: "showDepositAcceptedPopup" },
			{ 
				trigger: "showDepositAcceptedPopup", 
				state: false 
			}
		);
	}
});