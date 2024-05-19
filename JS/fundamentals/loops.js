// pętla while, do while, for tak jak w JAVA, dyrektywy break i continue też
let i = 3;
while (i) { // zatrzyma się kiedy i = 0 :)
    console.log(i);
    i--;
}

// labels
// pozwalają przypisać nazwę pętli, można wykorzystać ją do przerwania całości w zagnieżdżonej pętli
outer: for(let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (j > 6) break outer; // można również wykorzystać do continue
    }
}


