function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: '1653779174-XJMRMl7m'
        })
        .then(() => {
            initializeApp();
        })
        .catch((err) => {
            alert(err)
        });
}

function initializeApp() {
    displayIsInClientInfo();
}

function displayIsInClientInfo() {
    if (liff.isInClient()) {
        $('#btn_send').show();
        document.getElementById('isInClientMessage').textContent = 'You are opening the app in the in-app browser of LINE.';
    } else {
        document.getElementById('isInClientMessage').textContent = 'You are opening the app in an external browser.';
    }
}

function sendMessage(text){
    liff.sendMessages([
        {
          type:'text',
          text: text
        }
      ])
      .then(() => {
        console.log('message sent');
        liff.closeWindow();
      })
      .catch((err) => {
        alert(err);
      });
}