// src/pages/index.js
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {

    return (
        <Layout pageTitle="Bienvenue sur le site de Picard Étudiants !">
          <section>
              <h2>Une nouvelle façon de consommer les produits Picard</h2>
              <p>Avec environ 1000 points de vente, Picard est un acteur incontournable dans le domaine de la distribution de produits alimentaires surgelés. Afin de répondre aux besoins d'un public toujours plus large et diversifié, nous sommes ravis de vous présenter notre nouvelle initiative : les distributeurs réfrigérés Picard, spécialement conçus pour les étudiants.</p>
          </section>
          <section>
              <h2>Pourquoi des distributeurs réfrigérés pour étudiants ?</h2>
              <p>Nous comprenons les défis auxquels les étudiants font face au quotidien : des horaires chargés, un budget souvent limité, et le besoin de repas rapides et équilibrés. Les distributeurs réfrigérés Picard offrent une solution idéale :</p>
              <ul>
                  <li><strong>Accessibilité</strong> : Disponibles 24/7, nos distributeurs vous permettent d'accéder à une gamme variée de produits surgelés à tout moment de la journée, même en dehors des heures d'ouverture de nos magasins.</li>
                  <li><strong>Proximité</strong> : Installés dans des lieux stratégiques proches des campus universitaires, résidences étudiantes et autres points fréquentés par les étudiants, nos distributeurs sont toujours à portée de main.</li>
                  <li><strong>Qualité</strong> : Profitez de la qualité reconnue des produits Picard, allant des plats cuisinés aux légumes surgelés, en passant par les desserts gourmands. Tout est conçu pour être simple à préparer, tout en conservant le goût et les nutriments.</li>
                  <li><strong>Économie</strong> : Des tarifs attractifs adaptés au budget des étudiants, pour que vous puissiez manger sainement sans vous ruiner.</li>
                  <li><strong>Écologie</strong> : En optant pour des produits surgelés, vous contribuez à la réduction du gaspillage alimentaire, car les aliments se conservent plus longtemps et sont portionnés de manière optimale.</li>
              </ul>
          </section>
          <section>
            <h2>Comment ça marche ?</h2>
            <ol>
                <li><strong>Choisissez vos produits</strong> : Parcourez l'assortiment disponible dans le distributeur réfrigéré et faites votre sélection parmi nos plats cuisinés, légumes, fruits, viandes, poissons et desserts.</li>
                <li><strong>Payez facilement</strong> : Les distributeurs acceptent divers modes de paiement, y compris les cartes bancaires et les applications de paiement mobile.</li>
                <li><strong>Emportez et savourez</strong> : Prenez vos produits et suivez les instructions de cuisson indiquées sur les emballages pour préparer rapidement des repas savoureux.</li>
            </ol>
          </section>
          <section>
              <h2>Rejoignez la communauté Picard Étudiants</h2>
              <p>En utilisant nos distributeurs réfrigérés, vous faites partie de la grande famille Picard, où qualité, praticité et innovation se rencontrent pour rendre votre quotidien plus agréable.</p>
              <p><strong>Restez informés</strong> : Abonnez-vous à notre newsletter et suivez-nous sur les réseaux sociaux pour découvrir nos nouveautés, promotions et conseils culinaires.</p>
              <p><strong>Partagez vos expériences</strong> : Utilisez le hashtag #PicardEtudiants sur Instagram et Twitter pour partager vos repas et découvrir les idées recettes des autres étudiants.</p>
              <p>Nous sommes impatients de vous accueillir dans ce nouveau chapitre de l'aventure Picard. Ensemble, rendons l'alimentation pratique, saine et accessible à tous les étudiants !</p>
          </section>
        </Layout>
        )
}

export const allStrapiProduct = graphql`
query {
  allStrapiProduct {
    nodes {
      title
      imgURL
      description
      price
    }
  }
}
`

export const Head = () => <title>Home Page - 01 Jamstack</title>

export default IndexPage