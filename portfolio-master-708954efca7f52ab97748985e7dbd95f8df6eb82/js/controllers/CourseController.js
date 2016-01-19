app.controller('CourseController', ['$scope', function($scope) {
    $scope.cours = [
        {
            name: "Sciences",
            description: "Une catégorie qui regroupe les cours de science que j'ai amassés, écrits, re-écrits, approfondis et que je contine de mettre en ligne.",
            list: [
                "Mathématiques",
                "Informatique",
                "Physique",
                "Chimie"
            ],
            preview: "img/cours/maths.jpg",
            link: "sciences"
        },
        {
            name: "Tutoriels",
            description: "Quelques \"trucs et astuces\" acquis sur divers sujets.",
            list: [
                "Informatique"
            ],
            preview: "img/cours/tuts.jpg",
            link: "tutoriels"
        },
        {
            name: "Musique",
            description: "Pouruqoi ne pas partager et recenser tous les cours que j'ai pu avoir en la matière ?",
            list: [
                "Enharmonie",
                "Rythmique",
                "Pratique"
            ],
            preview: "img/cours/music.jpg",
            link: "musique"
        },
        {
            name: "Littérature",
            description: "Quelques compléments sur la littérature et la langue française.",
            list: [
                "L'Oulipo"
            ],
            preview: "img/cours/litt.gif",
            link: "litterature"
        }
    ];
}]);