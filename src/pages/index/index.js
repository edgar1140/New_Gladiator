const $ = require('jquery');
const other = require('../../lib/other');
const appRoot = $('#app');

const STATE = {
    update: '',
    turn: 1
};

function Gladiator(name, health, rage) {
    var gladiator = {};
    gladiator.name = name;
    gladiator.health = health;
    gladiator.rage = rage;
    return gladiator;
}

var gladiator_1 = Gladiator('Gladiator 1', 100, 25);
var gladiator_2 = Gladiator('Gladiator 2', 100, 25);

function viewButtons() {
    if (STATE.turn === 1) {
        return [
            "<div><button id='Heal'>Heal</button></div>",
            "<div><button id='Attack'>Attack</button></div>",
            "<div><button id='SuperAttack'>Super Attack</button></div>",
            '<div><h3>' + STATE.update + '</h3></div>'
        ].join('');
    } else {
        return [
            "<div><button disabled id='Heal'>Heal</button></div>",
            "<div><button disabled id='Attack'>Attack</button></div>",
            "<div><button disabled id='SuperAttack'>Super Attack</button></div>"
        ].join('');
    }
}

function viewButtons2() {
    if (STATE.turn === 2) {
        return [
            "<div><button id='Heal2'>Heal</button></div>",
            "<div><button id='Attack2'>Attack</button></div>",
            "<div><button id='SuperAttack2'>Super Attack</button></div>",
            '<div><h3>' + STATE.update + '</h3></div>'
        ].join('');
    } else {
        return [
            "<div><button disabled id='Heal2'>Heal</button></div>",
            "<div><button disabled id='Attack2'>Attack</button></div>",
            "<div><button disabled id='SuperAttack2'>Super Attack</button></div>"
        ].join('');
    }
}

function viewGladiator1() {
    return [
        '<div class="col-lg-6">',
        '<h3>' + 'Name: ' + gladiator_1.name + '</h3>',
        '<h3>' + 'Health: ' + gladiator_1.health + '</h3>',
        '<h3>' + 'Rage: ' + gladiator_1.rage + '</h3>',
        viewButtons(),
        '</div>'
    ].join('');
}

function viewGladiator2() {
    return [
        '<div class="col-lg-6">',
        '<h3>' + 'Name: ' + gladiator_2.name + '</h3>',
        '<h3>' + 'Health: ' + gladiator_2.health + '</h3>',
        '<h3>' + 'Rage: ' + gladiator_2.rage + '</h3></br>',
        viewButtons2(),
        '</div>'
    ].join('');
}

function buttonHandler() {
    $('#Attack').click(function() {
        gladiator_2.health -= 15;
        gladiator_1.rage += 5;
        STATE.update =
            gladiator_2.name + ' -15 Health ' + gladiator_1.name + ' +5 Rage ';
        STATE.turn = 2;
        draw();
    });
    $('#Heal').click(function() {
        if (gladiator_1.health < 100 && gladiator_1.rage >= 10) {
            gladiator_1.health += 5;
            gladiator_1.rage -= 10;
            STATE.update =
                gladiator_1.name +
                ' +5 Health ' +
                gladiator_1.name +
                ' -10 Rage ';
            STATE.turn = 2;
            draw();
        }
    });
    $('#SuperAttack').click(function() {
        if (gladiator_1.rage >= 30) {
            gladiator_1.rage -= 15;
            gladiator_2.rage += 25;
            gladiator_2.health -= 30;
            STATE.update =
                gladiator_2.name +
                ' -30 Health ' +
                gladiator_1.name +
                ' -20 Rage ';
            STATE.turn = 2;
            draw();
        }
    });

    $('#Attack2').click(function() {
        gladiator_1.health -= 15;
        gladiator_2.rage += 5;
        STATE.update =
            gladiator_1.name + ' -15 Health ' + gladiator_2.name + ' +5 Rage ';
        STATE.turn = 1;
        draw();
    });
    $('#Heal2').click(function() {
        if (gladiator_2.health < 100 && gladiator_2.rage >= 10) {
            gladiator_2.health += 5;
            gladiator_2.rage -= 10;
            STATE.update =
                gladiator_2.name +
                ' +5 Health ' +
                gladiator_2.name +
                ' -10 Rage ';
            STATE.turn = 1;
            draw();
        }
    });
    $('#SuperAttack2').click(function() {
        if (gladiator_2.rage >= 30) {
            gladiator_2.rage -= 15;
            gladiator_1.rage += 25;
            gladiator_1.health -= 30;
            STATE.update =
                gladiator_1.name +
                ' -30 Health ' +
                gladiator_2.name +
                ' -20 Rage ';
            STATE.turn = 1;
            draw();
        }
    });
}

function gladiator_1dead() {
    appRoot.html(
        '<button onclick="document.location.reload()">' +
            gladiator_1.name +
            ', Loses! </br> Restart </button>'
    );
}

function gladiator_2dead() {
    appRoot.html(
        '<button onclick="document.location.reload()">' +
            gladiator_2.name +
            ',Loses! </br>Restart</button>'
    );
}

function isDead() {
    if (gladiator_1.health <= 0) {
        gladiator_1dead();
    } else if (gladiator_2.health <= 0) {
        gladiator_2dead();
    }
}

function draw() {
    appRoot.html(viewGladiator1() + viewGladiator2());
    buttonHandler();
    isDead();
}

function main() {
    draw();
}

$(main);
