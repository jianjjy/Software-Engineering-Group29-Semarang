function openDialog(clickedDiv) {
    let roomNum = clickedDiv.firstElementChild.innerHTML;
    var classNames = clickedDiv.className.split(" ");
    for (var i = 0; i < classNames.length; i++) {
      var className = classNames[i];
      if (className !== "room-frame") {
        document.querySelector("dialog > .Hos-Name").nodeValue = roomNum;
        document.getElementById(className).showModal();
        
      }
    }
  }

  function closeDialog(dialogId) {
    if (dialogId == 'avail') {
      alert ('Do you want to close this tab?')
    }
    document.getElementById(dialogId).close();
  }

  const rooms = document.querySelectorAll ('.room-frame');
  for (let index = 0; index < rooms.length; index++) {
    const room = rooms[index].firstElementChild;
    let temp = index+501
    room.innerHTML = "R. " + temp;
  }
