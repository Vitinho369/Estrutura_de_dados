const insertionsort = (array) =>{
  
    for(let i=1; i < array.length;i++){
        for(let j=0; j < i; j++){
            if(array[i] < array[j]){
                let troca = array[j];
                array[j] = array[i];
                array[i] = troca;
            }
        }
    }

    return array;
};

export default insertionsort;