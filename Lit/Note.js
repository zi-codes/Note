console.log("Working file")


const Napp = {

  notes: [],

  all: function () {

    return Napp.notes.map(quote => quote.slice(0,20))
},

  add: function(input) {
  Napp.notes.push(input)

}
};













//
// function Note() {
//   this.notes = [];
//
// }
// Note.prototype.add = function (message) {
//   this.notes.push(message);
//
// };
//
// Note.prototype.all = function() {
//   return this.notes;
// }
//
// Note.prototype.find = function(index) {
//
// }
