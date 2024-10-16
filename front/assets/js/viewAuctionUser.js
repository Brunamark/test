document.addEventListener('DOMContentLoaded', function () {
    const modalToggle = document.querySelectorAll('[data-modal-toggle]');
    const modal = document.getElementById('crud-modal');

    modalToggle.forEach(button => {
        button.addEventListener('click', function () {
            modal.classList.toggle('hidden');
            const contentModal = document.querySelector("#contentModal");


            let imgPainting = document.querySelector("#painting");
            if (!imgPainting) {
                const divImg = document.createElement("div");
                divImg.classList.add("flex", "justify-center", "items-center");
                imgPainting = document.createElement("img");
                imgPainting.setAttribute("src", "../assets/img/catPainting.jpg");
                imgPainting.setAttribute("alt", "test image");
                imgPainting.setAttribute("id", "painting")
                imgPainting.classList.add("w-96", "h-96", "p-5");
                divImg.appendChild(imgPainting);
                contentModal.appendChild(divImg);
            }
            let divPaintName = document.querySelector("#main-content");
            if (!divPaintName) {
                divPaintName = document.createElement("div");
                divPaintName.setAttribute("id", "main-content");
                divPaintName.classList.add("flex", "grow", "flex-row", "justify-between", "items-center", "px-4");
                const nameAuction = document.querySelector('#AuctionNameLabel');
                nameAuction.innerHTML = "Bids for Beauty";
                nameAuction.classList.add("text-lg");

                divPaintName.appendChild(nameAuction);

                const divCalendar = document.createElement("div");
                divCalendar.classList.add("flex", "flex-row", "items-center");

                const divIconCalendar = document.createElement("div");
                divIconCalendar.classList.add("w-full", "h-full");
                divIconCalendar.style.width = "30px";


                const calendarIcon = document.createElement("img");
                calendarIcon.setAttribute("src", "../assets/img/calendar-icon.svg");
                divIconCalendar.appendChild(calendarIcon);

                let date = document.createElement("p");
                date.innerHTML = "10/06/2024";
                date.classList.add("text-sm", "font-medium", "text-[#676A71]");

                divCalendar.appendChild(divIconCalendar);
                divCalendar.appendChild(date);

                divPaintName.appendChild(divCalendar);
                contentModal.appendChild(divPaintName);

            }

            let divContent = document.querySelector('#content');
            if(!divContent){
                divContent = document.createElement("div");
                divContent.setAttribute("id", "content");
                divContent.classList.add("flex", "flex-row", "justify-between", "px-4", "mt-3");

                let divAuthor = document.createElement("div");
                divAuthor.classList.add("flex", "flex-col");

                let namePainting = document.createElement("p");
                namePainting.innerHTML = "Cat Painting";
                namePainting.classList.add("text-sm", "font-medium", "text-[#676A71]");

                let authorPainting = document.createElement("p");
                authorPainting.innerHTML = "By Meow";
                authorPainting.classList.add("text-sm", "font-medium", "text-[#676A71]");

                divAuthor.appendChild(namePainting);
                divAuthor.appendChild(authorPainting);

                const divLastBid = document.createElement("div");
                divLastBid.classList.add("flex", "flex-row", "items-center");

                let phraseBid = document.createElement("p");
                phraseBid.innerHTML = "Último lance:";
                phraseBid.classList.add("text-sm", "font-medium", "text-[#676A71]");

                let valueBid = document.createElement("p");
                valueBid.innerHTML = "R$ 100,00";
                valueBid.classList.add("text-sm", "font-medium", "text-[#676A71]");

                divLastBid.appendChild(phraseBid);
                divLastBid.appendChild(valueBid);

                divContent.appendChild(divAuthor);
                divContent.appendChild(divLastBid);
                contentModal.appendChild(divContent);
                
            }

            let labelBidValue = document.querySelector('#labelBidValue');
            if (!labelBidValue) {
                const divBidValue = document.createElement('div');
                divBidValue.classList.add("col-span-2", "sm:col-span-1", "px-4", "mt-3");

                labelBidValue = document.createElement("label");
                labelBidValue.setAttribute("for", "price");
                labelBidValue.setAttribute("id", "labelBidValue");
                labelBidValue.classList.add("block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-[#676A71]");
                labelBidValue.innerHTML = "Valor do lance:";

                divBidValue.appendChild(labelBidValue);

                const inputBidValue = document.createElement('input');
                inputBidValue.setAttribute("type", "number");
                inputBidValue.setAttribute("min", "0");
                inputBidValue.setAttribute("step", "0.01");
                inputBidValue.setAttribute("placeholder", "R$200.50");
                inputBidValue.classList.add("bg-gray-50", "border", "border-gray-300", "text-gray-900",
                    "text-sm", "rounded-sm", "focus:ring-primary-600", "block", "w-full", "p-2.5",
                    "dark:bg-[#F7F7F7]", "dark:border-gray-500", "dark:placeholder-gray-400",
                    "dark:text-[#676A71]", "dark:focus:ring-primary-500", "dark:focus:border-primary-500");

                divBidValue.appendChild(inputBidValue);
                contentModal.appendChild(divBidValue);
            }

            let divButtons = document.querySelector('#buttons');
            if (!divButtons) {
                divButtons = document.createElement("div");
                divButtons.setAttribute("id","buttons");
                divButtons.classList.add("flex", "flex-row", "justify-center");

                let saveButton = document.createElement('button');
                saveButton.setAttribute("id", "save-button");
                saveButton.innerHTML = "Salvar";
                saveButton.setAttribute("type", "submit");
                saveButton.classList.add("text-white", "inline-flex", "items-center", "bg-[#818CA7]", "hover:bg-[#6C7486]", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "font-medium", "rounded-sm", "text-sm", "px-5", "py-2.5", "text-center", "dark:bg-[#818CA7]", "dark:hover:bg-[#6C7486]", "dark:focus:ring-[#6C7486]", "mt-4");
                divButtons.appendChild(saveButton);

                let cancelButton = document.createElement('button');
                cancelButton.innerHTML = "Cancelar";
                cancelButton.setAttribute("type", "button");
                cancelButton.setAttribute("data-modal-toggle" ,"crud-modal");
                cancelButton.classList.add("text-white", "inline-flex", "items-center", "bg-[#413030]", "hover:bg-[#2E2323]", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "font-medium", "rounded-sm", "text-sm", "px-5", "py-2.5", "text-center", "dark:bg-[#413030]", "dark:hover:bg-[#2E2323]", "dark:focus:ring-[#2E2323]", "mt-4", "ml-3");

                cancelButton.addEventListener('click', function () {
                    modal.classList.add('hidden'); 
                });
              
                divButtons.appendChild(cancelButton); 
                contentModal.appendChild(divButtons);
            }

         
           
        });
    });
});
