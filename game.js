const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 300 } }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    parent: 'game-container'
};

let player;
let cursors;

const game = new Phaser.Game(config);

function preload() {
    this.load.image('player', 'https://examples.phaser.io/assets/sprites/phaser-dude.png');
}

function create() {
    player = this.physics.add.sprite(400, 300, 'player');
    player.setCollideWorldBounds(true);
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if(cursors.left.isDown) player.setVelocityX(-160);
    else if(cursors.right.isDown) player.setVelocityX(160);
    else player.setVelocityX(0);

    if(cursors.up.isDown && player.body.touching.down) player.setVelocityY(-330);
}
