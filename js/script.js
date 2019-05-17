/*
* DOM elements
*/
let aboutBtn = $('#about');
let workBtn = $('#work');
let blogBtn = $('#blog');
let contactBtn = $('#contact');
let aboutSection = $('#about-section');




aboutSection.hide();

aboutBtn.on('click', () => {
    aboutSection.fadeIn();    
});

