(function(exports) {
  function Note(text){
    this._text = text
  }

  Note.prototype.setId = function(id) {
      this.id = id
  };
  Note.prototype.getText = function(){
    return this._text
  }
  exports.Note = Note;
  exports.getText = Note.getText; //Could also be this.getText;
})(this);
