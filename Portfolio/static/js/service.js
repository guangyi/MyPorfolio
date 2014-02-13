portfolio.factory('emailService',function($http, $q){
	var url = 'sendemail/';
	return {
		sendEmail: function(emailEntity){
			console.log('here');
			var defer = $q.defer();
			$http({
				url: url,
				method:'POST',
				data:emailEntity
			}).success(function(status, data, header,config){
				defer.resolve(data);
			}).error(function(status, data, header,config){
				defer.reject(status);
			});
			return defer.promise;
		}
	}
	
});