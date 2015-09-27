Template.cashDeposit.events({

  'click [data-action="confirmDeposit"]': function(event, template) {
  
  	event.preventDefault();
  	
    IonPopup.confirm({
      title: 'Confirm Cash Deposit',
      template: 'Do you want to proceed with cash deposit of ₹8500?',
      onOk: function() {
        // Submit and route to confirmation page
        Router.go('/cashDepositConfirmation');
      },
      onCancel: function() {
        // do nothing
      }
    });
  }
  
});