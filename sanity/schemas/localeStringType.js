// ./schemas/localeStringType.ts

import {defineType, defineField} from 'sanity'

// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
const supportedLanguages = [
    { id: 'fr', title: 'French' ,isDefault: true},
    { id: 'en', title: 'English'},
    { id: 'zh', title: 'Chinois' },

]

export const baseLanguage = supportedLanguages.find(l => l.isDefault)

export const localeString = defineType({
    title: 'Localized string',
    name: 'localeString',
    type: 'object',
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
    fieldsets: [
        {
            title: 'Translations',
            name: 'translations',
            options: { collapsible: true }
        }
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: 'string',
        fieldset: lang.isDefault ? null : 'translations'
    }))
})
export const localeBlock = defineType({
    title: 'Localized Block',
    name: 'localeBlock',
    type: 'object',
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
    fieldsets: [
        {
            title: 'Translations',
            name: 'translations',
            options: { collapsible: true }
        }
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: 'blockContent',
        fieldset: lang.isDefault ? null : 'translations'
    }))
})
