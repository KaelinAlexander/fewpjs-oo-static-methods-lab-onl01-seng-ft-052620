class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const newArray = string.split(' ').map(word => {
        if (word != "the" && word != "a" && word != "an" && word != "but" && word != "of" && word != "and" && word != "for" && word != "at" && word != "by" && word != "from" ) {
        return this.capitalize(word)
      } else if ( string.indexOf(word) == 0 ) {
        return this.capitalize(word)
      } else {
        return word
      }
    })
    return newArray.join(' ')
  }

}