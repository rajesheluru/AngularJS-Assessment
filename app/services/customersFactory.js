(function() {
    var customersFactory = function($http) {
    
        var factory = {};
        //calling API 
        factory.getCustomers = function() {
            return $http.get('/customers');
        };
        
        factory.getCustomer = function(customerId) {
            return $http.get('/customers/' + customerId);
        };
        //Returning custome object
        return factory;
    };
    
    customersFactory.$inject = ['$http'];
        
    angular.module('customersApp').factory('customersFactory', 
                                           customersFactory);
                                           
}());