import React from 'react'
import Document, {DocumentContext} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => originalRenderPage()

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                    </>
                )
            }
            // eslint-disable-next-line no-empty
        } finally {}
    }
}
