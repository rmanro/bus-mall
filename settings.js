'use strict';

const settingsForm = document.getElementById('settings');
settingsForm.addEventListener('submit', function () {
    event.preventDefault();
    const numImages = this['numberOfImages'].value;
    const numRounds = this['surveyRounds'].value;
    const settings = {numImages: numImages, numRounds: numRounds};
    localStorage.setItem('settings', JSON.stringify(settings));
});
