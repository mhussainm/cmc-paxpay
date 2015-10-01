Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('login');  
  this.route('home');    
  this.route('inBranch');
  this.route('accountSelection');
  this.route('cashDeposit');  
  this.route('cashDepositConfirmation');  
  this.route('accountsList');    
  this.route('actionSheet');
  this.route('backdrop');
  this.route('forms', {
    data: function () {
      return {
        post: Posts.find().fetch()[0]
      };
    }
  });
  this.route('headersFooters');
  this.route('lists');
  this.route('loading');
  this.route('modal');
  this.route('navigation');
  this.route('navigation.one', {path: '/navigation/one'});
  this.route('navigation.two', {path: '/navigation/two'});
  this.route('navigation.three', {path: '/navigation/three'});
  this.route('popover');
  this.route('popup');
  this.route('sideMenu');
  this.route('slideBox');
  this.route('tabs.one', {path: '/tabs/one', layoutTemplate: 'tabsLayout'});
  this.route('tabs.two', {path: '/tabs/two', layoutTemplate: 'tabsLayout'});
  this.route('tabs.three', {path: '/tabs/three', layoutTemplate: 'tabsLayout'});
  this.route('tabs.four', {path: '/tabs/four', layoutTemplate: 'tabsLayout'});
  this.route('userAccounts');  
});

// Creating Server-side webhook (APIs) for external triggers
if(Meteor.isServer) {

	Router.route("/trigger", { where: "server" })
		.get(function () {
				console.log("HUSSAIN - In Route /trigger: GET");
				//console.log(this.params);
				if (this.params) {
					//console.log(this.params.query);
					if (this.params.query) {
						//console.log(this.params.query.action);
						if(this.params.query.action === "confirmDeposit") {
							console.log("In Trigger Action EQ confirmDeposit");
							Triggers.upsert(
								{ trigger: "showDepositAcceptedPopup" },
								{ 
									trigger: "showDepositAcceptedPopup", 
									state: true 
								}
							);							
						}
						else {
							console.log("Undefined ACTION");
						}
					}
				}
				this.response.writeHead(200, {'Content-Type': 'application/json'});
				this.response.end('{"success" : true}');
		});
}
