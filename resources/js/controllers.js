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

    appendToDom(reservation);
	}
}

function appendToDom(reservation) {
  var tmpl = document.createElement('div');
             tmpl.setAttribute('class', "four columns");
             tmpl.innerHTML =
                    '<div class="pending-slot selected"> <!-- Class "selected" indicates selected state -->' +
                        '<div class="number-in-party">' + reservation.howMany + '</div>' +
                        '<div class="contact">' +
                            '<div class="name-in-party">' + reservation.customer + '</div>' +
                            '<div class="phone-number">' + reservation.phone + '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>'

  document.getElementById('pending-reservations').appendChild(tmpl);
}
