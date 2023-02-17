/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let rawForm = await context.request.formData().entries().split(",");
        let email = rawForm[1];
        await context.env.SUBS.put(email, "true");

        return new Response("Thank you for subscribing " + email, { status: 200 });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}