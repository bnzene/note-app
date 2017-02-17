(function(exports) {
    function Controller(viewList){
        this._viewList = viewList;
        this.list = this._viewList._list;
    }

    Controller.prototype.updateNotes = function(element) {
        element.innerHTML = this._viewList.displayList();
    };

    Controller.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
      window.addEventListener("hashchange", showNoteForCurrentPage);
    };

    function showNoteForCurrentPage() {
      showNote(getNoteFromUrl(window.location));
    };

    function getNoteFromUrl(location) {
      return location.hash.split("#")[1];
    };

    function showNote(note) {
      document.getElementById("app")
      var element = document.getElementById('app');
      noteno = location.hash.split("#")[1];
      noteno1 = noteno.split("/")[1]
      element.innerHTML = list._notes[noteno1].getText();
    };

    exports.Controller = Controller;

})(this);
