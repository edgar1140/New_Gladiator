const $ = require('jquery');
const appRoot = $('#app');

// Model

const STATE = {
    counters: [0]
};

//View

function viewCounter() {
    return [
        "<div><button id='up'> + </button><div>",
        STATE.count,
        "<div><button id='down'> + </button><div>"
    ];
}

//Controller

function attatchHandlers() {
    $('#up').click(function() {
        STATE.count += 1;
        draw();
    });
    $('#down').click(function() {
        STATE.count -= 1;
        draw();
    });
}

function draw() {
    appRoot.html(viewCounter());
    attatchHandlers();
}

// Application State
// Application View
// Application Update Setup

function main() {
    draw();
}
$(main);
