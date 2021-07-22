console.log(removeSpecialCharacters("%fd7___6 $fd(-)6GvKlO."))

function removeSpecialCharacters(str) {
    return str.replace(/[^a-zA-Z-_ ]/g, "");
}