///<reference types ="cypress"/>

// 200: OK. Everything worked as expected.
// 201: A resource was successfully created in response to a POST request. The Location header contains the URL pointing to the newly created resource.
// 204: The request was handled successfully and the response contains no body content (like a DELETE request).
// 304: The resource was not modified. You can use the cached version.
// 400: Bad request. This could be caused by various actions by the user, such as providing invalid JSON data in the request body etc.
// 401: Authentication failed.
// 403: The authenticated user is not allowed to access the specified API endpoint.
// 404: The requested resource does not exist.
// 405: Method not allowed. Please check the Allow header for the allowed HTTP methods.
// 415: Unsupported media type. The requested content type or version number is invalid.
// 422: Data validation failed (in response to a POST request, for example). Please check the response body for detailed error messages.
// 429: Too many requests. The request was rejected due to rate limiting.
// 500: Internal server error. This could be caused by internal program errors.

describe("check the api using Gorest",()=>{
    it("verify the getuser functionality",()=>{
        cy.request({
            method :"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                "authorization":"Bearer d3a9450faa1051eff6114ce04ef8f28395954e501f01221ba75d04a23cafb14c"
            }
            
        }).then((res)=>{
            expect(res.status).to.eql(200)
            
        })
    })
})









