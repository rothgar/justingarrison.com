/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let email = await context.request.formData();
        await context.env.SUBS.put(email.entries()[1], "true");
        // let pretty = JSON.stringify(email, null, 2);
        let body = Array.from(email.entries());
        return new Response("Thank you for subscribing " + body[1], { status: 200 });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}