"use strict";

	var app = angular.module('myApp', []);

	app.controller(ContactController, ["$scope", ContactController]);
	function ContactController($scope) {
		$scope.contacts = [{
			name: "Mary Grap",
			phone: "240-999-8870",
			city: "Maryland, MD",
			avatar: "/images/avatar4.jpeg"
		}, {
			name: "Mike Bridge",
			phone: "512-789-0098",
			city: "Austin, TX",
			avatar: "/images/avatar3.jpeg"
		}, {
			name: "Brian Craff",
			phone: "514-090-7689",
			city: "San-Ramon, CA",
			avatar: "/images/avatar2.jpeg"

		}, {
			name: "Bill Fence",
			phone: "414-490-7689",
			city: "New York City, NY",
			avatar: "/images/avatar1.jpeg"
		},{
			name: "Lee Mitchelk",
			phone: "230-789-6655",
			city: "Virgina",
			avatar: "/images/avatar.jpeg"
		}];




		$scope.Save = function() {

			$scope.contacts.push({
				name: $scope.newName,
				phone: $scope.newPhone,
				city: $scope.newCity,
				avatar: $scope.newAvatar
			});
			$scope.newName = "";
			$scope.newPhone= "";
			$scope.newCity = "";
			$scope.newAvatar = "";
			$scope.formVisibility = false;

		}



		$scope.ShowForm = function() {
			$scope.formVisibility = true;

		}

	}

