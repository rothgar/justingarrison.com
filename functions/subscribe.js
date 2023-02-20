/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let email = await context.request.formData();

        let pretty = JSON.stringify(email.entries(), null, 2);
        await context.env.SUBS.put(pretty, "true");
        let body = Array.from(email.entries());
        return new Response("Thank you for subscribing " + body, { status: 200 });
        console.log(pretty);
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}