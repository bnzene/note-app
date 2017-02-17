window.onload = (function(){
  var list = new List()
  list.addNote("Favourite Drink: Sprite")
  list.addNote("Favourite Food: Burger")
  list.addNote("Hello, is it me you're looking for")
  var viewList = new ViewList(list)
  var controller = new Controller(viewList)
  var element = document.getElementById('app');
  controller.updateNotes(element);
})
