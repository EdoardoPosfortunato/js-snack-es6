const funzioneProva = (array, a, b) => {

    const result = [];

    for (let i = 0; i < array.length; i++){

        if (i >= a && i <= b){

            result.push(array[i])
        }

     }

    return result

  }



  const arrayProva = [1, 2, 3, 4, 5, 6, 7]
  console.log(funzioneProva(arrayProva, 2, 5))