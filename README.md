# Détour — site

Site de l'app iOS Détour (balades à pied en boucle avec checkpoints) : présentation, support, politique de confidentialité, conditions et mentions légales. Publié avec GitHub Pages.

Contact : apps@dylan-cdo.fr

## Langues

18 langues : français (racine `/`), puis `en`, `es`, `pt`, `zh` (simplifié), `zh-tw` (traditionnel), `hi`, `ar`, `bn`, `ru`, `id`, `ur`, `de`, `ja`, `tr`, `vi`, `ko`, `it`. `ar` et `ur` sont en `dir="rtl"`.

- L'accueil `/` choisit la langue d'après `navigator.languages` (anglais si aucune n'est gérée). Le choix fait avec le sélecteur de langue est mémorisé (`localStorage`, clé `detour-lang`) et prime sur la détection.
- Les `hreflang`, le sélecteur et le script de détection sont générés par `scripts/site-i18n.py` (dépôt principal) : ne pas les éditer à la main. Ajouter une langue = une ligne dans `LANGS`, un dossier `<langue>/index.html`, puis relancer le script.
- Les captures de chaque langue (`assets/<langue>/`) viennent de `scripts/site-shots.sh`.
- Les pages légales (support, confidentialité, conditions, mentions légales) restent en français.
