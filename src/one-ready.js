const ready = () => new Promise(resolve => {
  const { readyState } = document

  if (readyState === 'interactive' || readyState === 'complete') {
    return resolve()
  }

  document.addEventListener('DOMContentLoaded', resolve)
})

const singleton = ready()

export default singleton
