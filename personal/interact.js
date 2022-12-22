function scroll_effect()
{
    let view_bottom = $(window).scrollTop() + $(window).height();
    let items = $("div.moveup");

    for(let i = 0;i < items.length;i++)
    {
        let current = items.eq(i);

        if(current.offset().top + 99 < view_bottom)
        {
            current.css({top: "0", opacity: "1"});
        }
    }
}