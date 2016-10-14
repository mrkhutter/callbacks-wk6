// function defintion connected to a button on add btn
davidsLib.add(1, 2, function(){
    

})

function add(op1, op2, callback) { // callback == function()
    var result = parseFloat(op1) + parseFloat(op2);
    execute(result, callback);
}

function execute(response, callback) { //callback = function
    var random = Math.floor(Math.random() * 10) + 1;
    setTimeout(function() {
        if (random % 4 === 0) {
            callback('A timeout has occurred.');
        } else {
            callback(null, response);
        }
    }, random * 1000);
}