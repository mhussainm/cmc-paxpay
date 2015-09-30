Template.cashDepositConfirmation.rendered = function() {
    
    setTimeout(function() {
    IonPopup.alert({
      title: 'Deposit Accepted',
      template: 'Your cash deposit of ₹' + Session.get('totalCashDepositAmount') + ' has been accepted. ' 
      				+ 'Your current balance on Account 52XX9XXX57 is now ₹' + ( 5764 + Session.get('totalCashDepositAmount')) + '.00',
      okText: 'Close'
    })}, 5000);
  };