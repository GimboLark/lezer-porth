import { styleTags, tags } from "@lezer/highlight"

export const highlighting = styleTags({
    Keyword:        tags.keyword,    
    Definition:     tags.name,
    Placeholder:    tags.name,
    String:         tags.name,
    Intrinsic:      tags.name
})