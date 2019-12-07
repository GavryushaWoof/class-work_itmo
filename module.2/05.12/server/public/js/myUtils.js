export let myUtils = {
    remove: function(arr, index) {
        return arr.splice(index, 1);
    },
    repeat: function(str, count) {
        return str.repeat(count);
        // return Array(count+1).join(str);
    },
    pluck: function(arr, nameProp) {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'object' && arr[i][nameProp] !== undefined) {
                res.push(arr[i][nameProp]);
            }
        }
        return res;
    },
    sum: function(num1, num2, cb) {
        import ('./test.js').then(function(lib) {
            cb(lib.sum(num1, num2));
        }, function() {
            console.log('Нет файла');
        });
    }
};