import S from '@sanity/desk-tool/structure-builder'

// now we create a new base list for our studio
export default () =>
    S.list()
        .title('Base') // define the new sanity content name
        .items(
            [
                S.listItem()
                    .title('Site configuration') // define the list item title
                    .child(
                        S.document()
                            .schemaType('siteConfig') // define the document schema type, same as you would any other
                            .documentId('siteConfig') // document id to identify the schema document
                    ), // the list item would take a child document
                    S.divider(), // seperate the site config from other document types
                    // here we would filter list items we don't want to show in the main content list
                ...S.documentTypeListItems().filter(item => !['siteConfig'].includes(item.getId()))
            ]
        ) // define the items on that would be in the document list