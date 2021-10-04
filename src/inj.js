const { internal } = global.require('koishi-plugin-eval/lib/worker')

internal.setGlobal('require', require('./require').require, false)