const moment = require('moment')

const dateformatter = (timeStamp) => {
    return moment(timeStamp).format('lll')
}

module.exports = dateformatter