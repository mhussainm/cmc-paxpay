Template.cashDeposit.rendered = function() {
	// Set event listener
	$('.pp-cash-form').find('input[type=number]').blur(function(){
		//console.log(this.value * $(this).data('rupval'));
		// Iterate through and update the Total Deposit Amount
		var rupAmt = 0;
		var totalDepAmt = 0;
		$('.pp-cash-form').find('input[type=number]').each(function(){
			rupAmt = this.value ? this.value : 0;
			totalDepAmt = totalDepAmt + (rupAmt * $(this).data('rupval'));
		});
		//console.info('Total Amount ₹' + totalDepAmt);
		$('.pp-cash-form').find('.pp-cash-total input').val('₹' + totalDepAmt);
		Session.set('totalCashDepositAmount', totalDepAmt);
		Session.set('newAccountBalance', (5764 + totalDepAmt));
	});
};

Template.cashDeposit.events({

  'click [data-action="confirmDeposit"]': function(event, template) {
  
  	event.preventDefault();
  	
    IonPopup.confirm({
      title: 'Confirm Cash Deposit',
      template: 'Do you want to proceed with cash deposit of ₹' + Session.get('totalCashDepositAmount') + '?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: function() {
        // Submit and route to confirmation page
        Meteor.call('resetDepositAcceptedPopupVar');
        
        Router.go('/cashDepositConfirmation');
      },
      onCancel: function() {
        // do nothing
      }
    });
  }
  
});