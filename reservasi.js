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
      alert('Your Reservation Successfully!');
      sendData(formData);
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
    //}).then(response => {
        //if (!response.ok) {
          //throw new Error('Network response was not ok');
        //}
        //return response.json();
    }).then(data => {
        console.log('Response:', data);
        alert('Data anda berhasil dikirim!');
    }).catch(error => console.error('Error:', error));
}
  


//const form = document.querySelector('datapasien');
//const name = document.querySelector('#name');
//const alamat = document.querySelector('#alamat');
//const tanggal_lahir = document.querySelector('#tanggal_lahir');
//const tempat_lahir = document.querySelector('#tempat_lahir');
//const no_hp = document.querySelector('#no_hp');
//const room_number = document.querySelector('#room_number');
//const room_type = document.querySelector('#room_type');

// test 
//form.addEventListener('submit', ()=> {
   //console.log(name.value);
   //console.log(alamat.value);
   //console.log(tanggal_lahir.value);
   //console.log(tempat_lahir.value);
   //console.log(no_hp.value);
   //console.log(room_number.value);
   //console.log(room_type.value);
//});