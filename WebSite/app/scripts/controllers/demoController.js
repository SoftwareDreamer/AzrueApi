﻿(function () {
    var app = angular.module('InterestingThings');

    var demoController = function ($scope) {
        $scope.randomCount = 0;
        $scope.randomNumList = [];

        $scope.getNumList = function (num, isClear) {
            if (isClear) {
                $scope.randomNumList = [];
            }

            for (var i = 0; i < num; i++) {
                var localList = [];
                for (var j = 0; j < 8; j++) {
                    var random = -1;
                    if (j != 7) {
                        random = Math.floor(Math.random() * 33 + 1);
                    } else {
                        random = Math.floor(Math.random() * 16 + 1);
                    }
                    if (random < 10) {
                        random = '0' + random;
                    }

                    var randomNum = { id: j, value: random };
                    localList.push(randomNum);
                }

                $scope.randomNumList.push({ id: i, list: localList });
            }
        }

        $scope.getNumList(1);

        $scope.generateRandomList = function () {
            if ($scope.randomCount != 0) {
                $scope.getNumList($scope.randomCount, true);
            } else {
                alert("No number.");
            }
        }
    }

    app.controller('demoController', demoController);
})();