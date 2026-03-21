<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import imageC3AC1 from '@/assets/image_C3_AC1.png'
import imageC3AC2 from '@/assets/image_C3_AC2.png'
import imageC3AC3 from '@/assets/image_C3_AC3.png'
import imageC4AC1 from '@/assets/image_C4_AC1.png'
import imageC4AC2 from '@/assets/image_C4_AC2.png'
import imageC4AC3 from '@/assets/image_C4_AC3.png'
import imageC5AC1 from '@/assets/image_C5_AC1.png'
import imageC5AC2 from '@/assets/image_C5_AC2.png'
import imageC5AC3 from '@/assets/image_C5_AC3.png'
import imageC5AC4 from '@/assets/image_C5_AC4.png'

const selectedProject = ref(null)
const isModalOpen = ref(false)

const projects = [
  {
    title: "Compétence 3 : Administrer des systèmes informatiques communicants complexes",
    tech: "Systèmes & Réseaux",
    shortDesc: `AC 1 Concevoir et développer des applications communicantes\nAC 2 Utiliser des serveurs et des services réseaux virtualisés\nAC 3 Sécuriser les services et données d'un système`,
    // Détails des AC pour l'intérieur de la bulle
    detailsAC: [
      {
        name: "AC 1 : Concevoir et développer des applications communicantes",
        description: "Dans la ressource Programmation système (R3.05), nous avons développé des programmes en C permettant à plusieurs processus de communiquer entre eux.",
        actions: "Nous avons utilisé différents mécanismes de communication : tubes, threads, sockets. La communication réseau pouvait être réalisée via les protocoles UDP et TCP. J’ai implémenté un serveur UDP capable de recevoir des messages et d’y répondre.",
        skills: [
          "Implémenter une communication client-serveur en C à l’aide de sockets",
          "Utiliser les protocoles UDP et TCP pour échanger des données",
          "Concevoir une architecture simple d’application communicante"
        ],
        analyse: "J'ai appris à concevoir des programmes en C permettant à plusieurs processus de communiquer entre eux. J'ai manipulé différents mécanismes comme les tubes, les threads et surtout les sockets, en utilisant les protocoles UDP et TCP. En implémentant un serveur UDP capable de répondre à un client, j'ai compris comment structurer une architecture d'application communicante et gérer les échanges de données en réseau.",
        image: imageC3AC1
      },
      {
        name: "AC 2 : Utiliser des serveurs et des services réseaux virtualisés",
        description: "Dans la ressource Virtualisation (R4.08), nous avons appris à mettre en place et administrer des services réseaux virtualisés. Pour cela, nous avons utilisé Docker, qui permet de créer et exécuter des services dans des conteneurs isolés.",
        actions: "Lors des travaux pratiques, nous avons créé plusieurs services sous forme de conteneurs Docker, notamment :\n" +
          "- un serveur web\n" +
          "- un serveur de base de données\n" +
          "- un service phpMyAdmin permettant d’administrer la base de données\n" +
          "\n" +
          "Nous avons configuré ces services afin qu’ils puissent communiquer entre eux dans un environnement virtualisé.\n" +
          "Nous avons également configuré des paramètres réseau tels que :\n" +
          "- les adresses IP\n" +
          "- les masques de sous-réseau\n" +
          "- les réseaux Docker\n" +
          "\n" +
          "Ces configurations ont été réalisées à l’aide de différentes commandes Docker et réseau dans le terminal.\n",
        skills: [
          "Déployer des services réseaux dans des conteneurs Docker",
        "Configurer et administrer des services tels qu’un serveur web ou une interface d’administration de base de données",
        "Configurer des paramètres réseau (adresses IP, masques, réseaux) dans un environnement virtualisé",
        "Utiliser des commandes système pour gérer et superviser des services virtualisés"
],
        analyse: "Je suis désormais capable de mettre en place et d'administrer des services réseaux dans un environnement virtualisé. J'ai utilisé Docker pour créer des conteneurs isolés abritant un serveur web, une base de données ou une interface phpMyAdmin. Ce travail m'a permis de configurer des paramètres réseau précis, tels que les adresses IP et les masques de sous-réseau, afin de permettre à ces différents services de communiquer de manière fluide au sein de réseaux Docker",
        image: imageC3AC2
      },
      {
        name: "AC 3 : Sécuriser les services et données d'un système",
        description: "Dans la ressource Développement web (R3.01), nous avons développé progressivement une application web dynamique en PHP connectée à une base de données.\n" +
          "L’application permet aux utilisateurs d’interagir avec le site à travers différents formulaires et fonctionnalités.\n",
        actions: "L’application permet aux utilisateurs d’interagir avec le site à travers différents formulaires et fonctionnalités.\n" +
          "Pour assurer un fonctionnement sécurisé du système, plusieurs mécanismes ont été mis en place :\n" +
          "- gestion des sessions utilisateurs\n" +
          "- connexion sécurisée à la base de données\n" +
          "- validation des données saisies dans les formulaires\n" +
          "- hachage des mots de passe\n" +
          "\n" +
          "Ces éléments permettent de limiter les erreurs et d’éviter certaines vulnérabilités lors des interactions entre l’utilisateur, l’application et la base de données.\n\n" +
        "Cette capture d’écran montre une partie du code permettant de hacher et poivrer les mots de passe des utilisateurs.\n" +
          "Le hachage consiste à transformer le mot de passe en une empreinte cryptographique, ce qui permet de ne pas stocker le mot de passe en clair dans la base de données.\n" +
          "L’ajout d’un poivre (valeur secrète ajoutée au mot de passe avant le hachage) permet de renforcer la sécurité et de rendre plus difficile une attaque visant à retrouver les mots de passe.",
        skills: ["Sécuriser le stockage des mots de passe dans une application web",
        "Prendre en compte les enjeux de sécurité lors du développement d’une application",
        "Mettre en place une connexion sécurisée entre une application web et une base de données",
        "Contrôler les données envoyées par les utilisateurs dans une application web",
        "Implémenter un système d’authentification simple avec PHP"],
        analyse: "j'ai intégré la sécurité comme un élément central du système. J'ai mis en œuvre des mécanismes concrets comme la gestion des sessions, la validation des formulaires et le hachage des mots de passe avec l'ajout d'un poivre pour renforcer la protection cryptographique. Ces pratiques me permettent de limiter les vulnérabilités et d'assurer un stockage sécurisé des données sensibles au sein du système d'information.",
        image: imageC3AC3
      }
    ],
    detailsCE : [
      {
        name: "CE 1 En sécurisant le système d'information",
        description: "Dans l’application développée en PHP, la sécurité des données utilisateurs a été prise en compte en hachant et poivrant les mots de passe avant leur stockage dans la base de données.\n" +
          "Cela permet d’éviter de stocker les mots de passe en clair et contribue à sécuriser les données sensibles du système d’information."
      },
      {
        name: "CE 2 En appliquant les normes en vigueur",
        description: "Lors du développement de l’application web, certaines bonnes pratiques de sécurité ont été appliquées, notamment le hachage des mots de passe et la gestion sécurisée des données utilisateurs.Ces pratiques permettent de limiter les risques liés au stockage et à l’utilisation de données sensibles."
      },
      {
        name: "CE 3 En offrant une qualité de service optimale",
        description: "L’application (SAE) a été conçue de manière à permettre une interaction fluide entre l’utilisateur, le serveur et la base de données, garantissant ainsi un fonctionnement cohérent du service web."
      },
      {
        name: "CE 4 En assurant la continuité d'activité",
        description: "L’utilisation d’une base de données pour stocker les informations des utilisateurs permet de conserver les données de manière persistante et d’assurer le bon fonctionnement du service même après l’arrêt ou le redémarrage de l’application. Et l’application du modèle MVC et des principes SOLID permettent de maintenir l’application sur le long terme."
      }
    ]
  },
  {
    title: "Compétence 4 : Gérer des données de l’information",
    tech: "Base de données & Traitement des données",
    shortDesc: `AC 1 Optimiser les modèles de données\nAC 2 Assurer la confidentialité des données\nAC 3 Organiser la restitution des données\nAC 4 Manipuler des données hétérogènes`,

    detailsAC: [
      {
        name: "AC 1 : Optimiser les modèles de données de l'entreprise",
        description: "Dans la ressource SQL (R3.07), nous avons étudié le langage PL/SQL, qui permet de programmer directement des traitements dans une base de données.\n" +
          "L’objectif était de manipuler et exploiter les données de manière plus efficace en automatisant certaines opérations.\n",
        actions: "Lors des travaux pratiques, nous avons développé différents programmes en PL/SQL permettant de manipuler les données stockées dans une base de données.\n" +
          "Nous avons notamment appris à :\n" +
          "- écrire des procédures stockées\n" +
          "- créer des fonctions\n" +
          "- utiliser des structures de contrôle (conditions, boucles)\n" +
          "- manipuler des requêtes SQL dans un programme PL/SQL\n\n" +
        "Ces mécanismes permettent d’effectuer des traitements directement dans la base de données, ce qui améliore l’organisation et l’exploitation des informations.\n\n"+
        "Exemple d’une requête en PL/SQL permettant de créer une procédure pour l’affichage des notes d’un étudiant selon son numéro.",
        skills: [
          "écrire des programmes en PL/SQL pour manipuler les données d’une base",
          "automatiser certains traitements sur les données",
          "créer des procédures et fonctions permettant d’exploiter efficacement les informations",
          "structurer les traitements de données directement au sein du système de gestion de base de données"
        ],
        analyse: "L’utilisation de PL/SQL permet d’optimiser la gestion des données en exécutant certains traitements directement dans la base de données, ce qui améliore l’efficacité et l’organisation du système d’information.",
        image: imageC4AC1
      },
      {
        name: "AC 2 Assurer la confidentialité des données (intégrité et sécu-" +
          "rité)",
        description: "Dans le cadre de la ressource Droit, nous avons utilisé le jeu sérieux Hellink, qui permet d’aborder de manière interactive les enjeux juridiques liés au numérique.\n" +
          "L’objectif était de comprendre les règles encadrant l’utilisation des données, notamment dans le domaine informatique.",
        actions: "Au cours de cette activité, nous avons joué au jeu Hellink, qui met en situation des problématiques liées à :\n" +
          "- la protection des données personnelles\n" +
          "- le respect de la vie privée\n" +
          "- les obligations légales des entreprises\n" +
          "Nous avons ensuite réalisé un rapport analysant les différentes situations rencontrées dans le jeu et les règles juridiques associées.",
        skills: [
          "Récupérer des données depuis une base",
          "Afficher dynamiquement des informations",
          "Structurer les données pour les rendre lisibles",
          "Créer une interface interactive"
        ],
        analyse: "Cette activité m’a permis de comprendre que la confidentialité des données ne repose pas uniquement sur des aspects techniques, mais aussi sur un cadre juridique strict.\n" +
          "Elle m’a sensibilisé à l’importance de respecter les règles liées à la protection des données personnelles lors du développement ou de l’utilisation d’un système d’information.\n",
        image: imageC4AC2
      },
      {
        name: "AC 3 Organiser la restitution de données à travers la program" +
          "mation et la visualisation",
        description: "Dans le cadre de la SAE, nous avons développé une application web de démocratie participative en PHP, en suivant une méthode de gestion de projet Scrum avec un client (enseignant). L’objectif était de créer une plateforme permettant aux utilisateurs de proposer des idées et de voter.",
        actions: "L’application permet aux utilisateurs de :\n" +
          "- créer un compte\n" +
          "- s’authentifier\n" +
          "- proposer des idées\n" +
          "- voter pour des propositions\n" +
          "Les données (utilisateurs, propositions, votes) sont stockées dans une base de données, puis récupérées dynamiquement à l’aide de requêtes SQL.\n" +
          "Nous avons utilisé PHP pour :\n" +
          "- récupérer les données depuis la base\n" +
          "- les traiter\n" +
          "- les afficher sur les pages web\n" +
          "Les propositions et les résultats des votes sont affichés de manière structurée (listes, organisation par éléments), afin de permettre une lecture claire pour l’utilisateur.\n",
        skills: [
          "récupérer et exploiter des données depuis une base de données",
          "afficher dynamiquement des informations dans une application web",
          "organiser les données (propositions, votes, utilisateurs) pour les rendre lisibles",
          "développer une interface permettant à l’utilisateur d’interagir avec les données"
        ],
        analyse: "Ce projet m’a permis de comprendre l’importance de la restitution des données, notamment dans un contexte où l’utilisateur doit rapidement comprendre les informations (propositions et résultats de vote).\n" +
          " La programmation permet de transformer des données stockées en une interface claire et exploitable.",
        image: imageC4AC3
      },
      {
        name: "AC 4 : Manipuler des données hétérogènes",
        description: "Dans le cadre de la SAE, nous avons manipulé des données provenant de différentes sources et sous différentes formes.\n" +
          "Ces données pouvaient être :" +
          "issues de la base de données (utilisateurs, propositions, votes), "+
          "récupérées depuis des formulaires utilisateurs (données saisies), " +
          "stockées dans des cookies (informations de session), " +
          "traitées directement en PHP.\n" +
          "L’objectif était de gérer ces différentes données de manière cohérente afin de permettre le bon fonctionnement de l’application web.\n",
        actions: "Au cours du projet, nous avons :\n" +
          "- récupéré des données depuis une base de données à l’aide de requêtes SQL\n" +
          "- traité des données envoyées par les utilisateurs via des formulaires PHP\n" +
          "- utilisé des cookies pour conserver certaines informations côté client\n" +
          "- manipulé ces différentes données dans le code PHP pour assurer leur cohérence\n" +
          "- vérifié et contrôlé les données afin d’éviter les erreurs ou incohérences\n",
        skills: [
          "manipuler des données provenant de différentes sources (BDD, formulaires, cookies)",
          "adapter le traitement des données selon leur nature et leur origine",
          "assurer la cohérence des données dans une application web",
          "exploiter des données hétérogènes pour alimenter une application dynamique"
        ],
        analyse: "Ce projet m’a permis de comprendre que les données d’un système d’information ne proviennent pas d’une seule source, mais de plusieurs environnements différents. La manipulation de données hétérogènes nécessite de savoir les récupérer, les transformer et les exploiter correctement. Cela est essentiel pour garantir le bon fonctionnement d’une application web et assurer une gestion cohérente des informations."
      }
    ],

    detailsCE: [
      {
        name: "CE 1 En respectant les réglementations sur le respect de la vie privée et la protection des données personnelles",
        description: "Lors du développement de l’application web, nous avons manipulé des données utilisateurs (comptes, votes, propositions). Nous avons pris en compte la nécessité de protéger ces données, notamment en contrôlant les informations saisies et en évitant de stocker des données sensibles de manière non sécurisée.\n" +
          "Ces pratiques permettent de respecter les principes liés à la protection des données personnelles et à la vie privée des utilisateurs.\n"
      },
      {
        name: "CE 2 En respectant les enjeux économiques, sociétaux et écologiques de l'utilisation du stockage de données, ainsi que les différentes infrastructures (data centers, cloud, etc.)",
        description: "L’utilisation d’une base de données permet de stocker efficacement les informations nécessaires au fonctionnement de l’application. Cependant, le stockage de données implique des enjeux importants, notamment en termes de coût, d’impact environnemental et d’infrastructure. Ce projet m’a permis de comprendre qu’il est important d’optimiser le stockage et de ne conserver que les données nécessaires afin de limiter l’impact sur les systèmes et les ressources."
      },
      {
        name: "CE 3 En s'appuyant sur des bases mathématiques",
        description: "La manipulation des données repose sur des concepts logiques et structurés, notamment à travers les requêtes SQL et l’organisation des informations dans la base de données. L’utilisation de conditions, de tris et de filtres permet d’exploiter les données de manière efficace et cohérente. Ces traitements s’appuient sur des bases mathématiques et logiques, essentielles pour organiser et exploiter les données dans un système d’information."
      },
      {
        name: "CE 4 En assurant la cohérence et la qualité",
        description: "Dans l’application développée, nous avons veillé à maintenir des données cohérentes entre les différentes sources (base de données, formulaires, cookies). La validation des données et leur contrôle permettent d’éviter les incohérences et les erreurs dans le système. Cela garantit une meilleure qualité des informations et un fonctionnement fiable de l’application."
      }
    ]
  },
  {
    title: "Compétence 5 : Conduire un projet",
    tech: "Management / Agile",
    shortDesc: `AC 1 Identifier les processus présents\nAC 2 Formaliser les besoins\nAC 3 Identifier les critères de faisabilité\nAC 4 Définir une démarche de suivi`,
    detailsAC: [
      {
        name: "AC 1 Identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information",
        description: "Dans le cadre du cours de Management des Systèmes d’Information, nous avons étudié les différents processus présents dans une organisation, notamment à travers la méthode Scrum.\n" +
          "Cette méthode permet d’organiser le travail en équipe et de structurer le développement d’un projet informatique en plusieurs étapes appelées sprints.\n",
        actions: "Lors des séances, nous avons réalisé plusieurs ateliers pratiques, notamment un exercice consistant à construire une ville en LEGO.\n" +
          "Dans cet exercice :\n" +
          "un client (enseignant) exprimait ses besoins, " +
          "ces besoins étaient plus ou moins précis et prioritaires; " +
          "nous devions organiser le travail en équipe pour répondre aux attentes, " +
          "le projet était découpé en plusieurs sprints avec des objectifs à atteindre.",
        skills: ["identifier les différents acteurs d’un projet (client, équipe, etc.)",
        "comprendre l’organisation d’un projet en sprints",
        "analyser les besoins d’un client dans un contexte donné",
        "m’adapter aux contraintes et aux évolutions d’un projet"],
        analyse: "Cette activité m’a permis de comprendre que la conduite de projet repose sur une organisation structurée et des processus bien définis.\n" +
          "La méthode Scrum permet d’améliorer le système d’information en facilitant la communication, l’adaptation aux besoins du client et le suivi du projet.\n",
        image: imageC5AC1
      },
      {
        name: "AC 2 Formaliser les besoins du client et de l'utilisateur",
        description: "Dans le cadre du cours d’Analyse, nous avons appris à formaliser les besoins d’un client à travers différents modèles.\n" +
          "Ces modèles permettent de représenter de manière claire et structurée les éléments d’un système d’information.\n",
        actions: "Au cours des séances, nous avons :" +
          "réalisé des diagrammes de classes et de Cas d’utilisation, " +
          "conçu des modèles Entité-Association (EA), " +
          "analysé les besoins du client pour les traduire en modèles mais également " +
          "structuré les données et les relations entre les différentes entités.\n\n" +
        "(Diagramme de classe conçue pour l’analyse de la SAE)",
        skills: ["analyser les besoins d’un client ou d’un utilisateur",
        "formaliser ces besoins sous forme de modèles",
        "représenter les données et leurs relations dans un système",
        "structurer un système d’information de manière cohérente"],
        analyse: "La formalisation des besoins est une étape essentielle dans un projet informatique, car elle permet de transformer une demande parfois floue en une structure exploitable.\n" +
          "Les modèles réalisés permettent de mieux comprendre le système et facilitent son développement.\n",
        image: imageC5AC2
      },
      {
        name: "AC 3 Identifier les critères de faisabilité d'un projet informatique",
        description: "Dans le cadre de la SAE et des cours de Management SI et d’Analyse, nous avons appris à évaluer la faisabilité d’un projet informatique.\n" +
          "Cela consiste à vérifier si un projet peut être réalisé en fonction des contraintes techniques, temporelles et humaines.\n",
        actions: "Lors de la SAE :\n" +
          "- nous avons analysé les besoins du client\n" +
          "- nous avons pris en compte les contraintes de temps (sprints)\n" +
          "- nous avons évalué la complexité des fonctionnalités à développer\n" +
          "- j’ai occupé le rôle de Product Owner (PO), ce qui impliquait de prioriser les tâches\n\n"+
        "(Capture d’écran du Trello du Sprint 3 pour nous organiser dans les tâches et définir les priorités)",
        skills: ["analyser la faisabilité d’un projet informatique",
        "prendre en compte les contraintes techniques et organisationnelles",
        "prioriser les fonctionnalités selon leur importance",
        "adapter le projet en fonction des ressources disponibles"],
        analyse: "Ce projet m’a permis de comprendre que tous les projets ne sont pas réalisables de la même manière et qu’il est important d’évaluer leur faisabilité en amont.\n" +
          "Le rôle de Product Owner permet d’organiser les priorités et d’assurer la cohérence du projet avec les attentes du client.\n",
        image: imageC5AC3
      },
      {
        name: "AC 4 Définir et mettre en œuvre une démarche de suivi de projet",
        description: "Dans le cadre de la SAE, nous avons mis en place une démarche de suivi de projet en utilisant la méthode Scrum.\n" +
          "Cette méthode permet de suivre l’avancement du projet et de s’assurer que les objectifs sont atteints.\n",
        actions: "Au cours du projet " +
          "nous avons organisé des réunions régulières (sprints), " +
          "nous avons réparti les tâches entre les membres de l’équipe, " +
          "nous avons suivi l’avancement du projet et " +
          "nous avons ajusté les objectifs en fonction des difficultés rencontrées\n\n"+
        "(Capture d’écran d’un sondage du Discord de la SAE pour planifier les réunions)",
        skills: ["organiser le travail en équipe dans un projet informatique",
        "suivre l’avancement d’un projet",
        "adapter les objectifs en fonction des contraintes",
        "collaborer efficacement avec les différents membres du groupe"],
        analyse: "Le suivi de projet est essentiel pour garantir le bon déroulement d’un projet informatique.\n" +
          "La méthode Scrum permet d’assurer une organisation efficace, une bonne communication et une adaptation continue aux besoins du client.\n",
        image: imageC5AC4
      }
    ],
    detailsCE: [
      {
        name: "CE 1 En communiquant efficacement avec les différents acteurs d'un projet\n",
        description: "Dans le cadre de la SAE, nous avons été amenés à échanger régulièrement avec les membres de l’équipe ainsi qu’avec le client (enseignant).\n" +
          "Ces échanges permettaient de clarifier les besoins, de suivre l’avancement du projet et de résoudre les problématiques rencontrées.\n" +
          "Cela m’a permis de développer ma capacité à communiquer dans un contexte professionnel.\n"
      },
      {
        name: "CE 2 En respectant les règles juridiques et les normes en vigueur",
        description: "Lors du développement du projet, nous avons pris en compte certaines règles liées au développement informatique, notamment dans le cadre du cours de Droit.\n" +
          "Cela inclut le respect des données utilisateurs et des bonnes pratiques de développement.\n" +
          "Ces éléments permettent de garantir un projet conforme aux normes en vigueur.\n"
      },
      {
        name: "CE 3 En sensibilisant à une gestion éthique, responsable, durable et interculturelle",
        description: "Le projet nous a permis de comprendre l’importance d’une gestion responsable des données et du système.\n" +
          "Nous avons pris en compte l’impact de nos choix techniques et organisationnels, notamment dans la gestion des données utilisateurs.\n" +
          "Cela permet d’adopter une démarche plus éthique dans le développement informatique.\n"
      },
      {
        name: "CE 4 En adoptant une démarche proactive, créative et critique",
        description: "Au cours du projet, nous avons dû proposer des solutions, résoudre des problèmes et adapter notre travail en fonction des contraintes.\n" +
          "Cela nous a amené à adopter une démarche proactive et à faire preuve de créativité dans la résolution des problématiques.\n" +
          "Nous avons également pris du recul sur notre travail afin de l’améliorer.\n"
      }
    ]
  }
]

onMounted(() => {
  gsap.to(".reveal", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power2.out"
  })
})

const openProject = (p) => {
  selectedProject.value = p
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <section class="projects-section">
    <div class="container">
      <div class="header-area reveal"><br><br>
        <h2 class="section-title">Portfolio d'apprentissage</h2><br>
        <p class="main-description">Ce portfolio d’apprentissage présente les compétences que j’ai développées au cours de mon BUT Informatique, en particulier celles qui ne seront pas approfondies en troisième année.

          Il s’appuie sur des exemples concrets de projets et de travaux réalisés, tout en proposant une réflexion sur les apprentissages acquis.

          L’objectif est de mettre en évidence ma progression, ainsi que ma capacité à prendre du recul sur mon travail.</p><br><br>
        <h3 class="section-subtitle">Compétences du BUT2 (non travaillé en BUT3)</h3>
      </div>

      <div class="projects-stack">
        <div
          v-for="project in projects"
          :key="project.title"
          class="project-card reveal"
          @click="openProject(project)"
        >
          <div class="card-content">
            <div class="tech-tag">{{ project.tech }}</div>
            <h3>{{ project.title }}</h3>
            <p class="desc">{{ project.shortDesc }}</p>
            <button class="more-btn">Détails de la compétence +</button>
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">✕</button>

          <div class="modal-text">
            <span class="modal-tech">{{ selectedProject.tech }}</span>
            <h2 class="modal-title">{{ selectedProject.title }}</h2>

            <div class="ce-summary">
              <span v-for="ce in selectedProject.ceList" :key="ce" class="ce-tag">{{ ce }}</span>
            </div>

            <div v-for="(ac, index) in selectedProject.detailsAC" :key="index" class="ac-detail-box">
              <h3 class="ac-title">{{ ac.name }}</h3>

              <div class="sub-block">
                <h4>Description</h4>
                <p>{{ ac.description }}</p>
              </div>

              <div class="sub-block">
                <h4>Actions réalisées</h4>
                <p class="pre-text">{{ ac.actions }}</p>
                <img :src="ac.image" alt="" class="portrait" />
              </div>

              <div class="sub-block">
                <h4>Compétences développées</h4>
                <ul class="skills-list">
                  <li v-for="skill in ac.skills" :key="skill">{{ skill }}</li>
                </ul>
              </div>

              <div class="sub-block">
                <h4>Analyse</h4>
                <p class="analyse-text">{{ ac.analyse }}</p>
              </div>
            </div>

            <div v-for="(ac, index) in selectedProject.detailsCE" :key="index" class="ac-detail-box">
              <h3 class="ac-title">{{ ac.name }}</h3>

              <div class="sub-block">
                <h4>Description</h4>
                <p>{{ ac.description }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
/* Styles de base conservés */
.projects-section { padding: 80px 0; background: #000; color: white; min-height: 100vh; }
.container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
.header-area { text-align: center; margin-bottom: 60px; }
.section-title { font-size: 3.5rem; color: #ffb7c5; text-transform: uppercase; margin-bottom: 10px; }
.main-description { color: #94a3b8; font-size: 1.2rem; }
.section-subtitle { font-size: 1.8rem; color: #9ade9a; border-bottom: 2px solid #9ade9a; margin-top: 10px; display: inline-block; }
.portrait {
  width: 100%;        /* prend toute la largeur du bloc texte */
  max-width: 100%;    /* empêche de dépasser */
  height: auto;       /* garde les proportions */
  margin-top: 10px;
  border-radius: 10px;
  display: block;
}

.projects-stack { display: flex; flex-direction: column; gap: 25px; }
.project-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; cursor: pointer; transition: 0.3s; }
.project-card:hover { border-color: #9ade9a; background: rgba(255,255,255,0.06); transform: scale(1.01); }
.card-content { padding: 30px; }
.tech-tag { color: #9ade9a; font-size: 0.75rem; font-weight: bold; text-transform: uppercase; margin-bottom: 10px; }
.desc { color: #cbd5e1; font-size: 0.9rem; white-space: pre-line; line-height: 1.6; }
.more-btn { background: none; border: none; color: #ffb7c5; font-weight: bold; cursor: pointer; margin-top: 20px; }

/* Styles Modale */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 2000; }
.modal-content { background: #0a0a0a; width: 90%; max-width: 900px; max-height: 90vh; border-radius: 20px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.1); position: relative; }
.modal-text { padding: 40px; }
.ce-summary { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0 40px 0; padding-bottom: 20px; border-bottom: 1px solid #333; }
.ce-tag { font-size: 0.75rem; padding: 4px 10px; background: rgba(255, 183, 197, 0.1); color: #ffb7c5; border-radius: 4px; border: 1px solid rgba(255, 183, 197, 0.2); }

.ac-detail-box { background: rgba(255,255,255,0.02); padding: 25px; border-radius: 15px; border-left: 4px solid #9ade9a; margin-bottom: 40px; }
.ac-title { color: #9ade9a; font-size: 1.4rem; margin-bottom: 20px; text-transform: uppercase; }
.sub-block { margin-bottom: 20px; }
h4 { color: #ffb7c5; font-size: 1rem; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
.pre-text { white-space: pre-wrap; color: #cbd5e1; }
.skills-list { list-style: none; padding-left: 0; }
.skills-list li::before { content: "✓ "; color: #9ade9a; }
.skills-list li { color: #cbd5e1; margin-bottom: 5px; }
.analyse-text { font-style: italic; color: #94a3b8; }
.placeholder-img { background: #1a1a1a; border: 1px dashed #444; padding: 20px; text-align: center; color: #666; margin-top: 10px; border-radius: 8px; }

.close-btn { position: absolute; top: 20px; right: 20px; background: #fff; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; z-index: 100; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
