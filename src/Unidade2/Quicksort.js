const quicksort = (array, inferiorArray=0, superiorArray=(array.length-1)) =>{
    let inferior = inferiorArray;
    let superior = superiorArray;

    if(inferior < superior){
        let j=inferior;
        let i=inferior-1;
        let pivo = array[superior];

        while(j < superior){
            if(array[j] < pivo){
                i++;
                let troca = array[i];
                array[i] = array[j];
                array[j] = troca;
            }
            j++;
        }
        i++;
        let troca = array[i];
        array[i] = array[j];
        array[j] = troca;
        quicksort(array, inferior, i-1);
        quicksort(array, i+1,superior);
    }

    return array;
};

export default quicksort;