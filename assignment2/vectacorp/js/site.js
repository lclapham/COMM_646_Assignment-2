$(document).ready(function () {
    $('#responsive-menu').mobileMenu();

});

// Nav Bar ToolTips
$(function () {
    $("#tool1").tooltip({
        content: "Vecta Corporation provides scalable business solutions to help companies achieve success",
        track: true

    });

    $("#tool2").tooltip({
        content: "Our expertise in strategy, design and technology allows us to create business solutions that excite and inspire, are easy to navigate, and enable businesses to strengthen their competitive advantage.",
        track: true

    });

    $("#tool3").tooltip({
        content: "Vecta Corp. offers 3 solutions for prospecting, converting, and retaining customers",
        track: true

    });

    $("#tool4").tooltip({
        content: "Get latest technical resources including articles, tips, patches, documentation and more",
        track: true

    });

    $("#tool5").tooltip({
        content: "Contact a Sale Respsentative",
        track: true

    });

});

// Product tabs HomePage
$(function () {
    $("#tabs").tabs();
});
