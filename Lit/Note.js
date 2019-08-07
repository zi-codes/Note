const napp = {
  notes: [],
  //notes: ["The quick brown fox jumps over the lazy dog is an English-language pangram—a sentence that contains all of the letters of the alphabet. It is commonly used for touch-typing practice, testing typewriters and compute","The earliest known appearance of the phrase is from The Boston Journal. In an article titled Current Notes in the February 10, 1885, morning edition, the phrase is mentioned as a good practice sentence for writing students"],
  all: function(){
    return napp.notes.map(note => note.slice(0, 20)); //iterates over all the notes and returning a 20char version of each one
  },

  add: function(note) {
    napp.notes.push(note)
  },

  show_notes: function () {
    let notes_container = document.getElementById('notes-container')
    notes_container.innerHTML = ""
    napp.all().forEach(function (note) {
      notes_container.innerHTML += `<div id="${napp.all().indexOf(note)}a" class="note">${note} [+]</div>`

    })
  },

  add_expanded_notes: function () {
    let hidden_notes_container = document.getElementById('hidden-notes-container') //finds the element with ID and saves to variable
    hidden_notes_container.innerHTML = "" //changes text of that saved variable
    napp.notes.forEach(function (note) { //iterates over all notes and creates a div which has their own ID consisting of the index of the note AND the note
      hidden_notes_container.innerHTML += `<div id="${napp.notes.indexOf(note)}b" class="expanded-note">${note}</div>`
    })
  },

  init: function(){
    const create = document.getElementById('create')
    create.addEventListener('click', function(event){
      event.preventDefault(); // stops the form from submitting
      let new_note = document.getElementById('textarea').value; // grabs the value of text-box using the corresponding ID
      napp.add(new_note)
      document.getElementById('textarea').value = "" // empties text area
      napp.show_notes()
      napp.add_expanded_notes()
      napp.add_links()
    })
    ////////clicking the shorter description
  },

  add_links: function () {
    const clickable_notes = document.getElementsByClassName('note')
    console.log(clickable_notes)
    for(var i = 0; i < clickable_notes.length; i++){
      console.log(clickable_notes[i])
      clickable_notes[i].addEventListener('click', function(event){
        const page = document.getElementById('page')
        page.classList.add('inactive');
        let new_id = this.id.replace('a','b')
        console.log()
        let expanded_id_num = document.getElementById(new_id) //clashing classes
        expanded_id_num.classList.add('active')
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', napp.init);



// console.log(napp.notes);

// napp.add("hellokjasldkjdalkjalkdjaflkjfalkfjalkfjalfjlfjflajalfkj")
// //
// console.log(napp.all());
