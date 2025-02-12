const { mongoose, Schema, typeOptions } = require('./shared')
const recordSchema = new Schema({
    dataType: {
        type: String,
        enum: typeOptions.map(i=>i.toLocaleLowerCase()),
        required: true,
    },
    data: {
        type: String,
        required: true
    },
    deviceID: {
        type: String,
        required : true
    },
    timeStamp:{
        type: Date,
        required :true
    }
})

const sensordata = mongoose.model('Data', recordSchema);

module.exports = { sensordata }