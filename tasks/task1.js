// Task 1 Все таски выполнить одновременно, после вывести ALL DONE

function asyncTask (task, timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`DONE ${task}`)
      resolve()
    }, timeout)
  })
}

const tasks = [
  {
    task: "A",
    timeout: 1000
  },
  {
    task: "B",
    timeout: 2000
  },
  {
    task: "C",
    timeout: 3000
  },
]

for (let i = 0; i < tasks.length; i++) {
  asyncTask(tasks[i].task, tasks[i].timeout)
}

console.log('ALL DONE')
