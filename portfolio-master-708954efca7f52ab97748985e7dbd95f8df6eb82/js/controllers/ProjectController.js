app.controller('ProjectController', ['$scope', '$sce', function($scope, $sce) {
    $scope.projets = [
        {
            name: "Projets visuels",
            description: "Un florilège qui regroupe quelques dessins, montages, DAO, etc.",
            preview: '<img src=\"img/projets/visuels/IMG_7355.jpg\" alt=\"projets visuels\"/>',
            link: "visuels"
        },
        {
            name: "Projets audio",
            description: "Mes compositions (MAO ou non), enregistrements et concerts.",
            preview: $sce.trustAsHtml('<iframe width="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206538595%3Fsecret_token%3Ds-i7XWi&amp;color=df4b3d&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false&amp;show_artwork=false"></iframe>'),
            link: "audio"
        },
        {
            name: "Projets vidéo",
            description: "Animation, courts métrages et autres inepties",
            preview: $sce.trustAsHtml('<iframe width="100%" height="300" src="https://www.youtube.com/embed/s1HhRbPYft8" frameborder="5" allowfullscreen></iframe>'),
            link: "video"
        },
        {
            name: "Projets web",
            description: "Les projets sur lesquels j'ai travaillé, pour particuliers comme professionnels",
            preview: "",
            link: "web"
        },
        {
            name: "Littérature",
            description: "Un endroit où je peut conserver mes rares écrits.",
            list: [
                // "Poèmes",
                // "Romans",
                // "Nouvelles",
                // "Idées"
            ],
            preview: "",
            link: "litterature"
        }
    ];
}]);