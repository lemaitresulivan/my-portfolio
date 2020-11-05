$(window).scroll(function() {
    $('.chart').easyPieChart({
        size:150,
        barColor: 'crimson',
        scaleColor: false,
        lineWidth: 10,
        trackColor: 'lightgrey',
        lineCap: 'circle',
        animate: 2000,
    });
});