define(['angular'], function(angular) {

    return function() {

        var data = [{
            "text": "",
            "children": []
        }];


        if (localStorage.getItem('data') == null) {
            localStorage.setItem('data', JSON.stringify(data));
        }

        return {
            getData: function() {
                return JSON.parse(localStorage.getItem('data'));
            }
        }

    }

});
