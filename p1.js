var x = 'cabin';
function change() {
    if (x == 'cabin') {
        document.getElementById('dong1').setAttribute('src','cake.png');
        x = 'thu';
    } else {
        document.getElementById('dong1').setAttribute('src','cabin.png');
        x = 'cabin';
    }
}
