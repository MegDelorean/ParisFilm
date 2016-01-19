app.controller('VideoController', ['$scope', '$sce', function($scope, $sce) {
    $scope.vids = [

        {
            name: "Map Animation",
            ref: $sce.trustAsHtml('<iframe width="100%" height="320" src="https://www.youtube.com/embed/YI10Yzw989I" frameborder="0" allowfullscreen></iframe>'),
            tools: $sce.trustAsHtml('Réalisé sur <i class="icon-Ae color-grey"></i>')
        },
        {
            name: "Rendu After Effects | Cinema 4D",
            ref: $sce.trustAsHtml('<iframe width="100%" height="320" src="https://www.youtube.com/embed/s1HhRbPYft8" frameborder="0" allowfullscreen></iframe>'),
            tools: $sce.trustAsHtml('<i class="icon-Ae color-grey"></i> et C4D')
        },
        {
            name: "Planets Animation",
            ref: $sce.trustAsHtml('<iframe width="100%" height="320" src="https://www.youtube.com/embed/CqHhB2fEWUk" frameborder="0" allowfullscreen></iframe>'),
            tools: $sce.trustAsHtml('<i class="icon-Ae color-grey"></i>')
        },
        {
            name: "Concert des prépas",
            ref: $sce.trustAsHtml('<iframe width="100%" height="320" src="https://www.youtube.com/embed/YYQGZ7FPDSA" frameborder="0" allowfullscreen></iframe>'),
            tools: $sce.trustAsHtml('<i class="icon-CG color-grey"></i>')
        },
        {
            name: "Reportage architectural - Collège Louis Armand",
            ref: $sce.trustAsHtml('<iframe width="100%" height="320" src="https://www.youtube.com/embed/Vw1q6NXnYNA" frameborder="0" allowfullscreen></iframe>'),
            tools: $sce.trustAsHtml('<i class="icon-Ae color-grey"></i>')
        },
        {
            name: "Petit court métrage avec Julien Botzanowski",
            ref: $sce.trustAsHtml('<iframe width="100%" height="320" src="https://www.youtube.com/embed/TcGaIWaDRoc" frameborder="0" allowfullscreen></iframe>'),
            tools: $sce.trustAsHtml('<i class="icon-EG color-transparent"></i>')
        }


    ];
}]);
