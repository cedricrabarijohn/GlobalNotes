# 🧑‍🔧 Conception de gestion d'un restaurant
## 👨🏽‍💻 Technos: 
```
    - React Js
    - NodeJs / ExpressJs
    - PostgreSQL
```
# Parcours utilisateurs
## 🍝 <ins> Ecran serveur </ins>
- Login
- Choisir une table
- Créer une commande
- Ajouter des plats pour une commande
- Valider une commande
- Générer une facture
- Ajout de pourboire

## 🤑 <ins> Ecran caissier </ins>
- Login
- Payer une facture (Via carte bancaire ou cash)
- Générer un reçu après paiement
- Générer un code qr contenant l'id de la commande ( Pas très important )

## 👩🏾‍🍳 <ins> Ecran cuisinier </ins>
- Login
- Liste des commandes
- Envoie de plats par commande

## 👨🏾‍🏫 <ins> Ecran Admin </ins>
- Login
- CRUD produits
- CRUD plats
- Stock plats
- Liste des produits par plat
- Prix de revient d'un plat (total des prix des produits)

# ✅ Ecrans

# 📝 Base de données
<table>
    <thead>
        <th>✨ Template ✨</th>
        <th>Colonne</th>
        <th>type </th>
    </thead>
    <tbody>
        <tr>
            <td>
            </td>
            <td>
                Colonne ici
            </td>
            <td>
                Type ici
            </td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <th>🔥 Role 🔥</th>
        <th>Colonne</th>
        <th>type </th>
    </thead>
    <tbody>
        <tr>
            <td>
            </td>
            <td>
                Id
            </td>
            <td>
                Serial
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                nom
            </td>
            <td>
                Varchar(50)
            </td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <th>🔥 Utilisateur 🔥</th>
        <th>Colonne</th>
        <th>type </th>
    </thead>
    <tbody>
        <tr>
            <td>
            </td>
            <td>
                Id
            </td>
            <td>
                Serial
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                Email
            </td>
            <td>
                Varchar(50)
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                nom
            </td>
            <td>
                Varchar(50)
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                prenom
            </td>
            <td>
                Varchar(50)
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                mdp
            </td>
            <td>
                Varchar(50)
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                idRole
            </td>
            <td>
                Varchar(50)
            </td>
        </tr>
    </tbody>
</table>