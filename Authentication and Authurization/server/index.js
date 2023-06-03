const app = require("./app.js")
const { connected } = require('./config/db.js')

const PORT=process.env.PORT || 1200;

app.listen(PORT, ()=>{
    connected();
    console.log(`Server is running at port ${PORT}`)
})