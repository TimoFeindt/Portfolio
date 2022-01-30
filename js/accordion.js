

const accordionHeaders = document.querySelectorAll('.accordion--header');
        


accordionHeaders.forEach(accordionHeader => {

    accordionHeader.addEventListener('click', e =>{
        const currentlyActive = document.querySelector('.accordion--header.active');

        console.log(currentlyActive)
        if(currentlyActive && currentlyActive !== accordionHeader) {
            currentlyActive.classList.toggle('active');
            currentlyActive.nextElementSibling.style.maxHeight = 0;
        }

        accordionHeader.classList.toggle('active')
        const accordionBody = accordionHeader.nextElementSibling;

        if(accordionHeader.classList.contains('active')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    });
});
        
        
        