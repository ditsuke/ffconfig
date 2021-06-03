/* Autohide tab/title bar if Sidebery is active in the sidebar.
** Adapted from https://github.com/tkhquang/userChrome.css/blob/master/Tree%20Style%20Tab/TST_tabbar.uc.js for Sidebery
**/
(function () {
    "use strict";

    const tabbar = document.getElementById("TabsToolbar");
    const titlebar = document.getElementById("titlebar");
    const navbar = document.getElementById("nav-bar");
    const sidebarHeader = document.getElementById("sidebar-header");
    const sidebarBox = document.getElementById("sidebar-box");
    const SideberySidebarCommand = "_3c078156-979c-498b-8990-85f7987dd929_-sidebar-action"

    /**
     * Hides TitleBar + TabBar and Addes PaddingTop to NavBar
     * If SideBerry is activated and visible
     */
    function showHideTabTitlePad() {
        const sidebarCommand = sidebarBox.getAttribute("sidebarcommand");
        if (!sidebarBox.hidden && sidebarCommand === SideberySidebarCommand) {
            tabbar.style.visibility = "collapse";
            titlebar.style.visibility = "collapse";
            sidebarHeader.style.visibility = "collapse";
            navbar.style.paddingTop = "0.5vh";
        } else {
            tabbar.style.visibility = "visible";
            titlebar.style.visibility = "visible";
            sidebarHeader.style.visibility = "visible";
            navbar.style.paddingTop = "0";
        }
    }

    const observer = new MutationObserver(showHideTabTitlePad);
    observer.observe(sidebarBox, {
        attributes: true,
        attributeFilter: [
            "sidebarcommand",
            "hidden"
        ]
    });
})();