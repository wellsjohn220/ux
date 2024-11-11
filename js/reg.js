    const scriptURL = 'https://script.google.com/macros/s/AKfycbyDKFek5F7RualM0mJODGi_ZHZMTQRRn5yGcqaWP5mxG_VarXuVy3UFYBZyCk0mkuM1zQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    const scriptURL2 = 'https://script.google.com/macros/s/AKfycby3xefgKMVpOPg8v2eeHLqbVjK8HSx8Uc2RMULG7BDeAW7LjHK5DPOEtCIUSEr9NDdZuA/exec'
    const form2 = document.forms['contact-to-google-sheet']
    const msg2 = document.getElementById("msg2")
   
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Thank you For Subscribing by 12345 John"
            setTimeout(function(){
                msg.innerHTML = "We specialize in web development"
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
    form2.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
        .then(response => {
            msg2.innerHTML = "Thanks for your contact details by 12345 John"
            setTimeout(function(){
                msg2.innerHTML = "Contact"
            }, 5000)
            form2.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
  function generateEDate(){
    let today = new Date().toLocaleDateString('en-AU')
    let subtime = new Date().toLocaleTimeString('en-AU')
    console.log('E Regeste Time: ' + subtime);
    console.log('E Regeste Date: ' + today);
    document.getElementById("Ereg").value = today;  
    document.getElementById("Eregtime").value = subtime;  
    return true;
  }
