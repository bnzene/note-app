(function(exports) {
  function SingleNoteView(note){
    this.note = note;
  };

  SingleNoteView.prototype.displaySingleNote = function(){
    notestring = this.note;

    return "<div>"+ notestring.getText() + "</div>"
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
