var artistInput = $('#artista'),
    button = $('#boton'),
    resultOut = $('#content')

artistInput.on('keyup', getArtist)
button.on('click', requestArtist)

function getArtist( evt ){
    // Enter
    if(evt.keyCode == 13){
        requestArtist()
    }
}

function requestArtist(){
    $.ajax({
        // data: {artist: artistInput.val()},
        data: {
            artist: artistInput.val(),
            api_key: '26194823d341a4fa9162f1c24dfac318',
            format: 'json',
            method: 'artist.getInfo'
        },
        // url: '/res/data/lastfm.json'
        url: '//ws.audioscrobbler.com/2.0/'
    })
        .done( fillArtistInfo )

    resultOut.html( '<p class="loading">cargando...</p>' )
}

function fillArtistInfo( jsonData ){
    // Gracias a jQuery jsonData es un objeto
    var artist = jsonData.artist,
        html = ''

    html += '<h2>' + artist.name + '</h2>'
    html += '<figure><img src="' + artist.image[artist.image.length-1]['#text'] + '"></figure>'
    html += '<p class="bio">' + artist.bio.summary + '</p>'

    resultOut.html( html )
}
