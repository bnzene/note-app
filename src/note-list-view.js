(function(exports) {
  function ViewList(list){
    this._list = list
  }

  ViewList.prototype.displayList = function () {
    if (this._list._notes.length > 0){
      var string = '';
    for (var i = 0; i < this._list._notes.length; i++) {
      string += '<li><div><a href="#notes/' + this._list._notes[i].id + '">' + this._list._notes[i].getText().substr(0,20) + "..." + '</div></li>'
    }
    return "<ul>" + string + "</ul>"
  }
  else{
    return "no notes"
  }
  }

  exports.ViewList = ViewList
})(this);
