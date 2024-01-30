// Importation du module `defineStore` depuis la bibliothèque Pinia
import { defineStore } from "pinia";

// Importation du module Axios pour effectuer des requêtes HTTP
import axios from "axios";

// Création d'une instance Axios avec une URL de base, un délai d'attente et des en-têtes spécifiés
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Remplacez cette URL par celle que vous souhaitez utiliser
    timeout: 10000, // Ajoutez un délai d'attente si nécessaire (en millisecondes)
});

// Définition du magasin Pinia nommé "Main"
export const useMain = defineStore("Main", {
    /**
     * État initial du magasin.
     * @returns {Object} - Objet représentant l'état initial du magasin.
     */
    state: () => {
        return {};
    },

    // Définition des actions (méthodes) du magasin
    actions: {},
});

// TO USE IN VIEWS OR COMPONENTS : 
// import { useMain } from "@/stores/main";
// import { mapActions } from "pinia";