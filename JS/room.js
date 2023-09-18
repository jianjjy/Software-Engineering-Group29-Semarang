const modalactive = document.getElementById("modal-active");

function openDialog(clickedDiv) {
    var classNames = clickedDiv.className.split(" ");
    for (var i = 0; i < classNames.length; i++) {
      var className = classNames[i];
      if (className !== "room-frame") {
        document.getElementById(className).style.display = 'block';
      }
    }
  }

  function closeDialog(dialogId) {
    document.getElementById(dialogId).style.display = 'none';
  }
