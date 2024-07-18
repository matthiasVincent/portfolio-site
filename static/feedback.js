$(document).ready(
    function()
        {
            $('[data-toggle="tooltip"]').tooltip();
            // console.log("content loaded and ready")

            $('#feedback_submit').click(
                function(ev)
                    {
                        ev.preventDefault();
                        const form = $('#feedback_form');
                        const url = form.attr('action')
                        const su = $('.feedback_submit');
                        su.attr("data-toggle", "modal");
                        su.attr("data-target", "#mymodal");

                        $.ajax(
                            {
                                type: "POST",
                                url: "feedback/",
                                data: form.serialize(),
                                beforeSend: function(data){
                                    $('#feedback_message').html(`<p>Sending message...</p>`);
                                },
                                success: function(data)
                                            {
                                                $('#feedback_message').html(data);
                                            },
                                error: function(data)
                                            {
                                                $('#feedback_message').html("something went wrong!")
                                            }

                            }
                            );
                        ip = document.querySelectorAll('.form-data')
                        for (let i=0; i<ip.length;i++)
                            {
                                ip[i].value="";
                            }
                    }
                );
        }
    );