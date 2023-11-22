//  const api = "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"
//  const inp = document.getElementById("inp")
//  const imgs=document.querySelector('.imges')
 
//  const getImgs =async () =>{
//     // requst to openai api
//     const methods ={
//         method:"POST",
//         headers:{
//             "Content-Type": "application/json",
//             "Authorization":`Bearer ${api}` 
//         },
//         body:JSON.stringify(
//             {
//                 "prompt":inp.value,
//                 "n":3,
//                 "size":"256x256"
//             }
//         )
//     }
//    const res = await fetch ("https://api.openai.com/v1/images/generations",methods)
//    // تحويل parse the respone as json
//    const data =await res.json()

//    const listImgs=data.data;

// // ليمسح الطلب القديم 
// imgs.innerHTML='';
//    listImgs.map(photo => {
//     const container =document.createElement('div')
//     imgs.append(container)

//     const img =document.createElement('img')
//     container.append(img)
//     img.src=photo.url
//    })
//  }



const api = "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";
const inp = document.getElementById("inp");
const imgs = document.querySelector('.imges');

const getImgs = async () => {
    // Request to OpenAI API
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify(
            {
                "prompt": inp.value,
                "n": 5,
                "size": "256x256"
            }
        )
    };

    try {
        const res = await fetch("https://api.openai.com/v1/images/generations", methods);

        // Parse the response as JSON
        const data = await res.json();

        const listImgs = data.data;

        // Clear old requests
        imgs.innerHTML = '';

        // Iterate through the list of images and create HTML elements
        listImgs.forEach(photo => {
            const container = document.createElement('div');
            imgs.append(container);

            const img = document.createElement('img');
            container.append(img);
            img.src = photo.url;

            // Add click event to download the image on click
            img.addEventListener('click', () => {
                downloadImage(photo.url);
            });
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};

// Function to download the image
const downloadImage = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'image.jpg'; // You can set the desired filename here
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
