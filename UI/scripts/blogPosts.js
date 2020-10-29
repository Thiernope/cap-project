//make blog post collabsable

const accordionTitles = document.querySelectorAll(".acordion-item-title");

accordionTitles.forEach(accordionTitle=>{
    accordionTitle.addEventListener("click", event=>{
        accordionTitle.classList.toggle("active");
        const acordionItemBody = accordionTitle.nextElementSibling;
        if(accordionTitle.classList.contains("active")){
            acordionItemBody.style.maxHeight = acordionItemBody.scrollHeight + "px";
        }else{
            acordionItemBody.style.maxHeight = 0;
        }
    });
});


const blogList = document.querySelector(".blog-display");

const setUpBlogs = (data)=>{

    let html = "";
    data.forEach(doc =>{
        const blog = doc.data();
        console.log(blog);
        const li = `
        <li>
        <div class="acordion-item-title">Title: <span>${blog.title}</span></div>
        <div class="acordion-item-body">
         <div class="accordion-item-content">
       <div class="identification">
        <div class="data-published">Date published: <span>${blog.date}</span></div>
        <div class="author">Author: <span>${blog.author}</span></div>
       </div>  
       <input type="file" class="image">
        <div class="content">
            <p>${blog.content}</p>
        </div>
      </div>
      </div> 
        </li>   
        `;

        html+=li;
    });

    blogList.innerHTML = html;
}
