/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let email = await context.request.formData().entries().split(",")[1];
        await context.env.SUBS.put(email, "true");

        return new Response("Thank you for subscribing " + email, { status: 200 });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}