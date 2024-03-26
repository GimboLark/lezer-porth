import { styleTags, tags } from "@lezer/highlight"

export const highlighting = styleTags({
    Identifier: tags.name,
    Number:     tags.name,
    String:     tags.name,
    Intrinsics: tags.name,
    Keywords:   tags.name,
    Control:    tags.name,
    Paranteces: tags.name
})