app.controller('WebController', ['$scope', '$sce', function($scope, $sce) {
    $scope.sites = [
        {
            name: "Pascal Fallais",
            preview: "img/projets/web/pascal_fallais.png",
            link: "http://pascalfallais.com/",
            description: "Le site d'un ami rencontré pour la première fois alors je j'officiais en tant qu'hôte de caisse à Leclerc, le hasard fait les bones rencontres! Au final, je me fais la main en créant et gardant son site à jour.",
            update: "Juillet 2015",
            tools: $sce.trustAsHtml('<i class="icon-Html"></i><i class="icon-Css"></i><i class="icon-Js"></i><i class="icon-AngularJs"></i>')
        }/*,
        {
            name: "Eric Milesi",
            preview: "http://wikipics.net/photos/20150127142238379483762.jpg",
            description: "Même mon père m'a demandé de créer son site !",
            update: "Mai 2015"
        },*/

    ]
}]);