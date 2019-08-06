


const napp = {
  notes: [],
  //notes: ["The quick brown fox jumps over the lazy dog is an English-language pangram—a sentence that contains all of the letters of the alphabet. It is commonly used for touch-typing practice, testing typewriters and compute","The earliest known appearance of the phrase is from The Boston Journal. In an article titled Current Notes in the February 10, 1885, morning edition, the phrase is mentioned as a good practice sentence for writing students"],
  all: function(){
    return napp.notes.map(note => note.slice(0, 20));
  },

  add: function(note) {
    napp.notes.push(note)
  },
  init: function(){
    const create = document.getElementById('create')
    create.addEventListener('click', function(event){
      event.preventDefault();
      let new_note = document.getElementById('textarea').value;
      napp.add(new_note)
      console.log(napp.notes)
    })
  }

}

document.addEventListener('DOMContentLoaded', napp.init);


// console.log(napp.notes);

// napp.add("hellokjasldkjdalkjalkdjaflkjfalkfjalkfjalfjlfjflajalfkj")
// //
// console.log(napp.all());
