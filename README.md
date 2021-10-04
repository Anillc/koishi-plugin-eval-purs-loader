# koishi-plugin-eval-purs-loader

这是 koishi-eval 的 purescript loader , 用于在 eval 插件里使用 purescript.

# 使用方法

```bash
yarn add koishi-plugin-eval koishi-plugin-eval-purs-loader # 或者 npm install koishi-plugin-eval koishi-plugin-eval-purs-loader
```

之后参考[这里](https://koishi.js.org/guide/context.html#%E4%BD%BF%E7%94%A8%E6%8F%92%E4%BB%B6)安装 `koishi-plugin-eval` 和本插件.

注意, 虽然 eval 插件提供了 `scriptLoader` 配置项, 但是本插件会自动修改该配置项, 所以不需要为 eval 插件配置该选项.

之后您就可以对着机器人使用 purescript 了

```
> main = 1
```