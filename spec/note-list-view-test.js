function testViewListInstantiation() {
  var list = new List();
  var viewList = new ViewList(list);

  assert.isTrue(viewList._list === list);
}
testViewListInstantiation();

function testEmptyHtmlList() {
  var list = new List();
  var viewList = new ViewList(list);

  assert.isTrue(viewList.displayList() === "no notes" )
}
testEmptyHtmlList();

function testDisplaysFirst20CharWithEllipsis() {
  var list = new List();
  list.addNote("Hello, is it me you're looking for")
  var viewList = new ViewList(list);
  assert.isTrue(viewList.displayList() === "<ul><li><div>Hello, is it me you'...</div></li></ul>")
}
testOneNoteInHtmlList();

function testOneNoteInHtmlList() {
  var list = new List();
  list.addNote("Hello")
  var viewList = new ViewList(list);
  assert.isTrue(viewList.displayList() === "<ul><li><div>Hello</div></li></ul>")
}
testOneNoteInHtmlList();

function testMultipleNoteInHtmlList() {
  var list = new List();
  list.addNote("Hello")
  list.addNote("Howdy")
  var viewList = new ViewList(list);
  assert.isTrue(viewList.displayList() === "<ul><li><div>Hello</div></li><li><div>Howdy</div></li></ul>" )
}
testMultipleNoteInHtmlList();
