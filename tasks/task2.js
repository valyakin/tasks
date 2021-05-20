// Task 2 Все таски выполнить последовательно, после вывести ALL DONE

(async () => {
  function sleep (timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout))
  }

  async function asyncTask (task, timeout) {
    await sleep(timeout)
    console.log(`DONE ${task}`)
  }

  asyncTask("A", 1000)
  asyncTask("B", 1000)
  asyncTask("C", 1000)
  console.log('ALL DONE')
})()
