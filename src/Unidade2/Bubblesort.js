const bubblesort = (array) =>{
    for(let i=0; i < array.length;i++){
        for(let j=i+1; j < array.length;j++){
            if(array[i] > array[j]){
                let troca = array[j];
                array[j] = array[i];
                array[i] = troca;
            }
        }
    }
    
    return array;
};

export default bubblesort;