(function(exports) {
  function List(){
    this._notes = []
  }
  List.prototype.showNotes = function(){
    return this._notes
  }

  List.prototype.addNote = function(string){
    this._notes.push(new Note(string))
  }

  exports.List = List;

})(this);
