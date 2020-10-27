let determineConfigDir = () => {

    if (process.env.CONFIG_DIR === undefined || process.env.CONFIG_DIR == null) {
        return '.'
    }

    return process.env.CONFIG_DIR
}

module.exports = function () {

    const config_dir = determineConfigDir()
    const config_data = require(`${config_dir}/config.json`)

    return config_data
}