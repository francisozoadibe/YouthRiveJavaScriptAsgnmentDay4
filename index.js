// creation of javaScript function that will take scores as input and return the corresponding 
// category based on the criteria below


function scoreCategory(score){
    
    if (score >= 90){
        console.log('Excellent')
    }else if (score >= 80 && score <= 89){
        console.log('Very Good')
    }else if (score >= 70 && score <= 79){
        console.log('Pass')
    }else {
        console.log('Failed')
    }
}

scoreCategory(console.log(95))