const exercice = () => {
    const numberSort = new Promise ((resolve, reject) => {
        const sortA = Math.floor(Math.random()*50) + 1;
        const sortB = Math.floor(Math.random()*50) + 1;
        setTimeout(() => {
            sortA === sortB? reject() :
            resolve(sortA > sortB? 1:2);
        }, 2000);

    });
    numberSort
    .then((value)=>console.log(value))
    .catch(()=> console.log('==='));
};
exercice();