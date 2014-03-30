portfolio.factory('emailService',function($http, $q){
	var url = '/sendemail/';
	return {
		sendEmail: function(emailEntity){
			console.log($.cookie('test'));
			var defer = $q.defer();
			$http({
				url: url,
				method:'POST',
				data:emailEntity
			}).success(function(status, data, header,config){
				// what you resolve here, it will be return to the defer.promise
				// get 'success' in defer.promise.then(function(data){ //data == 'success' })
				defer.resolve('success');
			}).error(function(status, data, header,config){
				defer.reject(status);
			});
			return defer.promise;
		}
	}
	
});