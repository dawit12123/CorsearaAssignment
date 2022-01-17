(
function(){


    angular.module("LunchChecker",[])
    .controller("LunchCheckerController",function($scope){

          $scope.lunchMenu = "";
    var str = $scope.lunchMenu;
    var List = str.split(",");

    $scope.message = $scope.lunchMenu;
    $scope.MenuChecker = function() {
        var str = $scope.lunchMenu.split(",") ;



        for( var i = 0; i < str.length; i++){

        if ( str[i] == "") {

            str.splice(i, 1);
        }
        else if (str[i] == " ")
        str.splice(i, 1);

    }

        if(str.length > 3){
            $scope.message = "Too much!";
        }
        else if(str.length == 0  ){

            $scope.message = "Please give us some menu item";

        }
        else  {
            $scope.message = "Enjoy!";

        }

    } ;





   } );
}


)();