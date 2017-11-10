# Thème / Framework minimal pour Guideline version Desktop

Fichiers de ressources du site Guideline

## Qu'est ce que c'est ?

Ces fichiers de ressources (css / images / javascript / favicon...) sont les fichiers du thème minimal. Ils sont utilisé pour styliser et permettre le fonctionnement des composants intégrés au CMS.

#### Le CMS embarque tous les fichiers de ce dépôt.

## Dans quel ordre le CMS charge-t-il les fichiers ?

Le CMS charge les fichiers dans l'ordre du dépôt, de haut en bas. 

```
Exemple, dans le dossier CSS du dépôt actuel, le premier fichier css chargé sera le fichier 'common-add-calendar.css' et le dernier sera  : 'surcharge.css'

```

## loading.lst

Dans le dossiers JS, il y a un fichier "loading.lst".

Il est utilisé par le CMS pour charger les fichiers javascript dans l'ordre indiqué dans ce fichier.

Pour que le fichier javascript soit inclus et chargé dans le site, il faut donc : 

1 - Le rajouter dans le dossier JS
2 - Le rajouter à la fin dans le fichier "loading.lst"

## Surcharger le thème initial

Pour surcharger le style, vous devez rajouter votre code CSS dans le fichier "surcharge.css" qui se trouve dans le dossier CSS. 

Pour rajouter du code javascript, vous devrez rajouter directement vos fichiers dans le dossier JS et les inscrire dans le fichier loading.lst pour qu'ils soient chargés

