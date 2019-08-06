describe('Note', function(){
 it("it block working",function(){
   assert.isTrue(true);
 })
 var note = "Don't cry because it's over, smile because it happened. I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
 it('adds a full length note', function() {
   napp.add(note);
   assert.isTrue((napp.notes[0]) == note);
 }),
 it('returns the preview state of note', function() {
   napp.add(note);
   assert.isTrue((napp.all()[0]).length == 20);
 });
})
