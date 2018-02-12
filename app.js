function Picture (name, fpath, numShown, numClicked, htmlID) {
    this.name = name;
    this.fpath = fpath;
    this.numShown = numShown;
    this.numClicked = numClicked;
    this.htmlID = htmlID;
}

const game = {
    images: [],
    start: function () {
        this.images.push(
            new Picture('R2D2 Bag', 'img/bag.jpg', 0, 0, 'bag'),
            new Picture('Banana Slicer', 'img/banana.jpg', 0, 0, 'banana'),
            new Picture('Bathroom Stand', 'img/bathroom.jpg', 0, 0, 'bathroom'),
            new Picture('Boots', 'img/boots.jpg', 0, 0, 'boots'),
            new Picture('Breakfast Machine', 'img/breakfast.jpg', 0, 0, 'breakfast'),
            new Picture('Meatball Bubble Gum', 'img/bubblegum.jpg', 0, 0, 'bubblegum'),
            new Picture('Chair', 'img/chair.jpg', 0, 0, 'chair'),
            new Picture('Cthulhu', 'img/cthulhu.jpg', 0, 0, 'cthulhu'),
            new Picture('Dog Duck Bill', 'img/dog-duck.jpg', 0, 0, 'dog-duck'),
            new Picture('Dragon Meat', 'img/dragon.jpg', 0, 0, 'dragon'),
            new Picture('Pen Silverware', 'img/pen.jpg', 0, 0, 'pen'),
            new Picture('Pet Sweep', 'img/pet-sweep.jpg', 0, 0, 'pet-sweep'),
            new Picture('Pizza Scissors', 'img/scissors.jpg', 0, 0, 'scissors'),
            new Picture('Shark Sleeping Bag', 'img/shark.jpg', 0, 0, 'shark'),
            new Picture('Baby Sweeper', 'img/sweep.png', 0, 0, 'sweep'),
            new Picture('Tauntaun Sleeping Bag', 'img/tauntaun.jpg', 0, 0, 'tauntaun'),
            new Picture('Unicorn Meat', 'img/unicorn.jpg', 0, 0, 'unicorn'),
            new Picture('USB Tentacle','img/usb.gif', 0, 0, 'usb'),
            new Picture('Water Can', 'img/water-can.jpg', 0, 0, 'water-can'),
            new Picture('Wine Glass', 'img/wine-glass.jpg', 0, 0, 'wine-glass')
        );
        const randomList = this.randomize();
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
            console.log(ele);
            sect.appendChild(ele);
        }
    }

};

game.start();
