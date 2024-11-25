import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './pages/post.schema'
import { richText } from './objects/rich-text.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, richText],
}
