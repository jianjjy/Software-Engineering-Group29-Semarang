function submitForm() {
    const formData = {
      name: document.getElementById('name').value,
      alamat: document.getElementById('alamat').value,
      tanggal_lahir: document.getElementById('tanggal_lahir').value,
      tempat_lahir: document.getElementById('tempat_lahir').value,
      no_hp: document.getElementById('no_hp').value,
      room_number: document.getElementById('room_number').value,
      room_type: document.getElementById('room_type').value
    };
  
    if (isFormFilled(formData)) {
      sendData(formData);
      alert('Your Reservation Successfully!');
      window.location.assign("clickRoom.html");
    } else {
      alert('Your reservation has failed, please fill in the data correctly!');
    }
}

function isFormFilled(formData) { // function untuk cek data form 
    for (const key in formData) {
      if (formData[key] === '') {
        return false;
      }
    }
    return true;
}
  
function sendData(formData) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(data => {
        console.log('Response:', data);
        alert('Data anda berhasil dikirim!');
    }).catch(error => console.error('Error:', error));
}
