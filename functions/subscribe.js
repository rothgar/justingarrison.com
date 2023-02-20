/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let email = await context.request.formData();
        let body = Array.from(email.entries());

        emailAddress = body.replace("email,", "")

        await context.env.SUBS.put(body, "true");
        return new Response("Thank you for subscribing " + emailAddress, { status: 200 });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}