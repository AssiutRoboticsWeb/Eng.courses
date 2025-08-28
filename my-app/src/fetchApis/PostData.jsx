// async function PostData(url) {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       type: "test",
//       name: "testName",
//     }),
//   })

//   function handleResponse(response) {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   }

//   return handleResponse(response);
// }
// export default PostData;
