# dust-biter
Another URL Shorterner Bites the Dust!

## Description

Yet another (simple) URL shorterner service running with a node backend server, Vue frontend and SQL database for persistence. Includes local memory caching with memory-cache, could consider updating to redis for scalability in the future. All the code here is experimental and used for learning purposes only.

## Setup

1. Install node dependencies with `npm install`
2. Install MSSQL Server here: https://www.microsoft.com/en-us/sql-server/sql-server-downloads
3. Install Server Management SSMS: https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15
4. Configure the local SQL server to accept TCP/IP traffic and also configure the login to allow for username and password access. The ports are default.
5. Remember to set your server login password in ./server/models/orm.js, the default is blank.
6. If first time initializing the SQL server, remember to use force sync to establish the schema. 

## Local Deployment

1. Run `node index.js` from ./server
2. Run `npm run serve` from ./vue/client
3. Navigate to localhost/8080
4. Enjoy!

## Acknowledgements

Built on top of boiler-plate coded provided by Vue, Bootstrap Styling and Carlos Magno: https://medium.com/@raymag/building-an-url-shortener-api-with-nodejs-264c59fc0ce
