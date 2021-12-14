
function introduction(name) {
    name = "Aki"
    return (`Hi, my name is ${name}.`);
  }

  function introductionWithLanguage(name, language){
    name = "Aki"
    language = "Ember.js"
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
  
  
  function introductionWithLanguageOptional(name,language = "JavaScript"){
    name = "Gracie"
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }

  function introductionWithLanguageOptional2(name,language = "JavaScript"){
    name = "Gracie"
    language = "Python"
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }

