for (i = 1; i <= 20; i++) {
    let fff

    if (i % 3 === 0 && i % 5 === 0){

        fff = 'fizz_buzz';
        console.log(i,fff)

    }
    else if (i % 3 === 0) {

        fff = 'fizz'
        console.log(i,fff)

    }
    else if (i % 5 === 0 && i % 3 != 0) {

        fff = 'buzz'
        console.log(i,fff)


    } else{
    console.log(i)

}
}