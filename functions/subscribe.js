/**
 * POST /subscribe
 */
export async function onRequestPost(context) {
    try {
        let c = JSON.stringify(context);
        console.log(c);

        let emailForm = await context.request.formData();
        // come out as [["email","<email>"],["referrer","<url>"]]
        console.log("first");
        let formData = JSON.stringify(Array.from(emailForm.entries()));
        console.log("second");
        let formArray = formData.split(",");

        console.log("here");
        // get email
        // remove ", [, ]
        let emailAddress = formArray[1].replace(/["\[\]]/g, '');
        console.log("there");
        // get referrer
        let refAddress = formArray[3].replace(/["\[\]]/g, '');

        console.log("email: " + emailAddress);
        console.log("referrer: " + refAddress);
        await context.env.SUBS.put(emailAddress, "true", {
            metadata: { lastUpdate: Date() },
        });
        return Response.redirect(refAddress + "?email=submit", 301);
    } catch (err) {
        return Response('Error parsing JSON content', { status: 400 });
    }
}