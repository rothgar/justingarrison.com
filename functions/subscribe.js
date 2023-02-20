/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let email = await context.request.formData();
        let body = JSON.stringify(Array.from(email.entries()[0]));
        console.log(typeof body);
        let bodyType = typeof (body);

        // emailAddress = body.toString().replace("email,", "")
        // console.log(emailAddress);

        await context.env.SUBS.put(body, "true");
        return new Response("Thank you for subscribing " + body + " type " + bodyType, { status: 200 });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}