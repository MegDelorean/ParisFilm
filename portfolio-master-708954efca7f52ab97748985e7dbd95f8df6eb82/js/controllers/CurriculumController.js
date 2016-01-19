app.controller('CurriculumController', ['$scope', function($scope) {
    $scope.formations = [
        {
            name: "Ecole d'ingénieur IMAC",
            year: "Depuis 2014",
            preview: "img/cv/IMAC.png",
            link: "http://www.ingenieur-imac.fr/fr",
            description: "Ecole d'Ingénieur aux multiples facettes qui développe à la fois le plan scientifique et artistique.",
            coords: "— Université Paris-Est Marne-la-Vallée",
            update: "Septembre 2015"
        },
        {
            name: "Maths Sup | Maths Spé",
            year: "2012 - 2014",
            preview: "http://www.ens-kouba.dz/french/images/Depts/maths_.jpg",
            link: "http://www.lyc-thiers.ac-aix-marseille.fr/spip/",
            description: "Classes de MPSI - MP*, pour un enrichissement en science et en logique mathématique mais également " +
            "un apprentissage du travail méthodique et rigoureux.",
            coords: "— Lycée Thiers de Marseille",
            update: "Septembre 2015"
        },
        {
            name: "Ecole d'Architecture",
            year: "2011 - 2012",
            preview: "http://corgier-illustrateur.fr/wp-content/uploads/2014/02/La-Gelinotte-persSéjourOK-02-1024x654.jpg",
            link: "http://www.marseille.archi.fr",
            description: "Premier contact avec l'architecture, un enseignement riche en techniques et expression graphiques.",
            coords: "— ENSA Marseille",
            update: "Septembre 2015"
        },
        {
            name: "Stage à la M.A.I.",
            year: "Eté 2011",
            preview: "http://www.maifrance.com/maifrancecom/img_newindx/logo_mai.png",
            link: "http://www.maifrance.com/maifrancecom/home_mai.php?id=1",
            description: "Un stage intensif dans cette grande école de musique de Nancy pour me perfectionner en pratique et en écoute" +
            "instrumentale.",
            coords: "— M.A.I. Nancy",
            update: "Septembre 2015"
        }
    ],
    $scope.experiences = [
        {
            name: "Restauration",
            year: "Juin - Sept. 2015",
            preview: "http://www.pizzeria-leborsalino.fr/img/photos/zoom/accueil_01.jpg",
            link: "#/cv",
            description: "Très bonne expérience dans la restauration, tant sur le service de la clientèle que la préparation côté cuisine.",
            coords: "— Pizza Mimi Connaux (30330)",
            update: "Septembre 2015"
        },
        {
            name: "Hôte de caisse à E. Leclerc",
            year: "Eté 2013 et Eté 2014",
            preview: "http://visualcar.free.fr/images/Leclerc.jpg",
            link: "#/cv",
            description: "Expérience de la caisse et de la grande distribution en général.",
            coords: "— Leclerc Les Angles (30133)",
            update: "Septembre 2015"
        },
        {
            name: "Expériences de la scène",
            year: "Etés 2012 2013 2014 et 2015",
            preview: "img/cv/guitar.png",
            link: "#/cv",
            description: "Concerts multi-genres, rock, pop, jazz et blues, majoritairement en groupe avec aussi quelques boeufs sur scène.",
            coords: "",
            update: "Septembre 2015"
        },
        {
            name: "Emploi saisonnier",
            year: "Etés 2010 et 2011",
            preview: "http://i.ytimg.com/vi/Jr3tlqXH7is/maxresdefault.jpg",
            link: "#/cv",
            description: "Gestion des espaces verts et préparation de fêtes votives.",
            coords: "— Mairie de Connaux",
            update: "Septembre 2015"
        }
    ]
}]);