$(document).ready(function () {
    // Add a click event listener to the "View All Projects" button
    $(".viewall").click(function () {
        // Toggle the visibility of all project divs within the "workGrid"
        $(".workGrid .project").toggle();
    });

    // Add a click event listener to all buttons with class "toggleProject"
    $(".toggleProject").click(function () {
        // Find the parent project div of the clicked button
        var projectDiv = $(this).closest(".project");

        // Toggle the visibility of the entire project div
        projectDiv.toggle();
    });
});