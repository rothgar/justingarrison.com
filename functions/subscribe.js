/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let c = JSON.stringify(context);
        console.log(c);

        let emailForm = await context.request.formData();
        // come out as ["email","<email>"]
        let body = JSON.stringify(Array.from(emailForm.entries())[0]);

        let bodyArray = body.split(",");
        let emailAddress = bodyArray[1].replace("]", "").replace(/(^"|"$)/g, '');

        await context.env.SUBS.put(emailAddress, "true", {
            metadata: { lastUpdate: Date() },
        });
        return new Response("https://justingarrison.com/?email=submit", { status: 301 });
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}