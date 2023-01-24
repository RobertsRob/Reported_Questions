$(document).ready(function (){
    $(".answer").click(function(){
        $(".answers").find(".ans").prop("checked", false);
        $(this).find(".ans").prop("checked", true);
    });
});
function Check()
{
    if($(".in").is(":checked"))
    {
        Swal.fire('Incorrect!', 'Incorect!', 'error')
    }
    if($(".cor").is(":checked"))
    {
        Swal.fire('Correct!', 'You choise correct one!', 'success')
    }

    $(".an_b").css("display", "none");
    $(".an_bh").css("display", "block");

    $(".in").css("border-color", "red");
    $(".cor").css("border-color", "green");
}