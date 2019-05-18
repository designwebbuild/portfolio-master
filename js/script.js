/*
* DOM elements
*/
let aboutBtn = $('#about');
let workBtn = $('#work');
let blogBtn = $('#blog');
let contactBtn = $('#contact');
let aboutSection = $('#about-section');
let nameSection = $('#name-section');





aboutSection.hide();

aboutBtn.on('click', () => {
    nameSection.hide();
      aboutSection.show();
});

