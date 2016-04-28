/**
 * Created by Administrator on 2016-04-13.
 * 每个模块的前四个参数分别为
 * 复数形式：由数据库获得的全部对象数组
 * 单数形式：正在编辑的当前行对象
 * 单数形式+Added：新增的对象，将要被添加
 * r.checked：标识该行是否被点击了编辑
 */
'use strict';

App.controller('SettingController', ['$scope', 'Service', function ($scope, Service) {

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
                $scope.formRoomCategory.categoryCode.$dirty = false;
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
    /**
     * 客源
     * guestSources：
     * guestSource
     * guestSourceAdded
     */
    $scope.createGuestSource = function () {
        Service.createByPath($scope.guestSourceAdded,'guestSource')
            .then(
            function (d) {
                $scope.getAllGuestSource();
                $scope.guestSourceAdded.sourceCode = null;
                $scope.guestSourceAdded.sourceName = null;
                $scope.formGuestSource.sourceCode.$dirty = false;
                $scope.formGuestSource.sourceName.$dirty = false;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        )
    };
    $scope.deleteGuestSource = function (guestSource) {
        Service.deleteByPath(guestSource.id,'guestSource')
            .then(
            function (d) {
                $scope.getAllGuestSource();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.updateGuestSource = function (guestSource) {
        Service.updateByPath(guestSource,'guestSource')
            .then(
            function (d) {
                $scope.getAllGuestSource();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.getAllGuestSource = function () {
        Service.getAllByPath('guestSource')
            .then(
            function (d) {
                $scope.guestSources = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    /**
     * 币种
     * currencies：
     * currency
     * currencyAdded
     */
    $scope.createCurrency = function () {
        Service.createByPath($scope.currencyAdded,'currency')
            .then(
            function (d) {
                $scope.getAllCurrency();
                $scope.currencyAdded.currencyCode = null;
                $scope.currencyAdded.currencyName = null;
                $scope.formCurrency.currencyCode.$dirty = false;
                $scope.formCurrency.currencyName.$dirty = false;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        )
    };
    $scope.deleteCurrency = function (currency) {
        Service.deleteByPath(currency.id,'currency')
            .then(
            function (d) {
                $scope.getAllCurrency();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.updateCurrency = function (currency) {
        Service.updateByPath(currency,'currency')
            .then(
            function (d) {
                $scope.getAllCurrency();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.getAllCurrency = function () {
        Service.getAllByPath('currency')
            .then(
            function (d) {
                $scope.currencies = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    /**
     * 核心参数
     * otherParams：
     * otherParam
     * otherParamAdded
     */
    $scope.createOtherParam = function () {
        Service.createByPath($scope.otherParamAdded,'otherParam')
            .then(
            function (d) {
                $scope.getAllOtherParam();
                $scope.otherParamAdded.otherParamCode = null;
                $scope.otherParamAdded.otherParamValue = null;
                $scope.otherParamAdded.otherParamDescription = null;
                $scope.formOtherParam.otherParamCode.$dirty = false;
                $scope.formOtherParam.otherParamValue.$dirty = false;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        )
    };
    $scope.deleteOtherParam = function (otherParam) {
        Service.deleteByPath(otherParam.id,'otherParam')
            .then(
            function (d) {
                $scope.getAllOtherParam();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.updateOtherParam = function (otherParam) {
        Service.updateByPath(otherParam,'otherParam')
            .then(
            function (d) {
                $scope.getAllOtherParam();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.getAllOtherParam = function () {
        Service.getAllByPath('otherParam')
            .then(
            function (d) {
                $scope.otherParams = d;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    /**
     * 协议价定义
     * protocols：
     * protocol
     * protocolAdded
     */
    $scope.createProtocol = function () {
        Service.createByPath($scope.protocolAdded,'protocol')
            .then(
            function (d) {
                $scope.getAllProtocol();
                $scope.protocolAdded.protocolCode = null;
                $scope.protocolAdded.protocolName = null;
                $scope.protocolAdded.roomCategory = null;
                $scope.protocolAdded.roomPrice = null;
                $scope.protocolAdded.breakfast = null;
                $scope.formProtocol.protocolCode.$dirty = false;
                $scope.formProtocol.protocolName.$dirty = false;
                $scope.formProtocol.roomCategory.$dirty = false;
                $scope.formProtocol.roomPrice.$dirty = false;
                $scope.formProtocol.breakfast.$dirty = false;
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        )
    };
    $scope.deleteProtocol = function (protocol) {
        Service.deleteByPath(protocol.id,'protocol')
            .then(
            function (d) {
                $scope.getAllProtocol();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.updateProtocol = function (protocol) {
        Service.updateByPath(protocol,'protocol')
            .then(
            function (d) {
                $scope.getAllProtocol();
            },
            function (errResponse) {
                alert(errResponse.data.message);
            }
        );
    };
    $scope.getAllProtocol = function () {
        Service.getAllByPath('protocol')
            .then(
            function (d) {
                $scope.protocols = d;
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
    $scope.getAllGuestSource();
    $scope.getAllCurrency();
    $scope.getAllOtherParam();
    $scope.getAllProtocol();
    /*
     $scope.getAllCompanyCard();
     $scope.getAllCompanyLord();*/
    //alert(JSON.parse(sessionStorage.getItem("user")).userId);
}]);
