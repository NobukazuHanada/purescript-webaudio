
/* global exports, AudioContet */
"use strict;"

// module AudioContext


exports.createAudioContext = function(){
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    return new AudioContext();
}

exports.createOscillator = function(context){
    return function(){
        return context.createOscillator();
    };
}

exports.createDestination = function(context){
    return function(){
        return context.destination;
    };
}

exports.connect = function(_audioNode1){
    return function(_audioNode2){
        return function(node1){
            return function(node2){
                return function(){
                    node1.connect(node2);
                }
            }
        }
    }
}

exports.setFrequency = function(f){
    return function(osc){
        return function(){
            osc.frequency.value = f;
        }      
    }
}

exports.start = function(osc){
    return function(){
        osc.start();
    };
}


exports.start = function(osc){
    return function(){
        osc.stop();
    };
}

exports.createGain = function(context){
    return function(){
        return context.createGain();
    }
}

exports.createDestination = function(context){
    return function(){
        return context.destination;
    }
}

// audioParams
function setAudioParams(funcName){
    return function(value){
        return function(time){
            return function(audioParam){
                return function(){
                    return audioParam[funcName](value, time);
                }
            }
        }  
    }
}

exports.setValueAtTime = setAudioParams("setValueAtTime");
exports.linearRampToValueAtTime = setAudioParams("linearRampToValueAtTime");
exports.exponentialRampToValueAtTime = setAudioParams("exponentialRampToValueAtTime");
exports.setTargetAtTime = setAudioParams("setTargetAtTime");
exports.setValueCurveAtTime = setAudioParams("_");
exports.cancelSheduledValues = setAudioParams("cancelSheduledValues");
