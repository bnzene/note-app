window.onload = (function(){
  var list = new List()
  list.addNote("Favourite Drink: Sprite")
  var viewList = new ViewList(list)
  var controller = new Controller(viewList)
  var element = document.getElementById('app');
  controller.updateNotes(element);
})
