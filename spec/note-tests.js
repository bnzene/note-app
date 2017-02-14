function testNoteInstantiation() {
  var note = new Note("I love coding!");

  assert.isTrue(note.getText() === "I love coding!");

};
testNoteInstantiation();
