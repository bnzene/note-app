function testSingleNoteView () {

  var note = new Note("Favourite Drink: Sprite")
  var singleNoteView = new SingleNoteView(note)
  console.log(singleNoteView.displaySingleNote());
  assert.isTrue(singleNoteView.displaySingleNote() ==="<div>Favourite Drink: Sprite</div>");
};

testSingleNoteView();
