import { styleTags, tags } from "@lezer/highlight"

export const highlighting = styleTags({
    Number:     tags.number,
    String:     tags.string,
    Intrinsics: tags.literal,
    Keywords:   tags.keyword,
    Control:    tags.content
})