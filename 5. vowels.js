function vowels(str){
    const vowel = "aeiou";
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowel.includes(str[i])){
            count++;
        }
    }
    return count;
}

console.log(vowels("shema fred"));