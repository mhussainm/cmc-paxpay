Template.cashDepositConfirmation.rendered = function() {
    
    setTimeout(function() {
    IonPopup.alert({
      title: 'Deposit Accepted',
      template: 'Your cash deposit of ₹8500 has been accepted. ' 
      				+ 'Your current balance on Account 52XX9XXX57 is now ₹14264.00',
      okText: 'Close'
    })}, 5000);
  };