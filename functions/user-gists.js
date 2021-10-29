exports.handler = async (event, context) => {
  try {
    const user = event.queryStringParameters.user

    const gists = await fetch(`https://api.github.com/users/${user}/gists`)

    return {
      statusCode: 200,
      body: JSON.stringify(gists),
    }
  } catch (err) {
    console.log(err)
    return err
  }
}
