function ReservationController($scope) {
	$scope.reservations = [];
 	$scope.customer = "";
 	$scope.howMany = "";
    $scope.phone = "";
	$scope.addReservation = function(reservation) {
		if(localStorage.reservations!="") {
			$scope.reservations = JSON.parse(localStorage.reservations);
		} else {
			$scope.reservations = [];
		}
		var res = angular.copy(reservation);
		$scope.reservations.push({
            customer: res.customer,
            howMany: res.howMany,
            phone: res.phone
        });
        localStorage.reservations = JSON.stringify($scope.reservations);

	}
}
