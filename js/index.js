function openGmailWithPrefilledBody() {
    const formElements = document.querySelectorAll('.form-style-agile input');
    let prefilledBody = '';
  
    formElements.forEach(element => {
      prefilledBody += `${element.name}: ${element.value}\n`;
    });
  
    const gmailUrl = `mailto:bantysain60@gmail.com?subject=Quick Appointment&body=${encodeURIComponent(prefilledBody)}`;
    window.open(gmailUrl);
  }

  function sendEmail(e) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    
    var body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
    console.log(body)
    
    // var url = `(link unavailable){encodeURIComponent(body)}`;
    var url = `mailto:bantysain60@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`
    
    window.open(url);
  }

