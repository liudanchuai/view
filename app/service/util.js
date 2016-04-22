App.factory('Util', ['Service', function (Service) {
    var map={};
    return {
        /*进行逻辑业务操作*/
        getMapValue:function(key){
            return map[key];
        },
        pushMapValue:function(key,value){
                map[key] = value;
        }
    };
}]);