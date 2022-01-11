module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name 
        : "No name";

    context.res = {
        status: name ? 200 : 404, /* Defaults to 200 */
        body: responseMessage
    };
}