import {defineType, defineField} from 'sanity'
import {baseLanguage, localeString} from './localeStringType.js'

export default {
    name: "apartment",
    type: "document",
    title: "Appartement",
    fields: [
        {
            name: "name",
            type: "string",
            title: "title",
        },
        {
            name: "aprtName",
            type: "localeString",
            title: "Nome de Appartement",
        },
        {
            name: "reservationNumber",
            type: "string",
            title: "Numéro de réservation"
        },
        {
            name: "city",
            type: "reference",
            to: {type: 'city'},
            title: "ville",
        },
        {
            name: "welcomeMessage",
            type: "localeString",
            title: "message de bienvenue"
        },
        {
            name: "Wifi",
            type: "object",
            title: "Wifi",
            fields: [
                {type: "string", name: "wifiName", title: "nom de wifi"},
                {type: "string", name: "wifiPassword", title: "mots de pass"}
            ]
        },
        {
            name: "keys",
            type: "localeBlock",
            title: "cles"
        },
        {
            name: "address",
            type: "object",
            title: "Address",
            fields: [
                {name: "addressText", type: "string", title: "Exact address"},
                {name: "addressLink", type: "string", title: "Google map lien"},
                {
                    title: 'Video file',
                    name: 'video',
                    type: 'mux.video',
                },
            ]
        },
        {
            name: "receptionPhone",
            type: "string",
            title: "Téléphone de la réception"
        },
        {
            name: "information",
            type: "object",
            title: "information",
            fields: [
                {
                    name: "animalRules",
                    type: "localeBlock",
                    title: "Règles des animaux"
                },
                {
                    name: "rules",
                    type: "localeBlock",
                    title: "Règles de procédure",
                },
                {
                    name: "garbage",
                    type: "localeBlock",
                    title: "les déchets",
                },
                {
                    name: "parking",
                    type: "localeBlock",
                    title: "Parking",
                },
                {
                    name: "service",
                    type: "localeBlock",
                    title: "Services",
                },
            ]
        },
        {
            name: "arrivalInformation",
            type: "object",
            title: "informations d'arrivée",
            fields: [
                {
                    name: "recallInformation",
                    type: "localeBlock",
                    title: "rappel Information"
                },
                {
                    name: "arrivalTime",
                    type: "localeBlock",
                    title: "heure d'arrivée"
                },
                {
                    name: "internalRules",
                    type: "localeBlock",
                    title: "Régulations internes"
                },
                {
                    name: "keys",
                    type: "localeBlock",
                    title: "les clés"
                }
            ]
        },
        {
            name: "departureInfo",
            type: "object",
            title: "Information de départ",
            fields: [
                {
                    name: "startTime",
                    type: "localeBlock",
                    title: "heure de départ"
                },
                {
                    name: "problem",
                    type: "localeBlock",
                    title: "signaler un problème"
                }
            ]
        },


    ]
}
