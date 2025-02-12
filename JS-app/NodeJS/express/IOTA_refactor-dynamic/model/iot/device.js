
const {mongoose, uuid, Schema, typeOptions} = require('./shared')
const {sensordata} = require('./record')

let iotDevs = [];
const deviceSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            immutable: true,
            dafault: uuid(),
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        owner: {
            type: String,
            required: true
        },
        dataType: {
            type: String,
            enum: typeOptions.map(i=>i.toLocaleLowerCase()),
            required: true
        },
        exp: {
            type: Boolean,
            required: true,
            default: false
        },
        expData: {
            type: Date
        },
        expState: {
            type: Boolean,
            required: true,
            default: false
        },
        location: {
            type: String
        }, // geographical Location in Futuer (longtude, latitude)
        img: {
            type: String,
            default: 'https://raw.githubusercontent.com/AymanSaleh23/web-dev-bootcamp/refs/heads/main/JS-app/NodeJS/express/IOTA_refactor-dynamic/public/imgs/logo/logo.PNG'
        },
        about: {
            type: String,
            default: '<Dafault> No About inserted!'
        },
        data: [
            { type: Schema.Types.ObjectId, ref: 'Data' }
        ]
    }
);
const device = mongoose.model('Device', deviceSchema);

mongoose.connect('mongodb://localhost:27017/iotdevs')
    .then(() => {
        console.log('Connected to the IOT Devieces DB well');
    })
    .catch(() => {
        console.log('Connection Error with IOT Devieces DB');
    });


module.exports = { device, iotDevs, sensordata }
