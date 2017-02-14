(function(exports) {
    function Controller(viewList){
        this.viewList = viewList;
    }

    Controller.prototype.updateNotes = function(element) {
        element.innerHTML = this.viewList.displayList();
    };

    exports.Controller = Controller;
})(this);
