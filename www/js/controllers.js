/**
 * @author: Duy Thanh DAO
 * @email: success.ddt@gmail.com
 */
angular.module('starter.controllers', [])

// Home controller
.controller('HomeCtrl', function($scope, Product, $ionicNavBarDelegate) {
  // slider images
  $scope.slides = [
    {
      url: 'img/slide_1.jpg'
    },
    {
      url: 'img/slide_2.jpg'
    },
    {
      url: 'img/slide_3.jpg'
    }
  ]
  // list products
  $scope.products = Product.all();
})

// Category controller
.controller('CategoryCtrl', function($scope,Product,$state,$http) {
  	//$scope.products = Product.all();
	var action = "all_product";
	var orderby = "all";
	var category = "all";
  	var data_parameters = "action="+action+ "&orderby="+orderby+ "&category="+category;
	$http.post(globalurl,data_parameters, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response) {
		if(response[0].status == "Y"){
			$scope.response = response;
		}
	});
})

// Product detail controller
.controller('DetailCtrl', function($scope,Product,$stateParams,$state,$http) {
  	//$scope.product = Product.get(1);
	
	var product_id = $stateParams.product_id;
  	var action = "get_product_detail";
	
  	var data_parameters = "action="+action+ "&product_id="+product_id;
	$http.post(globalurl,data_parameters, {
		headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response) {
		if(response[0].status == "Y"){
			$scope.response = response;
			$scope.p_id = response[0].p_id;
			$scope.p_name = response[0].p_name;
			$scope.p_image = response[0].p_image_url;
			$scope.p_price = response[0].p_price;
			$scope.p_sale_price = response[0].p_price;
			$scope.p_description = response[0].p_deas;
		}
	});
})

// Cart controller
.controller('CartCtrl', function($scope,$http,ngCart) {
	ngCart.setTaxRate(0);
    ngCart.setShipping(0); 	
})

// Checkout Controller, process checkout steps here
.controller('CheckoutCtrl', function($scope) {})

// History Controller, process checkout steps here
.controller('HistoryCtrl', function($scope) {})


.controller('setting', function($scope,$stateParams,$http,$ionicPopup){
	$scope.user = {
			opassword : '',
			npassword : '',
			cpassword : ''
	};
	
	$scope.changepassword = function(user){
		var oldpass = user.opassword;
		var newpass = user.npassword;
		var confirmpass = user.cpassword;

		var slocid = localStorage.getItem("slocid");
		var orgid = localStorage.getItem("orgid");
		var userid = localStorage.getItem("userid");
		
		if(oldpass != "" && newpass != "" && confirmpass != ""){
			if(newpass != confirmpass){
				$ionicPopup.show({
					  template: '',
					  title: "New & Confirm password didn't match",
					  scope: $scope,
					  buttons: [
						{ 
						  text: 'Ok',
						  type: 'button-assertive'
						},
					  ]
				})
			}
			else{
				var data_parameters = "slocid="+slocid+ "&orgid="+orgid+ "&id="+userid+ "&userid="+userid+ "&oldpass="+oldpass+ "&newpass="+newpass;
				$http.post("http://"+globalip+"/change_password",data_parameters,{
					headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
				})
				.success(function(response) {
					if(response[0].status != "N"){
						$ionicPopup.show({
							  template: '',
							  title: "Password changed successfully",
							  scope: $scope,
							  buttons: [
								{ 
								  text: 'Ok',
								  type: 'button-calm'
								},
							  ]
						})
						$scope.user = {
								opassword: '',
								npassword : '',
								cpassword : ''
						};
					}
					else{
						$ionicPopup.show({
							  template: '',
							  title: "Old password is wrong",
							  scope: $scope,
							  buttons: [
								{ 
								  text: 'Ok',
								  type: 'button-assertive'
								},
							  ]
						})
					}
				});
			}
		}
		else{
			$ionicPopup.show({
				  template: '',
				  title: 'Please fill all fields',
				  scope: $scope,
				  buttons: [
					{ 
					  text: 'Ok',
					  type: 'button-assertive'
					},
				  ]
			})
		}
	}
})


// Authentication controller
// Put your login, register functions here
.controller('AuthCtrl', function($scope, $ionicHistory) {
    // hide back butotn in next view
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
});
