import moongoose from "mongoose";
async function connect() {
    try {
        moongoose.connect('mongodb://172.20.0.3:27017/appPrueba', {
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        console.log("Data base connected...");
    } catch {
        console.log("Error connect database...")
    }
}
export default connect;