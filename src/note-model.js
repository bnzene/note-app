(function(exports) {
  function Note(text){
    this._text = text
  }
  Note.prototype.getText = function(){
    return this._text
  }
  exports.Note = Note;
  exports.getText = Note.getText; //Could also be this.getText;
})(this);
