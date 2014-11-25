define(['angular'], function(angular) {
	return {
		addItem: function() {
		    return function(scope, elem, attr) {
		        
		        elem.on('click', function() {
		            scope.item.children.push({
		                    "text":"",
		                    "children":[]
		                });

		            scope.$apply(elem);
		            scope.update();
		        })
		    }
		},

		removeItem: function() {
		    return function(scope, elem, attr) {

		        elem.on('click', function(e) {

		            elem.parent('li').remove();

		            scope.$parent.items.splice(scope.$index, 1);

		            scope.$apply(elem);

		            scope.update();
		        });
		    };
		},

		saveText: function() {
		    return function(scope, elem, attr) {

		        elem.on('blur mouseleave', function(e) {
		            scope.item.text = elem.val();
		            
		            scope.update();
		        });
		    };
		}
	}

});
