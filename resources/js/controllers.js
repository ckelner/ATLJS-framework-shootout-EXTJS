function ReservationController($scope) {
	$scope.reservations = [];
 	$scope.customer = "";
 	$scope.howMany = "";
    $scope.phone = "";
	$scope.addReservation = function() {
		if(localStorage.reservations!="") {
			$scope.reservations = JSON.parse(localStorage.reservations);
		} else {
			$scope.reservations = [];
		}
		$scope.reservations.push({
            /*customer: $scope.customer,
            howMany: $scope.howMany,
            phone: $scope.phone*/
            customer: "test",
            howMany: "12",
            phone: "12345678"
        });
        localStorage.reservations = JSON.stringify($scope.reservations);
        $scope.customer="test";
        $scope.howMany= "12";
        $scope.phone= "12345678";
	}
}
