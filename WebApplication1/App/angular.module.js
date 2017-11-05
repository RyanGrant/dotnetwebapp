﻿var app = angular.module('App', ['ngAnimate', 'ui.bootstrap', 'ngCookies', '$http'])
    .controller('mainController', ['$cookies',
        function ($cookies) {
            var vm = this;
            console.log(vm.weaponList);
            vm.init = function () {
                console.log($cookies.getAll());
                var cookies = $cookies.get('weaponList');
                if (cookies == undefined) {
                    console.log("Initial Setup");
                    vm.initialSetup();
                }
                else {
                    console.log("Loaded cookies");
                    console.log(cookies);
                    vm.initialSetup();
                    var cookieWeapons = $cookies.get('weaponList');
                    var cookieHunter = $cookies.get('hunterList');
                    var cookieWarlock = $cookies.get('warlockList');
                    var cookieTitan = $cookies.get('titanList');

                    for (i = 0; i < vm.weaponList.length; i++) {
                        if (cookieWeapons[i] == '1') {
                            vm.weaponList[i].active = true;
                        }
                        else {
                            vm.weaponList[i].active = false;

                        }
                    } for (i = 0; i < vm.hunterList.length; i++) {
                        if (cookieHunter[i] == '1') {
                            vm.hunterList[i].active = true;
                        }
                        else {
                            vm.hunterList[i].active = false;

                        }
                    } for (i = 0; i < vm.warlockList.length; i++) {
                        if (cookieWarlock[i] == '1') {
                            vm.warlockList[i].active = true;
                        }
                        else {
                            vm.warlockList[i].active = false;

                        }
                    } for (i = 0; i < vm.titanList.length; i++) {
                        if (cookieTitan[i] == '1') {
                            vm.titanList[i].active = true;
                        }
                        else {
                            vm.titanList[i].active = false;

                        }
                    }
                }
            };

        vm.toggle = function (item) {
            item.active = !item.active;
            var cookieWeapons = "";
            var cookieHunter = "";
            var cookieWarlock = "";
            var cookieTitan = "";

            for (i = 0; i < vm.weaponList.length; i++) {
                if (vm.weaponList[i].active) {
                    cookieWeapons += '1';
                }
                else {
                    cookieWeapons += '0';

                }
            } for (i = 0; i < vm.hunterList.length; i++) {
                if (vm.hunterList[i].active) {
                    cookieHunter += '1';
                }
                else {
                    cookieHunter += '0';

                }
            } for (i = 0; i < vm.warlockList.length; i++) {
                if (vm.warlockList[i].active) {
                    cookieWarlock += '1';
                }
                else {
                    cookieWarlock += '0';

                }
            } for (i = 0; i < vm.titanList.length; i++) {
                if (vm.titanList[i].active) {
                    cookieTitan += '1';
                }
                else {
                    cookieTitan += '0';

                }
            }
            $cookies.put('weaponList', cookieWeapons);
            $cookies.put('hunterList', cookieHunter);
            $cookies.put('warlockList', cookieWarlock);
            $cookies.put('titanList', cookieTitan);
        }

        vm.initialSetup = function () {
            vm.weaponList = exoticWeaponList;
            vm.hunterList = hunterExoticArmorList;
            vm.warlockList = warlockExoticArmorList;
            vm.titanList = titanExoticArmorList;
        }

        vm.firstGet = function () {
            $http.defaults.headers.common["Ocp-Apim-Subscription-Key"] = key;

            var fantasyAPI = $resource("http://www.bungie.net/Platform/Destiny/");
            console.log("API");
            console.log(fantasyAPI);
        }
            /*
        const HOST = 'http://www.bungie.net/Platform/Destiny/';

        var baseRequest = request.defaults({ headers: { 'X-API-Key': credentials.destinyKey } });

        app.get('/test', function (req, res) {
            if (!err && response.statusCode < 400) {
                baseRequest(HOST + '2/Stats/GetMembershipIdByDisplayName/' + credentials.defaultUserName + '/',
                    function (err, response, body) {

                        var context = {};
                        context.test = JSON.stringify(JSON.parse(body), null, 4);
                        res.render('test', context);
                    });
            }
        });*/
    }]
)