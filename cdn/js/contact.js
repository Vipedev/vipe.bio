 


  // Contact me



  // https://discord.com/api/webhooks/1099995802908246098/lKoAJ5-6stGyVy5yopgWrVQHwSdO8h-bnVuQaVlpcOiMF9KwTHZGHStXgD8ujKmR_lXO


  async function sendContact(ev) {
    ev.preventDefault();

    const senderEmail = document
      .getElementById('emailInput').value;
    const senderMessage = document
      .getElementById('messageInput').value;

    const webhookBody = {
      embeds: [{
        title: 'New application!',
        fields: [
          { name: 'Sender email', value: senderEmail },
          { name: 'Application', value: senderMessage }
        ]
      }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1099995802908246098/lKoAJ5-6stGyVy5yopgWrVQHwSdO8h-bnVuQaVlpcOiMF9KwTHZGHStXgD8ujKmR_lXO';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
      alert('I have received your message!');
    } else {
      alert('There was an error! Try again later!');
    }
  }