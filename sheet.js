const {google} = require('googleapis')
const keys = require("./keys.json")

document.querySelector('#pray_form').onsubmit = function(e){
    e.preventDefault()

    let pray = document.querySelector('#exampleFormControlTextarea1')
    console.log(pray)
}

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
)

async function clientAuth(data, res){
    res = await client.authorize(function(err, token){
        if (err){
            console.log(err)
            return
        } else {
            console.log("Connected!")
            gsrun(client, data)
        }
    })

    return data
}

async function gsrun(cl, newData){
    const gsapi = google.sheets({version:'v4', auth: cl})

    const opt = {
        spreadsheetId: '1U_CJf7I0okfzeivqBIJpNJsSNDVzv6X79pw2Zj7vgjI',
        range: 'Data!A:C'
    }

    let data = await gsapi.spreadsheets.values.get(opt)
    let dataArray = data.data.values
    console.log(dataArray)

    // let newEle = [['22/11/2021', '14:50:21', "ABCXYZ"]]
    console.log(newData)

    const update = {
        spreadsheetId: '1U_CJf7I0okfzeivqBIJpNJsSNDVzv6X79pw2Zj7vgjI',
        range: `Data!A${dataArray.length + 1}`,
        valueInputOption: 'USER_ENTERED',
        resource: {values: newData}
    }

    let res = await gsapi.spreadsheets.values.update(update)
    console.log(res.status)
}

module.exports = clientAuth