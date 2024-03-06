const data = [
  {
    id: 1,
    title: 'Data Example 1',
    author: 'Data Example 1'
  },
  {
    id: 2,
    title: 'Data Example 2',
    author: 'Data Example 2'
  }
]

exports.getAllData = (_, res) => {
  try {
    return res.send({
      status: 'success',
      message: 'Get Users Success',
      data
    })
  } catch (error) {
    return console.log(error)
  }
}
