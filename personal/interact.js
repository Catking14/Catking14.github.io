var prev_scroll_top = 0;

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

function nav_show()
{
    let nav_bar = $("nav");

    nav_bar.css("top", "0");
}

function nav_hide()
{
    let nav_bar = $("nav");

    nav_bar.css("top", "-8vh");
}

function nav_effect()
{
    let cur_scroll_top = $(window).scrollTop();
    let on_nav_bar = $("nav:hover").length;     // check if mouse is on nav

    if(cur_scroll_top > prev_scroll_top && !on_nav_bar)    // scorll down -> hide the nav bar
    {
        nav_hide();
    }
    else
    {
        nav_show();
    }

    prev_scroll_top = cur_scroll_top;
}

window.onload = function () 
{
    scroll_effect();

    $(document).on("scroll", scroll_effect);
    $(document).on("scroll", nav_effect);
}