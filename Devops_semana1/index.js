

const natural = require ('natural');


// importando al clasificador 
const classifier = new natural.BayesClassifier()


// Entrenando al clasificador 

classifier.addDocument('Estoy feliz', 'positivo')
classifier.addDocument('Me gusta levantarme alegre por las mañanas', 'positivo')
classifier.addDocument('Me molesta mucho la lluvia', 'negativo')
classifier.addDocument('No soporto el sol', 'negativo')

classifier.addDocument('Este es un día neutral', 'neutral')

classifier.train()


// Probando al clasificador 

console.log('1..', classifier.classify("No soporto el sol"))

console.log('2..', classifier.classify("Me molesta mucho la lluvia"))

console.log('3..', classifier.classify("Soy un hombre muy alegre"))


