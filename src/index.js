const path = require('path')
const request = require('superagent')
const parse = require('./parser')

function extractScript(expr) {
    const { code } = parse('{', '}', expr)
    return code
}

async function transformScript(expr) {
    const pursModule = `module Main where
import Prelude
import Effect.Console

${expr}`
    const { body } = await (request
        .post('https://compile.purescript.org/compile')
        .set('Content-Type', 'text/plain')
        .send(pursModule))
    if (body.error) {
        throw body.error.contents
    }
    return 'module = {};\n' + body.js + '\ntypeof(main) === "function" ? main() : main'
}

module.exports = {
    name: 'purescript',
    extractScript,
    transformScript,
    transformModule: transformScript,
    apply(ctx) {
        ctx.with(['koishi-plugin-eval'], (ctx) => {
            ctx.app.worker.config.setupFiles['eval-purs-loader'] = path.resolve(__dirname, 'inj.js')
            let loader = path.resolve(__dirname, 'index.js')
            ctx.app.worker.config.scriptLoader = loader
            ctx.app.worker.config.moduleLoaders['.purs'] = loader
        })
    },
}