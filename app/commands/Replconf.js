const {StringParser}  = require ("../parser") 
module.exports = class Replconf{
    execute (commands){
        let section ;
        if(commands.length >1){
            section = commands[1] ;
            let parser = new StringParser() ; 
           return parser.serialize("OK");

        }
    }
}