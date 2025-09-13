module.exports = async function(s,config){
    s.debugLog('Updating database to 2025-04-13')
    const {
        addColumn,
    } = require('../utils.js')(s,config)
    await addColumn('Events Counts',[
        {name: 'name', length: 255, type: 'string'},
    ])
}
