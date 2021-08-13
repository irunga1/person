class mirror2{
    constructor(word1){
        this.word = word1;
    }
    newWord(){
        var word2 = this.word;
        console.log("word2"+word2);
        var size = word2.length;
        console.log("size"+size);
        var nword = "";
        for(var i= size-1;i>-1;i--){
            
            console.log(word2[i]);
            nword += word2[i];
        }
        console.log(nword);
        return nword;
    }

}
module.exports = mirror2;