console.log((function concat(first){

    var toArray = function(a){
            return Array.prototype.slice.call(a, 0);
        },
        q = toArray(arguments);

    return function fn() {
        if (arguments.length) {
            q = q.concat(toArray(arguments));
            return fn;
        } else {
            return q.reduce(function(previousValue, currentValue, index, array){
                return previousValue + " " + currentValue;
            });
        }
    };

})("Hello")("there")("how","are","you?")());
