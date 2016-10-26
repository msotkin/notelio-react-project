var interact = require('./'),
    crel = require('crel');

window.onload = function(){

    var log = [],
        output

    crel(document.body,
        output = crel('div')
    );

    var toLog = 'pageX pageY identifier angle'.split(' ');

    var eventHandler = function(interaction){
        interaction.preventDefault();

        log.push(interaction);
        var info = '';

        for(var key in interaction){
            if(~toLog.indexOf(key)){
                info += key + ': ' + interaction[key] + ' ';
            }
        }

        crel(output,
            crel('p', interaction.phase, crel('br'), info, crel('br'), 'nicer angle: ' + interaction.getCurrentAngle(true))
        );

        if(output.childNodes.length > 10){
            output.removeChild(output.childNodes[0]);
        }
    };

    interact.on('move', document.body, eventHandler);
    interact.on('start', document.body, eventHandler);
    interact.on('drag', document.body, eventHandler);
    interact.on('end', document.body, eventHandler);
    interact.on('cancel', document.body, eventHandler);

};