'use strict';

function Picture (name, fpath, numShown, numClicked) {
    this.name = name;
    this.fpath = fpath;
    this.numShown = numShown;
    this.numClicked = numClicked;
}

let totalClicks = 0;

const game = {
    images: [],
    start: function () {

        if (localStorage.getItem('localImages')){
            const imageArray = JSON.parse(localStorage.getItem('localImages'));
            for (let i = 0; i < imageArray.length; i++) {
                const newArray = new Picture(imageArray[i].name,imageArray[i].fpath,imageArray[i].numShown,imageArray[i].numClicked);
                this.images.push(newArray);
            }
        } else {

            this.images.push(
                new Picture('R2D2 Bag', 'img/01.jpg', 0, 0),
                new Picture('Banana Slicer', 'img/02.jpg', 0, 0),
                new Picture('Bathroom Stand', 'img/03.jpg', 0, 0),
                new Picture('Boots', 'img/04.jpg', 0, 0),
                new Picture('Breakfast Machine', 'img/05.jpg', 0, 0),
                new Picture('Meatball Bubble Gum', 'img/06.jpg', 0, 0),
                new Picture('Chair', 'img/07.jpg', 0, 0),
                new Picture('Cthulhu', 'img/08.jpg', 0, 0),
                new Picture('Dog Duck Bill', 'img/09.jpg', 0, 0),
                new Picture('Dragon Meat', 'img/10.jpg', 0, 0),
                new Picture('Pen Silverware', 'img/11.jpg', 0, 0),
                new Picture('Pet Sweep', 'img/12.jpg', 0, 0),
                new Picture('Pizza Scissors', 'img/13.jpg', 0, 0),
                new Picture('Shark Sleeping Bag', 'img/14.jpg', 0, 0),
                new Picture('Baby Sweeper', 'img/15.png', 0, 0),
                new Picture('Tauntaun Sleeping Bag', 'img/16.jpg', 0, 0),
                new Picture('Unicorn Meat', 'img/17.jpg', 0, 0),
                new Picture('USB Tentacle','img/18.gif', 0, 0),
                new Picture('Water Can', 'img/19.jpg', 0, 0),
                new Picture('Wine Glass', 'img/20.jpg', 0, 0)
            );
        }
        this.nextStep();
        console.log(this.images);
    },
    
    nextStep: function () {
        const randomList = this.randomize();
        let numCheck = 0;
        for (let i = 0; i < randomList.length; i++) {
            if (randomList[i].name === this.images[numCheck].name){
                this.images[numCheck].numShown++;
                numCheck = 0;
            } else {
                numCheck++;
                i--;
            };
        };
        this.imagePush(randomList);


    },

    randomize: function () {
        const randomImages = [];
        while (randomImages.length < 3) {
            const image = this.images[Math.floor(Math.random() * this.images.length)];
            if (!randomImages.includes(image)) {
                randomImages.push(image);
            } else continue;
        };
        return randomImages;
    },

    imagePush: function (randomList) {
        const images = document.querySelectorAll('div.one-third');
        for (let i = 0; i < randomList.length; i++){
            const ele = document.createElement('img');
            const sect = images[i];
            ele.src = `${randomList[i].fpath}`;
            sect.appendChild(ele);
        }
    },

    resetImages: function () {
        const images = document.querySelectorAll('div.one-third');
        for (let i = 0; i < images.length; i ++) {
            images[i].textContent = '';
        }
        totalClicks++;
        if (totalClicks < 25){
            this.nextStep();
        } else this.createChart();

    },

    listResults: function () {  // not used currently, saving just in case needed by final output
        const resultList = document.getElementById('clicklist');
        for (let i = 0; i < this.images.length; i++){
            const ele = document.createElement('li');
            if (this.images[i].numClicked === 1) {
                ele.textContent = `1 vote for the ${this.images[i].name}`;
                resultList.appendChild(ele);
            } else {
                ele.textContent = `${this.images[i].numClicked} votes for the ${this.images[i].name}`;
                resultList.appendChild(ele);
            }
        }
    },


    createChart: function () {
        const instructions = document.getElementById('instructions');
        instructions.textContent = 'Results';
        localStorage.setItem('localImages', JSON.stringify(this.images));
        const nameArray = [];
        const clickArray = [];
        for (let i = 0; i < this.images.length; i++){
            if (this.images[i].numClicked > 0) {
                clickArray.push(this.images[i].numClicked);
                nameArray.push(this.images[i].name);
            }
        }
        const main = document.getElementById('main');
        const h4 = document.createElement('h4');
        h4.className = 'asterik';
        h4.textContent = 'Only Clicked Items Shown';
        main.appendChild(h4);
        const ctx = document.getElementById('chart').getContext('2d');
        new Chart(ctx, {                                               //eslint disable line
            type: 'bar',
            data: {
                labels: nameArray,
                datasets: [{
                    label: '# of Clicks',
                    data: clickArray,
                    backgroundColor: [
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)',
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)',
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)',
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)',
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)',
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)'
                    ],
                    borderColor: [
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)',
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)',
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)',
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)',
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)',
                        'rgba(47, 124, 191, 1)',
                        'rgba(47, 191, 186, 1)',
                        'rgba(47, 191, 114, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            autoSkip: false
                        }
                    }]
                }
            }
        });
    }

};

game.start();

const imagearea = document.getElementById('grid');
imagearea.addEventListener('click', function handler(){
    const url = event.target.src.slice(-10);
    let listCheck = false;
    let i = 0;
    while (listCheck === false) {
        if (url === game.images[i].fpath){
            game.images[i].numClicked++;
            listCheck = true;
        } else{
            i++;
        };
    };
    game.resetImages();
    const counter = document.getElementById('counter');
    counter.textContent = totalClicks;
    if (totalClicks === 25) this.removeEventListener('click', handler);
});