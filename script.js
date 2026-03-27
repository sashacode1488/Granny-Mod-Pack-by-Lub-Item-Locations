// Granny Mod Pack by Lub: Item Locations - Script

document.addEventListener('DOMContentLoaded', () => {
    console.log('Granny Mod Pack Item Locations site loaded.');
    
    const navButtons = document.querySelectorAll('.nav-btn');
    const presetSections = document.querySelectorAll('.preset-content');
    
    // Function to reveal cards in a section
    const revealCards = (sectionId) => {
        const cards = document.querySelectorAll(`#preset-${sectionId} .item-card`);
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        });
    };

    // Initial reveal for the active preset (7)
    revealCards('7');

    // Navigation logic
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const presetId = button.getAttribute('data-preset');
            
            // Update buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update sections
            presetSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `preset-${presetId}`) {
                    section.classList.add('active');
                }
            });
            
            // Trigger reveal animation for the new section
            revealCards(presetId);
        });
    });
});
