/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let email = await context.request.formData();
        await SUBS.put(email[0], "true");
        let pretty = JSON.stringify([...email], null, 2);
        return new Response(pretty, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}