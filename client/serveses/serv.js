 angular.module('MyApp.serv', [])
.factory('account', function ($http) {
  return {
    signin: function(user){
      return $http({
        method: 'POST',
        url: 'api/signin',
        data: user 
      })
      .then(function(resp){
        return resp.data;
      })
    },
    signup:function(user){
      return $http({
        method:'POST',
        url:'api/signup',
        data:user
      }).then(function(resp){
        return resp.data;
      })
    },
   //     addtext: function(utr){
   //   return $http({
   //    method: 'POST',
   //    url: '/api/id',
   //    data: utr
   //  })
   //   .then(function (resp) {
   //    return resp
   //  });
   // }
  }
})