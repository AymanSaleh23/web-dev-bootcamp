let { app, wrapAsync, viewFilter, uuid, typeOptions, cookieParser } = require('../../model/iot/shared')
let { device, sensordata, iotDevs } = require('../../model/iot/device')
const AppError = require('../../appError')

app.use(cookieParser())

//A middle ware for  getting the date of the request
app.use((req, res, next) => {
    console.log('Cookies: ', req.cookies)
    next()
})
app.use((req, res, next) => {
    const reqDate = Date.now()
    console.log(reqDate)
    console.log(req.path)
    req.requstDate = new Date(reqDate).toISOString()
    next();
})

function formatTimeStamp(timestamp) {
    const now = new Date(timestamp);
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

    return `${year}-${month}-${day}, ${hours}:${minutes}:${seconds}:${milliseconds}`;
}

app.get('/iota/iot/longlife', wrapAsync(async (req, res, next) => {
    console.log('/iota/iot/longlife')

    iotDevs = await viewFilter(device, { exp: false },"data")
    if (!iotDevs) {
        throw new AppError("Can't connect to DataBase!", 500);
    }
    res.render('iota/iot/show', { iotDevs, state: "Long-Life" });

}, "GET: LONG-LIFE: Can't reach DB"));

app.get('/iota/iot/expirable', wrapAsync(async (req, res, next) => {
    console.log('/iota/iot/expirable')

    iotDevs = await viewFilter(device, { exp: true },"data")
    if (!iotDevs) {
        throw new AppError("Can't connect to DataBase!", 500);
    }
    res.render('iota/iot/show', { iotDevs, state: "Expirable" });

}, "GET: EXPIRABLE: Can't reach DB"));

app.get('/iota/iot/active', wrapAsync(async (req, res, next) => {
    console.log('/iota/iot/active')

    iotDevs = await viewFilter(device, { expState: false },"data")
    if (!iotDevs) {
        throw new AppError("Can't connect to DataBase!", 500);
    }
    res.render('iota/iot/show', { iotDevs, state: "Active" });

}, "GET: ACTIVE: Can't reach DB"));

app.get('/iota/iot/inactive', wrapAsync(async (req, res, next) => {
    console.log('/iota/iot/inactive')

    iotDevs = await viewFilter(device, { expState: true },"data")
    if (!iotDevs) {
        throw new AppError("Can't connect to DataBase!", 500);
    }
    res.render('iota/iot/show', { iotDevs, state: "In-Active" });

}, "GET: INACTIVE: Can't reach DB"));

app.get('/iota/iot/', wrapAsync(async (req, res, next) => {
    console.log('/iota/iot/all')
    iotDevs = await viewFilter(device, {},"data")
    if (!iotDevs) {
        throw new AppError("Can't connect to DataBase!", 500);
    }
    res.render('iota/iot/show', { iotDevs, state: "All" });
}, "GET: ALL : Can't reach DB"));


app.post('/iota/iot/delete/:devID', wrapAsync(async (req, res, next) => {
    const { dev_id } = req.body;
    const data = await device.find({ id: dev_id })
    if (!data) {
        return next(new AppError("Device is not found to Delete", 404));
    }
    console.log('Deleting');
    console.log(`Device detected`);
    console.log(data);
    console.log(`Device will be deleted`);

    const q = await device.deleteOne({ id: dev_id });
    console.log(q)

    console.log(`${req.path}`)
    res.redirect(`../${req.path}`)
}, "POST: DELETE: Can't Delete from DB"));

app.get('/iota/iot/modify/:devID', wrapAsync(async (req, res, next) => {
    const devID = req.params.devID
    console.log(devID)
    const founded = await device.findOne({ id: devID });
    if (!founded) {
        throw new AppError("Device is not found to modify", 404);
    }
    console.log(`The IOT dev will modified`, founded);
    dateNow = req.requstDate.split(':')[0].substring(0, 10)
    res.render('iota/iot/modify', { founded, typeOptions, dateNow });
}));

app.patch('/iota/iot/modify/:devId', wrapAsync(async (req, res) => {
    const { dev_owner, dev_name, dev_id, dev_loc, DateToExp, dev_dataTy, devAbout, dev_img_url } = req.body
    let { cb_exp, cb_en } = req.body
    cb_exp = (cb_exp) ? (true) : (false);
    cb_en = (cb_en) ? (true) : (false);
    console.log(`cb_en ${cb_en}`)
    console.log(`datenow ${dateNow}`)
    console.log(`DateToExp ${DateToExp}`)

    const q = await device.updateOne({ id: dev_id }, {
        owner: dev_owner,
        name: dev_name,
        location: dev_loc,
        exp: cb_exp,
        expData: cb_exp ? DateToExp : dateNow,
        expState: cb_en,
        img: dev_img_url ? dev_img_url : this.img,
        dataType: dev_dataTy.toLowerCase(),
        about: devAbout
    }, { new: true, runValidators: true });
    console.log(q);
    if (!q) {
        throw new AppError(e.message + "\nDevice can't be Modified", 500);
    }
    res.redirect('../');
}));

app.get('/iota/iot/add', (req, res) => {
    console.log(req.requstDate);
    dateNow = req.requstDate.split(':')[0].substring(0, 10)
    console.log(dateNow);
    res.render('iota/iot/add', { typeOptions, dateNow });
})

app.post('/iota/iot/add', wrapAsync(async (req, res, next) => {
    const { dev_name, dev_owner, dev_loc, dev_dataTy, devAbout, dev_img_url } = req.body
    let { DateToExp } = req.body
    let { cb_exp, cb_en } = req.body
    cb_exp = (cb_exp) ? (true) : (false);
    cb_en = (cb_en) ? (true) : (false);


    if (!DateToExp) {
        DateToExp = new Date('Feb 19 2025')
    }
    console.log(`req:`)
    console.log(req.body)
    console.log(DateToExp)
    dev = new device({ owner: dev_owner, name: dev_name, id: uuid(), location: dev_loc, exp: cb_exp, expData: new Date(DateToExp), expState: cb_en, about: devAbout, dataType: dev_dataTy, data: [] })
    if (dev_img_url) {
        dev.img = dev_img_url;
    }
    const data = await dev.save();
    if (!data) {
        throw new AppError("Can't Add this Device", 500);
    }
    console.log(`Added device ${data}`)


    res.redirect('/iota/iot/');
}));

app.get('/iota/iot/details/:id', wrapAsync(async (req, res, next) => {
    const dev_id = req.params.id
    let dev = await device.findOne({ id: dev_id }).populate('data');
    if (!dev) {
        throw new AppError('Device Not Found', 404);
    }
    console.log(`The IOT dev will detailed`, dev);
    res.render(`iota/iot/details`, { dev, formatTimeStamp });

}, 'GET: Details: Device Not Found'));

app.post('/iota/iot/send', wrapAsync(async (req, res, next) => {
    const { updatedValue, dev_id, sendTimeStamp } = req.body
    console.log(`this value: ===${updatedValue}=== will be updated if the id: ===${dev_id}=== is available in this timestamp ${sendTimeStamp}`)
    let dev = await device.findOne({ id: dev_id });
    if (dev) {
        if (dev.expState === true) {
            throw new AppError('Device Found but Expired/Disabled!', 400)
        } else {
            const updateType = typeof updatedValue
            console.log(updateType)
            console.log(dev.dataType.toLowerCase())
            if (updateType === ((['long', 'int', 'float', 'double'].includes(dev.dataType.toLowerCase())) ? (typeof 102) : (dev.dataType.toLowerCase() === 'boolean' ? (typeof true) : (dev.dataType.toLowerCase() === (typeof 'string') ? string : "nan")))) {
                console.log("passed Type check")
                rec = new sensordata({ dataType: dev.dataType, data: updatedValue, deviceID: dev.id, timeStamp: Date(sendTimeStamp) })
                dev.data = [rec].concat(dev.data)
                const record = await rec.save();
                const update = await dev.save();
                if (!record || !update) {
                    throw new AppError("Can't Add this record", 500);
                }
                return res.send(`Device Found and Available to Update! ||${updatedValue}||`, 200)
            }
            throw new AppError("Can't Add this record {Bad Record Type}", 400);
        }
    }
    else {
        console.log("dev not found")
        throw new AppError('Device is Not Found', 404)
    }
}))
module.exports