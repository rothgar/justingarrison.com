/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let email = await context.request.formData();
        // await context.env.SUBS.put(email, "true");
        // let pretty = JSON.stringify(email, null, 2);
        console.log(Array.from(email.entries()));
        return new Response("", {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}