const stdin = process.openStdin()
let _resolve

stdin.addListener("data", (d) => {
  if (_resolve == null) { return }

  _resolve()
  _resolve = null
})

export default () => {
  return new Promise((resolve) => { _resolve = resolve })
}