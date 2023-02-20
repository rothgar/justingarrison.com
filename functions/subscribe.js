/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let email = await context.request.formData();
        let body = email.entries().toString();

        emailAddress = body.replace("email,", "")

        await context.env.SUBS.put(body, "true");
        return new Response("Thank you for subscribing " + body + " or " + emailAddress, { status: 200 });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}