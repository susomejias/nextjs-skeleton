/* eslint-disable @typescript-eslint/no-namespace */
declare global {
    namespace Cypress {
        interface Chainable {
            newUploadBlobFile: (
                fileName: string,
                fileType: string
            ) => Cypress.Chainable<HTMLInputElement[]>
        }
    }
}

export const newUploadBlobFile = (
    input: HTMLInputElement[],
    fileName: string,
    fileType: string
) => {
    cy.fixture(fileName, 'base64')
        .then(Cypress.Blob.base64StringToBlob)
        .then((blob) => {
            const el = input[0]
            const testFile = new File([blob], fileName, { type: fileType })
            const dataTransfer = new DataTransfer()
            dataTransfer.items.add(testFile)
            el.files = dataTransfer.files
            return cy.wrap(input).trigger('change', { force: true })
        })
}

Cypress.Commands.add(
    'newUploadBlobFile',
    { prevSubject: 'element' },
    newUploadBlobFile
)
