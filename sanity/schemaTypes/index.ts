import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './pages/post.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType],
}
