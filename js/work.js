if (window.innerWidth < 576) {
  var ModalElements = [
    document.getElementById("swopModal"),
    document.getElementById("torisugariModal"),
    document.getElementById("outisateiModal"),
  ];
  for (var i = 0; i < ModalElements.length; i++) {
    var modalElement = ModalElements[i];
    if (modalElement) {
      modalElement.id = null;
    }
  }
}
