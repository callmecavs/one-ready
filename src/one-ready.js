// returns a Promise that resolves when the DOM is ready
const ready = () => new Promise(resolve => {
  const { readyState } = document

  // if DOM is already ready, resolve early
  if (readyState === 'interactive' || readyState === 'complete') {
    return resolve()
  }

  // otherwise, resolve when ready
  document.addEventListener('DOMContentLoaded', resolve)
})

// export the Promise, not the generator
const singleton = ready()

export default singleton
