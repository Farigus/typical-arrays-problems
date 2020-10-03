exports.min = function min(array) {


    if (typeof array !== 'object' || array == [] || array.length == 0) {

        return 0;
    }



    array.sort((a, b) => a - b);
    return array[0];


}

exports.max = function max(array) {


    if (typeof array !== 'object' || array == [] || array.length == 0) {

        return 0;
    }

    array.sort((a, b) => a - b);
    return array[array.length - 1];


}

exports.avg = function avg(array) {


    if (typeof array !== 'object' || array == [] || array.length == 0) {

        return 0;
    }

    let countOfItems = array.length;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        sum = sum + array[i];


    }


    return sum / countOfItems;

}