/**
 * Created by Administrator on 2016-04-13.
 * 每个模块的前四个参数分别为
 * 复数形式：由数据库获得的全部对象数组
 * 单数形式：正在编辑的当前行对象
 * 单数形式+Added：新增的对象，将要被添加
 * r.checked：标识该行是否被点击了编辑
 */
'use strict';

App.controller('ConfigureController', ['$scope', 'Service', function ($scope, Service) {

    $scope.protocols = [];//协议房价
    $scope.otherParams = [];//其他参数
    $scope.guestSources = [];//客源
    $scope.currencies = [];//币种
    $scope.companyCards = [];//单位帐卡
    $scope.companyLords = [];//单位签单人----单位帐卡从表 3列
    /**
     * 公共方法
     */
    /*点击编辑*/
    $scope.updateClick = function (r) {
        r.checked = 'true';
    };
    /**
     * 操作员
     * users：
     * user：
     * userAdded：
     * checkPassword：修改东西需要先验证当前的密码
     */
    $scope.createByPath = function () {
        Service.createByPath($scope.userAdded, 'user')
            .then(
            function (d) {
                $scope.getAllByPath();
                $scope.userAdded.userId = null;
                $scope.userAdded.userName = null;
                $scope.userAdded.userPassword = null;
                $scope.formUser.userId.$dirty = false;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        )
    };
    $scope.deleteByPath = function (user) {
        if (checkUserPassword(user)) {
            Service.deleteByPath(user.id, 'user')
                .then(
                function (d) {
                    $scope.getAllByPath();
                },
                function (errResponse) {
                    alert(errResponse.data.message);
                }
            );
        } else {
            alert("密码错误");
        }
    };
    $scope.updateByPath = function (user) {
        if (checkUserPassword(user)) {
            Service.updateByPath(user, 'user')
                .then(
                function (d) {
                    $scope.getAllByPath();
                },
                function (errResponse) {
                    alert(errResponse.data.message);
                }
            );
        } else {
            alert("密码错误");
        }
    };
    $scope.getAllByPath = function () {
        Service.getAllByPath('user')
            .then(
            function (d) {
                $scope.users = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };

    /*点击编辑--操作员表需要核对一下操作员密码*/
    $scope.updateClickUser = function (r) {
        if (checkUserPassword(r)) {
            r.checked = 'true';
        } else {
            alert("密码错误");
        }
    };

    /*核对密码*/
    var checkUserPassword = function checkUserPassword(r) {
        if (r.userPassword == null)return true;
        return r.userPassword == $scope.checkPassword;
    };
    /**
     * 房间类别
     * roomCategories：
     * roomCategory：
     * roomCategoryAdded:
     */
    $scope.createRoomCategory = function () {
        Service.createByPath($scope.roomCategoryAdded,'roomCategory')
            .then(
            function (d) {
                $scope.getAllRoomCategory();
                $scope.roomCategoryAdded.categoryCode = null;
                $scope.roomCategoryAdded.categoryName = null;
                $scope.formRoomCategory.categoryName.$dirty = false;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        )
    };
    $scope.deleteRoomCategory = function (roomCategory) {
        Service.deleteByPath(roomCategory.id,'roomCategory')
            .then(
            function (d) {
                $scope.getAllRoomCategory();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.updateRoomCategory = function (roomCategory) {
        Service.updateByPath(roomCategory,'roomCategory')
            .then(
            function (d) {
                $scope.getAllRoomCategory();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.getAllRoomCategory = function () {
        Service.getAllByPath('roomCategory')
            .then(
            function (d) {
                $scope.roomCategories = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };

    /**
     * 房间定义
     * rooms：
     * room
     * roomAdded
     */
    $scope.createRoom = function () {
        $scope.roomAdded.state = 'V';
        $scope.roomAdded.dirty = false;
        Service.createByPath($scope.roomAdded,'room')
            .then(
            function (d) {
                $scope.getAllRoom();
                $scope.roomAdded.roomId = null;
                $scope.formRoom.roomId.$dirty = false;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        )
    };
    $scope.deleteRoom = function (room) {
        Service.deleteByPath(room.id,'room')
            .then(
            function (d) {
                $scope.getAllRoom();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.updateRoom = function (room) {
        Service.updateByPath(room,'room')
            .then(
            function (d) {
                $scope.getAllRoom();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.getAllRoom = function () {
        Service.getAllByPath('room')
            .then(
            function (d) {
                $scope.rooms = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    /*/!**
     * 协议房价
     *!/
    $scope.getAllProtocol = function () {
        Service.getAllProtocol()
            .then(
            function (d) {
                $scope.protocols = d;
            },
            function (errResponse) {
                console.error('Error while getting protocols:' + errResponse.toString());
            }
        );
    };
    /!**
     * 其他参数
     *!/
    $scope.getAllOtherParam = function () {
        Service.getAllOtherParam()
            .then(
            function (d) {
                $scope.otherParams = d;
            },
            function (errResponse) {
                console.error('Error while getting otherParams:' + errResponse.toString());
            }
        );
    };
    /!**
     * 客源
     *!/
    $scope.getAllGuestSource = function () {
        Service.getAllGuestSource()
            .then(
            function (d) {
                $scope.guestSources = d;
            },
            function (errResponse) {
                console.error('Error while getting guestSources:' + errResponse.toString());
            }
        );
    };
    /!**
     * 币种
     *!/
    $scope.getAllCurrency = function () {
        Service.getAllCurrency()
            .then(
            function (d) {
                $scope.currencies = d;
            },
            function (errResponse) {
                console.error('Error while getting currencies:' + errResponse.toString());
            }
        );
    };
    /!**
     * 单位帐卡
     *!/
    $scope.getAllCompanyCard = function () {
        Service.getAllCompanyCard()
            .then(
            function (d) {
                $scope.companyCards = d;
            },
            function (errResponse) {
                console.error('Error while getting companyCards:' + errResponse.toString());
            }
        );
    };
    /!**
     * 单位签单人
     *!/
    $scope.getAllCompanyLord = function () {
        Service.getAllCompanyLord()
            .then(
            function (d) {
                $scope.companyLords = d;
            },
            function (errResponse) {
                console.error('Error while getting companyLords:' + errResponse.toString());
            }
        );
    };*/


    /*页面加载之后调用的方法*/
    $scope.getAllByPath();
    $scope.getAllRoom();
    $scope.getAllRoomCategory();
    /*$scope.getAllProtocol();
    $scope.getAllOtherParam();
    $scope.getAllGuestSource();
    $scope.getAllCurrency();
    $scope.getAllCompanyCard();
    $scope.getAllCompanyLord();*/
    alert(sessionStorage.getItem("userId"));
    alert(sessionStorage.getItem("userName"));
    alert(sessionStorage.getItem("userPassword"));
    alert(sessionStorage.getItem("userCategory"));
    alert(sessionStorage.getItem("userLevel"));
    alert(sessionStorage.getItem("posNumber"));
}]);
