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
		$scope.reservations.push({
            customer: reservation.customer,
            howMany: reservation.howMany,
            phone: reservation.phone
        });
        localStorage.reservations = JSON.stringify($scope.reservations);

	}
}
