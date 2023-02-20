/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let email = await context.request.formData();
        let body = JSON.stringify(Array.from(email.entries())[0]);
        console.log(typeof body);
        let bodyType = typeof (body);

        let bodyArray = body.split(",");
        let emailAddress = bodyArray[1].replace("]", "");

        // emailAddress = body.toString().replace("email,", "")
        // console.log(emailAddress);

        await context.env.SUBS.put(body, "true");
        return new Response("Thank you for subscribing " + body + " email " + emailAddress, { status: 200 });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}