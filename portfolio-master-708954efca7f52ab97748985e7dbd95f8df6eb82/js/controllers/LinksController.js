/**
 * Created by Lorenzo on 30/09/2015.
 */
app.controller('LinksController', ['$scope', function($scope) {
    $scope.categories = [
        {
            name: "Travail de groupe",
            offset: "",
            links: [
                {
                    name: "Slack",
                    description: "Une bonne petite web app qui permet de communiquer plus facilement, très flexible.",
                    link: "https://slack.com/?r=1"
                },
                {
                    name: "Trello",
                    description: "Pour ceux qui aiment les check-list et les post-it en travail de groupe, Trello permet (entre autres)"+
                    "de s'organiser ensemble en proposant une interface flexible et facile à manier.",
                    link: "https://trello.com/"
                }
            ]
        },
        {
            name: "Code",
            links: [
                {
                    name: "Grafikart",
                    description: "LE site qui apprends des tonnes de choses sur le code pour le web !",
                    link: "http://www.grafikart.fr/"
                },
                {
                    name: "CodeCademy",
                    description: "Le nom parle de lui-même.",
                    link: "https://www.codecademy.com/"
                }
            ]
        },
        {
            name: "Effets Spéciaux",
            links: [
                {
                    name: "Video Copilot",
                    description: "Un bon site bourré de tutoriels à couper le souffle.",
                    link: "http://www.videocopilot.net/"
                },
                {
                    name: "Mt Mograph - YouTube",
                    description: "Mon préféré pour apprendre à manipuler After Effects avec de bons tutos YouTube.",
                    link: "https://www.youtube.com/user/mtmograph"
                },
                {
                    name: "Mt Mograph - WebSite",
                    description: "Site de Mt Mograph.",
                    link: "http://www.mtmograph.com/"
                }
            ]
        }
    ]


}]);