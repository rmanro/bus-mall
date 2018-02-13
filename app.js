'use strict';

function Picture (name, fpath, numShown, numClicked, htmlID) {
    this.name = name;
    this.fpath = fpath;
    this.numShown = numShown;
    this.numClicked = numClicked;
    this.htmlID = htmlID;
}

let totalClicks = 0;

const game = {
    images: [],
    start: function () {
        this.images.push(
            new Picture('R2D2 Bag', 'img/01.jpg', 0, 0, 'bag'),
            new Picture('Banana Slicer', 'img/02.jpg', 0, 0, 'banana'),
            new Picture('Bathroom Stand', 'img/03.jpg', 0, 0, 'bathroom'),
            new Picture('Boots', 'img/04.jpg', 0, 0, 'boots'),
            new Picture('Breakfast Machine', 'img/05.jpg', 0, 0, 'breakfast'),
            new Picture('Meatball Bubble Gum', 'img/06.jpg', 0, 0, 'bubblegum'),
            new Picture('Chair', 'img/07.jpg', 0, 0, 'chair'),
            new Picture('Cthulhu', 'img/08.jpg', 0, 0, 'cthulhu'),
            new Picture('Dog Duck Bill', 'img/09.jpg', 0, 0, 'dog-duck'),
            new Picture('Dragon Meat', 'img/10.jpg', 0, 0, 'dragon'),
            new Picture('Pen Silverware', 'img/11.jpg', 0, 0, 'pen'),
            new Picture('Pet Sweep', 'img/12.jpg', 0, 0, 'pet-sweep'),
            new Picture('Pizza Scissors', 'img/13.jpg', 0, 0, 'scissors'),
            new Picture('Shark Sleeping Bag', 'img/14.jpg', 0, 0, 'shark'),
            new Picture('Baby Sweeper', 'img/15.png', 0, 0, 'sweep'),
            new Picture('Tauntaun Sleeping Bag', 'img/16.jpg', 0, 0, 'tauntaun'),
            new Picture('Unicorn Meat', 'img/17.jpg', 0, 0, 'unicorn'),
            new Picture('USB Tentacle','img/18.gif', 0, 0, 'usb'),
            new Picture('Water Can', 'img/19.jpg', 0, 0, 'water-can'),
            new Picture('Wine Glass', 'img/20.jpg', 0, 0, 'wine-glass')
        );
        this.nextStep();
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

    listResults: function () {
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
        const nameArray = [];
        const clickArray = [];
        for (let i = 0; i < this.images.length; i++){
            if (this.images[i].numClicked > 0) {
                clickArray.push(this.images[i].numClicked);
                nameArray.push(this.images[i].name);
            }
        }
        console.log(nameArray);
        console.log(clickArray);
        const ctx = document.getElementById('chart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nameArray,
                datasets: [{
                    label: '# of Clicks',
                    data: clickArray,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)'

                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 159, 64, 1)'

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