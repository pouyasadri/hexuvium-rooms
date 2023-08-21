import {defineType, defineField} from 'sanity'
import {baseLanguage, localeString} from './localeStringType.js'

export default {
    name: "city",
    type: "document",
    title: "Ville",
    fields: [
        {
            name: "name",
            type: "string",
            title: "title",
        },
        {
            name: "cityName",
            type: "localeString",
            title: "Nome de ville",
        },
        {
            name: "citySlug",
            type: "localeString",
            title: "Slug"
        },
        {
            name: "cityImage",
            type: "image",
            title: "Photo de ville"
        }
    ]
}
