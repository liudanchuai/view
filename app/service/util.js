App.factory('Util', ['Service', function (Service) {
    var map = {};
    return {
        /*进行逻辑业务操作*/
        getMapValue: function (key) {
            return map[key];
        },
        pushMapValue: function (key, value) {
            map[key] = value;
        },
        getValueByField: function (array, field, value) {
            var l = array.length;
            for (var i = 0; i < l; i++) {
                if (array[i][field]==(value)) {
                    return array[i];
                }
            }
            return false;
        },
        getHourRoomByProtocolAndRoomCategory:function(hourRooms,protocolCode,roomCategory){
            var l=hourRooms.length;
            for(var i=0;i<l;i++){
                if(hourRooms[i].protocolCode==protocolCode && hourRooms[i].roomCategory==roomCategory){
                    return hourRooms[i];
                }
            }
            return false;
        }
    };
}]);