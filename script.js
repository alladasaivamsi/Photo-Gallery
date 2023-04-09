let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for(let i=0; i<list.length; i++)
{
    list[i].addEventListener('click', function()
    {
        for(let j=0; j<list.length; j++)
        {
            list[j].classList.remove('active');
        }

        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k=0; k<itemBox.length; k++)
        {
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all")
            {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            };
        };
    });
};

let searchBox = document.querySelector("#search-box");

searchBox.addEventListener('keyup', e => {
    if(e.key == "Enter")
    {
        let searchValue = searchBox.value;
        value = searchValue.toLowerCase();

        itemBox.forEach(image =>
            {
                if(value === image.dataset.item)
                {
                    return image.style.display = "block";
                }
                image.style.display = "none";
            });
    };
});

searchBox.addEventListener('keyup', () => 
{
    if(searchBox.value != "")
    return;

    itemBox.forEach(image => 
    {
        image.style.display = "block";
    });
});