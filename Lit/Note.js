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
    console.log(notes_container)
    napp.all().forEach(function (note, index) {
      notes_container.innerHTML += `<div class="note"><a href="#${index}">${note}[+]</a></div>` // adds a div, with a unique link consisting of the shortened note id.

    })


  },

  clickable_notes: function () {
    window.addEventListener("hashchange",function(event) {  //listens for a change ofthe hash in the url
      event.preventDefault();      // prevents losing data when
      let id = getIdFromUrl(window.location);   // gets id from Url
      if (id == undefined) {      // if id is undefined, we change the current page to hidden, and make the hidden note visible
        document.getElementById('page2').classList = "inactive";  // id if undefined only when we want to go back to home page, so we want to hide the hidden note whenver this happens.
        document.getElementById('page').classList = "active";
        killbubbles()
      } else {
        hidePage();
        showFullNote(id);
        yaybubbles()
      }
    })

    function getIdFromUrl(location) {
      return location.hash.split("#")[1];  // takes the hash out of the url and returns just the id
    };

    function showFullNote(index) {
      document.getElementById('page2').classList = "active";
      document
      .getElementById("page2")
      .innerHTML = `<div class="expanded-note" id="expanded-note">${napp.notes[index]}</div>`     // changes the text of the hidden note container to the long note, found using the id of the note as the index, and the id is essentially the href added to the url
    }
    function hidePage() {
      document.getElementById("page").classList.remove("active");    // hides the current page, however js only remembers the url, so the page will not unhide when we want to click on another note, so we need to remove the hidden attribute if id is undefined, i.e. if we want to go back to index, so it will display our notes
      document.getElementById("page").classList.add("inactive");
    }

  },

  init: function(){
    const create = document.getElementById('create')
    create.addEventListener('click', function(event){
      event.preventDefault(); // stops the form from submitting
      let new_note = document.getElementById('textarea').value; // grabs the value of text-box using the corresponding ID
      napp.add(new_note)
      document.getElementById('textarea').value = "" // empties text area
      napp.show_notes()
      playSound()
      // napp.add_expanded_notes()
      // napp.add_links()

    })
      napp.clickable_notes()

    ////////clicking the shorter description
  },

  //
  // add_expanded_notes: function () {
  //   let hidden_notes_container = document.getElementById('hidden-notes-container') //finds the element with ID and saves to variable
  //   hidden_notes_container.innerHTML = "" //changes text of that saved variable
  //   napp.notes.forEach(function (note) { //iterates over all notes and creates a div which has their own ID consisting of the index of the note AND the note
  //     hidden_notes_container.innerHTML += `<div id="${napp.notes.indexOf(note)}b" class="expanded-note">${note}</div>`
  //   })
  // },

  // add_links: function () {
  //   const clickable_notes = document.getElementsByClassName('note')
  //   console.log(clickable_notes)
  //   for(var i = 0; i < clickable_notes.length; i++){
  //     console.log(clickable_notes[i])
  //     clickable_notes[i].addEventListener('click', function(event){
  //       const page = document.getElementById('page')
  //       page.classList.add('inactive');
  //       let new_id = this.id.replace('a','b')
  //       console.log()
  //       let expanded_id_num = document.getElementById(new_id) //clashing classes
  //       expanded_id_num.classList.add('active')
  //     })
  //   }
  // }
}

document.addEventListener('DOMContentLoaded', napp.init);


// console.log(napp.notes);

// napp.add("hellokjasldkjdalkjalkdjaflkjfalkfjalkfjalfjlfjflajalfkj")
// //
// console.log(napp.all());
function yaybubbles() {
			// Note the screen size.
			var screenSize = {
				height : $(document).height(),
				width : $(document).width()
			};

			// Generate random bubbles on screen.
			for (var i = 0; i < 500; i++) {
				// Random location and size.
				var size = Math.random() * 40 + 20,
					left = screenSize.width * Math.random(),
					top = screenSize.height * Math.random();

				// Add the bubble to the page.
				var bubble = $("<div>", {
					"class" : "Bubble",
					css : {
						left : left,
						top : top,
						height : size,
						width : size,
						margin : "-" + (size / 2) + "px"
					}
				}).appendTo(document.body).get(0);

				// Record this bubble's info into the element itself for easier access.
				bubble.radius = size / 2;
			}

			// Retain the bubbles in memory as a jQuery object, for quicker access.
			var bubbles = $(".Bubble");

			// User's cursor bubble.
			var userBubble = $("<div>", {
				id : "UserBubble",
				css : {
					left : -100,
					top : -100
				}
			}).appendTo(document.body);

			// Note the user bubble's size.
			var userBubbleRadius = userBubble.width() / 2;

			// Page mouse move function...
			$(document).mousemove(function(event) {
				// Move the user bubble.
				userBubble.css({
					left : event.clientX,
					top : event.clientY
				});

				// Check each bubble to see if it's overlapped by the user bubble.
				bubbles.each(function() {
					var pos = $(this).offset();

					// Calculate distance between the user bubble and this bubble.
					var distance = Math.sqrt(Math.pow(pos.left + this.radius - event.clientX, 2) +
						Math.pow(pos.top + this.radius - event.clientY, 2)),

						overlap = userBubbleRadius + this.radius - distance;

					// If the bubbles overlap...
					if (overlap > 0) {
						var xMovement = (pos.left - event.clientX) * distance / 20,
							yMovement = (pos.top - event.clientY) * distance / 20;

						$(this).stop().animate({
							left : (xMovement > 0 ? "+" : "-") + "=" + (xMovement > 0 ? xMovement : -xMovement),
							top : (yMovement > 0 ? "+" : "-") + "=" + (yMovement > 0 ? yMovement : -yMovement)
						}, 500);
					}
				});
			});
		};

  function killbubbles() {
    $(".Bubble").remove()
    $("#UserBubble").remove()
  }

  function playSound() {
    const audio = document.getElementById("audio")
    audio.play()
  }
