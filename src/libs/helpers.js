const fixDate = (v1) => {
    return v1 < 10 ? '0' + v1 : v1
}

const dateRecord = () => {
    const now =  new Date()
    return fixDate(now.getDate()) + '/' + fixDate(now.getMonth() + 1) + '/' + now.getFullYear() + ' ' + fixDate(now.getHours()) + ':' + fixDate(now.getMinutes()) + ':' + fixDate(now.getSeconds())
}

module.exports = { dateRecord }