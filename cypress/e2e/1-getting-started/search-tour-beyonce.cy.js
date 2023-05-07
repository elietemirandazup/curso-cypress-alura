Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('search tour beyonce', () => {

    beforeEach(() => {
        cy.visit('https://beyonce.com/')
    })
        it('search tour beyonce', () => {
            cy.get(':nth-child(1) > .nav-link > .chakra-text').type('TOUR');
            cy.get('p')
            .should('contain', 'Stockholm, SE');
            cy.get('.music-link > a').click();
            cy.get('.song_track-title__1T0B2')
                .should('contain', 'Break My Soul');
            cy.get(':nth-child(11) > .song_container__KrGMa > .song_track-title__1T0B2').click();
            cy.get('.song_lyrics-and-credits-buttons__3nEpt')
                .should('contain','Credits');
            cy.get('.song_lyrics-and-credits-buttons__3nEpt > p').click();
            cy.get('[data-modal-opened="true"] > .song-modal_container__1Aluy > .song-modal_modal-footer__oCSeE > #close-button').click();
            cy.get('[href="https://beyonce.com/"]').click();
    })

})