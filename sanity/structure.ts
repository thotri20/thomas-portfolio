import { Home } from 'lucide-react'
import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
						.title('Hjemmeside')
						.icon(Home)
						.schemaType('home')
						.child(
							S.editor()
								.title('Hjemmeside')
								.schemaType('home')
								.documentId("home"),
						),
      S.documentTypeListItem("post").schemaType("post").title("Prosjekter"),
    ])



    //S.documentTypeListItems()