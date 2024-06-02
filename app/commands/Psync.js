const fs = require('node:fs');
const {StringParser}  = require ("../parser") 
const Config = require("../Config");
EMPTY_REDIS_BASE64 = "UkVESVMwMDEx+glyZWRpcy12ZXIFNy4yLjD6CnJlZGlzLWJpdHPAQPoFY3RpbWXCbQi8ZfoIdXNlZC1tZW3CsMQQAPoIYW9mLWJhc2XAAP/wbjv+wP9aog=="
module.exports = class Psync{
    execute (commands){
        let section ;
        if(commands.length >1){
            section = commands[1] ;
            let parser = new StringParser() ; 
           //return parser.serialize("FULLRESYNC <REPL_ID> 0");
           const config = new Config();
           let result = [] ; 
            // Response for Full Synchronization
          result.push(parser.serialize(`FULLRESYNC ${config.replication.master_replid} 0`)) ;
          // Read the on disk DB file.

        //   Buffer.from(EMPTY_REDIS_BASE64, 'base64'): 
        //   This creates a new Buffer instance from the base64-encoded 
        //   string. The Buffer will contain the binary data decoded 
        //   from the base64 string.

         let data = Buffer.from(EMPTY_REDIS_BASE64, 'base64');
        data = Buffer.concat([Buffer.from(`$${data.length}\r\n`), data])
         result.push(data)
 
           return result;
        
        }
    }
}