const axios = require('axios')

exports.handler = async (event, context) => {
  try {
    const user = event.queryStringParameters.user
    console.log('hi')

    console.log(`https://api.github.com/users/${user}/gists`)

    const response = await axios.get(
      `https://api.github.com/users/${user}/gists`,
    )
    const data = await response.data

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    }
  }
}
