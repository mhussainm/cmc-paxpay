Template.cashDepositConfirmation.rendered = function() {
    
    var timer = setInterval(function() {    
		var trigger = Triggers.find().fetch()[0];
		console.debug('Trigger Entry: \n', trigger);
		if(trigger && trigger.state) {
			IonPopup.alert({
			  title: 'Deposit Accepted',
			  template: 'Your cash deposit of ₹' + Session.get('totalCashDepositAmount') + ' has been accepted. ' 
							+ 'Your current balance on Account 52XX9XXX57 is now ₹' + Session.get('newAccountBalance') + '.00',
			  okText: 'Close',
			  onOk: function(event, template) {
				Router.go('/accountsList');
			  }
			});
			
			clearInterval(timer);
		}    
	}, 5000);
    
};