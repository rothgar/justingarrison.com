/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let c = JSON.stringify(context);
        console.log(c);

        let emailForm = await context.request.formData();
        // come out as [["email","<email>"],["referrer","<url>"]]
        let emailData = JSON.stringify(Array.from(emailForm.entries())[0]);

        let emailArray = emailData.split(",");
        let emailAddress = emailArray[1].replace("]", "").replace(/(^"|"$)/g, '');
        console.log("after email");

        // get referrer
        let refData = JSON.stringify(Array.from(emailForm.entries()[1]));
        let refArray = refData.split(",");
        let refAddress = refArray[1].replace("]", "").replace(/(^"|"$)/g, '');
        console.log("after referrer")

        console.log("email: " + emailAddress);
        console.log("referrer: " + refAddress);
        await context.env.SUBS.put(emailAddress, "true", {
            metadata: { lastUpdate: Date() },
        });
        return new Response.redirect("https://justingarrison.com/?email=submit", 301);
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}