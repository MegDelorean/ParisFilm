-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 19 Janvier 2016 à 11:38
-- Version du serveur :  5.6.16
-- Version de PHP :  5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `angular_crud`
--

-- --------------------------------------------------------

--
-- Structure de la table `movies`
--

CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `synopsis` text NOT NULL,
  `year` smallint(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;

--
-- Contenu de la table `movies`
--

INSERT INTO `movies` (`id`, `title`, `synopsis`, `year`) VALUES
(26, 'Les affranchis', 'Depuis sa plus tendre enfance, Henry Hill, né d''un père irlandais et d''une mère sicilienne, veut devenir gangster et appartenir à la Mafia. Adolescent dans les années cinquante, il commence par travailler pour le compte de Paul Cicero et voue une grande admiration pour Jimmy Conway, qui a fait du détournement de camions sa grande spécialité. Lucide et ambitieux, il contribue au casse des entrepôts de l''aéroport d''Idlewild et épouse Karen, une jeune Juive qu''il trompe régulièrement. Mais son implication dans le trafic de drogue le fera plonger...', 1990),
(25, 'Casino', 'Dans les années soixante-dix à Las Vegas, Ace Rothstein dirige d''une main de fer l''hôtel-casino Tangiers, financé en sous-main par le puissant syndicat des camionneurs. Le Tangiers est l''un des casinos les plus prospères de la ville et Ace est devenu le grand manitou de Las Vegas, secondé par son ami d''enfance, Nicky Santoro. Impitoyable avec les tricheurs, Rothstein se laisse un jour séduire par une virtuose de l''arnaque d''une insolente beauté, Ginger McKenna. Amoureux, il lui ouvre les porte de son paradis et l''épouse. Ses ennuis commencent alors.', 1996),
(37, 'Gang of New York', 'En 1846, le quartier de Five Points, un faubourg pauvre de New York, est le théâtre d''une guerre des gangs entre émigrants irlandais d''un côté, les Dead Rabbits menés par Père Vallon, et les Native Americans de l''autre, dirigés par le sanguinaire Bill le Boucher. Ce dernier met rapidement en déroute les Dead Rabbits en assassinant leur chef, et prend par la même occasion le contrôle exclusif des rues de la "grosse pomme". Afin de renforcer ses pouvoirs, Bill s''allie avec Boss Tweed, un politicien influent.\r\nSeize ans plus tard, le gang des Native Americans règne toujours en maître dans New York. Devenu adulte, Amsterdam Vallon souhaite venger la mort de son père en éliminant Bill. Mais sa rencontre avec Jenny Everdeane, une énigmatique pickpocket dont l''indépendance et la beauté le fascinent, va compliquer les choses...', 2002),
(40, 'Raging Bull', 'Raging Bull retrace les moments forts de la carrière flamboyante de Jack La Motta, champion de boxe poids moyen. Issu d''un milieu modeste, il fut le héros de combats mythiques, notamment contre Robinson et Cerdan. Autodestructeur, paranoïque, déchiré entre le désir du salut personnel et la damnation, il termine son existence, bouffi, en tant que gérant de boîte de nuit et entertainer. Quand l''ascension et le déclin d''une vie deviennent épopée...', 1981),
(41, 'Shutter Island', 'En 1954, le marshal Teddy Daniels et son coéquipier Chuck Aule sont envoyés enquêter sur l''île de Shutter Island, dans un hôpital psychiatrique où sont internés de dangereux criminels. L''une des patientes, Rachel Solando, a inexplicablement disparu. Comment la meurtrière a-t-elle pu sortir d''une cellule fermée de l''extérieur ? Le seul indice retrouvé dans la pièce est une feuille de papier sur laquelle on peut lire une suite de chiffres et de lettres sans signification apparente. Oeuvre cohérente d''une malade, ou cryptogramme ?', 2010),
(46, 'Hugo Cabret', 'Dans le Paris des années 30, le jeune Hugo est un orphelin de douze ans qui vit dans une gare. Son passé est un mystère et son destin une énigme. De son père, il ne lui reste qu’un étrange automate dont il cherche la clé - en forme de cœur - qui pourrait le faire fonctionner. En rencontrant Isabelle, il a peut-être trouvé la clé, mais ce n’est que le début de l’aventure…', 2011),
(47, 'Le Loup de Wall Street', 'L’argent. Le pouvoir. Les femmes. La drogue. Les tentations étaient là, à portée de main, et les autorités n’avaient aucune prise. Aux yeux de Jordan et de sa meute, la modestie était devenue complètement inutile. Trop n’était jamais assez…', 2013);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
