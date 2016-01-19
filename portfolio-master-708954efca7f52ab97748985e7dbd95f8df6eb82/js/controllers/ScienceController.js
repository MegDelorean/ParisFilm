app.controller('ScienceController', ['$scope', function($scope) {
    $scope.scs = [
        {
            name: "Analyse",
            preview: "https://www.ptcusercommunity.com/servlet/JiveServlet/showImage/38-2828-47044/pi_day-01.jpg",
            content: [
                {
                    chapter_name: "1 - Continuité",
                    file: "",
                    date: "Janvier 2015"
                },
                {
                    chapter_name: "2 - Dérivabilité",
                    file: "",
                    date: "Janvier 2015"
                },
                {
                    chapter_name: "3 - Intégrabilité",
                    file: "",
                    date: "Février 2015"
                },
                {
                    chapter_name: "4 - Dérivées d'ordre supérieur",
                    file: "",
                    date: "Février 2015"
                },
                {
                    chapter_name: "5 - Compléments d'intégration",
                    file: "",
                    date: "Février 2015"
                },


            ]
        },
        {
            name: "Algèbre",
            preview: "http://www.amplify.com/assets/viewpoints/making-algebra-actually-mean-something.jpg",
            content: [
                {
                    chapter_name: "1 - Espaces vectoriels",
                    file: "doc/math/alg1_cours_espaces_vectoriels.pdf",
                    date: "Avril 2015"
                },
                {
                    chapter_name: "2 - Applications linéaires",
                    file: "doc/math/alg2_applications_linéaires.pdf",
                    date: "Avril 2015"
                },
                {
                    chapter_name: "3 - Matrices",
                    file: "doc/math/alg3_cours_matrices.pdf",
                    date: "Mai 2015"
                },
                {
                    chapter_name: "4 - Réduction d'endomorphisme",
                    file: "",
                    date: "Mai 2015"
                }

            ]

        }

    ];
}]);