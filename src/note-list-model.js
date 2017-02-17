(function(exports) {
  function List(){
    this._notes = []
    this.id = -1;
  }
  List.prototype.showNotes = function(){
    return this._notes
  }

  List.prototype.addNote = function(string){
    var note = new Note(string)
    this._notes.push(note)
    note.setId(this.nextId());
  }

  List.prototype.nextId = function() {
    this.id ++;
    return this.id;
  }

  exports.List = List;

})(this);
