function testNewList() {
  var list = new List();

  assert.isTrue(list.showNotes.length === 0);

};
testNewList();


function testAddNote(){
  var list = new List();
  list.addNote("No test framework is really cool.")

  assert.isTrue(list.showNotes()[0].getText() === "No test framework is really cool.");
};
testAddNote();
