AFRAME.registerComponent('random-color', {
    dependencies: ['material'],

    init: function () {
        this.el.setAttribute('material', 'color', getRandomColor());
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#ff69b4';

    return color;
}
