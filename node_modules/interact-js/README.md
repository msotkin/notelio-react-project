interact
========

An interaction unifying library.

Makes binding to dragging and moving events easier.

Allows easy handling of multi-touch interactions.

## Usage

Get it:

    npm install interact-js

Require it:

    var interact = require('interact-js');

Use it:

    interact.on('move', document.body, moveHandler);
    interact.on('start', document.body, startHandler);
    interact.on('drag', document.body, dragHandler);
    interact.on('end', document.body, endHandler);
    interact.on('cancel', document.body, cancelHandler);

## Events

### start

mousedown and/or touchstart

### drag

A mousemove while the mouse button is pressed

or

A touchmove.

### move

Usually a mousemove

This event is rarely used.

### end

mouseup and/or touchend

### cancel

The event was canceled.

This could happen if the user ALT+TAB's, or if a system prompt appears wile they are interacting with the UI.

## an Interaction

Event handlers are passed an instance of Interaction.

    interact.on('drag', document.body, function(interaction){
                                                ^^^^^^^^^^^
    });

The Interaction instance is persisted throughout the lifecycle of a user interaction.
This means you can safely store custom data on the interaction, and it will be available in every following stage of the interaction.
For example, in 'start', you could attach some data, and that data will still be there on 'drag'.

An interaction has a number of properties and methods that can be helpful

### interaction.preventDefault

Maps to event.preventDefault

### interaction.stopPropagation

Maps to event.stopPropagation

### interaction.getActualTarget

Often, touch browsers will report the element that was touchstarted, even after the user moves their finger off of that element

This is stupid.

getActualTarget will get the actual element that is under the users finger.

### interaction.getMoveDistance()

Returns the distance bewteen this interaction and the previous one.

    interaction.getMoveDistance();

    // 12.5476

### interaction.getMoveDelta()

Returns the difference between this interaction and the previous one in x and y

    interaction.getMoveDelta();

    // {x: 5, y: -3}

### interaction.getSpeed()

Returns the speed in pixels per second over the last two pixels

    interaction.getSpeed();

    // 5.0193452

### interaction.getCurrentAngle(blend)

Returns the angle that the interaction is traveling at.

    interaction.getCurrentAngle();

    // 90

pass true to get much nicer results at low speeds. Interact will figure out a more useful angle based of previous moves, and the speed that the interaction is moving.

    interaction.getCurrentAngle(true);

    // 104.246342

### interaction.getAllInteractions()

Returns an array of all interactions that are currently active.

    interaction.getAllInteractions();

    // [Interaction, Interaction, Interaction]

### interaction.moves

An array of all the previous moves AND drags associated with the interaction.

At 1000 moves, the head of the list will be culled.

If you need more, you can track them yourself :)

### interaction.angle

The angle between the last two points.

This value is simplistic, and will report hard 90 degree mutliples at low speeds, as the interaction moves between two pixels.

use getCurrentAngle(true) for nicer angles.